import React from "react";
import { Typography, Row } from "antd";
import { CryptoCurrencies, News } from ".";
import Loader from "./Layout/Loader";
import { useGetCryptosQuery } from "../redux/api/cryptoApi";
import millify from "millify";
import {
  GLOBAL,
  LATEST_NEWS,
  TOP_TEN,
  TOTAL_CAP,
  TOTAL_CURRENCY,
  TOTAL_EXCHANGE,
  TOTAL_MARKET,
  TOTAL_VOLUME,
} from "../constants/lang";
import { currencies, news } from "../constants/routes";
import { Header } from "./";
import GlobalStat from "./GlobalStat";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  // const column = 8;

  if (isFetching) return <Loader />;

  return (
    <div className="home-container">
      <Title level={2} className="heading">
        {GLOBAL}
      </Title>
      <Row gutter={[32, 32]} className="global-stat-row">
        <GlobalStat title={TOTAL_CURRENCY} value={globalStats.total} />
        <GlobalStat
          title={TOTAL_EXCHANGE}
          value={millify(globalStats.totalExchanges)}
        />
        <GlobalStat
          title={TOTAL_CAP}
          value={millify(globalStats.totalMarketCap)}
        />
        <GlobalStat
          title={TOTAL_VOLUME}
          value={millify(globalStats.total24hVolume)}
        />
        <GlobalStat
          title={TOTAL_MARKET}
          value={millify(globalStats.totalMarkets)}
        />
      </Row>
      <Header title={TOP_TEN} url={currencies} />
      <CryptoCurrencies simplified={true} />
      <Header title={LATEST_NEWS} url={news} />
      <News simplified={true} />
    </div>
  );
};

export default Home;
