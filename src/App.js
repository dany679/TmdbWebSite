import React from 'react';
//components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
//style
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className='App'>
      <Header />
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
