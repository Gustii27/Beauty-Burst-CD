import React from 'react'
import ReactDOM from 'react-dom/client'
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
import CartWidget from './components/CartWidget';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID
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
