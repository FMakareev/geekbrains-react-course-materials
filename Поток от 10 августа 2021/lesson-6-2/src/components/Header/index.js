import React from 'react';
import {NavLink} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';



export const Header = () => {
  return (
    <AppBar  color="inherit" position="static">
      <Toolbar>
        <Button component={NavLink} to="/" color="inherit">home</Button>
      </Toolbar>
    </AppBar>
  );
};