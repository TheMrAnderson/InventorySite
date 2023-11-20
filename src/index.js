import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddUpdate from "./pages/AddUpdateForm";
import Consume from "./pages/ConsumeForm";
import InventoryList from "./pages/InventoryListTable";
import NoList from "./pages/NoList";
import ErrorPage from "./pages/Error";
import ShoppingList from "./pages/ShoppingListTable";


const router = createBrowserRouter([
  {
    path: "/", element: <InventoryList />, errorElement: <ErrorPage />
  },
  {
    path: "addUpdate/:item", element: <AddUpdate />
  },
  {
    path: "consume", element: <Consume />
  },
  {
    path: "shoppingList", element: <ShoppingList />
  },
  {
    path: "noList", element: <NoList />
  }
]);

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>
);