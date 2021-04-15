import './App.css';
import React from 'react';
import { HashRouter as Router} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

function App() {
  return (
    <Router basename="/">
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
