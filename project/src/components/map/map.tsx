import leaflet from 'leaflet';
import { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { Location } from '../../types/offer';
import useMap from '../../hooks/useMap';

type MapProps = {
  zoom: number,
  center: Location,
  points: Location[]
  width: string,
  height: string,
};

const icon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

// иконка активного маркера
// const iconActive = leaflet.icon({
//   iconUrl: 'img/pin-active.svg',
//   iconSize: [40, 40],
//   iconAnchor: [20, 40]
// });

function Map({points, zoom, center, width, height}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, center, zoom);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(icon)
          .addTo(map);
      });
    }
  }, [map, points]);
  return (
    <div style={{width: `${width}`, height: `${height}`}} ref={mapRef} id="map">
    </div>
  );
}

export default Map;
