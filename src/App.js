
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  return (
    
      <div className="App">
        
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="Projects/" element={<Projects/>}/>
        <Route path="Contact/" element={<Contact/>}/>
      </Routes>
    </div>
    
    
  );
}

export default App;
