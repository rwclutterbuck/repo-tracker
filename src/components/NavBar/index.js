import React from "react";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const history = useNavigate();

  return (
    <nav>
      <NavLink activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
      <button onClick={() => history(-1)}>Back</button>
    </nav>
  );
};

export default NavBar;
