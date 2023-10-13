import { useState } from "react";

// Importing component from components directory

// Importing layout components from Ant Design library
import Sider from "antd/es/layout/Sider";
import { Card } from "antd";

import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

// Importing styles for the Homepage component
import "./Homepage.css";

// Importing icons from react-icons

// Importing logo from assests

import Header1 from "../../Layouts/Header/Header";
import Sidebar from "../../Layouts/Sidebar/Sidebar";

const Homepage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="homepage">
      <Sider
        className="sider"
        style={{
          backgroundColor: "#000b4b",
          color: "white",
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
      >
        <Sidebar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
      </Sider>
      <Layout>
        <Header1 />
        <Content>
          <div className="homepage">
            <div className="topSection">
              <div className="left">
                <h1> Welcome to Our Injury Tracking System</h1>
                <p>
                  Welcome to our innovative injury tracking system, designed to
                  streamline injury reporting and ensure the well-being of
                  individuals within your organization.
                </p>
              </div>
              <div className="right"></div>
            </div>
            <div className="bottomSection">
              <Card
                title="Effortless Reporting"
                bordered={false}
                style={{
                  width: 300,
                }}
              >
                <p>
                  Easily report injuries with our user-friendly interface,
                  ensuring all necessary details are captured accurately and
                  efficiently.
                </p>
              </Card>
              <Card
                title="Interactive Body Map"
                bordered={false}
                style={{
                  width: 300,
                }}
              >
                <p>
                  Utilize our interactive body map feature to pinpoint injury
                  locations precisely, providing valuable insights for proper
                  care and analysis.
                </p>
              </Card>
              <Card
                title="Data Security"
                bordered={false}
                style={{
                  width: 300,
                }}
              >
                <p>
                  Rest easy knowing that your data is secure. Our system employs
                  robust security measures to protect sensitive information at
                  all times.
                </p>
              </Card>
            </div>
            <div className="footer">
                contact info anf all 89930292
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Homepage;
