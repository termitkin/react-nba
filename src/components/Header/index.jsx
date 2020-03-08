import React from "react";
import { Link, HashRouter as Router } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <Router>
        <Link className="header__link" to="/">
          Home
        </Link>
        <Link className="header__link" to="/all-teams">
          All teams
        </Link>
      </Router>
    </header>
  );
};

export default Header;
