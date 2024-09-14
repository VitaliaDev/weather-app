export interface WeatherData {
    list: Array<{
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
      };
      weather: {
        description: string;
        icon: string;
      }[];
      wind: {
        speed: number;
        deg: number;
      };
      visibility: number;
      clouds: {
        all: number;
      };
      dt: number; // timestamp
    }>;
    city: {
      name: string;
      sunrise: number; 
      sunset: number; 
    };
  }
  