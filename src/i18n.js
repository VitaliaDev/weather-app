import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18n with React integration
i18n
  // Use the React i18next module
  .use(initReactI18next)
  // Configure i18n
  .init({
    // Define translation resources for different languages
    resources: {
      // English translations
      en: {
        translation: {
          "Cities": "Cities",
          "User Form": "User Form",
          "London": "London",
          "Toronto": "Toronto",
          "Singapore": "Singapore",
          "Weather in": "Weather in",
          "Humidity": "Humidity",
          "Wind Speed": "Wind Speed",
          "Wind Direction": "Wind Direction",
          "Visibility": "Visibility",
          "Cloudiness": "Cloudiness",
          "Sunrise": "Sunrise",
          "Sunset": "Sunset",
          "Pressure": "Pressure",
          "Feels like": "Feels like",
          "Min": "Min",
          "Max": "Max",
          "°C": "°C",
          "km": "km",
          "m/s": "m/s",
          "%": "%",
          "hPa": "hPa",
          'Enter your name': 'Enter your name',
          'Enter your email': 'Enter your email',
          'Enter your message': 'Enter your message',
          'Name': 'Name',
          'Birthdate': 'Birthdate',
          'City': 'City',
          'Email': 'Email',
          'Phone': 'Phone',
          'Enter your phone number': 'Enter your phone number',
          'Submit': 'Submit',
          'Name is required': 'Name is required',
          'Name cannot contain numbers': 'Name cannot contain numbers',
          'Birthdate is required': 'Birthdate is required',
          'Birthdate cannot be in the future': 'Birthdate cannot be in the future',
          'City is required': 'City is required',
          'City cannot contain numbers': 'City cannot contain numbers',
          'Email is required': 'Email is required',
          'Email is invalid': 'Email is invalid',
          'Phone is required': 'Phone is required',
          'Phone number must be 9 digits and contain only numbers': 'Phone number must be 9 digits and contain only numbers',
          'Form submitted successfully!': 'Form submitted successfully!',
          "Please fill out the form below": "Please fill out the form below",
          "Loading...": "Loading..."
        }
      },
      // Spanish translations
      es: {
        translation: {
          "Cities": "Ciudades",
          "User Form": "Formulario de Usuario",
          "London": "Londres",
          "Toronto": "Toronto",
          "Singapore": "Singapur",
          "Weather in": "El clima en",
          "Humidity": "Humedad",
          "Wind Speed": "Velocidad del Viento",
          "Wind Direction": "Dirección del Viento",
          "Visibility": "Visibilidad",
          "Cloudiness": "Nubosidad",
          "Sunrise": "Amanecer",
          "Sunset": "Atardecer",
          "Pressure": "Presión",
          "Feels like": "Sensación térmica",
          "Min": "Mín",
          "Max": "Máx",
          "°C": "°C",
          "km": "km",
          "m/s": "m/s",
          "%": "%",
          "hPa": "hPa",
          'Enter your name': 'Ingresa tu nombre',
          'Enter your email': 'Ingresa tu correo electrónico',
          'Enter your message': 'Ingresa tu mensaje',
          'Name': 'Nombre',
          'Birthdate': 'Fecha de nacimiento',
          'City': 'Ciudad',
          'Email': 'Correo electrónico',
          'Phone': 'Teléfono',
          'Enter your phone number': 'Ingresa tu número de teléfono',
          'Submit': 'Enviar',
          'Name is required': 'Nombre es requerido',
          'Name cannot contain numbers': 'El nombre no puede contener números',
          'Birthdate is required': 'Fecha de nacimiento es requerida',
          'Birthdate cannot be in the future': 'La fecha de nacimiento no puede ser en el futuro',
          'City is required': 'Ciudad es requerida',
          'City cannot contain numbers': 'La ciudad no puede contener números',
          'Email is required': 'Correo electrónico es requerido',
          'Email is invalid': 'El correo electrónico no es válido',
          'Phone is required': 'Teléfono es requerido',
          'Phone number must be 9 digits and contain only numbers': 'El número de teléfono debe tener 9 dígitos y contener solo números',
          'Please fill out the form below': 'Por favor, complete el formulario a continuación',
          'Form submitted successfully!': '¡Formulario enviado con éxito!',
          'Loading...': 'Cargando...'
        }
      }
    },
    // Default language
    lng: "en", 
    // Fallback language in case the specified language is not available
    fallbackLng: "en",
    // Configure interpolation settings
    interpolation: {
      escapeValue: false // React already escapes values to prevent XSS attacks
    }
  });

export default i18n;
