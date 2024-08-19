import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import NotFound from './Components/NotFound.jsx'
import Login from './Components/Login.jsx'
import RegisterPage from './Components/RegisterPage.jsx'
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'
import ProductPage from './Sections/ProductPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <RegisterPage/>
      },
      {
        path: "/productpage",
        element: <ProductPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router}/>
    </FirebaseProvider>
  </React.StrictMode>
)
