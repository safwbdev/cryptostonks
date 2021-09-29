import React from "react";
import { Row, Col, Typography, Avatar, Collapse } from "antd";
import { useGetExchangesQuery } from "../services/cryptoApi";
import HTMLReactParser from "html-react-parser";
import Loader from "./Loader";
import millify from "millify";
const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangeList = data?.data?.exchanges;

  if (isFetching) return <Loader />;
  return (
    <div className="container">
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Changes</Col>
      </Row>
      <Row>
        {" "}
        {exchangeList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image"
                        src={exchange.iconUrl}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                }
              >
                {exchange.description
                  ? HTMLReactParser(exchange.description || "")
                  : "TBA"}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Exchanges;
