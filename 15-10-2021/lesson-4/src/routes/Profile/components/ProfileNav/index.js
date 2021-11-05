import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const navigation = [
  {
    to: "/profile",
    title: "Info"
  },
  {
    to: "/profile/favorites",
    title: "Favorites"
  },
  {
    to: "/profile/help",
    title: "Help"
  }
];

export const ProfileNav = () => {
  const activeKey = "/profile";
  return (
    <Nav className="justify-content-center" activeKey={activeKey}>
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
