
import './App.css';
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  return (
    
      <div className="App">
        
      <Router basename={process.env.PUBLIC_URL}>
      <Switch> 
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="about" element={<About/>}/>
        <Route exact path="Projects/" element={<Projects/>}/>
        <Route exact path="Contact/" element={<Contact/>}/>
      </Switch>
        </Router>
    </div>
    
    
  );
}

export default App;
