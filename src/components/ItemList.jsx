import React from "react";
import { Item } from "./Item";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ItemList = ({ items }) => {
  return (
    <div className='container-itemlist'>
      <Row className="mt-4">
        <Col className="limited-doorbuster mb-4">
          <span style={{ position: "relative", textAlign: "center"}}>
            <p className="limited-doorbuster-text">
              Limited Quantity Doorbusters
            </p>
          </span>
        </Col>
      </Row>
      <Row>
        {items.map((item, idx) => (
          <Item item={item} key={`item-${idx}`}/>
        ))}
      </Row>
      </div>
  );
};
