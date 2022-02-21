import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material';

import App from './App';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ff00c2',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#e80707',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
