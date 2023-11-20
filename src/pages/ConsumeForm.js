import React from 'react';
import { useForm } from 'react-hook-form';
import Nav from '../components/Nav';

function ConsumeForm() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<>
				<label>Item Number:</label>
				<input type="text" placeholder="Item Number" {...register("Item Number", { required: true })} />
			</>

			<input type="submit" />
		</form>
	);
}

export default function Consume() {
	return (
		<>
			<Nav title={"Consume"} />
			<ConsumeForm />
		</>);
}
