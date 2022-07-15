import './App.css';
import bronte from "./images/profile.png"
import resume from "./files/BronteCadoganResume.pdf"
import Halloween from './files/functions';
import modal from './files/modal';
// One Page Website 





function App() {

  
  // could probably make this a call to a shorter function, this needs to load before the page
  //Halloween();
  //find a place for this
  //document.addEventListener("DOMContentLoaded", Halloween);
  //document.addEventListener("DOMContentLoaded", modal);

  
  return (
    <div className="App" id="homepage">
      <header className="App-header" id="homepage">
      <div id="myModal" class="modal">
        <div class="modal-content">
          <a href='https://github.com/davidhutchins/Automatic-Sanitizing-System' target='_blank' rel='noreferrer'>A.H.C.S. Source Code</a>
            <p>The Automatic Handle Cleaning System (A.H.C.S. for short) is a senior
                design project that attempts to help make the world a more sanitary place.
                Inspired by the COVID-19 pandemic and its call for a higher degree of sanitation,
                the A.H.C.S. uses embedded electronics and UV-C lights to detect motion and disinfect door handles 
                as people use them. The entire system is battery powered, allowing for its use to disinfect any door handle,
                anywhere. The A.H.C.S. is internet enabled, and each device sends its sensor data to the A.H.C.S. server, which
                allows user accounts to monitor each of their devices and track usage data. Users can use this data to better understand
                traffic throughout each of their buildings and learn how frequently each door is used over time.</p>
                <p>
                  The A.H.C.S. utilizes the MERN Stack to handle the web portion of the project, once the UV-C LEDs
                  turn off on the embedded device, a signal is sent to MongoDB updating the number of sanitizations the device has performed. 
                  The web app connects to the Mongo database and displays the specific device information for users once they have logged in to the site. 
                  Logged in, they can see how many times a certain device has run over different time periods (day, week, month, lifetime).
                  This data is also translated to different charts such as a bar chart, radar chart, and a pie chart to see which devices get the most traffic.
                  </p>
        </div>
      </div>

      <div id="myModal" class="modal">
        <div class="modal-content">
          <a href='https://www.youtube.com/watch?v=bt_ftYR_VR4' target="_blank" rel='noreferrer'>Demonstration Video</a>
          <p>The Theremin is an instrument that can be played without any physical contact with the instrument, 
            invented in 1928 by physicist Leon Theremin. The idea came to fruition when Leon Theremin's body was able to distort the
            electromagnetic fields he was creating in his lab. In this design, the main antenna acts as one of the plates in a variable parallel
            plate capacitor. The hand of the performer acts as the second plate of the parallel plate capacitor which completes the variable capacitor.
            As our hands come closer to the main antenna, we decrease the distance between the two parallel plates of our variable capacitor. The resulting
            movement gives off a range of audible tones.
          </p>
        </div>
      </div>

      <div id="myModal" class="modal">
        <div class="modal-content">
      
          <p>The ML-Accumulator is a project built on WordPress.org that allows users to log in,
            and submit data that can be aggregated by researchers to train their machine learning models. 
            The site would cut down on the amount of time spent on data collection and allow for more time developing the tools, 
            this also serves as a means of unique data 
            collection providing imperfect data for the models to learn from. This project was built for the purpose of learning how
            to conduct user studies and A/B testing for the Human Computer Interaction class. In study 1, users gave feedback on the 
            design of the website for the project group to fix by the time of study 2. 
            In study 2, A/B testing was done to determine which format was better, mobile or desktop.
            Users were timed in how long the data collection process took, along with their own personal 
            accounts with the website. These metrics were formatted and analyzed using the "R" programming language. 
            Using a t-test analysis we found that the Desktop users were the fastest to submit data and had an easier time using 
            the site compared to mobile.
          </p>
        </div>
      </div>

      <div id="myModal" class="modal">
        <div class="modal-content">
          <a href='https://github.com/BronteCadogan/Website_2_Electric_Boogaloo' target="_blank" rel="noreferrer">Source Code</a>
          <p>You're Currently Looking at Website 2 Electric Boogaloo.
            I didn't end up liking how I designed my first website, I felt that it was too spread out
            and that there was a whole lot of empty space and that something wasn't right when it was built. 
            So now I have compressed number of pages to 1, setup all the important links, and even threw in a few
            automatic styling changes for some holidays in the back.
          </p>
        </div>
      </div>

      <div id="myModal" class="modal">
        <div class="modal-content">
        <a href='https://github.com/BronteCadogan/Currency_Converter' target="_blank" rel="noreferrer">Source Code</a>
          <p>A calculator built in C++ meant to re-familiarize myself with the language and explore areas that weren't 
            covered in school. The endgoal is that the user enters the name and amount of currency that they have and can 
            convert it into another global or crypto currency to see whatt the trade rate is.
          </p>
        </div>
      </div>

      <div id="myModal" class="modal">
        <div class="modal-content">
          <p>The Weather Terminal is a project built in C++ 6.0 on Visual Studio 6 in a Windows 98 VM. 
            The goal of the project is to work with a limited toolset and resources (RAM : 512 MB system wide)  
            to achieve the goal of opening the app, entering your location and seeing a breakdown of the weather in your area.
          </p>
        </div>
      </div>

      <div id="myModal" class="modal">
        <div class="modal-content">
          <p>When the Theremin project was being done, I had to mess around with speaker configurations to get the 
            sound of the Theremin audible. After that I tried to pass the Theremin's output into a summing amplifier to see
            if I could interrupt the waveform of a normal song, which got me hooked for hours trying to figure out what filters to use
            to get the sound out more clearly. 
            The goal of this project is to plan out a circuit schematic using LTSpice that would amplify and filter music fed in through 
            a headphone jack or through another device and produce a clear and audible sound. 
          </p>
        </div>
      </div>
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
                  <li><button class="button" id="myBtn" >The Automatic Handle Cleaning System</button></li>
                  <li><button class="button" id="myBtn">The Theremin</button></li>
                  <li><button class="button" id="myBtn">The ML Accumulator</button></li>
                  <li><button class="button" id="myBtn">Website 2: Electric Boogaloo</button></li>
                  <li><button class="button" id="myBtn">The Currency Converter</button></li>
                  <p id="bolden">Upcoming:</p>
                  <li><button class="button" id="myBtn">The Weather Terminal</button></li>
                  <li><button class="button" id="myBtn">Mega Awesome Speaker Setup (M.A.S.S.)</button></li>
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
