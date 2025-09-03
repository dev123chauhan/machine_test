import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.png";
import { navItems, rightNavItems } from "../../data";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const current =
      navItems.find((item) => item.path === location.pathname) || null;
    if (current) setActiveLink(current.label);
  }, [location.pathname]);

  const handleNavClick = (linkName) => {
    setExpanded(false);
    if (linkName) setActiveLink(linkName);
  };

  const renderNavItem = (item, index) => {
    if (item.type === "dropdown") {
      return (
        <div key={index} className="nav-dropdown-container">
          <span
            className={`fw-normal fw-semibold ${
              activeLink === item.label ? "navLink" : "textColor"
            }`}
          >
            {item.label}
          </span>
          {isHomePage && (
            <div className="custom-dropdown show">
              {item.items.map((dropdownItem, dropdownIndex) => (
                <NavDropdown.Item
                  key={dropdownIndex}
                  as={Link}
                  to={dropdownItem.path}
                  className="textColor fs-6 fw-semibold"
                  onClick={() => handleNavClick(dropdownItem.label)}
                >
                  {dropdownItem.label}
                </NavDropdown.Item>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Nav.Link
        key={index}
        as={Link}
        to={item.path}
        className={`fw-normal fw-semibold ${
          activeLink === item.label ? "navLink" : "textColor"
        }`}
        onClick={() => handleNavClick(item.label)}
      >
        {item.label}
      </Nav.Link>
    );
  };

  const renderRightNavItem = (item, index) => {
    if (item.type === "button") {
      return (
        <Nav.Item key={index}>
          <Button
            as={Link}
            to={item.path}
            className="fw-normal"
            onClick={() => handleNavClick(item.label)}
          >
            {item.label}
          </Button>
        </Nav.Item>
      );
    }

    return (
      <Nav.Link
        key={index}
        as={Link}
        to={item.path}
        className={`fw-normal text-nowrap fw-semibold  ${
          activeLink === item.label ? "navLink" : "textColor"
        }`}
        onClick={() => handleNavClick(item.label)}
      >
        {item.label}
      </Nav.Link>
    );
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="px-5 py-2 secondaryColor"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img className="imgLogo" src={logo} alt="Logo" />
        </Navbar.Brand>

        <button
          className="navbar-toggler d-lg-none d-flex align-items-center justify-content-center border-0"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarScroll"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          {expanded ? (
            <TfiClose size={30} className="primaryColor" />
          ) : (
            <CiMenuFries size={30} className="primaryColor" />
          )}
        </button>

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {navItems.map(renderNavItem)}
          </Nav>

          <Nav className="d-flex gap-0">
            {rightNavItems.map(renderRightNavItem)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
