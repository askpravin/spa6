import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import { Route, Routes, Link } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" style={{ textDecoration: "none" }}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none" }}>
            About
          </Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path=":id" element={<ProductDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
