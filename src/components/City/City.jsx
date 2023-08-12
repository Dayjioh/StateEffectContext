import { useContext } from "react";
import { MapContext } from "../../provider/MapProvider";

const City = ({ name, poster, coords }) => {
	const {location,setLocation} = useContext(MapContext)
	const handleClick = (e) => {
    
	  setLocation(coords)
	};

	return (
		<>
		{/* <p> {location.lat} / {location.lng}</p> */}
			<input onClick={handleClick} width="100" type="image" src={poster} coords={coords} alt="" />
			<p>{name}</p>
      
		</>
	);
};

export default City;
