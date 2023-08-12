import { useEffect, useState } from "react";
import NumberPeople from "./NumberPeople/NumberPeople";
import TipsPercentage from "./TipsPercentage/TipsPercentage";
import TotalAddition from "./TotalAddition/TotalAddition";

const Tips = () => {
	const [object, setObject] = useState({
		total: 0,
		person: 1,
		tips: 0,
	});
	const [finalAmount, setFinalAmount] = useState(0);

	const FinalTips = (e) => {
		const amount =
			Math.floor((object.total / object.person) * (1 + object.tips / 100));
		console.log(amount);
		setFinalAmount(amount);
	};

	useEffect(() => {
		console.log("rendu");
		FinalTips();
	}, [object]);

	return (
		<>
			<h1>Tips calculator</h1>
			<TotalAddition object={object} setObject={setObject} />
			<NumberPeople object={object} setObject={setObject} />
			<TipsPercentage object={object} setObject={setObject} />
			<h2>Total per person : {finalAmount}€</h2>
		</>
	);
};

export default Tips;
