import React from "react";
import { AnimationWrapper } from 'react-hover-animation'
import {Link} from "react-router-dom"
import "./portfolio.css"
import mmp100 from "../img/Screenshot.png"
import hunter from "../img/hunter.png"
import jump from "../img/mjump.png"
import game from "../img/game.png"


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
      <h1>My Projects</h1>
    </main>
      
    
      <div className="resume">
        <div className="first-web">
      <h3>My First Website</h3>
      <AnimationWrapper>
      <a class="marg" href="https://marquispierre.github.io/MMP100/">
             <img src={mmp100} style ={{"height": "300", "width": "400"}} alt="Screeshot of Old Website"/></a>
      </AnimationWrapper>
      
            
           <p className="text-block">This was the first ever website I coded. I made this website as a 
           final project in my freshman year of college. It cotains imformation about various native amrican tribes.<br/> 
           The Technologies used: HTML , CSS</p>
         </div>

         <div className="first-web">
      <h2>A simple link project</h2>
      <AnimationWrapper>
      <a class="marg" href="https://marquispierre.github.io/togashi/">
             <img src={hunter} style ={{"height": "300", "width": "400"}} alt="Screeshot of Old Website"/></a>
      </AnimationWrapper>
            
           <p className="text-block">While I was in communtiy college I wanted to practice a bit
            more of HTML and CSS so I decided to code a website that was dedicated to one of my 
            favorite manga artists name Yoshihiro togashi. I mostly focused on positioning images of his manga in a way I prefered. 
            I also worked on turning the images into links to a website in which you may buy the book. <br/>
           The Technologies used: HTML , CSS </p>
              
         </div>



         <div className="first-web">
      <h2>Millenium Jump App</h2>
      <AnimationWrapper>
      <a class="marg" href="https://xd.adobe.com/spec/929f58c0-05b3-480c-77d5-0bc13edc0c15-e4ae/?fullscreen">
             <img src={jump} style ={{"height": "300", "width": "400"}} alt="Screeshot of Old Website"/></a>
      </AnimationWrapper>
            
           <p className="text-block">In my last semseter of communtiy college I created an app/ website on Adobe XD that is supposed
            to be a clone of a popular app that allows you to read thousands of manga.<br/>
            The Technologies used: Adobe XD</p>
              
         </div>



         <div className="first-web">
      <h2>Controversy of Video Game Violence</h2>
      <AnimationWrapper>
      <a class="marg" href="https://xd.adobe.com/view/f2d72c9d-e686-4e5b-44d5-d7693406e69b-84e6/?fullscreen">
             <img src={game} style ={{"height": "300", "width": "400"}} alt="Screeshot of Old Website"/></a>
      </AnimationWrapper>
            
           <p className="text-block">This was a final group project in which we had to make a 
           website that convinces the public that video games do not cause real world Violence<br/>
           The Technologies used: Adobe XD</p>
              
         </div>
       
      </div>
  


    </div>
  )

}