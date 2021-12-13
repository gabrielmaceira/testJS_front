import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const headerLenovo = document.querySelector("#header-lenovo");
    const navHero = document.querySelector("#nav-hero");

    headerLenovo.style.maxWidth = String(navHero.clientHeight * 0.32) + "px";

    navHero.style.minHeight = String(headerLenovo.clientHeight) + "px";

    setHeight(headerLenovo.clientHeight);
  }, [height]);

  return (
    <>
      <Navbar expand="lg" className="p-0">
        <Container fluid className="px-0">
          <Row className="w-100 g-0">
            <Col className=" p-0 m-0 header-lenovo" id="header-lenovo">
              <Navbar.Brand href="#home"></Navbar.Brand>
            </Col>
            <Col className="p-0 m-0 g-0 w-100" id="nav-hero">
              <Col className="px-0 py-2 m-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto d-flex">
                    <NavLink to="/products" className="navlink">
                      PRODUCTS
                    </NavLink>
                    <NavLink to="/deals" className="navlink">
                      DEALS
                    </NavLink>
                    <NavLink to="/solutions" className="navlink">
                      SOLUTIONS
                    </NavLink>
                    <NavLink to="/support" className="navlink">
                      SUPPORT
                    </NavLink>
                    <Form className="d-flex search align-self-center">
                      <FormControl
                        type="search"
                        placeholder="SEARCH"
                        aria-label="SEARCH"
                      />
                      <button className="search-button">
                        <img
                          type="image"
                          src="/img/search.png"
                          alt="Search"
                        ></img>
                      </button>
                    </Form>
                  </Nav>
                  <Row className="mx-1 w-100 d-flex">
                    <Col
                      xs={12}
                      className="d-flex text-right justify-content-end d-flex"
                    >
                      <div className="navigation-option  align-self-center">
                        Sales 1-855-253-6686
                      </div>
                      <a href="#chat">
                        <img src="/img/dialogue-bubble.png" alt="user" className="icons margin-right align-self-center" />
                      </a>
                      <a href="#stayintouch" className="navigation-option  align-self-center">
                        Stay in touch
                      </a>
                    </Col>
                    <Col
                      xs={12}
                      className="d-flex text-right justify-content-end"
                    >
                      <a href="#user">
                        <img src="/img/user.png" alt="user" className="icons" />
                      </a>
                      <a href="#cart">
                        <img src="/img/cart.png" alt="user" className="icons" />
                      </a>
                    </Col>
                  </Row>
                </Navbar.Collapse>
              </Col>
              <Col className="hero pb-2 d-flex">
                <span className="labor d-flex">
                  Labor Day Sale
                  <div className="show-hero-text align-self-center">
                    <span className="savings d-flex align-self-center">
                      Big savings on select products
                    </span>
                  </div>
                </span>
              </Col>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};
