import { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { LoginModal } from "./LoginModal";

const useClasses = makeStyles({
  title: {
    flexGrow: 1
  }
});

export const Header = ({ children }) => {
  const classes = useClasses();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            Album
          </Typography>

          <Button
            color="inherit"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <LoginModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
