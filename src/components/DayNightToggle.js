import React, { useState } from 'react';
import './DayNightToggle.css';

const DayNightToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <input type="checkbox" id="toggle" className="toggle-checkbox" onChange={handleToggle} />
      <label htmlFor="toggle" className="toggle-label"></label>
    </div>
  );
};

export default DayNightToggle;
