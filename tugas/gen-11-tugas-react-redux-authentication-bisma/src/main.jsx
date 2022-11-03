import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import store from './store'
import { Provider } from 'react-redux'

import Home from './Home';
import About from './About';
import Protected from './Protected';
import Login from './Login';
// import AuthProvider from './pages/AuthProvider';

const route = createBrowserRouter([
  {
    path: '', element: <Protected />, children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> }
    ]
  },

  { path: '/login', element: <Login /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={route} />
  </Provider>
)
