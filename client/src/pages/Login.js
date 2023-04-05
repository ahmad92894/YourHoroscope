// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import React from "react";
import './Login.css';
//import {Login} from "./components/Login.js";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {SignUp} from "./components/SignUp.js";

function Login() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );  
  
}

export default Login;
//export default BasicExample;

// < !doctype html > <html lang="en"><head><meta charset="utf-8" /><link rel="icon" href="/favicon.ico" /><meta name="viewport" content="width=device-width,initial-scale=1" /><meta name="theme-color" content="#000000" /><meta name="description" content="Web site created using create-react-app" /><link rel="apple-touch-icon" href="/logo192.png" /><link rel="manifest" href="/manifest.json" /><title>React App</title><script defer="defer" src="/static/js/main.b5ba5e33.js"></script><link href="/static/css/main.073c9b0a.css" rel="stylesheet"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html>

//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//         <div class="container-fluid">
//             <a class="navbar-brand" href="#">Navbar</a>
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//                 aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNav">
//                 <ul class="navbar-nav">
//                     <li class="nav-item">
//                         <a class="nav-link active" aria-current="page" href="#">Home</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="#">Profile</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="#">Horoscope</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
// <br>
// <br>
// <br>
// <br>
// <br>
// <br>
//     <div class="card" style="width: 18rem;">
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">Username</li>
//             <li class="list-group-item">Email</li>
//             <li class="list-group-item">Password</li>
//         </ul>
// <br>
// <br>
//     <input class="btn btn-primary" type="submit" value="Login">
//     <br>
//     <br>
//     <br>
//     <br>
//     <br>
//     <br>
//     <div class="card" style="width: 18rem;">
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">Username</li>
//             <li class="list-group-item">Email</li>
//             <li class="list-group-item">Password</li>
//         </ul>
//     </div>
// <br>
// <br>
//     <input class="btn btn-primary" type="submit" value="Signup">
