import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path: "/write",
        element: <Write/>
      },
      {
        path: "/post/:id",
        element: <Single/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
]);

const App = () => {
  return (
    <div className='flex justify-center'>
      <div className='container md:max-w-[70%]'> 
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App