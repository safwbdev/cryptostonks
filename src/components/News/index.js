import React, { useState } from "react";
import { Select, Row, Col } from "antd";
import { useGetCryptoNewsQuery } from "../../redux/api/cryptoNewsApi";
import { useGetCryptosQuery } from "../../redux/api/cryptoApi";
import Loader from "../Layout/Loader";
import Slider from "react-slick";
import NewsCard from "./NewsCard";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptosQuery(100);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!cryptoNews?.value) return <Loader />;

  return (
    <>
      {simplified && (
        <Slider {...settings} className="crypto-news-slider">
          {cryptoNews.value?.map((news, i) => (
            <div className="crypto-news-card" key={i}>
              <NewsCard data={news} />
            </div>
          ))}
        </Slider>
      )}
      <Row
        gutter={[24, 24]}
        className={
          simplified ? "crypto-news-container-home" : "crypto-news-container"
        }
      >
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children
                  .toLowerCase()
                  .indexOf(input.toLocaleLowerCase()) > 0
              }
            >
              {data?.data?.coins.map((coin) => (
                <Select.Option value={coin.name}>{coin.name}</Select.Option>
              ))}
            </Select>
          </Col>
        )}

        {cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={12} lg={12} key={i}>
            <NewsCard data={news} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
