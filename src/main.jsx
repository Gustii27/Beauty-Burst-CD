import React from 'react'
import ReactDOM from 'react-dom/client'
import CartWidget from "./components/CartWidget";
import Root from './components/Root';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootItem from './components/RootItem';
import "./styles/global.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDozCuoOJk3mEXECioFTkTos5Q2e-rcnxA",
  authDomain: "beauty-burst.firebaseapp.com",
  projectId: "beauty-burst",
  storageBucket: "beauty-burst.appspot.com",
  messagingSenderId: "585118359860",
  appId: "1:585118359860:web:60168d2bc763de25d44561"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/category/:id",
    element: <Root/>,
  },
  {
    path: "/item/:id",
    element: <RootItem/>,
  },
  {
    path: "/cart",
    element: <CartWidget/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
