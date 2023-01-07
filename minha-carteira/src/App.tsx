import React from 'react';
import { ThemeProvider } from 'styled-components'; // falar qual é o tema que está selecionado no momento
import GlobalStyles from './styles/GlobalStyles';

import Layout from './components/Layout';

import dark from './styles/themes/dark'; // theme

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
    </ ThemeProvider>
  );
}

export default App;