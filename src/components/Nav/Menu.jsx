import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./Menu.css"
const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="fs-3 text-bg-secondary rounded-3 px-2 d-inline-block align-top" href="#home">DevLink</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="d-flex gap-5 align-items-center">
            <NavLink to="/" className="text-decoration-none fs-4 text-dark nav-link">Home</NavLink>
            <NavLink to="/about" className="text-decoration-none fs-4 text-dark nav-link">About</NavLink>
            <NavDropdown className="fs-4 text-dark" title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item><NavLink to="/followers" className="text-decoration-none text-dark nav-link">Followers</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/following" className="text-decoration-none text-dark nav-link">Following</NavLink></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
