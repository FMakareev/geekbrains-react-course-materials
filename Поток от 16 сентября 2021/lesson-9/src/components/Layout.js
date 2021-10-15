import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { navigation, navAuth } from "../exercises";
import { auth } from "../firebase";

export const Layout = ({ children }) => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Lesson 9. Firebase</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {[...navigation, ...navAuth].map(
                                ({ title, path }) => (
                                    <Nav.Link as={Link} to={path}>
                                        {title}
                                    </Nav.Link>
                                )
                            )}
                            <Button
                                onClick={() => {
                                    auth.signOut();
                                }}
                            >
                                Logout
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>{children}</Container>
        </>
    );
};
