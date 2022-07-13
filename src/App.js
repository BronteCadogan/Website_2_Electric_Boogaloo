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


      <section id="Projects" >
        <div>
            <div class="window" style={{width: "320px"}}>
              <div class="title-bar">
              <div class="title-bar-text">Projects: Click on one to learn more</div>
              </div>
              <div class="window-body">
                <ul className='List'>
                  <li><button class="button">The Automatic Handle Cleaning System</button></li>
                  <li><button class="button">The Theremin</button></li>
                  <li><button class="button">The ML Accumulator</button></li>
                  <li><button class="button">Website 2: Electric Boogaloo</button></li>
                  <li><button class="button">The Currency Converter</button></li>
                  <p id="bolden">Upcoming:</p>
                  <li><button class="button">The Weather Line</button></li>
                  <li><button class="button">Mega Awesome Speaker Setup (M.A.S.S.)</button></li>
                </ul>
              </div>
              <div class="status-bar">
                <p class="status-bar-field">Press F1 for help</p>
                <p class="status-bar-field">Slide 1</p>
                <p class="status-bar-field">CPU Usage: 14%</p>
              </div>
            </div>
          </div>
      </section>

      <section className="about">
        <style>
          <link rel="stylesheet" href="https://unpkg.com/98.css"/>
        </style>
          <div class="window" id="beneathImage" style={{width: "300px", height: "80px"}}>
            <div class="title-bar">
              <div class="title-bar-text">Status</div>
            </div>
            <div class="window-body">
              <q id="larger_text">Jack of all trades and master of none better than a master of one</q>
            </div>
          </div>
      </section>    

     


      <section id="Experience">
        
      </section>
    </div>
  );
}

export default App;
