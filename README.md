# Weather App

## Overview

**Weather App** is a weather forecasting application that provides real-time weather updates for various cities. Built with React and incorporating multilingual support, the app allows users to view weather information and switch between languages seamlessly. 

This project was developed as a technical test by Vitalia.

## Latest Updates and Enhancements

In the latest commit, the following changes and enhancements were implemented:

- **Vite Integration:**  
  Vite was integrated as the build tool for faster development and improved performance. Vite provides an optimized development experience with instant server start and hot module replacement (HMR).

- **TypeScript Integration:**  
TypeScript was introduced to add static type checking, improving code reliability and developer productivity. It enhances the development process by catching errors early and offering better tooling support, such as autocomplete and refactoring capabilities.

- **SASS Integration:**  
  SASS (Syntactically Awesome Style Sheets) was integrated into the project to improve the maintainability and scalability of the application's styles. This allows for better management of variables, mixins, and reusable styles.
  
- **Jest Testing:**  
  Unit tests were added using Jest to ensure the reliability of the key components in the application, such as `WeatherDisplay`, `Sidebar`, and `Modal`. These tests ensure that changes in the code do not break existing functionality.

- **Code Refactoring:**  
  The codebase was refactored for improved readability and performance. Components were modularized, and common functionality was extracted into utility files for better reusability and maintenance. Some of the key refactored components include:
  - `WeatherDisplay` component: Refined to better handle weather data and UI rendering.
  - `Sidebar` and related components: Broken down into smaller components (`CityDropdown`, `ContactFormButton`, etc.) to improve structure.
  
- **UI/UX Design Improvement:**  
  Several UI enhancements were made to improve user experience. The design was made more responsive, cleaner, and more intuitive, providing a seamless experience across different devices (desktop and mobile).

- **Bug Fixes and Optimizations:**
  - Resolved various bugs related to data fetching and API key handling.
  - Optimized performance by minimizing unnecessary re-renders and improving the overall component structure.

## Features

- **Real-time Weather Updates:** Displays current weather conditions for selected cities.
- **Multilingual Support:** Switch between different languages using the integrated language toggle.
- **User Form:** A modal form is available for users to submit their contact details.



## Technologies Used

- **React:** Front-end library for building user interfaces.
- **Vite:** Modern build tool providing fast development and optimized production builds.
- **i18next:** Internationalization library for supporting multiple languages.
- **SASS:** CSS preprocessor to make styles more maintainable.
- **Jest:** JavaScript testing framework to ensure the reliability of components.
- **OpenWeatherMap API:** Provides real-time weather data.
- **TypeScript:** Adds type safety and better tooling for the development process.

## Installation

## Prerequisites
- Node.js v14+ 

To get started with this project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/weather-app.git

2. **Navigate to the Project Directory**
     cd weather-app

3. **Install Dependencies**
     npm install

3. **Start the Development Server**
     npm start

The application will be available at http://localhost:3000.

## API Key Setup
Create a `.env` file in the root directory and add your API key:
VITE_OPENWEATHER_API_KEY=your_api_key_here


## Usage
  Changing City: Use the sidebar to enter and select a city to view its weather forecast.

  Language Toggle: Click the language toggle button to switch between available languages.

  Contact Form: Click the User form button in the sidebar to open the modal and submit your details.

## Testing
To run the tests, use:
npm test

## Build
To create a production build, use:
npm run build

This will generate a build directory with the production-ready version of your app.

## Acknowledgements
i18next: For internationalization support.
OpenWeatherMap API: For providing weather data.

## Contact
For any questions or feedback, please contact:

Name: Vitalia Koblianska
Email: k.vitalya13@gmail.com
GitHub: VitaliaDev

Weather App © 2024 Vitalia Koblianska. All rights reserved.







