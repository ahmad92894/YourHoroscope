import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import { Login } from "./components/Login";
import {SignUp} from "./components/SignUp";
import Profile from "./pages/Profile";
import Zodiacmain from "./pages/Zodiacmain";

import Aquarius from "./pages/Aquarius";
import Aries from "./pages/Aries";
import Cancer from "./pages/Cancer";
import Capricorn from "./pages/Capricorn";
import Gemini from "./pages/Gemini";
import Leo from "./pages/Leo";
import Libra from "./pages/Libra";
import Pisces from "./pages/Pisces";
import Sagittarius from "./pages/Sagittarius";
import Scorpio from "./pages/Scorpio";
import Taurus from "./pages/Taurus";
import Virgo from "./pages/Virgo";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='bg-dark color-white'>
  
        <div className="NavBar">
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/forum" element={<Forum />} />
              <Route path="/" element={<Home />} />
              {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/zodiacmain" element={<Zodiacmain />} />

              <Route path="/aquarius" element={<Aquarius />} />
              <Route path="/aries" element={<Aries />} />
              <Route path="/cancer" element={<Cancer />} />
              <Route path="/capricorn" element={<Capricorn />} />
              <Route path="/gemini" element={<Gemini />} />
              <Route path="/Leo" element={<Leo />} />
              <Route path="/libra" element={<Libra />} />
              <Route path="/pisces" element={<Pisces />} />
              <Route path="/sagittarius" element={<Sagittarius />} />
              <Route path="/scorpio" element={<Scorpio />} />
              <Route path="/taurus" element={<Taurus />} />
              <Route path="/virgo" element={<Virgo />} />
            </Routes>
          </div>
          <Footer />
        </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
