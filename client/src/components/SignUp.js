import { useState } from "react";
//import { Navigate } from "react-router-dom";
import { useMutation } from "@apollo/client"
import { ADD_USER } from "../utils/mutations"
import Auth from "../utils/auth"

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [navigate, setNavigate] = useState(false);
  const [addUser, { error, data }] = useMutation(ADD_USER);
  
  const submit = async (e) => {
    e.preventDefault();
    console.log(username, email, password);
    try {
      const { data } = await addUser({
        variables: { username: username, email: email, password: password}
      })
      Auth.login(data.addUser.token)
    } catch (err) {
      console.log(err);
    };
  

    //setNavigate(true);
  };

  //if (navigate) {
    //return <Navigate to="/" />;
//}
  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

        <div className="form-floating">
          <input
            type="text"
            name="username"
            value={username}
            className="form-control"
            id="floatingInput"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label for="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            name="email"
            value={email}
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            name="password"
            value={password}
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign Up
        </button>
      </form>
    </main>
  );
};
