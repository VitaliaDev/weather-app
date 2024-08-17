import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';
import {
  FaTemperatureHigh, FaWind, FaTint, FaCloud, FaSun, FaRegSun, FaEye, FaArrowUp
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../styles/WeatherDisplay.css';

// Define the types for weather data
interface WeatherData {
  main: {
    temp: number;  // Current temperature
    feels_like: number;  // Feels like temperature
    temp_min: number;  // Minimum temperature
    temp_max: number;  // Maximum temperature
    pressure: number;  // Atmospheric pressure
    humidity: number;  // Humidity percentage
  };
  wind: {
    speed: number;  // Wind speed
    deg: number;  // Wind direction in degrees
  };
  weather: {
    description: string;  // Weather description
    icon: string;  // Weather icon code
  }[];
  visibility: number;  // Visibility in meters
  sys: {
    sunrise: number;  // Sunrise time in Unix timestamp
    sunset: number;  // Sunset time in Unix timestamp
  };
  clouds: {
    all: number;  // Cloudiness percentage
  };
}

// Define the props for the WeatherDisplay component
interface WeatherDisplayProps {
  city: string;  // City for which weather is displayed
  language: string;  // Language for weather descriptions
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ city, language }) => {
  const { t } = useTranslation();
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);  // State to store weather data
  const [error, setError] = useState<string | null>(null);  // State to store error messages

  // Fade-in animation using react-spring
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  // Fetch weather data whenever city or language changes
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;  // Get API key from environment variables
        if (!apiKey) {
          throw new Error("API key is missing");
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${language}`;
        const response = await axios.get<WeatherData>(url);
        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Error fetching weather data. Please try again later.');  // Set error message if fetching fails
      }
    };

    fetchWeather();
  }, [city, language]);

  // Display error message if there's an error
  if (error) {
    return <div>{error}</div>;
  }

  // Display loading message if weather data is not available yet
  if (!weatherData) {
    return <div>{t('Loading...')}</div>;
  }

  // Destructure weather data for easier access
  const {
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed, deg },
    weather,
    visibility,
    sys: { sunrise, sunset },
    clouds: { all: cloudiness },
  } = weatherData;

  // Capitalize the first letter of a string
  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Weather description and icon
  const weatherDescription = capitalizeFirstLetter(weather[0].description);
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;

  // Component to display detailed weather information
  const DetailCard: React.FC<{
    icon: React.ElementType;  // Icon component
    label: string;  // Label for the detail
    value: string;  // Value to display
    iconColor: string;  // Color for the icon
    animationClass: string;  // CSS class for animation
  }> = ({ icon: Icon, label, value, iconColor, animationClass }) => {
    return (
      <motion.div
        className="detailCard"
        whileHover={{ scale: 1.1 }}  // Scale up on hover
        whileTap={{ scale: 0.9 }}  // Scale down on tap
      >
        <motion.div
          className={animationClass}
          style={{ color: iconColor }}
        >
          <Icon className="detailIcon" />
        </motion.div>
        <p className="detailText">{label}</p>
        <p className="detailText">{value}</p>
      </motion.div>
    );
  };

  // Format the time from Unix timestamp
  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="cloudBackground">
      <motion.div
        initial={{ x: '-1500%' }}
        animate={{ x: '1500%' }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="cloudIcon"
      >
        <FaCloud />
      </motion.div>

      <motion.div
        initial={{ x: '1500%' }}
        animate={{ x: '-1500%' }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="cloudIcon2"
      >
        <FaCloud />
      </motion.div>

      <animated.div style={{ ...fade }} className="container">
        <h2 className="title">{t('Weather in')} {t(city)}</h2>
        <div className="mainCard">
          <p className="temp">{Math.round(temp)}{t('°C')}</p>
          <div className="mainCardInfo">
            <img src={weatherIcon} alt={weatherDescription} className="img" />
            <p className="textDescription">{weatherDescription}</p>
            <p className="text">{t('Min')}: {Math.round(temp_min)}{t('°C')}, {t('Max')}: {Math.round(temp_max)}{t('°C')}</p>
            <p className="text">{t('Feels like')}: {Math.round(feels_like)}{t('°C')}</p>
          </div>
        </div>
        <div className="details">
          <DetailCard icon={FaTint} label={t('Humidity')} value={`${humidity} ${t('%')}`} animationClass="vibrateIcon" iconColor="#007bff" />
          <DetailCard icon={FaTemperatureHigh} label={t('Pressure')} value={`${pressure} ${t('hPa')}`} animationClass="moveUpDownIcon" iconColor="#754686" />
          <DetailCard icon={FaSun} label={t('Sunrise')} value={formatTime(sunrise)} animationClass="rotateIcon" iconColor="#f4fa92" />
          <DetailCard icon={FaRegSun} label={t('Sunset')} value={formatTime(sunset)} animationClass="rotateIcon" iconColor="#fbd452" />
          <DetailCard icon={FaEye} label={t('Visibility')} value={`${visibility / 1000} ${t('km')}`} animationClass="fadeInOutIcon" iconColor="#1c3061" />
          <DetailCard icon={FaArrowUp} label={t('Wind Direction')} value={`${deg}°`} animationClass="moveUpDownIcon" iconColor="#ffffff" />
          <DetailCard icon={FaCloud} label={t('Cloudiness')} value={`${cloudiness} ${t('%')}`} animationClass="moveUpDownIcon" iconColor="#e6e6e6" />
          <DetailCard icon={FaWind} label={t('Wind Speed')} value={`${speed} ${t('m/s')}`} animationClass="vibrateIcon" iconColor="#a7f7dc" />
        </div>
      </animated.div>
    </div>
  );
};

export default WeatherDisplay;
