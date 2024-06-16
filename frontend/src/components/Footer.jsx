import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";
import MentionsLegales from "../pages/MentionsLégales";
import "../styles/Footer.css";

function Footer() {
  return (
    <section className="main-footer">
      <div>
        <img src={Logo} alt="logo" className="logoFooter" />
      </div>
      <div>
        <p className="footerText">© 2024 ASF - All rights reserved</p>
      </div>
      <div>
        <NavLink
          to="/mentionslegales"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={MentionsLegales}
        >
          Mentions Légales
        </NavLink>
      </div>
    </section>
  );
}

export default Footer;
