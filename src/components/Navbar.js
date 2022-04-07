import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Typography, Button } from "antd";
import {
  HomeOutlined,
  // FundOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  MenuOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import {
  MENU_CURRENCIES,
  // MENU_EXCHANGES,
  MENU_HOME,
  MENU_NEWS,
  SITE_NAME,
} from "../constants/lang";
import { currencies, news, root } from "../constants/routes";
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
            {SITE_NAME}
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
          <Item icon={<HomeOutlined />} key="nav_1">
            <Link to={root}>{MENU_HOME}</Link>
          </Item>
          <Item icon={<DollarOutlined />} key="nav_2">
            <Link to={currencies}>{MENU_CURRENCIES}</Link>
          </Item>
          {/* <Item icon={<FundOutlined />} key="nav_3">
            <Link to={exchanges}>{MENU_EXCHANGES}</Link>
          </Item> */}
          <Item icon={<ThunderboltOutlined />} key="nav_4">
            <Link to={news}>{MENU_NEWS}</Link>
          </Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
