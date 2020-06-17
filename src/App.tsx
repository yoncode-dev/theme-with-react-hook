import React from 'react';

import { MyThemeProvider } from './Context/Theme';
import GlobalStyles from './styles/globalStyles';

import Dashboard from './page/Dashboard';

function App() {
  return (
    <MyThemeProvider>
      <Dashboard />
      <GlobalStyles />
    </MyThemeProvider>
  );
}

export default App;
