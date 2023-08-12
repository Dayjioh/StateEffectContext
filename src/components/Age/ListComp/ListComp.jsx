import { calcAge } from "../../../services/diffDate";

const ListComp = ({ form }) => {
	return (
		<>
			<ul>
				{form.map((data) => (
					<>
						<li>Full Name : {data.firstname} {data.lastname}</li>
						<li>Born : {new Date(data.date).toLocaleDateString("fr-FR")}</li>
						<li>Age : {calcAge(data.date)}</li>
					</>
				))}
			</ul>
		</>
	);
};

export default ListComp;
