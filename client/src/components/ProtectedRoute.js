import React, { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn, ...rest }) => {
  const navigate = useNavigate();

  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");
    if (!userToken || userToken === "undefined") {
      navigate("/auth/login");
    }
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn, navigate]);

  const ErrorMessage = () => {
    const [errorMessage, setErrorMessage] = React.useState("");
    const handleClick = () => {
      setErrorMessage("Example error message!");
    };
    return (
      <div className="App">
        <button onClick={handleClick}>Show error message</button>
        {errorMessage && <div className="error"> {errorMessage} </div>}
      </div>
    );
  };

  if (isLoggedIn) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return null;
  }
};

export default ProtectedRoute;

