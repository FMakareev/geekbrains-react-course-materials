import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {navigation} from "../../navigation";

const navMenu = [
  {
    path: navigation.home,
    // path: '/',
    title: 'Home',
  },  {
    // path: '/profile',
    path: navigation.profile,
    title: 'profile',
  },  {
    // path: '/posts',
    path: navigation.posts,
    title: 'posts',
  },
];


export const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Lesson 4</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/posts">
                Posts
              </Link>
              {navMenu?.map(({ title, path }) => (
                <Link to={path}>{title}</Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};
