import { Container, Navbar } from "react-bootstrap";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Lesson 5</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};
