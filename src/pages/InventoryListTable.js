import InventoryTable from "../components/InventoryTable";
import Nav from "../components/Nav";

export default function InventoryList({ items, setItems }) {

  return (
    <>
      <Nav title={"Shopping List"} />
      <InventoryTable items={items} />
    </>
  );
}
