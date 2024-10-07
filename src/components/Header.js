import React from "react";
import './Header.css';
import koIllustrated from '../assets/ko_illustrated.png';

function Header() {
    return (
        <div className="header">
            <div className="left-side">
                <h1>Katrina Orevillo</h1>
                <div className="subtitle">is a PM + coder + designer</div>
            </div>

            <div className="right-side">
            <div className="tooltip-container">
                    <img src={koIllustrated} alt="Illustration of Katrina" className="tooltip-image" />
                    <span className="tooltip">Welcome to my site! ✧˖°</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
