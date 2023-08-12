// import { useForm } from "react-hook-form";

const Form = ({ form, setForm }) => {
// console.log(new Date() - new Date('2000-08-01'));

	const handleForm = (e) => {
		e.preventDefault();
		// const value = e.target.value;
		const formData = new FormData(e.currentTarget);
		const firstname = formData.get("firstname");
		const lastname = formData.get("lastname");
		const date = formData.get("date");
		const person = {
			firstname: firstname,
			lastname: lastname,
			date: date,
		};
		const clone = [...form];
		clone.push(person);
		setForm(clone);
	};
	return (
		<>
			<form onSubmit={handleForm}>
				<input type="text" name="firstname" />
				<input type="text" name="lastname" />
				<input type="date" name="date" />
				<input type="submit" />
			</form>
		</>
	);
};

export default Form;
