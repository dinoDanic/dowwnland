import React from "react";
import Menu from "../menu/menu.component";
import "./sidebar.style.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__serach">
        search <br />
        user
      </div>
      <div className="sidebar__menu">
        <Menu />
      </div>
      <div className="sidebar__back">back button</div>
    </div>
  );
};

export default Sidebar;
