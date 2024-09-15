import React from "react";
import { FaBars, FaBell, FaSearch, FaClock } from "react-icons/fa";
import avatar from "../../assets/profile.png";
import "./Navbar.css";
import Menu from "../../assets/menudashboard.svg";

const NavbarDashboard = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars"></i>
      </div>

      <div className="navbar__left">
        <a href="#" className="dashboard-link">
          <img src={Menu} alt="menu" className="menu" />
          Dashboard
        </a>
      </div>

      <div className="navbar__right">
        <div className="navbar__time">
          <FaClock />
          <span className="time-text">Selasa, 11 Juli 2023</span>{" "}
        </div>
        <a href="#">
          <FaSearch />
        </a>
        <a href="#">
          <FaBell />
        </a>
        <a href="#">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
