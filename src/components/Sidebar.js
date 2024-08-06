import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cityIcon from '../assets/icons/city_icon.png';
import userIcon from '../assets/icons/user_icon.png';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Modal from './Modal';
import '../styles/Sidebar.css'; 

// A sidebar with City dropdow and user form modal
const Sidebar = ({ onCityChange, showContactForm, toggleContactForm }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null); // State for selected city
  const { t } = useTranslation();

  const cities = ['London', 'Toronto', 'Singapore'];

  // Toggle sidebar minimized state
  const handleMinimizeToggle = () => {
    setIsMinimized(!isMinimized);
  };

  // Toggle dropdown open state
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle city selection
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    onCityChange(city);
    // Do not close the dropdown
  };

  return (
    <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
      <button 
        className="minimize-button" 
        onClick={handleMinimizeToggle}
      >
        {isMinimized ? '>' : '<'}
      </button>
      <div className={`sidebar-content ${isMinimized ? 'hidden' : ''}`}>
        <div className="sidebar-item">
          <img src={cityIcon} alt={t('Cities')} className="icon" />
          <div className="dropdown-container">
            <span className="dropdown-toggle" onClick={handleDropdownToggle}>
              {t('Cities')}
              <span className={`arrow-icon ${isDropdownOpen ? 'arrow-open' : ''}`}>
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </span>
            {isDropdownOpen && (
              <ul className="city-list">
                {cities.map((city) => (
                  <li
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className={`city-item ${selectedCity === city ? 'selected' : ''}`} // Conditional class
                  >
                    {t(city)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="sidebar-item" onClick={toggleContactForm}>
          <img src={userIcon} alt={t('User Form')} className="icon" />
          <span>{t('User Form')}</span>
        </div>
      </div>
      {isMinimized && (
        <div className="icons">
          <img
            src={cityIcon}
            alt={t('Cities')}
            className="icon-minimized"
            onClick={() => setIsMinimized(false)}
          />
          <img
            src={userIcon}
            alt={t('User Form')}
            className="icon-minimized"
            onClick={toggleContactForm}
          />
        </div>
      )}
      {showContactForm && (
        <Modal show={showContactForm} handleClose={toggleContactForm} />
      )}
    </div>
  );
};

export default Sidebar;
