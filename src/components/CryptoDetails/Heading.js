import React from "react";
import { Col, Typography } from "antd";
import { DETAILS_PRICE, LIVE_PRICE } from "../../constants/lang";

const Heading = ({ data: { iconUrl, name, symbol } }) => {
  return (
    <Col className="coin-heading-container">
      <img
        className="crypto-image"
        src={iconUrl}
        alt={name}
        style={{ maxWidth: "80px" }}
      />
      <Typography.Title level={2} className="coin-name">
        {name} ({symbol}) {DETAILS_PRICE}
      </Typography.Title>
      <p>
        {name} {LIVE_PRICE}
      </p>
    </Col>
  );
};

export default Heading;
