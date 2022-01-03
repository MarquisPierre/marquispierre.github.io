import React from "react";
import {Link} from "react-router-dom"
import "./portfolio.css"




export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
  console.log(this.state);
  alert("Hey " + this.state.name +  " your message sent successfully!")
  }






  render() {
    return(
   <div>
     <nav className="nav">
        <Link  className="linkStyle" to="/">Home</Link>
        <Link className="linkStyle" to="/about">About</Link>
        <Link className="linkStyle" to="/projects">Projects</Link>
        <Link className="active" to="/contact">Contact</Link> 
     </nav>
        <main>
        <h2>Contact Info</h2>
       </main>
              <div className="contact-block">
                   <p className="text-block">
                      EMAIL: marquispierre27@gmail.com <br/>

                      <a class="marg" href="https://www.linkedin.com/in/marquis-pierre-263367183/"> linkedin </a> <br/>

                      
                   </p>
              </div>
     





      <div className="App">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <label htmlFor="name">Name</label>
          <div className="form-group">
            
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>


          <label htmlFor="exampleInputEmail1">Email address</label>
          <div className="form-group">
           
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>

          <label htmlFor="message">Message</label>
          <div className="form-group">
            
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
</div>
       
    );
  }

  
}

  
  