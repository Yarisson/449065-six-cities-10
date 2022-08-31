import leaflet from 'leaflet';
import { Marker, LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { Location } from '../../types/offer';
import useMap from '../../hooks/useMap';

type MapProps = {
  zoom: number;
  center: Location;
  points: Location[] | undefined;
  selectedLocation: Location | undefined;
  className?: string;
};

const icon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const iconActive = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({points, zoom, center, className, selectedLocation}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, center, zoom);

  useEffect(() => {
    if (!map) {
      return;
    }

    const layerGroup = new LayerGroup();

    points?.forEach((point) => {
      const marker = new Marker({
        lat: point.latitude,
        lng: point.longitude,
      },
      {
        icon: selectedLocation !== undefined &&
        point.latitude === selectedLocation?.latitude &&
        point.longitude === selectedLocation?.longitude
          ? iconActive
          : icon
      }
      );
      layerGroup.addLayer(marker);
    });

    map.addLayer(layerGroup);

    return () => {
      layerGroup.remove();
    };
  }, [map, points, center, selectedLocation]);

  return (
    <section ref={mapRef} className={className}>
    </section>
  );
}

export default Map;
