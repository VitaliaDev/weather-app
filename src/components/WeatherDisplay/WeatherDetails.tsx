import React from 'react';
import DetailCard from './DetailCard';
import { FaTemperatureHigh, FaWind, FaTint, FaCloud, FaSun, FaRegSun, FaEye, FaArrowUp } from 'react-icons/fa';
import { formatTime } from '../../utils/index';
import { useTranslation } from 'react-i18next';
import { WeatherData } from '@/types/weather';
import './WeatherDisplay.scss';

// WeatherDetails component displays detailed weather data
const WeatherDetails: React.FC<{ weatherData: WeatherData }> = ({ weatherData }) => {
  const { t } = useTranslation();
  return (
    <div className="details">
      <DetailCard icon={FaTint} label={t('Humidity')} value={`${weatherData.list[0].main.humidity} ${t('%')}`} animationClass="vibrateIcon" iconColor="#007bff" />
      <DetailCard icon={FaTemperatureHigh} label={t('Pressure')} value={`${weatherData.list[0].main.pressure} ${t('hPa')}`} animationClass="moveUpDownIcon" iconColor="#754686" />
      <DetailCard icon={FaSun} label={t('Sunrise')} value={formatTime(weatherData.city.sunrise)} animationClass="rotateIcon" iconColor="#f4fa92" />
      <DetailCard icon={FaRegSun} label={t('Sunset')} value={formatTime(weatherData.city.sunset)} animationClass="rotateIcon" iconColor="#fbd452" />
      <DetailCard icon={FaEye} label={t('Visibility')} value={`${weatherData.list[0].visibility / 1000} ${t('km')}`} animationClass="fadeInOutIcon" iconColor="#1c3061" />
      <DetailCard icon={FaArrowUp} label={t('Wind Direction')} value={`${weatherData.list[0].wind.deg}°`} animationClass="moveUpDownIcon" iconColor="#ffffff" />
      <DetailCard icon={FaCloud} label={t('Cloudiness')} value={`${weatherData.list[0].clouds.all} ${t('%')}`} animationClass="moveUpDownIcon" iconColor="#e6e6e6" />
      <DetailCard icon={FaWind} label={t('Wind Speed')} value={`${weatherData.list[0].wind.speed} ${t('m/s')}`} animationClass="vibrateIcon" iconColor="#a7f7dc" />
    </div>
  );
};

export default WeatherDetails;
