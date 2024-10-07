import React from "react";
import './Cards.css';
import paintings from '../assets/paintings.png';
import igfilters from '../assets/ig filters.png';

function PersonalProjects() {
    return (
        <div className="PersonalProjects">
            <h2>Personal Projects</h2>
            <div className="card">
                <div className="left-side">
                    <a href="https://korevillo.github.io/yourperfectpainting/" target="_blank" rel="noopener noreferrer">
                        <img src={paintings} alt="Smartphones displaying the 'Your Perfect Painting' app" />
                    </a>
                </div>
                <div className="right-side-red">
                    <a href="https://korevillo.github.io/yourperfectpainting/" target="_blank" rel="noopener noreferrer">
                        <h3>Designer + Developer, Your Perfect Painting</h3>
                    </a>
                    <div className="dates">Sept 2024</div>
                    <p>Created a mobile web-based personality quiz using JavaScript, HTML, and CSS to assign a famous painting based on answers to a series of fun questions.</p>
                </div>
            </div>

            <div className="card">
                <div className="left-side-nolink">
                    <img src={igfilters} alt="Smartphones displaying various Instagram filters" />
                </div>
                <div className="right-side">
                    <h3>Illustrator + Developer, Instagram AR Filters</h3>
                    <div className="dates">Apr 2020 - June 2024</div>
                    <p>Published augmented reality filters with original illustrations, randomization algorithms, and object tracking experiences using Meta Spark Studio, accumulating over 120.8k “open” actions.</p>
                </div>
            </div>
        </div>
    );
}

export default PersonalProjects;