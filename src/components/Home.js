import React from "react";
import { Typography, Row, Col, Statistic } from "antd";
import { CryptoCurrencies, News } from ".";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading";
  console.log(globalStats);

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Statistics
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchange"
            value={globalStats.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={globalStats.totalMarketCap}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24 Hour Volume"
            value={globalStats.total24hVolume}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={globalStats.totalMarkets} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <CryptoCurrencies />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News />
    </>
  );
};

export default Home;
