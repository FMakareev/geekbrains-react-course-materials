import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material';

import App from './App';

/**
 * 0. сделать лейаут в две колонки
 * 1. добавить список проектов
 * 2. добавить открытие списка задач по выбранному проекту
 * 3. добавить ссылку на конкретную задачу и отображать ее в модальном окне
 * */

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
