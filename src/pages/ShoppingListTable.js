import InventoryTable from "../components/InventoryTable";
import Nav from "../components/Nav";

export default function ShoppingList({ items, setItems }) {

  return (
    <>
      <Nav title={"Shopping List"} />
      <InventoryTable items={items} />
    </>
  );
}
