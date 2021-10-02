import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import {getPostsPath} from "../../navigation";


const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: 'center',
    overflowX: 'auto',
    backgroundColor: 'rgb(10, 25, 41)',
    borderStyle: 'solid',
    borderColor: 'rgb(19, 47, 76)',
    borderWidth: '0px 0px thin',
  },
  toolbarLink: {
    padding: theme.spacing(2),
    flexShrink: 0,
    color: '#fff',
    cursor: 'pointer'
  },
}));

export const Header = (props) => {
  const classes = useStyles();

  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      <Link
        component={RouterLink}
        color="inherit"
        noWrap
        key=""
        variant="body2"
        to="/"
        className={classes.toolbarLink}
      >
        home
      </Link>
      <Link
        component={RouterLink}
        color="inherit"
        noWrap
        key=""
        variant="body2"
        to="/profile"
        className={classes.toolbarLink}
      >
        profile
      </Link>
      <Link
        component={RouterLink}
        color="inherit"
        noWrap
        key=""
        variant="body2"
        to={getPostsPath()}
        className={classes.toolbarLink}
      >
        posts
      </Link>
      <Link
        component={RouterLink}
        color="inherit"
        noWrap
        key=""
        variant="body2"
        to="/render-prop"
        className={classes.toolbarLink}
      >
        render-prop
      </Link>
    </Toolbar>
  );
}
