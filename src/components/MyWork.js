import React from "react";
import './Cards.css';
import loop from '../assets/loop.png';
import assessments from '../assets/assessments.png';

function MyWork() {
    return (
        <div className="MyWork">
            <h2>My Work</h2>
            <div className="card">
                <div className="left-side">
                    <a href="https://loop.cloud.microsoft/learn" target="_blank" rel="noopener noreferrer">
                        <img src={loop} alt="A laptop displaying the Microsoft Loop app" />
                    </a>
                </div>
                <div className="right-side-yellow">
                    <a href="https://loop.cloud.microsoft/learn" target="_blank" rel="noopener noreferrer">
                        <h3>Product Manager, Microsoft Loop</h3>
                    </a>
                    <div className="dates">May 2022 - Present</div>
                    <p>Leading teams of designers, developers, researchers, and engineers to develop top-requested features for the Microsoft Loop web app.</p>
                </div>
            </div>

            <div className="card">
                <div className="left-side">
                    <a href="https://korevillo.github.io/ape-assessment-tools" target="_blank" rel="noopener noreferrer">
                        <img src={assessments} alt="A laptop displaying the APE Assessments Tool" />
                    </a>
                </div>
                <div className="right-side-green">
                    <a href="https://korevillo.github.io/ape-assessment-tools" target="_blank" rel="noopener noreferrer">
                        <h3>Developer, CSULB Adapted Physical Education</h3>
                    </a>
                    <div className="dates">Oct 2022 - May 2023</div>
                    <p>Collaborated with field experts to develop a web application using React and Google Sheets API to simplify the process of locating appropriate assessments for students with disabilities.</p>
                </div>
            </div>
        </div>
    );
}

export default MyWork;