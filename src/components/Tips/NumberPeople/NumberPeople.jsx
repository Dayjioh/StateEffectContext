const NumberPeople = ({ object, setObject }) => {
	
	const handleChange = (e) => {
		let value = e.target.value;
		value = value === null ? 1 : value;
		// console.log(value);
		setObject({...object, person: value});
	};
	return (
		<>
			<h2>Number of persons</h2>
			<input
				onChange={handleChange}
				type="number"
				placeholder={object.person}
			/>
		</>
	);
};

export default NumberPeople;
