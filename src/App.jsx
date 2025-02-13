import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import { Route, Routes, Link } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
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
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
