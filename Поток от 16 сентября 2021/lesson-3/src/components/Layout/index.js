import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";
import {Header} from "../Header";

const theme = createTheme();

export const Layout = ({children}) => {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header/>
    <main>
      {children}
    </main>
  </ThemeProvider>
};
