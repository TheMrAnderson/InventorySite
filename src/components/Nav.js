import { Link } from "react-router-dom";
import "../css/navbar.css";

export default function Nav({ title }) {
  return (
    <>
      <nav className="navbar">
        <h2>{title}</h2>
        <title>React Inventory | {title}</title>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <li><Link to="/shoppingList">Shopping List</Link></li>
          </li>
          <li>
            <Link to="/addUpdate">Add</Link>
          </li>
          <li>
            <Link to="/consume">Consume</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
