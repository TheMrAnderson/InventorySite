import React from 'react';
import './css/App.css';
import InventoryList from "./pages/InventoryListTable";
import { Routes, Route } from 'react-router-dom';
import AddUpdate from './pages/AddUpdateForm'
import Consume from './pages/ConsumeForm';
import NoList from './pages/NoList';
import ShoppingList from './pages/ShoppingListTable';
import NoMatch from './pages/NoMatch';

export default function App() {
  return (
    <Routes>
      <Route path="/" exact element={<InventoryList />} />
      <Route path="/addUpdate/:itemNumber" element={<AddUpdate />} />
      <Route path="/addUpdate/" element={<AddUpdate />} />
      <Route path="/consume" element={<Consume />} />
      <Route path="/noList" element={<NoList />} />
      <Route path="/shoppingList" element={<ShoppingList />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
