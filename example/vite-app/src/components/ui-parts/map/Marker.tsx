import React from 'react';
import { useGoogleMapsContext } from '@/components/ui-parts/map/GoogleMapsProvider';
import { renderToString } from 'react-dom/server';

type Props = google.maps.MarkerOptions & {
  InfoWindowComponent?: React.ElementType;
  InfoWindowComponentProps?: object;
};

export const Marker = React.memo((props: Props) => {
  const { map, infoWindow } = useGoogleMapsContext();
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }
    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      const { InfoWindowComponent, InfoWindowComponentProps, ...markerOptions } = props;
      marker.setOptions({ map, ...markerOptions });

      if (InfoWindowComponent) {
        marker.addListener('click', () => {
          const InfoWindow = () => <InfoWindowComponent {...InfoWindowComponentProps} />;
          const content = renderToString(InfoWindow());
          infoWindow.setContent(content);
          infoWindow.open(markerOptions.map, marker);
        });
      }
    }
  }, [marker, infoWindow, props, map]);

  return null;
});
