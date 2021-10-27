import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from "@material-ui/core";
import {makeStyles} from '@material-ui/styles'
import {Header} from "../Header";

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});


export const Layout = ({children}) => {

  return <ThemeProvider theme={theme}>
    <Box sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
      <CssBaseline />
      <Header/>
      <main>
        {children}
      </main>
    </Box>
  </ThemeProvider>
};
