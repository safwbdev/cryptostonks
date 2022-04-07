import React from "react";
import { Col, Typography, Card } from "antd";
import {
  DollarCircleOutlined,
  TrophyOutlined,
  NumberOutlined,
} from "@ant-design/icons";
import millify from "millify";
import { DETAILS_VALUE_DESC, DETAILS_VALUE_TITLE } from "../../constants/lang";
const { Title, Text } = Typography;

const ValueStatistics = ({
  data: { name, price, rank, marketCap, allTimeHigh },
}) => {
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${price && millify(price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: rank, icon: <NumberOutlined /> },
    // {
    //   title: "24h Volume",
    //   value: `$ ${data.volume && millify(data.volume)}`,
    //   icon: <ThunderboltOutlined />,
    // },
    {
      title: "Market Cap",
      value: `$ ${marketCap && millify(marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ];
  return (
    <Col xs={24} sm={12} lg={12}>
      <Card className="coin-stats-card">
        {" "}
        <Title level={3} className="coin-details-heading">
          {name} {DETAILS_VALUE_TITLE}
        </Title>
        <p>
          {DETAILS_VALUE_DESC} {name}
        </p>
        {stats.map(({ icon, title, value }) => (
          <Col className="coin-stats" key={value}>
            <Col className="coin-stats-name">
              <Text>{icon}</Text>
              <Text>{title}</Text>
            </Col>
            <Text className="stats">{value}</Text>
          </Col>
        ))}
      </Card>
    </Col>
  );
};

export default ValueStatistics;
