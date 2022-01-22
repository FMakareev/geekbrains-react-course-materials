import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


export const ProfileNav = ({navigation}) => {
  return (
    <Nav className="justify-content-center" >
      {navigation.map(({ title, to }, index) => (
        <Nav.Item key={index}>
          <Nav.Link as={Link} to={to}>
            {title}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};
