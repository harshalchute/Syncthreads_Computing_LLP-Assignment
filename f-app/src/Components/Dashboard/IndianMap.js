import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import icon from './icons8-location-48.png';

export default function IndiaMap(props) {
  const position = [props.detail.latitude, props.detail.longitude]; // latitude and longitude

  const myIcon = L.icon({
    iconUrl: icon,
    iconSize: [50, 50],
    iconAnchor: [25, 50]
  });

  return (<MapContainer center={position} zoom={10} style={{ height: '100%' }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={position} icon={myIcon}>
      <Popup>
        <span>
          <h5>{props.detail.title}</h5>
          <h6>{props.detail.location}</h6>
        </span>
      </Popup>
    </Marker>
  </MapContainer>);
};
