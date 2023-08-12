const TotalAddition = ({ object, setObject }) => {
	const handleChange = (e) => {
		let value = e.target.value;
		value = value === null ? 0 : value;
		// console.log(value);
		setObject({ ...object, total: value });
	};
	return (
		<>
			<h2>Amount €</h2>
			<input onChange={handleChange} type="number" placeholder={object.total} />
		</>
	);
};

export default TotalAddition;
