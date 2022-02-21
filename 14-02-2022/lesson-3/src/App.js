import { useState } from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import {RefExample} from "./examples/RefExample";
import {StylesExample} from "./examples/StylesExample";

const theme = createTheme();

function App() {
  const [list, setList] = useState([]);


  return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <StylesExample />
        <br/>
        <br/>

        <RefExample list={list}/>
      </div>

      </ThemeProvider>
  );
}

export default App;
