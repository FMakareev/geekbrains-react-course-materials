import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

/**
 * @desc о том как стилизовать компоненты react-router с помощью material-ui
 * @link https://material-ui.com/ru/guides/composition/#link
 * */
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
        to="/posts"
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
