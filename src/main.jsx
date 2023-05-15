import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ItemList from './components/ItemList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemList/>,
  },
  {
    path: "/cart",
    element: <CartWidget/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <NavBar/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
