import React from "react";
import Category from "../../assets/category.png";
import Token from "../../assets/coin.png";
import Data from "../../assets/data-2.png";
import Source from "../../assets/scroll.png";
import Gateway from "../../assets/electricity.png";
import Mapper from "../../assets/hierarchy.png";
import Module from "../../assets/code.png";
import User from "../../assets/user.png";
import Role from "../../assets/security-safe.png";

import "./Sidebar.css";

const SidebarDashboard = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src="/logo.png" alt="logo" />
          <h1>Vortex</h1>
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <img src={Category} alt="token" className="sidebar__icon" />
          <a href="#">Dashboard</a>
        </div>
        <div className="sidebar__link">
          <img src={Token} alt="token" className="sidebar__icon" />
          <a href="#">Token</a>
        </div>
        <h2>DATA</h2>
        <div className="sidebar__link">
          <img src={Data} alt="category" className="sidebar__icon" />
          <a href="#">Category</a>
        </div>
        <div className="sidebar__link">
          <img src={Source} alt="source" className="sidebar__icon" />
          <a href="#">Source</a>
        </div>
        <div className="sidebar__link">
          <img src={Gateway} alt="gateway" className="sidebar__icon" />
          <a href="#">Gateway</a>
        </div>
        <div className="sidebar__link">
          <img src={Mapper} alt="mapper" className="sidebar__icon" />
          <a href="#">Mapper</a>
        </div>
        <h2>GORILLA</h2>
        <div className="sidebar__link">
          <img src={Module} alt="module" className="sidebar__icon" />
          <a href="#">Module Prompt</a>
        </div>
        <h2>SETTING</h2>
        <div className="sidebar__link">
          <img src={User} alt="user management" className="sidebar__icon" />
          <a href="#">User Management</a>
        </div>
        <div className="sidebar__link">
          <img src={Role} alt="role" className="sidebar__icon" />
          <a href="#">Role</a>
        </div>
      </div>
    </div>
  );
};

export default SidebarDashboard;
