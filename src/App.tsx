import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from "./styles/theme";

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}> 
      <GlobalStyle />
    </ThemeProvider>
    </>
  );
}

export default App;
