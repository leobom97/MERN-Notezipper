import React from "react";
import { Nav, Navbar, NavDropdown, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      bg="primary"
      expand="lg"
      className="bg-body-tertiary"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">Note Zipper</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Navbar.Brand>
              <Link to="/mynotes">Meus Lembretes</Link>
            </Navbar.Brand>
            <NavDropdown
              title="Leonardo Rodrigues"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Meu perfil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
