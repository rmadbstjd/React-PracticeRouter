import logo from "./logo.svg";
import "./App.css";
import Homepage from "./page/Homepage";
import About from "./page/About";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
