import React, { useState, useEffect, useRef } from "react";
import { createTheme, ThemeProvider, Switch } from "@material-ui/core";
import { Layout } from "./components/Layout";
import { AlbumList } from "./components/AlbumList";
import { createAlbumItem } from "./mocks";

const list = Array.from({
  length: 10
}).map(createAlbumItem);

export const Material = () => {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState();

  const renderCount = useRef(0);

  renderCount.current += 1;

  const changeThemeType = () => {
    if (isDark) {
      const theme = createTheme({
        palette: {
          type: "light"
        }
      });
      setTheme(theme);
    } else {
      const theme = createTheme({
        palette: {
          type: "dark"
        }
      });
      setTheme(theme);
    }
    setIsDark(!isDark);
  };

  useEffect(() => {
    const theme = createTheme({
      palette: {
        type: "light"
      }
    });
    setTheme(theme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        renderCount.current: {renderCount.current}
        <Switch
          checked={isDark}
          onChange={changeThemeType}
          name="change theme"
        />
        <AlbumList />
      </Layout>
    </ThemeProvider>
  );
};
