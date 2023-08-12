import { useState } from "react";

const ChangeColor = () => {
	
	const [color, setColor] = useState();

	const handleColor = (e) => {
		setColor(e.target.value);
	};

	return (
		<>
				<p style={{color}}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				</p>
				<input
					type="color"
					onInput={handleColor}
				/>
			
		</>
	);
};

export default ChangeColor;