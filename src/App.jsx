import Age from "./components/Age/Age";
import Braille from "./components/Braille/Braille";
import ChangeColor from "./components/ChangeColor/ChangeColor";
import Tips from "./components/Tips/Tips";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import "./App.css"
import { MapProvider } from "./provider/MapProvider";
import DisplayMap from "./components/City/DisplayMap";
import ListCity from "./components/City/ListCity";

const App = () => {
	return (
		<>
			<MapProvider>
				{/* <ChangeColor /> */}
				{/* <Braille /> */}
				{/* <Age/> */}
				<Tips />
				{/* <VideoPlayer /> */}
				{/* <DisplayMap /> */}
			</MapProvider>
		</>
	);
};

export default App;
