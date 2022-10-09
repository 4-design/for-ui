import { MarkerClusterer } from '@googlemaps/markerclusterer';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { useGoogleMapsContext } from ./GoogleMapsProviderer';

type MarkerProps<Meta> = google.maps.LatLngLiteral & { meta?: Meta };

type Props<Meta> = {
  InfoWindowComponent?: React.ElementType;
  markers: MarkerProps<Meta>[];
};

export const MarkerCluster = <T extends object>(props: Props<T>) => {
  const { map, infoWindow } = useGoogleMapsContext();
  const { InfoWindowComponent } = props;
  const markers = props.markers.map((item) => {
    const marker = new google.maps.Marker({
      position: {
        lat: item.lat,
        lng: item.lng,
      },
    });

    marker.addListener('click', () => {
      if (InfoWindowComponent) {
        const InfoWindow = () => <InfoWindowComponent {...item.meta} />;
        const content = renderToString(InfoWindow());
        infoWindow.setContent(content);
        infoWindow.open(map, marker);
      }
    });

    return marker;
  });

  new MarkerClusterer({ map, markers });

  return null;
};
