import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import Profile from "./pages/Profile";
import Zodiacmain from "./pages/Zodiacmain";
import ZodiacSign from "./pages/ZodiacSign";
// import ThoughtForm from "./components/ThoughtForm";
// import ThoughtList from "./components/ThoughtList";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="bg-dark color-white">
          <div className="NavBar">
            <NavBar />
            <div className="container">
              <Routes>
                <Route path="/forum" element={<Forum />} />
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/zodiacmain" element={<Zodiacmain />} />
                

             
              <Route path="/:zodiacsign" element={<ZodiacSign />} />
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
