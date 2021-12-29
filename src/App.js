import logo from './marquis.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Marquis
        </p>
        <a
          className="App-link"
          href="https://github.com/marquispierre"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub 
        </a>
      </header>
    </div>
  );
}

export default App;
