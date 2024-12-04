// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar({ scrollToPage }) {
  return (
    <nav id="Navbar">
      <a href="https://sps.edu" className="nav-button" id="SPS">
        SPS
      </a>
      <button type="button" onClick={() => scrollToPage('team')} className="nav-button">
        TEAM 1512
      </button>
      <button type="button" onClick={() => scrollToPage('members')} className="nav-button">
        MEMBERS
      </button>
      <button type="button" onClick={() => scrollToPage('season2')} className="nav-button">
        2024 SEASON
      </button>
      <button type="button" onClick={() => scrollToPage('season')} className="nav-button">
        PAST SEASONS
      </button>
      <button type="button" onClick={() => scrollToPage('contact')} className="nav-button">
        CONTACT US
      </button>
    </nav>
  );
}

export default Navbar;
