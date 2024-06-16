import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/menu.css";
import Logo from "../images/Logo.png";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.touchAction = "none";
    } else {
      document.body.style.touchAction = "";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.touchAction = "";
  };

  return (
    <nav className="menu">
      <div className="logo">
        <Link to="/">
          <img alt="logo" src={Logo}></img>
        </Link>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`} onClick={closeMenu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Actualités
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/historique"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Association
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
        <button className="bouton-devenir-benevole">
          <NavLink to="/benevole">Devenir Bénévole</NavLink>
        </button>
      </ul>
      <div className="burger" onClick={handleBurgerClick}>
        <div className="ligne1"></div>
        <div className="ligne2"></div>
        <div className="ligne3"></div>
      </div>
    </nav>
  );
};

export default Menu;
