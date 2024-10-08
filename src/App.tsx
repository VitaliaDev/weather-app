// src/App.tsx
import React, { useState } from 'react';
import i18n from './i18n'; 
import '../src/assets/styles/main.scss'; 
import Sidebar from './components/Sidebar/Sidebar';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';
import LanguageToggle from './components/LanguageToggle/LanguageToggle';
import Modal from './components/Modal/Modal';
import { Language } from './types/language'; 

const App: React.FC = () => {
  // State to manage the current language
  const [language, setLanguage] = useState<Language>('en'); // Use the Language type
  // State to manage the selected city
  const [city, setCity] = useState<string>('London');
  // State to toggle the visibility of the contact form modal
  const [showContactForm, setShowContactForm] = useState<boolean>(false);

  // Handler to change the language
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage); // Update the language state
    i18n.changeLanguage(newLanguage); // Change language in i18n instance
  };

  // Handler to change the selected city
  const handleCityChange = (newCity: string) => {
    setCity(newCity); // Update the city state
  };

  // Handler to toggle the contact form modal
  const toggleContactForm = () => {
    setShowContactForm(!showContactForm); // Toggle the state between true and false
  };

  return (
    <div className="App">
      {/* Language toggle button to switch between languages */}
      <LanguageToggle
        currentLanguage={language}
        onLanguageChange={handleLanguageChange}
      />
      {/* Sidebar component with city selection and contact form toggle */}
      <Sidebar
        onCityChange={handleCityChange}
        showContactForm={showContactForm}
        toggleContactForm={toggleContactForm}
        currentCity={city}
        language={language}
      />
      {/* Main content area where weather information is displayed */}
      <div className="main-content">
        <WeatherDisplay city={city} language={language} apiKey={''} />
      </div>
      {/* Modal component for displaying the contact form */}
      <Modal show={showContactForm} handleClose={toggleContactForm} />
    </div>
  );
}

export default App;
