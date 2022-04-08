import React from "react";
import { SHOW_MORE } from "../../constants/lang";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
const { Title } = Typography;

const Header = ({ title, url }) => {
  return (
    <div className="home-heading-container">
      <Title level={2} className="home-title">
        {title}
      </Title>
      <Title level={5} className="show-more">
        <Link to={url}>
          {SHOW_MORE} <DoubleRightOutlined />
        </Link>
      </Title>
    </div>
  );
};

export default Header;
