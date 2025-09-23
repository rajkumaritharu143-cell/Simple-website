// src/Header.jsx

import React from 'react';
import './Header.css'; // We'll create this CSS file next

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-brand-links">
          <a href="#" className="brand-link active">GregMat</a>
          <a href="#" className="brand-link">PrepSwift</a>
        </div>
        <div className="header-account">
          <a href="#" className="header-pricing">Pricing</a>
          <button className="user-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Replace with your actual logo SVG */}
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="logo-text">GregMat+</span>
        </div>
        <nav className="header-nav">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#">Classes <span className="pill">9</span></a>
            </li>
            <li className="nav-item">
              <a href="#">Study Plans <span className="dropdown-arrow">▼</span></a>
            </li>
            <li className="nav-item">
              <a href="#">Practice <span className="dropdown-arrow">▼</span></a>
            </li>
            <li className="nav-item">
              <a href="#">Quizzes <span className="dropdown-arrow">▼</span></a>
            </li>
            <li className="nav-item">
              <a href="#">Tutoring <span className="pill">50+</span> <span className="dropdown-arrow">▼</span></a>
            </li>
            <li className="nav-item">
              <a href="#">Memorize <span className="dropdown-arrow">▼</span></a>
            </li>
            <li className="nav-item">
              <a href="#">More <span className="dropdown-arrow">▼</span></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;