import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./portfolio.css"
import Me from "../img/Me.jpg"
import lights from "../img/img_lights.jpg"
import { AnimationWrapper } from 'react-hover-animation'

//style={{backgroundImage: `url(${lights})`}}
export default function Home (){
  return(

    <div>
    <nav className="nav">
    
      <Link className="active" to="/">Home</Link>
      <Link className="linkStyle" to="/about">About</Link>
      <Link className="linkStyle" to="/projects">Projects</Link>
      <Link className="linkStyle" to="/contact">Contact</Link> 
    </nav>
    
      <div className="profile-container">
      <AnimationWrapper>
      <img className="me-img"  src={Me} alt="profile-picture"/>
      </AnimationWrapper>
     
     <main>
      <h2 style={{'font-size': '30px'}}>Marquis Pierre</h2>
      <h2 >Portfolio App</h2>
    </main>
          </div>
       </div>
   
  )

}