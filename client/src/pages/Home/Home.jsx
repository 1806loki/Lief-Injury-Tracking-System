/* eslint-disable react/no-unescaped-entities */
import { Content } from "antd/es/layout/layout";
import Navbar from "../../Layout/Navbar/Navbar";
import { Row, Col, Typography, Card } from "antd";

import "./Home.css";

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div>
      <Navbar />

      <Content>
        <div className="home-page">
          <Row
            justify="center"
            gutter={[16, 16]}
            className="hero
          "
          >
            <Col xs={24} sm={20} md={18} lg={16} xl={32}>
              <Title level={2} style={{ color: "white" }}>
                Welcome to Injury Tracker
              </Title>
              <Paragraph className="paragraph" style={{ color: "white" }}>
                Welcome to Injury Tracker, your reliable partner in injury
                tracking and reporting. Our innovative system is designed to
                simplify the process of recording injuries while ensuring the
                well-being of individuals within your organization. With
                SafeGuard Tracker, safety is just a click away.
              </Paragraph>
            </Col>
          </Row>
          <Row className="cardSection" justify="center" gutter={[16, 16]}>
            <Col xs={24} sm={20} md={18} lg={8} xl={6}>
              <Card title="Effortless Reporting">
                Easily report injuries through our intuitive interface, ensuring
                all necessary details are captured accurately and promptly.
              </Card>
            </Col>
            <Col xs={24} sm={20} md={18} lg={8} xl={6}>
              <Card title="Body Mapping">
                Utilize our interactive body map feature to precisely identify
                injury locations, providing valuable insights for proper care
                and analysis.
              </Card>
            </Col>
            <Col xs={24} sm={20} md={18} lg={8} xl={6}>
              <Card title="Data Security">
                Your data's safety is our priority. SafeGuard Tracker employs
                robust security measures to protect sensitive information,
                giving you peace of mind.
              </Card>
            </Col>
          </Row>
          <Row
            justify="center"
            gutter={[16, 16]}
            style={{ paddingTop: "10px" }}
          >
            <Col xs={24} sm={20} md={18} lg={16} xl={14}>
              <Title level={3}>Get Started Today!</Title>
              <Paragraph>
                Join us in enhancing safety standards and simplifying injury
                reporting. Whether you're part of law enforcement, healthcare,
                or any safety-focused organization, Injury Tracker is tailored
                to your needs.
              </Paragraph>
            </Col>
          </Row>
        </div>
      </Content>
    </div>
  );
};

export default Home;
