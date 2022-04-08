import React from "react";
import { Col, Row, Typography, Card } from "antd";
import { Line } from "react-chartjs-2";
import {
  CHART_CHANGE,
  CHART_CURRENT,
  CHART_PRICE,
  CHART_PRICE_2,
  CHART_TITLE,
} from "../../constants/lang";

const { Title } = Typography;

const LineChart = ({ coinName, currentPrice, coinHistory }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: CHART_PRICE,
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} {CHART_TITLE}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {CHART_CHANGE} {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            {CHART_CURRENT} {coinName} {CHART_PRICE_2} {currentPrice}
          </Title>
        </Col>
      </Row>
      <Card className="chart-card">
        <Line data={data} options={options} />
      </Card>
    </>
  );
};

export default LineChart;
