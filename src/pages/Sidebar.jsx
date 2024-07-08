import React, { useState } from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <div
            className="sidebar-item"
            onClick={() => toggleDropdown("dashboard")}
          >
            <a href="#dashboard">
              <BsGrid1X2Fill className="icon" /> Dashboard
            </a>
            {activeDropdown === "dashboard" && (
              <div className="dropdown">
                <a href="#dashboard-link1">Link 1</a>
                <a href="#dashboard-link2">Link 2</a>
                <a href="#dashboard-link3">Link 3</a>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div
            className="sidebar-item"
            onClick={() => toggleDropdown("team")}
          >
            <a href="#team">
              <BsFillArchiveFill className="icon" /> Team Management
            </a>
            {activeDropdown === "team" && (
              <div className="dropdown">
                <a href="#team-link1">Link 1</a>
                <a href="#team-link2">Link 2</a>
                <a href="#team-link3">Link 3</a>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div
            className="sidebar-item"
            onClick={() => toggleDropdown("user")}
          >
            <a href="#user">
              <BsFillGrid3X3GapFill className="icon" /> User Management
            </a>
            {activeDropdown === "user" && (
              <div className="dropdown">
                <a href="#user-link1">Link 1</a>
                <a href="#user-link2">Link 2</a>
                <a href="#user-link3">Link 3</a>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div
            className="sidebar-item"
            onClick={() => toggleDropdown("products")}
          >
            <a href="#products">
              <BsPeopleFill className="icon" /> Products Management
            </a>
            {activeDropdown === "products" && (
              <div className="dropdown">
                <a href="#products-link1">Link 1</a>
                <a href="#products-link2">Link 2</a>
                <a href="#products-link3">Link 3</a>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div
            className="sidebar-item"
            onClick={() => toggleDropdown("withdrawal")}
          >
            <a href="#withdrawal">
              <BsListCheck className="icon" />
              Withdrawal Management
            </a>
            {activeDropdown === "withdrawal" && (
              <div className="dropdown">
                <a href="#withdrawal-link1">Link 1</a>
                <a href="#withdrawal-link2">Link 2</a>
                <a href="#withdrawal-link3">Link 3</a>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div
            className="sidebar-item"
            onClick={() => toggleDropdown("referral")}
          >
            <a href="#referral">
              <BsMenuButtonWideFill className="icon" />
              Referral Management
            </a>
            {activeDropdown === "referral" && (
              <div className="dropdown">
                <a href="#referral-link1">Referral User data</a>
                <a href="#referral-link2">Referral withdrawal User data</a>
                <a href="#referral-link3">Referral withdrawal Setup User</a>
                <a href="#referral-link3">MIS Reports</a>

              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div
            className="sidebar-item"
            onClick={() => toggleDropdown("scratchCard")}
          >
            <a href="#scratchCard">
              <BsMenuButtonWideFill className="icon" /> Scratch Management
            </a>
            {activeDropdown === "scratchCard" && (
              <div className="dropdown">
                <a href="#scratchCard-link1">Link 1</a>
                <a href="#scratchCard-link2">Link 2</a>
                <a href="#scratchCard-link3">Link 3</a>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div
            className="sidebar-item"
            onClick={() => toggleDropdown("game")}
          >
            <a href="#game">
              <BsMenuButtonWideFill className="icon" />
              Game Management
            </a>
            {activeDropdown === "game" && (
              <div className="dropdown">
                <a href="#game-link1">Link 1</a>
                <a href="#game-link2">Link 2</a>
                <a href="#game-link3">Link 3</a>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div
            className="sidebar-item"
            onClick={() => toggleDropdown("loan")}
          >
            <a href="#loan">
              <BsMenuButtonWideFill className="icon" />
              Loan Management
            </a>
            {activeDropdown === "loan" && (
              <div className="dropdown">
                <a href="#loan-link1">Link 1</a>
                <a href="#loan-link2">Link 2</a>
                <a href="#loan-link3">Link 3</a>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div
            className="sidebar-item"
            onClick={() => toggleDropdown("branch")}
          >
            <a href="#branch">
              <BsMenuButtonWideFill className="icon" /> Branch Management
            </a>
            {activeDropdown === "branch" && (
              <div className="dropdown">
                <a href="#branch-link1">Link 1</a>
                <a href="#branch-link2">Link 2</a>
                <a href="#branch-link3">Link 3</a>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div
            className="sidebar-item"
            onClick={() => toggleDropdown("support")}
          >
            <a href="#support">
              <BsMenuButtonWideFill className="icon" /> Support Management
            </a>
            {activeDropdown === "support" && (
              <div className="dropdown">
                <a href="#support-link1">Link 1</a>
                <a href="#support-link2">Link 2</a>
                <a href="#support-link3">Link 3</a>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div
            className="sidebar-item"
            onClick={() => toggleDropdown("blogs")}
          >
            <a href="#blogs">
              <BsMenuButtonWideFill className="icon" /> Blogs Management
            </a>
            {activeDropdown === "blogs" && (
              <div className="dropdown">
                <a href="#blogs-link1">Link 1</a>
                <a href="#blogs-link2">Link 2</a>
                <a href="#blogs-link3">Link 3</a>
              </div>
            )}
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
