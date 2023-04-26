import { NavLink } from "react-router-dom";
import "../Navigation/Navigation.css";
import logo from '../Navigation/logo.png'

const items = [
  { name: "Home", to: "/" },
  { name: "cart", to: "/cart" },
  { name: "About us", to: "about-us" },
];

const Navigation = () => {
  return (
    <header className="mainNavigation">
      <nav>
        <div className="shop-logo">
          <img src={logo} alt="Cart Logo" />
          <h4>Shopcart</h4>
        </div>
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.to}
                  className={(navData) => {
                    return navData.isActive ? "activeLink" : "";
                  }}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
