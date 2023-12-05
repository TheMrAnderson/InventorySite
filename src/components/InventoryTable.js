import { Link } from "react-router-dom";
import { INV_TYPE_OPTIONS } from "../App";

function InventoryType({ item }) {
  let obj = INV_TYPE_OPTIONS.find(i => i.value === item?.InventoryType);

  return <>
    {obj.label}
  </>
}

function MfgPartNumber({ item }) {
  const mfr = item?.Manufacturer === undefined ? "" : item.Manufacturer;
  const partNo = item?.PartNumber === undefined ? "" : item.PartNumber;

  return <>{mfr + " " + partNo}</>;
}

function SourceUrlLinkTag({ item }) {
  const urlExists = item?.SourceURL ? true : false;
  const urlText = urlExists ? "Source" : "";
  const urlLink = urlExists ? item.SourceURL : "";

  return (<Link to={urlLink}>{urlText}</Link>);
}

function InventoryItemRow({ item, items, setItems }) {
  const name =
    item?.CurrentQty > item?.MinQty ? (
      item?.Description
    ) : (
      <span style={{ color: "red" }}>{item?.Description}</span>
    );

  return (
    <tr>
      <td>{item?.ItemNumber}</td>
      <td>
        <Link to={`addUpdate/${item.ItemNumber}`} items={items} setItems={setItems}>{name}</Link>
      </td>
      <td>{item?.CurrentQty}</td>
      <td>{item?.MinQty}</td>
      <td>
        <InventoryType item={item} />
      </td>
      <td>
        <MfgPartNumber item={item} />
      </td>
      <td>{item?.Location}</td>
      <td>{item?.Category}</td>
      <td>
        <SourceUrlLinkTag item={item} />
      </td>
    </tr>
  );
}

export default function InventoryTable({ items, setItems }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item Number</th>
          <th>Description</th>
          <th>Current Qty</th>
          <th>Min Qty</th>
          <th>Inventory Type</th>
          <th>Mfg Part</th>
          <th>Location</th>
          <th>Category</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) =>
          <InventoryItemRow item={item} items={items} setItems={setItems} key={item.ItemNumber} />
        )}
      </tbody>
    </table>
  );
}
