import './App.css';
import bronte from "./images/profile.png"
import resume from "./files/BronteCadoganResume.pdf"

// One Page Website 

function App() {
  return (
    <div className="App" id="homepage">
      <header className="App-header" id="homepage">
        <h1 id="name">Bront&euml; Cadogan</h1>
        <h2 id="qualification">Bachelor of Science: Computer Engineering</h2>
      </header>
      <img src={bronte} alt="Bronte Cadogan" id="profile"/>
      <ul id="list">
        <li>
          <a href={resume} target="_blank"  rel="noreferrer">R&eacute;sum&eacute;</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brontecadogan/" target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/BronteCadogan" target="_blank" rel="noreferrer">GitHub</a>
        </li>
      </ul>

      <section className="about">
        
        
      </section>    
    </div>
  );
}

export default App;
