import { Link } from "react-router-dom";
import "../css/navbar.css";

export default function Nav({ title }) {
  return (
    <>
      <nav className="navbar">
        <h2>{title}</h2>
        <title>React Inventory | {title}</title>
        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          {/* <!-- NAVIGATION MENUS --> */}
          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <li><Link to="/shoppingList">Shopping List</Link></li>
            </li>
            <li className="services">
              <a href="/">Actions</a>
              {/* <!-- DROPDOWN MENU --> */}
              <ul className="dropdown">
                <li>
                  <Link to="/addUpdate">Add</Link>
                </li>
                <li><Link to="/consume">Consume</Link></li>
              </ul>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
