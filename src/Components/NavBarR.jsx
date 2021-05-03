import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBarR() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="news" as={NavLink} activeClassName="active">
            News
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
