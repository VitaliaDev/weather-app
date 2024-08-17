import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/CityDropdown.css'; 

// Definir los tipos de las propiedades que el componente va a recibir
interface CityDropdownProps {
  currentCity: string;
  onCityChange: (city: string) => void;
}

// Componente CityDropdown tipado con TypeScript
const CityDropdown: React.FC<CityDropdownProps> = ({ currentCity, onCityChange }) => {
  const { t } = useTranslation();
  const cities: string[] = ['London', 'Toronto', 'Singapore'];  // Tipo explícito para el array de ciudades
  const [isOpen, setIsOpen] = useState<boolean>(false);  // Tipo explícito para el estado booleano

  // Función para manejar la selección de la ciudad
  const handleSelectCity = (city: string) => {
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
