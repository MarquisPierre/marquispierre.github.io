import React from "react";
import {Link} from "react-router-dom"
import "./portfolio.css"
import mmp100 from "../img/Screenshot.png"


export default function Projects(){
  return(
    <div>
    <nav className="nav">
    <Link  className="linkStyle" to="/">Home</Link>
      <Link className="linkStyle" to="/about">About</Link>
      <Link className="active" to="/projects">Projects</Link>
      <Link className="linkStyle" to="/contact">Contact</Link> 
    </nav>
    <main>
      <h2>My Projects</h2>
    </main>
      
    <section>
      <div className="resume">
      <a class="marg" href="MMP100-FINAL-MarquisPierre/index.html">
             <img src={mmp100} style ={{"height": "30", "width": "40"}} alt="Screeshot of Old Website"/></a>
      </div>
      
    </section>


    </div>
  )

}