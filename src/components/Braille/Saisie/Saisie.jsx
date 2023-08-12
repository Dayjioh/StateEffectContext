const Saisie = ({ value }) => {
	return (
		<>
			<h1>Input</h1>
			<input onKeyUp={value} type="text" />
		</>
	);
};

export default Saisie;
