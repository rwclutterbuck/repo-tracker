import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  return (
    <nav>
      <NavLink className="home-link" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
      <button onClick={history.goBack}>Back</button>
    </nav>
  );
};

export default NavBar;
