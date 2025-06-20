import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [active, setActive] = useState('home');

  const handleClick = (section) => {
    setActive(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">M.</div>
        <nav>
          <ul className="nav-links">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  className={`nav-button ${active === item ? 'active' : ''}`}
                  onClick={() => handleClick(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={`hire-button ${active === 'hire' ? 'active' : ''}`}
          onClick={() => handleClick('hire')}
        >
          Hear Me
        </button>
      </div>
    </header>
  );
};

export default Header;
