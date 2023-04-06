import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
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

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// function Button() {
//   const [isLoggedIn, setIsLoggedIn] = useState(null);
//   const LogIn = () => {
//     setIsLoggedIn(true);
//   };
//   const LogOut = () => {
//     setIsLoggedIn(false);
//   };
//   return (
    //<BrowserRouter>
     // {/* <NavBar />
      // {isLoggedIn ? (
      //   <button onClick={LogOut}>Logout</button>
      // ) : (
      //   <button onClick={LogIn}>Login</button>
      // )}
      // <Routes>{/* Add routes here *///}</Routes>
      // <div>
      //        
      //   <Navbar />
      //        
      //   {isLoggedIn ? (
      //     <button onClick={logOut}>Logout</button>
      //   ) : (
      //     <button onClick={logIn}>Login</button>
      //   )} */}
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route
    //         path="/profile"
    //         element={
    //           <Protected isLoggedIn={isLoggedIn}>
    //             <Profile />
    //           </Protected>
    //         }
    //       />
    //       <Route path="/about" element={<About />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  //);
//}

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="bg-dark color-white">
          <div className="NavBar">
            <NavBar />
            <div className="container">
              <Routes>
                <Route exact path="/login" component={Login} />
                <ProtectedRoute path="/" component={Zodiacmain}>
                  <Zodiacmain />
                </ProtectedRoute>
                <Route path="/" element={<Home />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/signup" element={<SignUp />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/zodiacmain" element={<Zodiacmain />} />
                <Route path="/:zodiacsign" element={<ZodiacSign />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

