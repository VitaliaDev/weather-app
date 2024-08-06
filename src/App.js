import React, { useState } from 'react';
import i18n from './i18n';
import './styles/App.css'; 
import Sidebar from './components/Sidebar';
import WeatherDisplay from './components/WeatherDisplay';
import LanguageToggle from './components/LanguageToggle';
import Modal from './components/Modal';

// Main App component
function App() {
  // State to manage the current language
  const [language, setLanguage] = useState('en');
  // State to manage the selected city
  const [city, setCity] = useState('London');
  // State to toggle the visibility of the contact form modal
  const [showContactForm, setShowContactForm] = useState(false);

  // Handler to change the language
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage); // Update the language state
    i18n.changeLanguage(newLanguage);  // Change language in i18n instance
  };

  // Handler to change the selected city
  const handleCityChange = (newCity) => {
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
        currentCity={city}
        onCityChange={handleCityChange}
        showContactForm={showContactForm}
        toggleContactForm={toggleContactForm}
        language={language}
      />
      {/* Main content area where weather information is displayed */}
      <div className="main-content">
        <WeatherDisplay city={city} language={language} />
      </div>
      {/* Modal component for displaying the contact form */}
      <Modal show={showContactForm} handleClose={toggleContactForm} />
    </div>
  );
}

export default App;
