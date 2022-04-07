import React from "react";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";
import { news, root } from "../constants/routes";
import { MENU_HOME, MENU_NEWS } from "../constants/lang";

const Footer = () => {
  return (
    <div className="footer">
      <Typography.Title level={5}>
        Crypto Stonks
        <br /> All rights reserved.
      </Typography.Title>
      <Space>
        <Link to={root}>{MENU_HOME}</Link> |
        {/* <Link to="/exchanges">Exchanges</Link> | */}
        <Link to={news}>{MENU_NEWS}</Link>
      </Space>
    </div>
  );
};

export default Footer;
