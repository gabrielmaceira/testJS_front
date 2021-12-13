import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const categories = [
    { title: "2 in 1", image: "/img/nav-2in1.png", address: "2-in-1" },
    {
      title: "Home Laptops",
      image: "/img/nav-laptops.png",
      address: "home-laptops",
    },
    {
      title: "ThinkPad Laptops",
      image: "/img/nav-thinkpad.png",
      address: "thinkpad",
    },
    { title: "Desktops", image: "/img/nav-desktops.png", address: "desktops" },
    { title: "Monitors", image: "/img/nav-monitor.png", address: "monitors" },
    {
      title: "Accesories",
      image: "/img/nav-accesories.png",
      address: "accesories",
    },
    {
      title: "Clearence",
      image: "/img/nav-clearence.png",
      address: "clearence",
    },
    { title: "Outlet", image: "/img/nav-outlet.png", address: "outlet" },
  ];

  return (
    <Container fluid style={{ background: "#EEEEEE" }} className="pt-2">
      <Row className="w-100 g-3 justify-content-around mx-2">
        {categories.map((category) => (
          <NavLink
            to={`/${category.address}`}
            exact
            activeClassName="active-navigation"
            className="navigation-link"
          >
            <Col key={category.title}>
              <Row className="d-flex">
                <Col lg={5} md={4}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="navigation-img"
                  />
                </Col>
                <Col className="d-flex align-self-center">
                  <div className="navigation-title">{category.title}</div>
                </Col>
              </Row>
            </Col>
          </NavLink>
        ))}
      </Row>
    </Container>
  );
};
