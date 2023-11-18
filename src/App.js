import AddUpdate from "./pages/AddUpdateForm";
import Consume from "./pages/ConsumeForm";
import InventoryTable from "./pages/InventoryTable";
import ShoppingList from "./pages/ShoppingListTable";
import Nav from "./pages/Nav";
import NoList from "./pages/NoList";
import { Routes, Route } from 'react-router-dom';

const items = [
	{
		ItemNumber: "INV-01", Description: "Test Description", CurrentQty: 2, InventoryType: 0, MinQty: 1, Manufacturer: "Acme", PartNumber: "123", Location: "Mars", SourceURL: "https://www.acme.com/?Product=123"
	},
	{
		ItemNumber: "INV-02", Description: "Item #2", CurrentQty: 5, InventoryType: 1, MinQty: 7, Manufacturer: "Stark", PartNumber: "456", Location: "Uganda", SourceURL: ""
	}
];

export default function App() {
	return (
		<>
			<Routes>
				{/* <Route path="" element={<InventoryTable />} /> */}
				<Route path="/addUpdate" element={<AddUpdate />} />
				<Route path="/consume" element={<Consume />} />
				<Route path="/shoppingList" element={<ShoppingList />} />
				<Route path="/noList" element={<NoList />} />
			</Routes >
			<Nav title={"Inventory List"} />
			<InventoryTable items={items} />
		</>);
}