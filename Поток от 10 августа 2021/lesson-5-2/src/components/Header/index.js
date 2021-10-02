import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {FormControlLabel, Switch} from "@material-ui/core";
import {ThemeContext} from "../../context/ThemeContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const {isDark, toggleTheme} =useContext(ThemeContext);
  const classes = useStyles();
  return (
    <AppBar  color="inherit" position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          lesson 5
        </Typography>
        <Button component={NavLink} to="/" color="inherit">home</Button>
        <Button component={NavLink} to="/todo" color="inherit">todo list</Button>
        <Button component={NavLink} to="/feedback" color="inherit">feedback</Button>
        <FormControlLabel
          control={
            <Switch
              checked={isDark}
              onChange={toggleTheme}
              name="checkedB"
              color="primary"
            />
          }
          label="dark"
        />
      </Toolbar>
    </AppBar>
  );
};