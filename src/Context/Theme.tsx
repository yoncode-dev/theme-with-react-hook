import React, { createContext, useContext, useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import light from '../styles/theme/light';
import dark from '../styles/theme/dark';

interface ThemeContextState {
  changeTheme(): void;
}

const ThemeContext = createContext<ThemeContextState>({} as ThemeContextState);

const MyThemeProvider: React.FC = ({ children }) => {
  const themedarkstorage = localStorage.getItem('themedark');
  const [darkmode, setDarkmode] = useState(themedarkstorage !== 'nao');
  const changeTheme = useCallback(() => {
    setDarkmode(!darkmode);
    const dark = !darkmode ? 'sim' : 'nao';
    localStorage.setItem('themedark', dark);
  }, [darkmode]);

  return (
    <ThemeProvider theme={!darkmode ? light : dark}>
      <ThemeContext.Provider value={{ changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

function useTheme(): ThemeContextState {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useAuth não está definido no bloco do app');
  }

  return context;
}

export { useTheme, MyThemeProvider };
