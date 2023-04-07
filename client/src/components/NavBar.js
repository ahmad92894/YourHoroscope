// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Auth from "../../src/utils/auth";
// import logo from '../img/logo.png';
// import NavBarUser from "../../src/components/NavBarUser"

// const NavBar = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//              <img src={logo} alt="logo"
//               width="150"
//               height="100" />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavDropdown"
//             aria-controls="navbarNavDropdown"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavDropdown">
//             <ul className="navbar-nav">
//               <li>
//                 <Link to="/zodiac" className="nav-item">
//                   <a className="nav-link" href="#">
//                     Zodiac
//                   </a>
//                 </Link>
//               </li>
//                 <Link to="/forum" className="nav-item">
//                   <a className="nav-link" href="#">
//                     Forum
//                   </a>
//                 </Link>
//               <li>
//                 <Link to="/login" className="nav-item">
//                   <a className="nav-link" href="#">
//                     Login
//                   </a>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/signup" className="nav-item">
//                   <a className="nav-link" href="#">
//                     Sign Up
//                   </a>
//                 </Link>
//               </li>
//               <li>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/" onClick={() => Auth.logout()}>
//                   Logout
//                 </a>
//               </li>
//           <ul/>
//           </ul>
//     </div>
//     </div>
//     <ul/>
//     </nav>
//   </div>
//   )}

// export default NavBar;


import React from "react";
import { Routes, Route, Link } from "react-router-dom";
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
                <strong>Zodiac</strong> 
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/forum" className="nav-link">
                <strong>Forum</strong>
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
                    <strong>Logout</strong>
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

