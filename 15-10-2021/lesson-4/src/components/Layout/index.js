import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const navigation = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/profile",
    title: "Profile"
  },
  {
    path: "/posts",
    title: "Posts"
  }
];

const Table = {
  Table: (props) => <table {...props} />
};

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Lesson 4</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navigation.map(({ title, path }) => (
                <Link to={path}>{title}</Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Table.Table />
      <Container>{children}</Container>
    </>
  );
};
