import Nav from "../components/Nav";

function NotFoundElement() {
	return <p>Page not found</p>;
}

export default function NoMatch() {
	return (
		<>
			<Nav title="No Route Found" />
			<NotFoundElement />
		</>
	);
}