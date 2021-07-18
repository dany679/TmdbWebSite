import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
//components
import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import Movie from './components/Pages/Movie';
import NotFound from './components/Pages/NotFound';

//style
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/:movieId' element={<Movie />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
