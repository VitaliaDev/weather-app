import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cityIcon from '../assets/icons/city_icon.png';
import userIcon from '../assets/icons/user_icon.png';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Modal from './Modal';
import '../styles/Sidebar.css';
// Define the types for the props
interface SidebarProps {
  currentCity: string;
  onCityChange: (city: string) => void;
  showContactForm: boolean;
  toggleContactForm: () => void;
  language: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentCity,
  onCityChange,
  showContactForm,
  toggleContactForm,
  language,
}) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const cities: string[] = ['London', 'Toronto', 'Singapore'];

  const handleMinimizeToggle = () => {
    setIsMinimized(!isMinimized);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
      <button 
        className="minimize-button" 
        onClick={handleMinimizeToggle}
        style={{
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          padding: '10px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
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
                    onClick={() => onCityChange(city)}
                    className="city-item"
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
