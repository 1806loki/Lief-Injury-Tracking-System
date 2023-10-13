/* eslint-disable react/prop-types */

import { BiHome } from "react-icons/bi";
import { FaWpforms } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../../assets/Lief-logo.webp";
import { Menu } from "antd";

const Sidebar = ({ collapsed, toggleCollapsed }) => {
 
  return (
    <div>
      <div className="collapse-button" onClick={toggleCollapsed}>
        {collapsed ? <FaArrowRight /> : <FaArrowLeft />}
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
        <div
          className="title"
          style={{
            padding: "20px",
          }}
        >
          <h2
            style={{
              display: collapsed ? "none" : "block",
            }}
          >
            LIEF <br />
            <span style={{ fontSize: "15px", fontWeight: "normal" }}>
              Injury Tracker
            </span>
          </h2>
        </div>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["home"]}
        style={{ backgroundColor: "#164573", color: "white" }}
        items={[
          {
            label: "Home",
            key: "home",
            icon: <BiHome />,
          },
          {
            label: "Injury Form",
            key: "injuryForm",
            icon: <FaWpforms />,
          },
          {
            label: "Report List",
            key: "reportList",
            icon: <TbReportMedical />,
          },
          {
            label: "User Profile",
            key: "userProfile",
            icon: <BsFillPersonFill />,
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
