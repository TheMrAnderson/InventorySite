import { React, useState } from 'react';
import './css/App.css';
import InventoryList from "./pages/InventoryListTable";
import { Routes, Route } from 'react-router-dom';
import AddUpdate from './pages/AddUpdateForm'
import Consume from './pages/ConsumeForm';
import NoList from './pages/NoList';
import ShoppingList from './pages/ShoppingListTable';
import NoMatch from './pages/NoMatch';

export default function App() {

  const [items, setItems] = useState(invListItems);
  const [shoppingList, setShoppingList] = useState(shoppingListItems);

  return (
    <Routes>
      <Route path="/" exact element={<InventoryList items={items} setItems={setItems} />} />
      <Route path="/addUpdate/:itemNumber" element={<AddUpdate items={items} setItems={setItems} />} />
      <Route path="/addUpdate/" element={<AddUpdate items={items} setItems={setItems} />} />
      <Route path="/consume" element={<Consume />} />
      <Route path="/noList" element={<NoList />} />
      <Route path="/shoppingList" element={<ShoppingList items={shoppingList} setItems={setShoppingList} />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export const INV_TYPE_OPTIONS = [
  { value: 0, label: 'Piece' },
  { value: 1, label: 'Bulk' },
  { value: 2, label: 'Quart' },
  { value: 3, label: 'Gallon' },
  { value: 4, label: 'Ounce' }
];

const invListItems = [
  {
    ItemNumber: "1000",
    Description: "Test Description",
    CurrentQty: 2,
    MinQty: 1,
    InventoryType: 0,
    Manufacturer: "Acme",
    PartNumber: "123",
    Location: "Mars",
    SourceURL: "https://www.acme.com/?Product=123",
    Category: "Test Part"
  },
  {
    ItemNumber: "1001",
    Description: "Item #2",
    CurrentQty: 5,
    MinQty: 7,
    InventoryType: 1,
    Manufacturer: "Stark",
    PartNumber: "456",
    Location: "Uganda",
    SourceURL: "",
    Category: "Test Part"
  },
  {
    ItemNumber: "1002",
    Description: "5w-40 Motor Oil",
    CurrentQty: 23,
    MinQty: 7,
    InventoryType: 2,
    Manufacturer: "Amsoil",
    PartNumber: "5w-40",
    Location: "Oil Shelf",
    SourceURL: "",
    Category: "Fluids"
  },
];

const shoppingListItems = invListItems.filter(i => i.CurrentQty <= i.MinQty);