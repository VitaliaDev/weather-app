import React from 'react';
import { useTranslation } from 'react-i18next';
import { WeatherData } from '../../types/weather';
import { capitalizeFirstLetter } from '../../utils';
import './WeatherDisplay.scss';

// Define props interface for the component
interface MainCardProps {
  weatherData: WeatherData;
}

// MainCard component displays the main weather information
const MainCard: React.FC<MainCardProps> = ({ weatherData }) => {
  const { t } = useTranslation();

  return (
    <div className="mainCard">
      <p className="temp">{Math.round(weatherData.list[0].main.temp)}{t('°C')}</p>
      <div className="mainCardInfo">
        <p className="textDescription">{capitalizeFirstLetter(weatherData.list[0].weather[0].description)}</p>
        <p className="textDescriptionS">
          {t('Min')}: {Math.round(weatherData.list[0].main.temp_min)}{t('°C')}, {t('Max')}: {Math.round(weatherData.list[0].main.temp_max)}{t('°C')}
        </p>
        <p className="textDescriptionS">{t('Feels like')}: {Math.round(weatherData.list[0].main.feels_like)}{t('°C')}</p>
      </div>
    </div>
  );
};

export default MainCard;
