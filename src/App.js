import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
//components
import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login/Login';
import Movie from './components/Pages/Movie';
import NotFound from './components/Pages/NotFound/NotFound';
//context
import AuthProvider, { AuthContext } from './AuthProvider';
//style
import { GlobalStyle } from './GlobalStyle';
const Main = () => {
  const [user] = useContext(AuthContext);
  return <>{user ? <UserProfile /> : <Login />}</>;
};
const UserProfile = () => {
  const [user, setUser] = useContext(AuthContext);
  return (
    <>
      <p>ola{user}</p>
      <button onClick={() => setUser(false)}> sair</button>
    </>
  );
};

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            {/* <Main /> */}
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/:movieId' element={<Movie />} />
          </Routes>
        </AuthProvider>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
