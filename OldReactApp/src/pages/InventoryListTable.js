import InventoryTable from "../components/InventoryTable";
import Nav from "../components/Nav";

export default function InventoryList() {
	return (
		<>
			<Nav title={"Shopping List"} />
			<InventoryTable items={items} />
		</>);
}

const items = [
	{
		ItemNumber: "INV-01", Description: "Test Description", CurrentQty: 2, InventoryType: 0, MinQty: 1, Manufacturer: "Acme", PartNumber: "123", Location: "Mars", SourceURL: "https://www.acme.com/?Product=123"
	},
	{
		ItemNumber: "INV-02", Description: "Item #2", CurrentQty: 5, InventoryType: 1, MinQty: 7, Manufacturer: "Stark", PartNumber: "456", Location: "Uganda", SourceURL: ""
	}
];