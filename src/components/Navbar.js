import React from "react";
import { Link } from "react-router-dom";
import { Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  FundOutlined,
  DollarOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import icon from "../logo.svg";

const { Item } = Menu;
const { Title } = Typography;

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Title level={2} className="logo">
          <Avatar src={icon} size="large" />
          <Link to="/">CryptoStonks</Link>
        </Title>
      </div>
      <Menu theme="dark">
        <Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Item>
        <Item icon={<FundOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Item>
        <Item icon={<DollarOutlined />}>
          <Link to="/cryptocurrencies">Crypto Currencies</Link>
        </Item>
        <Item icon={<ThunderboltOutlined />}>
          <Link to="/news">News</Link>
        </Item>
      </Menu>
    </div>
  );
};

export default Navbar;
