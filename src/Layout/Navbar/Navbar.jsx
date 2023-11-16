import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TbReportMedical } from "react-icons/tb";
import { CiViewList } from "react-icons/ci";
import { TbDeviceAnalytics } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

 import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeSidebar = () => {
    setToggle(false);
  };

  return (
    <nav className={`navbar-container ${toggle ? "sidebar-open" : ""}`}>
      <NavLink to="/" className="navbar-header">
        <h2>InjuryLogix</h2>
      </NavLink>
      <div className="menu">
        <NavLink to="/" className="menuList">
          <AiOutlineHome />
          Home
        </NavLink>
        <NavLink to="/injury-report" className="menuList">
          <TbReportMedical />
          Injury Report
        </NavLink>
        <NavLink to="/report-list" className="menuList">
          <CiViewList />
          Report List
        </NavLink>
        <NavLink to="/dashboard" className="menuList">
          <TbDeviceAnalytics />
          Dashboard
        </NavLink>
      </div>
      <button onClick={handleToggle} className="mobile">
        {<GiHamburgerMenu />}
      </button>
      <div className="user-container">
        <Link to="http://localhost:3000/auth/google" className="authButton">
          <button>Login</button>
        </Link>
        <Link className="authButton">
          <button>Signup</button>
        </Link>

        <div className="userInfo">
          <AiOutlineUser className="photo-icon" />
          <span>Lokesh thalathoti</span>
        </div>
      </div>
      {toggle && (
        <div className="mobile">
          <div className="mobileView">
            <NavLink to="/" className="mobile-header" onClick={closeSidebar}>
              <h2>InjuryLogix</h2>
            </NavLink>
            <div className="mobile-menu">
              <NavLink
                to="/"
                className="mobile-menuList"
                onClick={closeSidebar}
              >
                <AiOutlineHome />
                Home
              </NavLink>
              <NavLink
                to="/injury-report"
                className="mobile-menuList"
                onClick={closeSidebar}
              >
                <TbReportMedical />
                Injury Report
              </NavLink>
              <NavLink
                to="/report-list"
                className="mobile-menuList"
                onClick={closeSidebar}
              >
                <CiViewList />
                Report List
              </NavLink>
              <NavLink
                to="/dashboard"
                className="mobile-menuList"
                onClick={closeSidebar}
              >
                <TbDeviceAnalytics />
                Dashboard
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
