import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
   <div className="card-body">
     <h5 className="card-title">YourHoroscope</h5>
     <p className="card-text">Thank you for visiting our website.</p>
     <a href="https://github.com/ahmad92894/YourHoroscope" className="btn btn-primary">Github</a>
     <Link to="/aboutus" className="btn btn-primary">About Us</Link>
   </div>
 
 )
}

export default Footer