import "./App.css";
import { useState } from "react";
import Homepage from "./page/Homepage";
import About from "./page/About";
import Product from "./page/Product";
import ProductDetail from "./page/ProductDetail";
import Loginpage from "./page/Loginpage";
import Userpage from "./page/Userpage";
import PrivateRoute from "./page/PrivateRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Root";

function App() {
  const [auth, setAuth] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "/product", element: <Product /> },
      ],
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    },
    {
      path: "/login",
      element: <Loginpage />,
    },
    {
      path: "/user",
      element: <PrivateRoute auth={auth} />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
