const TipsPercentage = ({object, setObject}) => {

    const handleChange = e => {
      let value = e.target.value;
      value = value === null ? 0 : value;
      // console.log(value);
      setObject({...object, tips: value});
    }
  return (
    <>
			<h2>Extra %</h2>
			<input
				onChange={handleChange}
				type="number"
				placeholder={object.tips}
			/>
		</>
  )
}

export default TipsPercentage