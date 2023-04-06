import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBarUser = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    // The setInterval function is not necessary here and can cause the component
    // to re-render unnecessarily. Use the useState hook instead to update the user state.
    const userString = localStorage.getItem("user");
    setUser(JSON.parse(userString));
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="navbar-nav ml-auto">
      {/* Use a ternary operator to check whether the user is logged in or not */}
      {user ? (
        <>
          <Link to="/" className="nav-item nav-link" onClick={logout}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" className="nav-item nav-link">
            Login
          </Link>
          <span className="nav-item nav-link">|</span>
          <Link to="/signup" className="nav-item nav-link">
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
};

export default NavBarUser;
