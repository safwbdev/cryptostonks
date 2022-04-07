import React from "react";
import { Col, Statistic, Card } from "antd";

const GlobalStat = ({ title, value }) => {
  const column = 8;
  return (
    <Col xs={24} sm={12} lg={column}>
      <Card className="global-stat-card">
        <Statistic title={title} value={value} />
      </Card>
    </Col>
  );
};

export default GlobalStat;
