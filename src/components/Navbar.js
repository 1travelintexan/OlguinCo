import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/olguinImages/logo.jpeg";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <h2 className="olguinCo"> Olguin Co.</h2>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon icon={faTimes} style={{ height: 60, width: 60 }} />
          ) : (
            <FontAwesomeIcon icon={faBars} style={{ height: 60, width: 60 }} />
          )}
        </div>
      </nav>
      <div className="search-box">
        {click ? (
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;
