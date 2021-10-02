import React from 'react';
import {FormControlLabel, Switch} from "@material-ui/core";
import {WithThemeContext} from "../../hoc/withThemeContext";



export const HomeRender = (props) => {
  console.log(props);
  const {isDark, toggleTheme} = props;
  return (
    <div>
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
    </div>
  );
};

export const Home = WithThemeContext(HomeRender);