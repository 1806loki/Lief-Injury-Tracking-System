import { Header } from "antd/es/layout/layout";

import Navbar from "../../components/Navbar/Navbar"

const Header1 = () => {
  return (
    <div>
       <Header
          className="header"
          style={{
            backgroundColor: "white",
          }}
        >
          <Navbar />
        </Header>
    </div>
  )
}

export default Header1
