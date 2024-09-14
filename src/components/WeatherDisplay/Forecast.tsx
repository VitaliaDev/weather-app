import React from 'react';
import { capitalizeFirstLetter } from '../../utils/index';
import { useTranslation } from 'react-i18next';
import { WeatherData } from '@/types/weather';
import './WeatherDisplay.scss';


interface ForecastProps {
  dailyForecasts: WeatherData['list'];
}

const formatDay = (timestamp: number, t: (key: string) => string): string => {
  const weekday = new Date(timestamp * 1000).toLocaleDateString('en-US', { weekday: 'long' });
  return t(weekday); // Translate the day name using i18next
};

const Forecast: React.FC<ForecastProps> = ({ dailyForecasts }) => {
  const { t } = useTranslation();

  return (
    <div className="forecast">
      <h3>{t('Forecast')}</h3>
      <div className="forecastCards">
        {dailyForecasts.slice(1, 6).map((forecast, index) => (
          <div key={index} className="forecastCard">
            <p className="forecastTitle">{formatDay(forecast.dt, t)}</p>
            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt={forecast.weather[0].description} className="img" />
            <p className="temp">{Math.round(forecast.main.temp)}{t('°C')}</p>
            <p className="textDescription">{capitalizeFirstLetter(forecast.weather[0].description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;