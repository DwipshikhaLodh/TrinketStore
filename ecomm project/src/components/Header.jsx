import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";


function Header() {
    console.log("hi")
    return (
        <div className='header'>
            <NavLink to="/" className="img-container"><img className='img' src="/images/logo.png" width='170px' alt="logo"/></NavLink>
            <Navbar/>
        </div>
    )
}

export default Header;