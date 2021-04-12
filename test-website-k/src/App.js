import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

function App() {
  return (
    <Router>
      <Header />
      <Main /> 
      <Footer />
    </Router>
  );
}

export default App;
