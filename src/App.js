import React from 'react';
import HomePage from './pages/HomePage';
import Main from './pages/Main';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import { HashRouter, Link, Route, Router } from 'react-router-dom';

const App = () => {
  return (
    <section className="App">
      <Router>

        <Link to="/">HomePage</Link>  
        <Link to="/Main">Main</Link> 
        <Route exact path="/" Component ={HomePage}/>
        <Route exact path="/main" Component ={Main}/>

      </Router>
      
    </section>
  );
};

export default App;
