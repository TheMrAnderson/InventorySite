
import Nav from './components/Nav';
import InventoryList from './pages/InventoryListTable';

export default function App() {
	return (
		<>
			<Nav title={"Inventory List"} />
			<InventoryList />
		</>);
}