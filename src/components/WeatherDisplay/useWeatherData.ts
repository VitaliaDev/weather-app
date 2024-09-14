import { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherData } from '../../types/weather';

// Define a function to get the API key based on the environment
const getApiKey = () => {
  if (process.env.NODE_ENV === 'test') {
    // Use process.env during testing
    return process.env.REACT_APP_OPENWEATHER_API_KEY; // Update the variable name if needed
  } else {
    // Use import.meta.env in other environments
    return import.meta.env.VITE_OPENWEATHER_API_KEY;
  }
};

const useWeatherData = (city: string, language: string) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = getApiKey();
        if (!apiKey) throw new Error("API key is missing");

        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=${language}`;
        const response = await axios.get<WeatherData>(url);

        if (response.status !== 200) throw new Error(`Error: ${response.statusText}`);

        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
        console.error('Error fetching weather data:', errorMessage);
        setError(`Error fetching weather data: ${errorMessage}`);
      }
    };

    fetchWeather();
  }, [city, language]);

  return { weatherData, error };
};

export default useWeatherData;
