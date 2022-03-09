import React from "react";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const history = useNavigate();

  return (
    <nav>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "none")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "none")}
        to="/about"
      >
        About
      </NavLink>
      <button onClick={() => history(-1)}>Back</button>
    </nav>
  );
};

export default NavBar;
