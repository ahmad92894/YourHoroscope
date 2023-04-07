// import { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../utils/mutations";
// import Auth from "../utils/auth";

// export const Login = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginUser, { error, data }] = useMutation(LOGIN_USER);

//   const submit = async (e) => {
//     e.preventDefault();

//     try {
//       const mutationResponse = await loginUser({
//         variables: { username: username, email: email, password: password }
//       })
//       const token = mutationResponse.data.login.token;
//       Auth.login(token)
//     } catch (err) {
//       console.log(err);
//     };

//     //setNavigate(true);
//   };

//   //if (navigate) {
//     //return <Navigate to="/login" />;
//   //}

//   return (
//     <main className="form-signin w-100 m-auto">
//       <form onSubmit={submit}>
//         <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

//         <div className="form-floating">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Username"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <label>Username</label>
//         </div>
//         <div className="form-floating">
//           <input
//             type="email"
//             className="form-control"
//             id="floatingInput"
//             placeholder="name@example.com"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label for="floatingInput">Email address</label>
//         </div>
//         <div className="form-floating">
//           <input
//             type="password"
//             className="form-control"
//             id="floatingPassword"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <label for="floatingPassword">Password</label>
//         </div>

//         <button className="w-100 btn btn-lg btn-primary" type="submit">
//           Submit
//         </button>
//       </form>
//     </main>
//   );
// };


import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);
  const [loginError, setLoginError] = useState(null); // 1.

  const submit = async (e) => {
    e.preventDefault();

    try {
      const mutationResponse = await loginUser({
        variables: { username: username, email: email, password: password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
      setLoginError(err.message); // 2.
    }

    //setNavigate(true);
  };

  //if (navigate) {
  //return <Navigate to="/login" />;
  //}

  return (
    <main className="form-signin w-100 m-auto">
      {loginError && ( // 3.
        <div className="alert alert-danger">{loginError}</div>
      )}
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
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
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};
