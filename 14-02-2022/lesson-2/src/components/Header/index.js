import {Link} from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {useState} from "react";
import {getChildrenAndRenderPropsLink, getProjectsLink, getHomeLink} from "../../navigation";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  return (<>
    <Button onClick={toggleDrawer(true)}>
      menu
    </Button>
    <Drawer
      anchor={'left'}
      open={isOpen}
      onClose={toggleDrawer( false)}
    >
      <List>
        <ListItem component={Link} to={getHomeLink()}>
          Home
        </ListItem>
        <ListItem component={Link} to={getProjectsLink()}>
          Projects
        </ListItem>
        <ListItem component={Link} to={getChildrenAndRenderPropsLink()}>
          ChildrenAndRenderPropsLink
        </ListItem>
      </List>
    </Drawer></>)
}
