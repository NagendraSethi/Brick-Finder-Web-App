import { MapContainer, TileLayer } from 'react-leaflet'
import './customMap.scss';
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';

export default function CustomMap({items}) {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map((item, index) => (
                <Pin key={index} item={item} />
            ))}
        </MapContainer>
    )
}