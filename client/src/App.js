import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './componets/NavBar';
import Footer from './componets/Footer';
import './App.css';
 import Aquarius from './pages/Aquarius';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>,

    <div1>
      <NavBar />
      <Aquarius />
      <Footer/>
   
    
    </div1>
  );
}

export default App;
