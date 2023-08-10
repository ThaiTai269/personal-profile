import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.svg";
import linked from "../assets/img/nav-icon1.svg";
import facebook from "../assets/img/nav-icon2.svg";
import ins from "../assets/img/nav-icon3.svg";
import gitHub from "../assets/img/icons8-github.svg";
import { NavLink } from "react-bootstrap";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState("false");
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="#"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/t%C3%A0i-%C4%91inh-21919927b/",
                    "_blank"
                  )
                }
              >
                <img src={linked} alt="" />
              </a>
              {/* <a
                href="#"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/tai.dinhthai/",
                    "_blank"
                  )
                }
              >
                <img src={facebook} alt="" />
              </a>
              <a href="#">
                <img src={ins} alt="" />
              </a>
              <a href="#">
                <img src={gitHub} alt="" />
              </a> */}
            </div>
            <Nav>
              <NavLink href="#connect">
                <button
                  className="vvd"
                  onClick={() => {
                    console.log("connect");
                  }}
                >
                  <span>Let's Connect</span>
                </button>
              </NavLink>
            </Nav>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
