import React from "react";
import { Typography, Avatar, Card } from "antd";
import moment from "moment";
import { DEMO_IMAGE } from "../../constants/lang";

const { Title, Text } = Typography;

const NewsCard = ({ data }) => {
  return (
    <Card hoverable className="news-card">
      <a href={data.url} target="blank" rel="noreferrer">
        <div className="news-image-container">
          <img
            src={data?.image?.thumbnail?.contentUrl || DEMO_IMAGE}
            alt="news"
          />
          <Title className="news-title" level={4}>
            {data.name}
          </Title>
        </div>
        <p>
          {data.description.length > 100
            ? `${data.description.substring(0, 100)} ...`
            : data.description}
        </p>
        <div className="provider-container">
          <div>
            <Avatar
              src={data.provider[0]?.image?.thumbnail?.contentUrl || DEMO_IMAGE}
              alt="news"
            />
            <Text className="provider-name">{data.provider[0]?.name}</Text>
          </div>
          <Text>{moment(data.datePublished).startOf("ss").fromNow()}</Text>
        </div>
      </a>
    </Card>
  );
};

export default NewsCard;
