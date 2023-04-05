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
          <li><Link to="/" className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Profile</a></Link>
          </li>
          <li><Link to="/Login" className="nav-item">
            <a className="nav-link" href="#">Login</a></Link>
          </li>
          <li><Link to="/Sign up" className="nav-item">
            <a className="nav-link" href="#">Sign Up</a></Link>
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

