
import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../src/utils/auth";
import logo from "../img/logo.png";
import NavBarUser from "../../src/components/NavBarUser";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" width="150" height="100" />
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/zodiac" className="nav-link">
                <strong style={{ fontSize:20 }}>Zodiac</strong> 
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/forum" className="nav-link">
                <strong style={{ fontSize:20 }}>Forum</strong> 
                </Link>
              </li>
            </ul>
            <NavBarUser />
            <ul className="navbar-nav ml-auto">
              {Auth.loggedIn() ? (
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link"
                    onClick={() => Auth.logout()}
                  >
                    <strong style={{ fontSize:20 }}>Logout</strong>
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                    <strong>Login</strong>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                      <strong>Sign Up</strong>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

