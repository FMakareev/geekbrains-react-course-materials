import { createContext, useMemo, useContext, useState } from 'react';
import {Button, createTheme, IconButton, ThemeProvider, useTheme} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {RefExample} from "./examples/RefExample";
import {StylesExample} from "./examples/StylesExample";

const ColorModeContext = createContext({
  toggleColorMode: () => {},
})

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: '#ff00c2',
        },
      }
      : {
        primary: {
          main: '#00ffdb',
        },
      }),
  },
});

const ToggleTheme = () => {
  const theme = useTheme();

  const colorMode = useContext(ColorModeContext);

  return <div>
    mode: {theme.palette.mode} <br/>
    <IconButton onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === 'dark' && <Brightness7Icon/>}
      {theme.palette.mode === 'light' && <Brightness4Icon/>}
    </IconButton>
  </div>
}

function App() {
  const [list, setList] = useState([]);
  const [mode, setMode] = useState('light')

  const colorMode = useMemo(() => {
    return {
      toggleColorMode: () => {
        setMode((prevMode) => {
          return prevMode === 'light' ? 'dark': 'light';
        })
      }
    }
  }, [])

  const theme = useMemo(() => createTheme(getDesignTokens(mode)),[mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <div className="App">
        <ToggleTheme/>
        <StylesExample />
        <br/>
        <br/>
        <Button onClick={() => {
          setList([...list, Date.now()])
        }}>
          add
        </Button>
        <RefExample list={list}/>
      </div>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
