import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Typography, Avatar, Button } from "antd";
import {
  HomeOutlined,
  FundOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  MenuOutlined,
  RiseOutlined,
} from "@ant-design/icons";
// import icon from "../logo.svg";

const { Item } = Menu;
const { Title } = Typography;

const Navbar = () => {
  const [activemenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Link to="/">
          <Title level={3} className="logo">
            {/* <Avatar src={icon} size="large" /> */}
            <RiseOutlined />
            CryptoStonks
          </Title>
        </Link>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activemenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activemenu && (
        <Menu theme="dark">
          <Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Item>
          <Item icon={<DollarOutlined />}>
            <Link to="/cryptocurrencies">Crypto Currencies</Link>
          </Item>
          <Item icon={<FundOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Item>
          <Item icon={<ThunderboltOutlined />}>
            <Link to="/news">News</Link>
          </Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
