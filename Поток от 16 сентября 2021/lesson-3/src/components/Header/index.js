import React, {useState} from 'react';
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import {Login} from "../Login";


export const Header = (props) => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  return <>
    <AppBar position="relative">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6" color="inherit" noWrap>
          Album
        </Typography>

        <Button onClick={() => setIsOpenLogin(true)} color="inherit">Login</Button>

      </Toolbar>
    </AppBar>
    <Login open={isOpenLogin} handleSubmit={() => {}} onClose={() => setIsOpenLogin(false)}/>
  </>
};
