import React from "react";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";
import { news, root } from "../../constants/routes";
import { MENU_HOME, MENU_NEWS, RIGHTS, SITE_NAME } from "../../constants/lang";

const Footer = () => {
  return (
    <div className="footer">
      <Typography.Title level={5}>
        {SITE_NAME}
        <br /> {RIGHTS}
      </Typography.Title>
      <Space>
        <Link to={root}>{MENU_HOME}</Link> |<Link to={news}>{MENU_NEWS}</Link>
      </Space>
    </div>
  );
};

export default Footer;
