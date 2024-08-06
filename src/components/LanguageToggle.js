import React from 'react';
import '../styles/LanguageToggle.css'; 

//Language switcher from English to Spanish. (English by default)
const LanguageToggle = ({ currentLanguage, onLanguageChange }) => {
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    onLanguageChange(newLanguage);
  };

  return (
    <div className="slider-container">
      <div className="slider-switch">
        <label>
          <input
            type="checkbox"
            checked={currentLanguage === 'es'}
            onChange={toggleLanguage}
            style={{ display: 'none' }} // Hide the default checkbox
          />
          <span className={`slider ${currentLanguage === 'es' ? 'checked' : ''}`} />
        </label>
      </div>
    </div>
  );
};

export default LanguageToggle;
