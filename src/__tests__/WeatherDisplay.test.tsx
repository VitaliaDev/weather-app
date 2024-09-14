import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import WeatherDisplay from '../components/WeatherDisplay/WeatherDisplay';

// Mock the custom hook
jest.mock('../components/WeatherDisplay/useWeatherData', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockUseWeatherData = require('../components/WeatherDisplay/useWeatherData').default;

describe('WeatherDisplay', () => {
  const city = 'New York';
  const language = 'en';
  const apiKey = 'mock_api_key'; // This value will be used only if needed

  it('renders weather data correctly', async () => {
    const mockWeatherData = {
      list: [
        {
          main: {
            temp: 20,
            feels_like: 18,
            temp_min: 15,
            temp_max: 25,
            pressure: 1015,
            humidity: 60,
          },
          weather: [
            { description: 'clear sky', icon: '01d' },
          ],
          wind: { speed: 5, deg: 180 },
          visibility: 10000,
          clouds: { all: 0 },
          dt: 1609459200,
        },
      ],
      city: {
        name: city,
        sunrise: 1609465200,
        sunset: 1609510800,
      },
    };

    mockUseWeatherData.mockReturnValue({ weatherData: mockWeatherData, error: null });

    render(<WeatherDisplay city={city} language={language} apiKey={apiKey} />);

    // Wait for the UI updates after data is rendered
    await waitFor(() => {
      expect(screen.getByText(/Humidity/)).toBeInTheDocument();
      expect(screen.getByText(/60 %/)).toBeInTheDocument();
    });
  });

  it('displays error message when API call fails', async () => {
    mockUseWeatherData.mockReturnValue({ weatherData: null, error: 'Failed to fetch weather data' });

    render(<WeatherDisplay city={city} language={language} apiKey={apiKey} />);

    // Wait for the UI updates after error is rendered
    await waitFor(() => {
      expect(screen.getByText('Failed to fetch weather data')).toBeInTheDocument();
    });
  });
});
