import Nav from "./Nav";

function InventoryItemRow({ item }) {
	const name = item.CurrentQty > item.MinQty ? item.Description :
		<span style={{ color: 'red' }}>
			{item.Description}
		</span>;

	return (
		<tr>
			<td>{item.ItemNumber}</td>
			<td><a href="/addUpdate?itemNumber={item.ItemNumber}">{name}</a></td>
			<td>{item.CurrentQty}</td>
			<td>{item.InventoryType === 0 ? 'Piece' : 'Bulk'}</td>
			<td>{item.MinQty}</td>
			<td>{item.Manufacturer + ' ' + item.PartNumber}</td>
			<td>{item.Location}</td>
			<td><a href="{item..SourceURL}">{item.SourceURL == '' ? '' : 'Link'}</a></td>
		</tr>
	);
}

function InventoryTable({ items: items }) {
	const rows = [];

	items.forEach((item) => {
		rows.push(
			<InventoryItemRow
				item={item}
				key={item.ItemNumber} />
		);
	});

	return (
		<table>
			<thead>
				<tr>
					<th>Item Number</th>
					<th>Description</th>
					<th>Current Qty</th>
					<th>Inventory Type</th>
					<th>Min Qty</th>
					<th>Mfg Part</th>
					<th>Location</th>
					<th>URL</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}

const items = [
	{
		ItemNumber: 1, Description: "Test Description", CurrentQty: 2, InventoryType: 0, MinQty: 1, Manufacturer: "Acme", PartNumber: "123", Location: "Mars", SourceURL: "www.acme.com/?Product=123"
	},
	{
		ItemNumber: 2, Description: "Item #2", CurrentQty: 5, InventoryType: 1, MinQty: 7, Manufacturer: "Stark", PartNumber: "456", Location: "Uganda", SourceURL: ""
	}
];

export default function App() {
	return (
		<>
			<Nav title={"Inventory List"} />
			<InventoryTable items={items} />
		</>);
}