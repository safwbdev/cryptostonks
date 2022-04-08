import React from "react";
import { Row, Col, Typography, Card } from "antd";
import { DETAILS_LINKS } from "../../constants/lang";

const Links = ({ data: { name, links } }) => {
  return (
    <Col xs={24} sm={12} lg={12} className="coin-links">
      <Card className="coin-links-card">
        <Typography.Title level={3} className="coin-details-heading">
          {name} {DETAILS_LINKS}
        </Typography.Title>
        {links.map((link) => (
          <Row className="coin-link" key={link.name}>
            <p className="link-name">{link.type}</p>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </Row>
        ))}
      </Card>
    </Col>
  );
};

export default Links;
