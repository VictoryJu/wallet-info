import React from 'react';
import Main from './pages/Main';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/global-styles';
import Header from './components/Layout/Header';
import { ethers } from 'ethers';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header/>
      <Main />
    </ThemeProvider>
  );
};

export default App;
