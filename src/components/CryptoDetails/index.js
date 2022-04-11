import React, { useState } from "react";
import { useParams } from "react-router";
import { Row, Col, Select } from "antd";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../../redux/api/cryptoApi";
import Loader from "../Layout/Loader";
import { time } from "../../constants/time";
import Heading from "./Heading";
import ValueStatistics from "./ValueStatistics";
import OtherStatistics from "./OtherStatistics";
import Links from "./Links";
import Description from "./Description";
import LineChart from "./LineChart";
import millify from "millify";

const { Option } = Select;

const CryptoDetails = () => {
  const { id } = useParams();
  const [timeperiod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(id);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    id,
    timeperiod,
  });

  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loader />;

  return (
    <div className="container">
      <Col className="coin-detail-container">
        <Heading data={cryptoDetails} />
        <Select
          defaultValue="7d"
          className="select-timeperiod"
          placeholder="Select Time Period"
          value={timeperiod}
          onChange={(value) => setTimePeriod(value)}
        >
          {time.map((date) => (
            <Option key={date}>{date}</Option>
          ))}
        </Select>
        <LineChart
          coinHistory={coinHistory}
          currentPrice={millify(cryptoDetails.price)}
          coinName={cryptoDetails.name}
        />
        <Row gutter={[32, 32]} className="statistics-row">
          <ValueStatistics data={cryptoDetails} />
          <OtherStatistics data={cryptoDetails} />
        </Row>
        <Row gutter={[32, 32]} className="info-row">
          <Description data={cryptoDetails} />
          <Links data={cryptoDetails} />
        </Row>
      </Col>
    </div>
  );
};

export default CryptoDetails;
