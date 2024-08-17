import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/CityDropdown.css'; 

// Define the types for the component's props
interface CityDropdownProps {
  currentCity: string;
  onCityChange: (city: string) => void;
}

// CityDropdown component typed with TypeScript
const CityDropdown: React.FC<CityDropdownProps> = ({ currentCity, onCityChange }) => {
  const { t } = useTranslation();
  const cities: string[] = ['London', 'Toronto', 'Singapore'];  // Explicit type for the array of cities
  const [isOpen, setIsOpen] = useState<boolean>(false);  // Explicit type for the boolean state

  // Function to handle the selection of a city
  const handleSelectCity = (city: string) => {
    onCityChange(city);
  };

  return (
    <div className="city-dropdown">
      <label htmlFor="city">{t('chooseCity')}:</label>
      <div
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}  // Toggle dropdown open/closed state
      >
        {t(`cities.${currentCity}`) || t('selectCity')}  {/* Display the current city or a default option */}
      </div>
      {isOpen && (
        <ul>
          {cities.map((city) => (
            <li
              key={city}
              onClick={() => handleSelectCity(city)}  // Handle city selection
            >
              {t(`cities.${city}`)}  {/* Display city name */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityDropdown;
