import { Avatar, Button, Space } from "antd";

const Navbar = () => {
  return (
    <div className="navbar">
      <Space wrap>
      <div style={{ color: 'white', fontSize: '18px', marginLeft: '20px' }}>
        <Button style={{ marginRight: '10px' }} type="primary">
          Login
        </Button>
        <Button type="default">
          Signup
        </Button>
        <Avatar style={{ marginLeft: '20px' }} />
      </div>
      </Space>
    </div>
  );
};

export default Navbar;
