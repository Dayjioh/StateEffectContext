import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { MapContext } from "../../provider/MapProvider";
import ListCity from "./ListCity";
import ChildMap from "./ChildMap";

const DisplayMap = () => {
	const { location } = useContext(MapContext);
	return (
		<>
			<p>
				{location.lat} / {location.lng}
			</p>
			<MapContainer center={[location.lat, location.lng]} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[location.lat, location.lng]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
				<ChildMap location={location}/>
			</MapContainer>
			<ListCity />
		</>
	);
};

export default DisplayMap;
