import React from "react";
import { Link } from "react-router-dom";
import { CRYPTO_CAP, CRYPTO_CHANGE, CRYPTO_PRICE } from "../../constants/lang";
import millify from "millify";
import { Card } from "antd";

const CryptoCard = ({
  data: { uuid, rank, name, iconUrl, price, marketCap, change },
}) => {
  return (
    <Link to={`/crypto/${uuid}`}>
      <Card
        title={`${rank} | ${name}`}
        extra={<img className="crypto-image" src={iconUrl} alt={name} />}
        hoverable
      >
        <p>
          {CRYPTO_PRICE} {millify(price)}
        </p>
        <p>
          {CRYPTO_CAP} {millify(marketCap)}
        </p>
        <p>
          {CRYPTO_CHANGE} {millify(change)}
        </p>
      </Card>
    </Link>
  );
};

export default CryptoCard;
