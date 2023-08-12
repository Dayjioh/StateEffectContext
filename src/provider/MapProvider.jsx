import { createContext, useState } from "react";

const MapContext = createContext();

const MapProvider = ({ children }) => {
	const data = { lat: 48.8588845, lng: 2.3469411 };

	const [location, setLocation] = useState(data);

	return (
		<MapContext.Provider value={{ location, setLocation }}>
			{children}
		</MapContext.Provider>
	);
};

export { MapProvider, MapContext };
