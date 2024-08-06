import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/CityDropdown.css'; 

//A dropdown component that displays cities to choose for user
const CityDropdown = ({ currentCity, onCityChange }) => {
  const { t } = useTranslation();
  const cities = ['London', 'Toronto', 'Singapore'];
  const [isOpen, setIsOpen] = useState(false);

// Function to handle city selection
  const handleSelectCity = (city) => {
    onCityChange(city);
  };

  return (
    <div className="city-dropdown">
      <label htmlFor="city">{t('chooseCity')}:</label>
      <div
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        {t(`cities.${currentCity}`) || t('selectCity')}
      </div>
      {isOpen && (
        <ul>
          {cities.map((city) => (
            <li
              key={city}
              onClick={() => handleSelectCity(city)}
            >
              {t(`cities.${city}`)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityDropdown;
