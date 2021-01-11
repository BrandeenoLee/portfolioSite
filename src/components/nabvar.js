import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Resume from "../assets/Resume.pdf";

export default function PortfolioNav() {
  const pathName = window.location.pathname;
  const getClassName = (page) => {
    return pathName === page ? "active" : "";
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Brandon Adcock's Portfolio</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Item style={{ width: "100px" }} className={getClassName("/")}>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item
          style={{ width: "100px" }}
          className={getClassName("/projects")}
        >
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item
          style={{ width: "100px" }}
          className={getClassName("/contact")}
        >
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ width: "100px" }}>
          <Nav.Link href={Resume} rel="noreferrer" target="_blank">
            Resume
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}