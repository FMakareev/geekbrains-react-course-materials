import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { navigation } from "../exercises";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Lesson 8</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navigation.map(({ title, path }) => (
                <Nav.Link as={Link} to={path}>
                  {title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};
