import "./App.css";
import { useState } from "react";
import Homepage from "./page/Homepage";
import About from "./page/About";
import Product from "./page/Product";
import ProductDetail from "./page/ProductDetail";
import Loginpage from "./page/Loginpage";
import Userpage from "./page/Userpage";
import PrivateRoute from "./page/PrivateRoute";
import { Routes, Route } from "react-router-dom";
function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route
          path="/product/:id"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route path="/login" element={<Loginpage></Loginpage>}></Route>
        <Route
          path="/user"
          element={<PrivateRoute auth={auth}></PrivateRoute>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
