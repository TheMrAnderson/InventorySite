import Nav from '../components/Nav';

function NoneFound() {
	return (
		<p>No inventory found</p>
	);
}

export default function NoList() {
	return (
		<>
			<Nav title={"No Inventory Found"} />
			<NoneFound />
		</>);
}
