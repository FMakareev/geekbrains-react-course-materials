import { createContext, useMemo, useContext, useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {StyleExamples} from "./components/StyleExamples";
import {Button, createTheme, IconButton, ThemeProvider, useTheme} from "@mui/material";
import {RefExample} from "./components/RefExample";

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


const  ThemeToggle = () => {
  const theme = useTheme();

  const colorMode = useContext(ColorModeContext);

  return <div>
   mode: {theme.palette.mode}
    <IconButton onClick={colorMode.toggleColorMode} color='inherit' >
      {theme.palette.mode === 'dark' && <Brightness7Icon/>}
      {theme.palette.mode === 'light' && <Brightness4Icon/>}
    </IconButton>
  </div>
}

function App() {
  const [list, setList] = useState([]);
  const [mode, setMode] =useState('light')

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light')
    }
  }), [])

  const theme = useMemo(() => createTheme(getDesignTokens(mode)),[mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <Button onClick={() => {
              setList([...list, Date.now()])
            }}>
              add
            </Button>
            <RefExample list={list}/>
            <ThemeToggle/>
            <StyleExamples/>
          </header>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
