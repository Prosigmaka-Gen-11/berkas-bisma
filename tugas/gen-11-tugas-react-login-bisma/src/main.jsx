import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Protected from './pages/Protected';
import Login from './pages/Login';
import AuthProvider from './pages/AuthProvider';

const route = createBrowserRouter([
  { path: '', element: <Protected />, children: [
    { path: '/', element: <Home />},
    { path: '/about', element: <About />}
  ]},

  { path: '/login', element: <Login />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={route} />
  </AuthProvider>
)
