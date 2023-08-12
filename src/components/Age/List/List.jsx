// import { calcAge } from "../../../services/diffDate";
import ListComp from "../ListComp/ListComp";

const List = ({ form }) => {
	// créer une fonction de calcul de différence de dates dans services
	// importe la fonction

	return (
		<>
			<ListComp form={form} />
			{/* // Full Name : {data.firstname} {data.lastname}
				// Born : {new Date(data.date).toLocaleDateString('fr-FR')}
				// Age : {calcAge(data.date)} */}
		</>
	);
};

export default List;
