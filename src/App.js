import './App.css';
import selfie from './images/selfie.png';
import loop from './images/loop.png';
import assessments from './images/assessments.png';
import cafe from './images/cafe.png';
import filters from './images/filters.png';

function App() {
  return (
    <div className="App">
      <div className='full-content'>
      <div className='header'>

        <div className="tooltip-container">
          <img src={selfie} alt="A greyscale illustration of Katrina." className="tooltip-image" />
          <span className="tooltip">Welcome to my site! ✩彡</span>
        </div>


        <h1>Katrina Orevillo</h1>
        <h2>is a PM + coder + designer</h2>
      </div>

      <div className='section'>
        <h3 className='sectionHeader'>˗ˏˋ Work Experience ˎˊ˗</h3>
        
        <div className='sectionContent'>
            <a href='https://loop.microsoft.cloud/' target="_blank" and rel="noopener noreferrer">
              <img src={loop} alt="A grey laptop displaying the Microsoft Loop web app."/>
            </a>

            <div className='sectionContentRight'>
                <h4>Microsoft Loop</h4>
                <h5>Product Manager (since 2023)</h5>
                <p>After interning on the Loop team, 
                  I came back as a full-time product manager in 2023! 
                  Since joining, I've led design and engineering teams 
                  to deliver top-requested user experiences.</p>
            </div>
        </div>

        <div className='sectionContent'>
            <a href='https://korevillo.github.io/ape-assessment-tools/' target="_blank" and rel="noopener noreferrer">
              <img src={assessments} alt="A grey laptop displaying the CSULB Adapted Physical Education Assessment Tools web app."/>
            </a>
            <div className='sectionContentRight'>
                <h4>CSULB Adapted Physical Education</h4>
                <h5>Web Developer (2022-23)</h5>
                <p>I worked as the sole developer of a 
                  web application to make it easier for physical education
                  teachers to assess their students with disabilities. I collaborated
                  a ton with researchers, teachers, and other subject matter experts
                  to create an intuitive experience!</p>
              </div>
        </div>

      </div>

      <div className='section'>
        <h3 className='sectionHeader'>˗ˏˋ Personal Projects ˎˊ˗</h3>
        
        <div className='sectionContent'>
            <a href='https://bit.ly/m/notekating/' target="_blank" and rel="noopener noreferrer">
              <img src={cafe} alt="Two grey smartphones displaying pages of the Cozy Cabin Cafe personality quiz."/>
            </a>
            <div className='sectionContentRight'>
                <h4>Personality Quizzes</h4>
                <h5>Web Developer + Designer + Illustrator (since 2024)</h5>
                <p>In my free time, I like putting my code, design, and illustration 
                  skills to use by making just-for-fun personality quizzes! 
                  At least 9k total plays so far, as indicated by Instagram :-) </p>
                <li><a href='https://korevillo.github.io/onioncitygrocery/' target="_blank" and rel="noopener noreferrer">Onion City Grocery</a> (Feb 2025)</li>
                <li><a href='https://korevillo.github.io/cozycabincafe/' target="_blank" and rel="noopener noreferrer">Cozy Cabin Cafe</a> (Dec 2024)</li>
                <li><a href='https://korevillo.github.io/yourperfectpainting/' target="_blank" and rel="noopener noreferrer">Your Perfect Painting</a> (Aug 2024)</li>
            </div>

        </div>

        <div className='sectionContent'>
            <img src={filters} alt="Four grey smartphones displaying a variety of Instagram Story filters."/>
            <div className='sectionContentRight'>
                <h4>Augmented Reality Instagram Filters</h4>
                <h5>Illustrator + Developer (2020-24)</h5>
                <p>Over the span of 4 years, I made 5 filters that were 
                  available for use on Instagram stories. Some of these were simple decorative
                  overlays, and others were more complex in using randomization algorithms.</p>
                <p>Note: Instagram (Meta) discontinued third-party filter publication in January 2025.</p>
            </div>
        </div>
      </div>

      <div className='section'>
        <h3 className='sectionHeader'>˗ˏˋ Get In Touch ˎˊ˗</h3>
        <h4 className='linkedIn'>Say hello via <a href='https://linkedin.com/in/korevillo/' target="_blank" and rel="noopener noreferrer">LinkedIn</a></h4>
        <h4 className='linkedIn'>Find me on <a href='https://linkedin.com/in/korevillo/' target="_blank" and rel="noopener noreferrer">GitHub</a></h4>
      </div>
      

    </div>
    </div>
  );
}

export default App;
