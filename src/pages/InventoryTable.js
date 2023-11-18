import { useNavigate } from 'react-router-dom';

function InventoryType({ item }) {
	return <>{item?.InventoryType === 0 ? 'Piece' : 'Bulk'}</>;
}

function MfgPartNumber({ item }) {
	const mfr = item?.Manufacturer === undefined ? '' : item.Manufacturer;
	const partNo = item?.PartNumber === undefined ? '' : item.PartNumber;

	return (<>{mfr + ' ' + partNo}</>);
}

function SourceUrlLinkTag({ item }) {
	const urlExists = item?.SourceURL ? true : false;
	const urlText = urlExists ? 'Source' : '';
	const urlLink = urlExists ? item.SourceURL : '';

	return (<a href={urlLink}>
		<>{urlText}</>
	</a>);
}

function InventoryItemRow({ item }) {
	const name = item?.CurrentQty > item?.MinQty ? item?.Description :
		<span style={{ color: 'red' }}>
			{item?.Description}
		</span>;


	return (
		<tr>
			<td>{item?.ItemNumber}</td>
			<td><a href="/addUpdate?itemNumber={item.ItemNumber}">{name}</a></td>
			<td>{item?.CurrentQty}</td>
			<td><InventoryType item={item} /></td>
			<td>{item?.MinQty}</td>
			<td><MfgPartNumber item={item} /></td>
			<td>{item?.Location}</td>
			<td><SourceUrlLinkTag item={item} /></td>
		</tr>
	);
}

export default function InventoryTable({ items }) {
	const rows = [];
	const navigate = useNavigate();

	function handleClick(event) {
		navigate('/target-route');
	}

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