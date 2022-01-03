import React from "react";
import {Link} from "react-router-dom"
import "./portfolio.css"
import DownloadLink from "react-download-link";


export default function About (){
  return(
    <div>
    <nav className="nav">
      <Link  className="linkStyle" to="/">Home</Link>
      <Link className="active" to="/about">About</Link>
      <Link className="linkStyle" to="/projects">Projects</Link>
      <Link className="linkStyle" to="/contact">Contact</Link> 
    </nav>
    <main>
      <h2>About Me</h2>
     
    </main>


 
    <div className="paragraph"> 
      <p>I am a self-taught Web/Software Developer who holds a strong interest in developing Web and Mobile applications. I am currently studying Frontend and Backend languages to widen my skills in software development. </p>
    </div>

    <DownloadLink 
    style={{color: "red"}}
    label="Resume"
    filename="Marquis Pierre Resume 2021.pdf"
    exportFile={() => "My cached data"}/>
      
    </div>
  )

}