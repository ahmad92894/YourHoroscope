import React from "react";
// import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { Navigate } from "react-router-dom";
import Homeimg from "../img/homeimg.png";

function Home() {
  if (Auth.loggedIn()) {
    return <Navigate to="/zodiac" />;
  }
  return (
    <>
      <div>
        <h1> <strong>Welcome to YourHoroscope!</strong> </h1>
        <img src={Homeimg} alt="homeimg"
              width="1500"
              height="750" />
      </div>
    </>
  );
}

export default Home;
