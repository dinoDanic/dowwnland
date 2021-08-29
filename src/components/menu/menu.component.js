import React from "react";
import { Link } from "react-router-dom";
import "./menu.styles.scss";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <Link to="/overview">
          <li>overview</li>
        </Link>
        <li>activity</li>
        <Link to="/properties">
          <li>properties</li>
        </Link>
        <li>deals</li>
      </ul>
    </div>
  );
};

export default Menu;
