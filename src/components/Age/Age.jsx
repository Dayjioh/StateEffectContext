import React, { useState } from "react";
import Form from "./Form/Form";
import List from "./List/List";

const Age = () => {
	const [form, setForm] = useState([]);
	return (
		<>
			<Form form={form} setForm={setForm}/>
			<List form={form}/>
		</>
	);
};

export default Age;
