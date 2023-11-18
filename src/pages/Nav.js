export default function Nav({ title: title }) {
	return (
		<nav className="navbar">
			<h2>{title}</h2>
			<title>Inventory | {title}</title>
			{/* <!-- NAVIGATION MENU --> */}
			<ul className="nav-links">
				{/* <!-- USING CHECKBOX HACK --> */}
				<input type="checkbox" id="checkbox_toggle" />
				<label for="checkbox_toggle" className="hamburger">&#9776;</label>
				{/* <!-- NAVIGATION MENUS --> */}
				<div className="menu">
					<li><a href="/">Inventory List</a></li>
					<li className="services">
						<a href="/">Actions</a>
						{/* <!-- DROPDOWN MENU --> */}
						<ul className="dropdown">
							<li><a href="/addupdate">Add</a></li>
							<li><a href="/consume">Consume</a></li>
							<li><a href="/shoppinglist">View Shopping List</a></li>
						</ul>
					</li>
				</div>
			</ul>
		</nav>
	)
}