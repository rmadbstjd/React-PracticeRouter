import "./App.css";
import Homepage from "./page/Homepage";
import About from "./page/About";
import Product from "./page/Product";
import ProductDetail from "./page/ProductDetail";
import { Routes, Route } from "react-router-dom";
function App() {
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
      </Routes>
    </div>
  );
}

export default App;
