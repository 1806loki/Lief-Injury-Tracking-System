import { useEffect, useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import logo from "../../assets/Lief-logo.webp";
import axios from "axios"

const { Header } = Layout;

import "./Navbar.css";
import { Link } from "react-router-dom";

<Menu
  mode="horizontal"
  style={{
    lineHeight: "64px",
    display: "flex",
    background: "#092a62",
    color: "white",
  }}
  items={[
    {
      label: <Link to="/">Home</Link>,
      key: "home",
    },
    {
      label: <Link to="/injury-report">Injury Report</Link>,
      key: "injuryReport",
    },
    {
      label: <Link to="/report-list">Report List</Link>,
      key: "reportList",
    },
    {
      label: <Link to="http://localhost:3000/auth/google">Sign In</Link>,
      key: "signIn",
    },
    {
      label: <Link to="/login">Login</Link>,
      key: "login",
    },
  ]}
/>;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

   

  return (
    <Header
      style={{
        background: "#092a62",
        display: "flex",
        width:"auto",
        justifyContent: "space-between",
         
      }}
    >
      <div className="mobile-menu">
        <Button
          type="primary"
          onClick={showDrawer}
          style={{
            width: "auto",
          }}
        >
          Menu
        </Button>
        <Drawer
          title="Menu"
          placement="left"
          closable={false}
          onClose={onClose}
          open={visible}
        >
          <Menu
            mode="vertical"
            items={[
              {
                label: <Link to="/">Home</Link>,
                key: "home",
              },
              {
                label: <Link to="/injury-report">Injury Report</Link>,
                key: "injuryReport",
              },
              {
                label: <Link to="/report-list">Report List</Link>,
                key: "reportList",
              },
              {
                label: (
                  <Link to="http://localhost:3000/auth/google">Sign In</Link>
                ),
                key: "signIn",
              },
              {
                label: <Link to="/login">Login</Link>,
                key: "login",
              },
            ]}
          />
        </Drawer>
      </div>

      <div className="title" style={{ display: "flex", alignItems: "center" }}>
        <div>
          <img src={logo} alt="" className="logo" />
        </div>
        <span style={{ fontSize: "20px", color: "#ffffff" }}>
          Injury Tracker
        </span>
      </div>

      <div className="desktop-menu">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          style={{
            lineHeight: "64px",
            display: "flex",
            background: "#092a62",
            color: "white",
          }}
          items={[
            {
              label: <Link to="/">Home</Link>,
              key: "home",
            },
            {
              label: <Link to="/injury-report">Injury Report</Link>,
              key: "injuryReport",
            },
            {
              label: <Link to="/report-list">Report List</Link>,
              key: "reportList",
            },
            {
              label: (
                <Link to="http://localhost:3000/auth/google">Sign In</Link>
              ),
              key: "signIn",
            },
            {
              label: "Login",
              key: "login",
            },
          ]}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <UserOutlined
          style={{
            fontSize: "24px",
            marginLeft: "10px",
            cursor: "pointer",
            color: "#1890ff",
          }}
        />
      </div>
    </Header>
  );
};

export default Navbar;
