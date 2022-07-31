import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from "./styles/theme";
import TodoList from './pages/TodoList';
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}> 
        <GlobalStyle />
        <TodoList/>
      </ThemeProvider>
    </RecoilRoot>
    </>
  );
}

export default App;
