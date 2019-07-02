import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles';
import theme from './themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
