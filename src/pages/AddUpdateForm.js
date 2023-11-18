import React from 'react';
import { useForm } from 'react-hook-form';

function AddUpdateForm({ item }) {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);

	const isPiece = item?.InventoryType == 0 ?? true;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<>
				<label>Item Number:</label>
				<input type="text" placeholder="Item Number" value={item?.ItemNumber} readonly style="color: Grey; opacity: 1;" {...register("Item Number", {})} />
			</>
			<>
				<label>Item Description:</label>
				<input type="text" placeholder="Item Description" value={item?.Description} {...register("Item Description", { required: true, message: "Description is required" })} />
			</>
			<>
				<label>Current Qty:</label>
				<input type="number" placeholder="Current Qty" value={item?.CurrentQty} {...register("Current Qty", { required: true, min: 0, message: "Qty is required and must be at least 0" })} />
			</>
			<>
				<label>Source URL:</label>
				<input type="text" placeholder="Source URL" value={item?.SourceURL} {...register} />
			</>
			<>
				<label>Inventory Type</label>
				<input {...register("Inventory Type", { required: true })} type="radio" value="Piece" checked={isPiece} />
				<input {...register("Inventory Type", { required: true })} type="radio" value="Bulk" checked={!isPiece} />
			</>
			<>
				<label>Manufacturer:</label>
				<input type="text" placeholder="Manufacturer" value={item?.Manufacturer} {...register("Manufacturer", {})} />
			</>
			<>
				<label>Part Number:</label>
				<input type="text" placeholder="Part Number" value={item?.PartNumber} {...register("Part Number", {})} />
			</>
			<>
				<label>Min Qty:</label>
				<input type="number" placeholder="Min Qty" value={item?.MinQty} {...register("Min Qty", { required: true, min: 0, message: "Min Qty is required and must be at least 0" })} />
			</>
			<>
				<label>Location:</label>
				<input type="text" placeholder="Location" value={item?.Location} {...register("Location", { required: true, message: "Location is required" })} />
			</>

			<input type="submit" />
		</form>
	);
}

export default function AddUpdate({ item }) {
	return (
		<>
			{
				item === undefined ? <Nav title={"Add Inventory"} /> : <Nav title={"Edit Inventory"} />
			}
			<AddUpdateForm />
		</>);
}
