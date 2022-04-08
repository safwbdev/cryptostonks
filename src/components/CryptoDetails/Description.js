import React from "react";
import { Row, Col, Typography, Card } from "antd";
import HTMLParser from "html-react-parser";
import { DETAILS_WHAT } from "../../constants/lang";

const Description = ({ data: { name, description } }) => {
  return (
    <Col xs={24} sm={24} lg={16}>
      <Card className="coin-stats-card">
        <Row className="coin-desc">
          <Typography.Title level={3} className="coin-details-heading">
            {DETAILS_WHAT} {name}?
          </Typography.Title>
          <div>{HTMLParser(description)}</div>
        </Row>
      </Card>
    </Col>
  );
};

export default Description;
