import React from 'react';
import Auth from "../utils/auth"
import { Navigate } from "react-router-dom"

function Forum() {
     if (!Auth.loggedIn()) {
       return <Navigate to="/login" />;
     }
    return (


        <div>
            <h1>forum</h1>
        </div>
    )
}

export default Forum;
