import React from "react";
import "./Nav.css";


const Navs = () =>{
    return(
        <nav className="navbar">
            <a href="#" className="logo">GRAPHIX</a>
            <div className="nav-links">
                <ul>
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navs;