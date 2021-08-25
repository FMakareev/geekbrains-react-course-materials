import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import {createTheme, ThemeProvider} from "@material-ui/core";
import {Layout} from "./components/Layout";
import {Header} from "./components/Header";
import {useMemo, useState} from "react";
import {Home} from "./pages/Home/Home";
import {Todo} from "./pages/Todo";
import {Feedback} from "./pages/Feedback";
import {ThemeContext} from "./context/ThemeContext";
import {store} from "./store";




function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((isDark) => !isDark)
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: isDark ? 'dark' : 'light',
        },
      }),
    [isDark],
  );

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ThemeContext.Provider
            value={{
              isDark,
              toggleTheme
            }}
          >
            <Layout>
              <Header/>
              <Switch>
                <Route path="/feedback" component={Feedback}/>
                <Route path="/todo" component={Todo}/>
                <Route path="/" component={Home}/>
              </Switch>
            </Layout>
          </ThemeContext.Provider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
