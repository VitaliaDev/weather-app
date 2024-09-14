import React from 'react';
import { Language } from '../../types/language'; 
import ukFlag from '../../assets/icons/uk_flag.webp';
import esFlag from '../../assets/icons/es_flag.png'; 
import './LanguageToggle.scss'; 

// Props for LanguageToggle component
interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

 // Toggle between English and Spanish
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
              data-testid="language-checkbox"
          />
          <span className={`slider ${currentLanguage === 'es' ? 'checked' : ''}`}>
            <span
              className="slider-icon"
              style={{
                backgroundImage: `url(${currentLanguage === 'en' ? ukFlag : esFlag})`,
              }}
                  data-testid="slider-icon"
            />
          </span>
        </label>
      </div>
    </div>
  );
};

export default LanguageToggle;
