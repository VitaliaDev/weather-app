import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaTemperatureHigh, FaWind, FaTint, FaSun, FaRegSun, FaEye, FaArrowUp, FaCloud } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import MainCard from './MainCard';
import DetailCard from './DetailCard';
import Forecast from './Forecast';
import useWeatherData from './useWeatherData'; 
import CloudAnimation from './CloudAnimation'; 
import './WeatherDisplay.scss';
import { WeatherData } from '@/types/weather';

interface WeatherDisplayProps {
  city: string;
  language: string;
  apiKey: string; 
}

// Array of daily forecasts.
const groupForecastsByDay = (list: WeatherData['list']) => {
  if (!Array.isArray(list)) {
    console.error('Expected list to be an array, but received:', list);
    return [];
  }

  const dailyForecasts = new Map<number, any>();// Map to store unique daily forecasts


  list.forEach((forecast) => {
    const dayStart = new Date(new Date(forecast.dt * 1000).setHours(0, 0, 0, 0)).getTime();

    if (!dailyForecasts.has(dayStart)) {
      dailyForecasts.set(dayStart, forecast);
    }
  });

  return Array.from(dailyForecasts.values());
};
 
const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ city, language, apiKey }) => {
  const { t } = useTranslation();
  const { weatherData, error } = useWeatherData(city, language); // Using custom hook
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  if (error) return <div>{error}</div>;
  if (!weatherData) return <div className="loading-text">{t('Loading')}</div>;

  const dailyForecasts = groupForecastsByDay(weatherData.list);

  return (
    <div className="cloudBackground">
      <CloudAnimation /> {/* Cloud animation component */}
      <animated.div style={{ ...fade }} className="container">
        <h2 className="title">{t('Weather in')} {t(city)}</h2>

        {/* Main card component */}
        <MainCard weatherData={weatherData} />

        {/* Weather details using DetailCard */}
        <div className="details">
          <DetailCard icon={FaTint} label={t('Humidity')} value={`${weatherData.list[0].main.humidity} ${t('%')}`} animationClass="vibrateIcon" iconColor="#007bff" />
          <DetailCard icon={FaTemperatureHigh} label={t('Pressure')} value={`${weatherData.list[0].main.pressure} ${t('hPa')}`} animationClass="moveUpDownIcon" iconColor="#754686" />
          <DetailCard icon={FaSun} label={t('Sunrise')} value={new Date(weatherData.city.sunrise * 1000).toLocaleTimeString()} animationClass="rotateIcon" iconColor="#f4fa92" />
          <DetailCard icon={FaRegSun} label={t('Sunset')} value={new Date(weatherData.city.sunset * 1000).toLocaleTimeString()} animationClass="rotateIcon" iconColor="#fbd452" />
          <DetailCard icon={FaEye} label={t('Visibility')} value={`${weatherData.list[0].visibility / 1000} ${t('km')}`} animationClass="fadeInOutIcon" iconColor="#1c3061" />
          <DetailCard icon={FaArrowUp} label={t('Wind Direction')} value={`${weatherData.list[0].wind.deg}°`} animationClass="moveUpDownIcon" iconColor="#ffffff" />
          <DetailCard icon={FaCloud} label={t('Cloudiness')} value={`${weatherData.list[0].clouds.all} ${t('%')}`} animationClass="moveUpDownIcon" iconColor="#e6e6e6" />
          <DetailCard icon={FaWind} label={t('Wind Speed')} value={`${weatherData.list[0].wind.speed} ${t('m/s')}`} animationClass="vibrateIcon" iconColor="#a7f7dc" />
        </div>

      {/* Forecast component to display future weather */}
        <Forecast dailyForecasts={dailyForecasts} />
      </animated.div>
    </div>
  );
};

export default WeatherDisplay;
