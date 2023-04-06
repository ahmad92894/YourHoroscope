import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Auth from "../../src/utils/auth";
import logo from '../img/logo.png';
import NavBarUser from "../../src/components/NavBarUser"

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
             <img src={logo} alt="logo"
              width="150"
              height="100" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li>
                <Link to="/zodiac" className="nav-item">
                  <a className="nav-link" href="#">
                    Zodiac
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/signup" className="nav-item">
                  <a className="nav-link" href="#">
                    Sign Up
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/forum" className="nav-item">
                  <a className="nav-link" href="#">
                    Forum
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </li>
          <ul/>
          </ul>
    </div>
    </div>
    <ul/>
    </nav>
  </div>
  )}

export default NavBar;
