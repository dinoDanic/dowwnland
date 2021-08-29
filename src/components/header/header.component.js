import React from "react";
import "./header.styles.scss";

import LogReg from "../log-reg/log-reg.component";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">logo</div>
        <div className="header__menu">
          <LogReg />
        </div>
      </div>
    </div>
  );
};

export default Header;
