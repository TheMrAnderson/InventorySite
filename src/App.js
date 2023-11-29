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
      <Route path="/addUpdate/:itemNumber" element={<AddUpdate />} />
      <Route path="/addUpdate/" element={<AddUpdate />} />
      <Route path="/consume" element={<Consume />} />
      <Route path="/noList" element={<NoList />} />
      <Route path="/shoppingList" element={<ShoppingList items={shoppingList} setItems={setShoppingList} />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

const invListItems = [
  {
    ItemNumber: "INV-01",
    Description: "Test Description",
    CurrentQty: 2,
    InventoryType: 0,
    MinQty: 1,
    Manufacturer: "Acme",
    PartNumber: "123",
    Location: "Mars",
    SourceURL: "https://www.acme.com/?Product=123",
  },
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

const shoppingListItems = invListItems[1];