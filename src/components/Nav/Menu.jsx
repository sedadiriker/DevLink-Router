import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const handleLogout = () => {
    window.location.href = "/login"; 
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="fs-3 text-bg-secondary rounded-3 px-2 d-inline-block align-top">DevLink</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="d-flex gap-5 align-items-center">
            <NavLink to="/" className="text-decoration-none fs-4 text-white nav-link">Home</NavLink>
            <NavDropdown className="fs-4 text-white" title={<span style={{ color: 'white' }}>Profile</span>} id="basic-nav-dropdown">
              <NavDropdown.Item><NavLink to="/followers" className="text-decoration-none text-dark nav-link">Followers</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/following" className="text-decoration-none text-dark nav-link">Following</NavLink></NavDropdown.Item>
            </NavDropdown>
            <span role="button" onClick={handleLogout} className="text-decoration-none fs-4 text-white nav-link cursor-pointer">Logout</span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
