import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import cityIcon from '../../assets/icons/city_icon.png';

interface CityDropdownProps {
  currentCity: string;
  onCityChange: (city: string) => void;
}

const CityDropdown: React.FC<CityDropdownProps> = ({ currentCity, onCityChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<string>(currentCity);
  const { t } = useTranslation();

   // List of cities for the dropdown
  const cities: string[] = ['London', 'Toronto', 'Singapore'];

  // Toggle the dropdown visibility
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle city selection
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    onCityChange(city);
  };

  return (
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
                onClick={() => handleCityChange(city)}
                className={`city-item ${selectedCity === city ? 'selected' : ''}`}
              >
                {t(city)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CityDropdown;
