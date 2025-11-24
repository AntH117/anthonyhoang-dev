import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
  };

export const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)
    
    const toggleTheme = () => {
        setDarkMode((theme) => !theme)
    }

    return (
        <ThemeContext.Provider value={{toggleTheme, darkMode }}>
          {children}
        </ThemeContext.Provider>
      )
}