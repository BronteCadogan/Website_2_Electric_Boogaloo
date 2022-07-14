import './App.css';
import bronte from "./images/profile.png"
import resume from "./files/BronteCadoganResume.pdf"
import Halloween from './files/functions';
// One Page Website 




function App() {
  // could probably make this a call to a shorter function, this needs to load before the page
  Halloween();
  //find a place for this
  document.addEventListener("DOMContentLoaded", Halloween);

  
  return (
    <div className="App" id="homepage">
      <header className="App-header" id="homepage">
      </header>
        <h1 id="name">Bront&euml; Cadogan</h1>
        <h2 id="qualification">Bachelor of Science: Computer Engineering</h2>
      <img src={bronte} alt="Bronte Cadogan" id="profile"/>
      <ul class="links" id="list">
        <li>
          <a href={resume} target="_blank"  rel="noreferrer" class="gradient">R&eacute;sum&eacute;</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brontecadogan/"  class="gradient" target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/BronteCadogan"  class="gradient" target="_blank" rel="noreferrer">GitHub</a>
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

      
      <section id="Experience">
      <div>
            <div class="window" style={{width: "320px"}}>
              <div class="title-bar" id="exp">
              <div class="title-bar-text">Experience</div>
              </div>
              <div class="window-body">
                <dl className='List'>
                  <dt className='jobs'>Publix Super Markets Inc.</dt>
                  <dd>Cashier</dd>
                  <dd>2017 - Present</dd>
                  <dt className='jobs'>University of Florida: Florida Insitute for Cybersecurity Research</dt>
                  <dd>Web Developer/Undergraduate Researcher</dd>
                  <dd>2021 - Present</dd>
                </dl>
              </div>
              <div class="status-bar">
                <p class="status-bar-field">Press F1 for help</p>
                <p class="status-bar-field">Slide 1</p>
                <p class="status-bar-field">CPU Usage: 14%</p>
              </div>
            </div>
          </div> 
      </section>

      
      <section id="Hobbies">
      <div>
            <div class="window" style={{width: "320px"}}>
              <div class="title-bar" id="pr">
              <div class="title-bar-text">Personality</div>
              </div>
              <div class="window-body">
              <ul className='List'>
                  <section id="hobby">
                    <p><strong>Hobbies</strong></p>
                    <li>Film Making</li>
                    <li>Video Editing</li>
                    <li>Photography</li>
                    <li>Weight Lifting</li>
                    <li>Cooking</li>
                  </section>
                  <section id="movies">
                    <p><strong id="padd">Favorite Films</strong></p>
                    <li>Pulp Fiction</li>
                    <li>2001 A Space Odyssey</li>
                    <li>Star Wars Episode III - Revenge of the Sith</li>
                    <li>Star Trek IV: The Voyage Home</li>
                    <li>Evil Dead</li>
                  </section>
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
    </div>
  );
}

export default App;
