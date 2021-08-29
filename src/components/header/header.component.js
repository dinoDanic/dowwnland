import React from "react";
import "./header.styles.scss";

import Menu from "../menu/menu.component";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">logo</div>
        <div className="header__menu">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
