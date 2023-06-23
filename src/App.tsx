import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/global-styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
};

export default App;
