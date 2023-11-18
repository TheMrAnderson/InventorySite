import React from 'react';
import { useForm } from 'react-hook-form';

function ConsumeForm() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder="Item Number" {...register("Item Number", { required: true })} />

			<input type="submit" />
		</form>
	);
}

export default function Consume({ item: item }) {
	return (
		<>
			{
				item === undefined ? <Nav title={"Add Inventory"} /> : <Nav title={"Edit Inventory"} />
			}
			<ConsumeForm />
		</>);
}
