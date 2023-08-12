import React, { useState } from "react";
import Saisie from "./Saisie/Saisie";
import Transcrire from "./Transcrire/Transcrire";
import transcription from "../../services/transcription";

const Braille = () => {
	const [trans, setTrans] = useState("");
	const target = (e) => {
		let braille = "";
		const value = e.target.value
			.split("")
			.map((val) => (braille += transcription[val]))
			.join("");
		setTrans(value);
	};
	return (
		<>
			<Saisie value={target} />
			<Transcrire value={trans} />
		</>
	);
};

export default Braille;
