import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { NavDropdown } from "react-bootstrap";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const navItems = [
    { label: "Home", type: "link" },
    { label: "Features", type: "link" },
    {
      label: "Community",
      type: "dropdown",
      items: [
        "Members",
        "Members Details",
        "Stories",
        "Groups",
        "Active Groups",
        "Login",
        "Sign Up"
      ]
    },
    { label: "Blog", type: "link" },
    { label: "Pages", type: "link" },
    { label: "Contact", type: "link" }
  ];


  const rightNavItems = [
    { label: "Sign in", type: "link" },
    { label: "Help", type: "link" },
    { label: "Register", type: "button" }
  ];

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavClick = (linkName) => {
    setExpanded(false);
    if (linkName) {
      setActiveLink(linkName);
    }
  };

  const renderNavItem = (item, index) => {
    if (item.type === "dropdown") {
      return (
        <div key={index} className="nav-dropdown-container">
          <span className={`fw-normal fw-semibold ${activeLink === item.label ? 'navLink' : 'textColor'}`}>
            {item.label}
          </span>
          <div className="custom-dropdown show">
            {item.items.map((dropdownItem, dropdownIndex) => (
              <NavDropdown.Item
                key={dropdownIndex}
                className="textColor fs-6 fw-semibold"
                onClick={() => handleNavClick(dropdownItem)}
              >
                {dropdownItem}
              </NavDropdown.Item>
            ))}
          </div>
        </div>
      );
    }

    return (
      <Nav.Link
        key={index}
        className={`fw-normal fw-semibold ${activeLink === item.label ? 'navLink' : 'textColor'}`}
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
          <Button className="fw-normal" onClick={() => handleNavClick(item.label)}>
            {item.label}
          </Button>
        </Nav.Item>
      );
    }

    return (
      <Nav.Link
        key={index}
        className={`fw-normal text-nowrap fw-semibold ${activeLink === item.label ? 'navLink' : 'textColor'}`}
        onClick={() => handleNavClick(item.label)}
      >
        {item.label}
      </Nav.Link>
    );
  };

  return (
    <Navbar expand="lg" expanded={expanded} className="px-5 py-2 secondaryColor">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <button
          className="navbar-toggler d-lg-none d-flex align-items-center justify-content-center border-0"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarScroll"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          {expanded ? (
            <HiX size={30} className="primaryColor" />
          ) : (
            <HiMenu size={30} className="primaryColor" />
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