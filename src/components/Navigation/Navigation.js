import { NavLink } from "react-router-dom";
import "../Navigation/Navigation.css";
import logo from "../Navigation/logo.png";
import { useCart } from "../../contexts/CartProvider";

const Navigation = () => {
  const { cart } = useCart();
  return (
    <header className="mainNavigation">
      <nav>
        <div className="shop-logo">
          <img src={logo} alt="Cart Logo" />
          <h4>Shopcart</h4>
        </div>
        <ul>
          <li className="cartLink">
            <NavLink
              to="/"
              className={(navData) => {
                return navData.isActive ? "activeLink" : "";
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/cart"
              className={(navData) => {
                return navData.isActive ? "activeLink" : "";
              }}
            >
              Cart
            </NavLink>
            <span className="cartLength">{cart.length}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
