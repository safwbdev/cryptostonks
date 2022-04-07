import React from "react";
import { Col, Typography, Card } from "antd";
import { MoneyCollectOutlined, FundOutlined } from "@ant-design/icons";
import {
  DEATAILS_OTHER_DESC,
  DEATAILS_OTHER_TITLE,
  DETAILS_EXCHANGES,
  DETAILS_MARKETS,
} from "../../constants/lang";

const { Title, Text } = Typography;

const OtherStatistics = ({ data: { numberOfMarkets, numberOfExchanges } }) => {
  const genericStats = [
    {
      title: DETAILS_MARKETS,
      value: numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: DETAILS_EXCHANGES,
      value: numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    // {
    //   title: "Aprroved Supply",
    //   value: cryptoDetails.approvedSupply ? (
    //     <CheckOutlined />
    //   ) : (
    //     <StopOutlined />
    //   ),
    //   icon: <ExclamationCircleOutlined />,
    // },
    // {
    //   title: "Total Supply",
    //   value: `$ ${millify(cryptoDetails.totalSupply)}`,
    //   icon: <ExclamationCircleOutlined />,
    // },
    // {
    //   title: "Circulating Supply",
    //   value: `$ ${millify(cryptoDetails.circulatingSupply)}`,
    //   icon: <ExclamationCircleOutlined />,
    // },
  ];
  return (
    <Col xs={24} sm={12} lg={12}>
      <Card className="other-stats-card">
        <Title level={3} className="coin-details-heading">
          {DEATAILS_OTHER_TITLE}
        </Title>
        <p>{DEATAILS_OTHER_DESC}</p>
        {genericStats.map(({ icon, title, value }) => (
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

export default OtherStatistics;
