/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { isLatLngLiteral } from '@googlemaps/typescript-guards';
import { createCustomEqual } from 'fast-equals';

function useDeepCompareEffectForMaps(callback: React.EffectCallback, dependencies: any[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

function useDeepCompareMemoize(value: any) {
  const ref = React.useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a: any, b: any) => {
  if (isLatLngLiteral(a) || a instanceof google.maps.LatLng || isLatLngLiteral(b) || b instanceof google.maps.LatLng) {
    return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
  }
  // TODO extend to other types
  // use fast-equals for other objects
  return deepEqual(a, b);
});

type UseGoogleMap = {
  ref: React.RefObject<HTMLDivElement>;
  map: google.maps.Map | null;
  infoWindow: google.maps.InfoWindow;
};
type GoogleMapContext = UseGoogleMap;

const useGoogleMap = (props: Props): UseGoogleMap => {
  const { onClick, onIdle, ...mapOptions } = props;
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);
  // [END maps_react_map_component_add_map_hooks]

  // [START maps_react_map_component_options_hook]
  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(mapOptions);
    }
  }, [map, mapOptions]);
  // [END maps_react_map_component_options_hook]

  // [START maps_react_map_component_event_hooks]
  React.useEffect(() => {
    if (map) {
      ['click', 'idle'].forEach((eventName) => google.maps.event.clearListeners(map, eventName));

      if (onClick) {
        map.addListener('click', onClick);
      }

      if (onIdle) {
        map.addListener('idle', () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);
  // [END maps_react_map_component_event_hooks]

  const infoWindow = new google.maps.InfoWindow({
    content: '',
    disableAutoPan: true,
  });

  return {
    infoWindow,
    ref,
    map,
  };
};

export const GoogleMapContext = React.createContext<UseGoogleMap>({} as UseGoogleMap);
export const useGoogleMapContext = (): GoogleMapContext => React.useContext(GoogleMapContext);

type Props = React.PropsWithChildren<
  {
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
  } & google.maps.MapOptions
>;

export const GoogleMapProvider = (props: Props) => {
  const { map, infoWindow, ref } = useGoogleMap(props);

  return (
    <GoogleMapContext.Provider value={{ map, infoWindow, ref }}>
      <div ref={ref} className="h-full w-full" />

      {props.children}
    </GoogleMapContext.Provider>
  );
};
