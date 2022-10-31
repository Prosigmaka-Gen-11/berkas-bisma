import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from './pages/Home';
import Biodata from './pages/Biodata';
import Form from './pages/Form';
import BiodataLayout from './pages/BiodataLayout';
import BiodataDetail from './pages/BiodataDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/biodata",
    element: <BiodataLayout />,
    children: [
      { path: "list", element: <Biodata /> },
      { path: ":biodataId", element: <BiodataDetail /> },
      { path: "form", element: <Form />, children: [
        { path: ":biodataId", element: <Form /> }
      ] }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
