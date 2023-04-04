import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
//import SingleThought from './pages/SingleThought';
import Zodiacmain from './pages/Zodiacmain';
import NavBar from './componets/NavBar';
import Footer from './componets/Footer';
import './App.css';
import Aquarius from './pages/Aquarius';
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="NavBar">
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aquarius" element={<Aquarius />} />
              <Route path="/zodiacmain" element={<Zodiacmain />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
