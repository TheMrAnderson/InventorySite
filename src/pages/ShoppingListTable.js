import InventoryTable from "../components/InventoryTable";
import Nav from "../components/Nav";

export default function ShoppingList() {
  return (
    <>
      <Nav title={"Shopping List"} />
      <InventoryTable items={items} />
    </>
  );
}

const items = [
  {
    ItemNumber: "INV-02",
    Description: "Item #2",
    CurrentQty: 5,
    InventoryType: 1,
    MinQty: 7,
    Manufacturer: "Stark",
    PartNumber: "456",
    Location: "Uganda",
    SourceURL: "",
  },
];
