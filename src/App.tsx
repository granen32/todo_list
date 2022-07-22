import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from "./styles/theme";
import TodoList from './pages/TodoList';

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}> 
      <GlobalStyle />
      <TodoList/>
    </ThemeProvider>
    </>
  );
}

export default App;
