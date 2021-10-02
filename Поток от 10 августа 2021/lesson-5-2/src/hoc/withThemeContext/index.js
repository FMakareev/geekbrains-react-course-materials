import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";


export const WithThemeContext = (Component) => {
  return (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {isDark, toggleTheme} = useContext(ThemeContext);

    return <Component isDark={isDark} toggleTheme={toggleTheme} {...props} />
  }
}