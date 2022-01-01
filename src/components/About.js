import React from "react";
import {Link} from "react-router-dom"
import "./navigation.css"

export default function About (){
  return(
    <div>
    <nav className="nav">
    <Link  className="linkStyle" to="/">Home</Link>
      <Link className="linkStyle" to="/about">About</Link>
      <Link className="linkStyle" to="/projects">Projects</Link>
      <Link className="linkStyle" to="/contact">Contact</Link> 
    </nav>
    <main>
      <h2>About Page</h2>
     
    </main>
    </div>
  )

}