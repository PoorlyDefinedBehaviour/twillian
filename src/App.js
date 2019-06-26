import React from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import theme from './themes';

import GlobalStyle from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Routes />
      </>
    </ThemeProvider>
  );
}

export default App;
