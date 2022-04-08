import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { Row, Col, Input } from "antd";
import Loader from "../Layout/Loader";
import Slider from "react-slick";
import CryptoCard from "./CryptoCard";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState("");
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);

    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptoList, search]);

  if (isFetching) return <Loader />;

  return (
    <div
      className={simplified ? "currency-container-home" : "currency-container"}
    >
      {simplified && (
        <Slider {...settings} className="crypto-slider">
          {cryptos?.map((currency) => (
            <div className="crypto-card" key={currency.uuid}>
              <CryptoCard data={currency} />
            </div>
          ))}
        </Slider>
      )}
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}
      <Row
        gutter={[32, 32]}
        className={
          simplified ? "crypto-card-container-home" : "crypto-card-container"
        }
      >
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <CryptoCard data={currency} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CryptoCurrencies;
