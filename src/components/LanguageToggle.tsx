import React from 'react';
import { Language } from '../types/language'; // Adjust the import path if necessary
import '../styles/LanguageToggle.css'; 

// Define the interface for the component props
interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

// LanguageToggle component with TypeScript
const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, onLanguageChange }) => {
  const toggleLanguage = () => {
    const newLanguage: Language = currentLanguage === 'en' ? 'es' : 'en';
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
            style={{ display: 'none' }} // Hide default checkbox
          />
          <span className={`slider ${currentLanguage === 'es' ? 'checked' : ''}`} />
        </label>
      </div>
    </div>
  );
};

export default LanguageToggle;
