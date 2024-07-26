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
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [upshowmenu, setupshowMenu] = useState(false);
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleMenus = () => {
    setupshowMenu(!upshowmenu);
  };
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={"./images/wFinePay.png"} className="imgs" />
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
            <Link to="/">
              <BsGrid1X2Fill className="icon" /> Dashboard
            </Link>
            {activeDropdown === "dashboard" && (
              <div className="dropdown">
                <Link to="/digitalGold">Digital Gold</Link>
                <Link to="/goldsip">Gold SIP</Link>
                <Link to="/merchant">Merchant </Link>
                <Link to="/goldPro"> GoldPro </Link>
                <Link to="/finex">Fine X </Link>
                <Link to="/fineplus">Fine Plus </Link>
                <Link to="/goldPlus">Gold Plus</Link>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div className="sidebar-item" onClick={() => toggleDropdown("team")}>
            <a href="#team">
              <BsFillArchiveFill className="icon" /> Team Management
            </a>
            {activeDropdown === "team" && (
              <div className="dropdown">
                <Link to="/rolesform">Roles</Link>
                <Link to="/superadminTable">Super Admin (Edit)</Link>
                <Link to="/subadminTable">Sub-Admin (View)</Link>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div className="sidebar-item" onClick={() => toggleDropdown("user")}>
            <a href="#user">
              <BsFillGrid3X3GapFill className="icon" /> User Management
            </a>
            {activeDropdown === "user" && (
              <div className="dropdown">
                <a href="/userAllData">User All Data </a>
                <a href="/userWallet">User Wallet </a>
                <a href="/userLoanHistory">User Loan History</a>
                <a href="/userAllActivity">User All Activity</a>
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
                <a href="/productManageForm">All Product investment </a>
                <a href="/allProductReturn">All Product Return </a>
                <a href="/allProductReinvestment">All Product Reinvestment </a>
                <a href="/allProductLoan">All Product loan </a>
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
                <a onClick={toggleMenu} className="dropdown-button">
                  All Products Withdrawal History
                </a>
                {showMenu && (
                  <div className="dropdown-content">
                    <a href="/withdrawalHistory">Digital Gold</a>
                    <a href="/goldSipwithHistory">Gold SIP</a>
                    <a href="/merchantWithHistory">Merchant Autopay</a>
                    <a href="/golProwithHistory">Gold Pro</a>
                    <a href="/finexWithHistory">Fine X</a>
                    <a href="/goldPlusWithHistory">Gold Plus</a>
                    <a href="/finePlusWithHistory">Fine Plus</a>
                  </div>
                )}

                <a onClick={toggleMenus} className="dropdown-button">
                  Upcomming Withdrawal History
                </a>
                {upshowmenu && (
                  <div className="dropdown-content">
                    <a href="/upCommewithHistory">Gold Pro</a>
                    <a href="/finexUpComewithHistory">Fine X</a>
                    <a href="/finePlusUpcomeWithHistory">Fine Plus</a>
                    <a href="/GoldPlusupCommewithHistory">Gold Plus</a>
                  </div>
                )}
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
                <a href="/reffaraluserData">Referral User data</a>
                <a href="/reffaralUserBalance">Referral withdrawal User data</a>
                <a href="/reffaralWithDrawalSetup">Referral withdrawal Setup User</a>
                <a href="/reffaralMisReports">MIS Reports</a>
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
                <a href="#scratchCard-link1">
                  All Products by time scratch card balance
                </a>
                <a href="#scratchCard-link2">All User joining Balance</a>
                <a href="#scratchCard-link3">Scratch Card Setup User</a>
                <a href="#scratchCard-link3">MIS Reports</a>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div className="sidebar-item" onClick={() => toggleDropdown("game")}>
            <a href="#game">
              <BsMenuButtonWideFill className="icon" />
              Game Management
            </a>
            {activeDropdown === "game" && (
              <div className="dropdown">
                <a href="#game-link1">ACTIVE/ INACTIVE USER</a>
                <a href="#game-link2">WINNER HISTORY USER</a>
                <a href="#game-link3">
                  WINER REWRAD MONEY SETTLEMENT SETUP USER
                </a>
                <a href="#game-link3">GAME PRICE MONEY SETUP USER</a>
                <a href="#game-link3">MIS Reports</a>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div className="sidebar-item" onClick={() => toggleDropdown("loan")}>
            <a href="#loan">
              <BsMenuButtonWideFill className="icon" />
              Loan Management
            </a>
            {activeDropdown === "loan" && (
              <div className="dropdown">
                <a href="#loan-link1">Total Loan Disbursement</a>
                <a href="#loan-link2">Loan Disbursement Monthly Basic Graph</a>
                <a href="#loan-link3">Loan Approved</a>
                <a href="#loan-link3">Loan Disbursement User</a>
                <a href="#loan-link3">Repayment Schedule User</a>
                <a href="#loan-link3">Overdue fine user</a>
                <a href="#loan-link3">Foreclosure Payment User</a>
                <a href="#loan-link3">MIS Reports Loan Disbursement </a>
                <a href="#loan-link3">MIS Repayment Loan Disbursement </a>
                <a href="#loan-link3">MIS Overdue Loan Disbursement</a>
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
                <a href="#branch-link1">User Creation</a>
                <a href="#branch-link2">Product Listing</a>
                <a href="#branch-link3">Investment Report</a>
                <a href="#branch-link3">Payout</a>
                <a href="#branch-link3">MIS Reports AP</a>
                <a href="#branch-link3">MIS Reports EMP</a>
                <a href="#branch-link3">MIS Reports Normal User</a>
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
                <a href="#support-link1">Notification User</a>
                <a href="#support-link2">Ticket Issue By All User</a>
                <a href="#support-link3">Ticket Issue By All User Solve</a>
                <a href="#support-link3">All User Email Notification</a>
                <a href="#support-link3">Email Marketing</a>
                <a href="#support-link3">MIS Reports</a>
              </div>
            )}
          </div>
        </li>
        <li className="sidebar-list-item">
          <div className="sidebar-item" onClick={() => toggleDropdown("blogs")}>
            <a href="#blogs">
              <BsMenuButtonWideFill className="icon" /> Blogs Management
            </a>
            {activeDropdown === "blogs" && (
              <div className="dropdown">
                <a href="#blogs-link1">Blogs Setup</a>
                <a href="#blogs-link2">Carrer Section</a>
                <a href="#blogs-link3">Contact Support</a>
                <a href="#blogs-link3">Website Visit All Page Report</a>
                <a href="#blogs-link3">Affiliate Partner Programs Login</a>
                <a href="#blogs-link3">All Social Media Feedback</a>
              </div>
            )}
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
