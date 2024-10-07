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
                <img src={koIllustrated} alt="Katrina Orevillo" />
            </div>
        </div>
    );
}

export default Header;
