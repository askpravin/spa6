import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      {" "}
      <ul>
        <li>
          <Link to="/product1" style={{ textDecoration: "none" }}>
            Apple
          </Link>
        </li>
        <li>
          <Link to="/product2" style={{ textDecoration: "none" }}>
            Banana
          </Link>
        </li>
        <li>
          <Link to="/product3" style={{ textDecoration: "none" }}>
            Orange{" "}
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Products;
