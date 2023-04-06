import React from "react";
// import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { Navigate } from "react-router-dom";

function Home() {
  if (Auth.loggedIn()) {
    return <Navigate to="/zodiac" />;
  }
  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
    </>
  );
}

export default Home;
