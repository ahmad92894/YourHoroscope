import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBarUser = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const userString = localStorage.getItem("user");
    setUser(JSON.parse(userString));
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const isLoggedIn = user ? true : false;

  return (
    <div className="navbar-nav ml-auto">
      {isLoggedIn ? (
        <Link to="/" className="nav-item nav-link" onClick={logout}>
        </Link>
      ) : (
        <>
          <Link to="/login" className="nav-item nav-link">
          </Link>
          <span className="nav-item nav-link"></span>
          <Link to="/signup" className="nav-item nav-link">
          </Link>
        </>
      )}
    </div>
  );
};

export default NavBarUser;
