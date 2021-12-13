import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Stars } from "./Stars";

export const Item = (props) => {
  const {
    image,
    name,
    tagline,
    price,
    youSave,
    coupon,
    extra,
    rating,
    numRatings,
    processor,
    os,
    memory,
    hdd,
    graphics,
  } = props.item;

  const iDescription = [
    { text: "Processor", description: processor },
    { text: "Operating System", description: os },
    { text: "Memory", description: memory },
    { text: "Hard Drive", description: hdd },
    { text: "Graphics", description: graphics },
  ];

  return (
    <Col xs={12} md={4} lg={3} className="item">
      <span style={{ position: "relative", textAlign: "center" }}>
        <Col className="doorbuster">DOORBUSTER</Col>
        <Image src="/img/flag.png" alt={name} className="flag" fluid />
      </span>

      <Row>
        <Col className="item-img align-baseline">
          <Image src={image} alt={name} style={{ maxHeight: "130px" }} />
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h3 className="item-name">{name}</h3>
          <h5 className="item-tagline">{tagline}</h5>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h6 className="item-sale">Sale price starting at:</h6>
          <h2 className="item-price">${price}</h2>
          <small>You save: ${youSave}</small>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", paddingBottom: "20px" }}>
          <h5 className="item-coupon">Use eCoupon: {coupon} </h5>
          <small className="item-extra">{extra}</small>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <Stars rating={rating} numRatings={numRatings} />
        </Col>
      </Row>
      <Row className="justify-content-center pt-4">
        <Col className="d-grid" xs={9}>
          <Button className="align-self-center item-btn">SHOP NOW</Button>
        </Col>
      </Row>
      <Row
        className="justify-content-center pt-4 item-description-row"
        style={{ textAlign: "left" }}
      >
        {iDescription.map((i, idx) => (
          <Col xs={9} key={`item-description-${idx}`}>
            <h6 className="item-description-title">{i.text}</h6>
            <p className="item-description">{i.description}</p>
            {idx < iDescription.length - 1 && <hr />}
          </Col>
        ))}
      </Row>
      <Row
        className="justify-content-center pt-2"
        style={{ textAlign: "left" }}
      >
        <Col xs={9} className="pt-3 item-full-specs">
          <a href="#smth">
            See Full Specs &gt;
          </a>
        </Col>
      </Row>
    </Col>
  );
};
