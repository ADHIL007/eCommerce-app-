import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleCLick = () => {
    setOpen(!open);
  };

  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          <img src="https://placehold.co/600x400" alt="Ecommerce Logo" />
        </Link>

        <ul className={open ? "collapse-active navbar-links " : "navbar-links"}>
          <li className="navbar-item">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "navbar-link navbar-link-active"
                  : "navbar-link"
              }
            >
              Home
            </Link>
          </li>

          <li className="navbar-item">
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "navbar-link navbar-link-active"
                  : "navbar-link"
              }
            >
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "navbar-link navbar-link-active"
                  : "navbar-link"
              }
            >
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/user"
              className={
                location.pathname === "/users"
                  ? "navbar-link navbar-link-active"
                  : "navbar-link"
              }
            >
              Users
            </Link>
          </li>
        </ul>

        <div className="navbar-actions">
          <Link to="/cart" className="navbar-cart">
            <ShoppingCartOutlinedIcon sx={{ color: "#4bcffa" }} />
          </Link>
          <Link to="/account" className="navbar-account">
            <AccountCircleOutlinedIcon sx={{ color: "#4bcffa" }} />
          </Link>
          <button onClick={handleCLick} className="navbar-toggle">
            {open ? (
              <MenuOpenOutlinedIcon sx={{ color: "#333333" }} />
            ) : (
              <MenuOutlinedIcon sx={{ color: "#333333" }} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
