import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">YourHoroscope</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li><Link to="/zodiacmain" className="nav-item">
             Profile</Link>
          </li>
          <li><Link to="/login" className="nav-item">
            Login</Link>
          </li>
          <li><Link to="/signup" className="nav-item">
           Sign Up</Link>
          </li>
          <ul/>
          </ul>
    </div>
    </div>
    <ul/>
    </nav>
  </div>
  )}





export default NavBar

