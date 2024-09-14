import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cityIcon from '../../assets/icons/city_icon.png';
import userIcon from '../../assets/icons/user_icon.png';
import Modal from '../Modal/Modal';
import CityDropdown from './CityDropdown';
import MinimizeButton from './MinimizeButton'; 
import ContactFormButton from './ContactFormButton'; 
import './Sidebar.scss';

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
  const { t } = useTranslation();

   // Toggle sidebar minimization state
  const handleMinimizeToggle = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
      <MinimizeButton isMinimized={isMinimized} onToggle={handleMinimizeToggle} /> {/* Use the MinimizeButton component */}
      <div className={`sidebar-content ${isMinimized ? 'hidden' : ''}`}>
        <CityDropdown currentCity={currentCity} onCityChange={onCityChange} />
        <ContactFormButton toggleContactForm={toggleContactForm} /> {/* Use the ContactFormButton component */}
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
