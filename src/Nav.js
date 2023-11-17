export default function Nav({ title: title }) {
	return (
		<nav class="navbar">
			<h2>{title}</h2>
			<title>Inventory | {title}</title>
			{/* <!-- NAVIGATION MENU --> */}
			<ul class="nav-links">
				{/* <!-- USING CHECKBOX HACK --> */}
				<input type="checkbox" id="checkbox_toggle" />
				<label for="checkbox_toggle" class="hamburger">&#9776;</label>
				{/* <!-- NAVIGATION MENUS --> */}
				<div class="menu">
					<li><a href="/">Inventory List</a></li>
					<li class="services">
						<a href="/">Actions</a>
						{/* <!-- DROPDOWN MENU --> */}
						<ul class="dropdown">
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