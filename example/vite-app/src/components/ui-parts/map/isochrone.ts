type Position = {
  radians: number;
  min: {
    radius: number;
    value: number;
  };
  max: {
    radius: number;
    value: number;
  };

  /* Radius is really an approximate value */
  radius: number;
  lat: number;
  lng: number;
  duration: number;
  distance: number;

  // default false
  found: boolean;
};

export type Isochrone = {
  errors: number;
  lat: number;
  lng: number;

  // Default 8
  slices: number;

  /*
    cycles: (integer) number of cycles to narrow the polygon down.
    The higher value,
    the better, but this will equals the number of API calls, so you may want to keep it low because of API restrictions and to get faster results. Defaults to 10.
  */
  cycles: number;
  cycle: number;

  // mode
  mode: google.maps.TravelMode;
  type: string;
  value: number;
  /*
    percentage of accepted error on the final position, limiting API calls.
    For example with 5%, an isochrone of 10 minutes (600 seconds) will accept (0.05 * 600 =) 30 seconds of error (so the path would be between 9'30" and 10'30").
    Defaults to 5.
  */
  precision: number;
  system: google.maps.UnitSystem.METRIC;

  /* Cut the circle in «slices» */
  positions: Position[];
};

export const isochrone = (map: google.maps.Map) => {
  const isochroneData: Isochrone = {
    errors: 0,
    lat: 35.68598803012648,
    lng: 139.76761832643018,
    slices: 8,
    cycles: 5,
    cycle: 0,
    mode: google.maps.TravelMode.WALKING,
    type: 'duration',
    value: 10 * 60,
    precision: 5 / 100,
    system: google.maps.UnitSystem.METRIC,
    positions: [],
  };

  for (let s = 0; s < isochroneData.slices; s++) {
    isochroneData.positions.push({
      // 360° = 2 * Math.PI をN分割
      radians: 2 * Math.PI * (s / isochroneData.slices),
      min: {
        radius: 0,
        value: 0,
      },
      max: {
        radius: 0,
        value: 0,
      },
      /* Radius is really an approximate value */
      radius: 0.01,
      lat: 0,
      lng: 0,
      duration: 0,
      distance: 0,
      found: false,
    });
  }

  cycle(map, isochroneData);
};

const cycle = (map: google.maps.Map, isochroneData: Isochrone) => {
  const service = new google.maps.DistanceMatrixService();
  if (isochroneData.cycle++ >= isochroneData.cycles) {
    return polygon(map, isochroneData.positions);
  }

  let p = 0;
  let position;

  const destinations: google.maps.LatLng[] = [];
  const relations: number[] = [];

  for (; p < isochroneData.positions.length; p++) {
    position = isochroneData.positions[p];
    if (!position.found) {
      position.lat = isochroneData.lat + position.radius * Math.cos(position.radians);
      position.lng = isochroneData.lng + position.radius * Math.sin(position.radians);
      //new google.maps.Marker({position: {lat: position.lat, lng: position.lng}, label: '' + computation.cycle, map: isochrone.map.map});
      destinations.push(new google.maps.LatLng(position.lat, position.lng));
      relations.push(p);
    }
  }
  if (!destinations.length) {
    return polygon(map, isochroneData.positions);
  }

  service.getDistanceMatrix(
    {
      origins: [new google.maps.LatLng(isochroneData.lat, isochroneData.lng)],
      destinations,
      travelMode: isochroneData.mode,
      unitSystem: isochroneData.system,
    },
    (data: google.maps.DistanceMatrixResponse | null, result: google.maps.DistanceMatrixStatus): void => {
      if (result !== 'OK') {
        if (result === 'OVER_QUERY_LIMIT' && isochroneData.errors++ <= 10) {
          console.info('OVER_QUERY_LIMIT');
          isochroneData.cycle--;
          // isochrone.requests = Math.max(0.5, isochrone.requests - 0.5);
          setTimeout(() => cycle(map, isochroneData), 2000);
          return;
        }

        return polygon(map, isochroneData.positions);
      }

      if (typeof data?.rows[0].elements === 'undefined' || data?.rows[0].elements.length !== destinations.length) {
        return polygon(map, isochroneData.positions);
      }

      console.info('length', data.rows[0].elements.length);
      for (let i = 0; i < data.rows[0].elements.length; i++) {
        const d = data.rows[0].elements[i];
        const position = isochroneData.positions[relations[i]];
        let minWeight = 0;
        let maxWeight = 0;
        if (d.status !== 'OK') {
          continue;
        }

        const value = d.duration.value;
        console.info('value', value, isochroneData.value);
        destinations.forEach((item) => {
          console.info('lat:lng', item.lat(), item.lng());
        });
        if (
          value < isochroneData.value && // value is lower than expected
          (!position.min.radius || // no minimum for now
            (position.radius > position.min.radius && value > position.min.value))
        ) {
          // value and radius are higher than minimum
          position.min.radius = position.radius;
          position.min.value = value;
        }
        if (
          value > isochroneData.value && // value is higher than expected
          (!position.max.radius || // no maximum for now
            (position.radius < position.max.radius && value < position.max.value))
        ) {
          // value and radius are lower than maximum
          position.max.radius = position.radius;
          position.max.value = value;
        }
        /* Accepted match */
        if (Math.abs(value - isochroneData.value) / isochroneData.value < isochroneData.precision) {
          position.found = true;
        } else if (!position.min.radius) {
          /* Recompute radius */
          /* Position is relative to the max found: apply «règle de trois» (Cross-multiplication) */
          position.radius = (position.max.radius * isochroneData.value) / position.max.value;
        } else if (!position.max.radius) {
          /* Position is relative to the min found: apply «règle de trois» (Cross-multiplication) */
          position.radius = (position.min.radius * isochroneData.value) / position.min.value;
        } else {
          /* Use «moyenne pondérée» (weighted arithmetic mean) */
          /* weights are the difference between expected value and min/max values, inversed (less the distance is best) */
          minWeight = 1 / Math.abs(position.min.value - isochroneData.value);
          maxWeight = 1 / Math.abs(position.max.value - isochroneData.value);
          position.radius =
            (position.min.radius * minWeight + position.max.radius * maxWeight) / (minWeight + maxWeight);
        }

        isochroneData.positions[relations[i]] = position;
      }

      setTimeout(() => cycle(map, isochroneData), 200);
    }
  );
};

const polygon = (map: google.maps.Map, positions: Position[]) => {
  if (positions.length) {
    positions.push(positions[0]); // Close the polygon for easier drawing
  }
  const _polygon = new google.maps.Polygon({ paths: positions });
  _polygon.setMap(map);
};
