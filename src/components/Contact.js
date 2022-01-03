import React from "react";
import {Link} from "react-router-dom"
import "./portfolio.css"


export default function Contact(){
  return(
    <div>
    <nav className="nav">
    <Link  className="linkStyle" to="/">Home</Link>
      <Link className="linkStyle" to="/about">About</Link>
      <Link className="linkStyle" to="/projects">Projects</Link>
      <Link className="active" to="/contact">Contact</Link> 
    </nav>
    <main>
      <h2>Contact Page</h2>
     
    </main>
    </div>
  )

}