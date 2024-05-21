import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"aqua",width:"600px"}}>
        <Link to="/">Kalvium</Link>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <Link to="/contact">Contact</Link>
        <Link to="/registration">Registration</Link>
        </div>
      
        </div>
    )
}