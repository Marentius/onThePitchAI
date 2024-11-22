import React from 'react';

const NavBar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">OnThePitchAI</a>
        <button
          className={`btn btn-sm btn-${isDarkMode ? 'light' : 'dark'}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
