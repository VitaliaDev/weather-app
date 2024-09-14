import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageToggle from '../components/LanguageToggle/LanguageToggle'; // Ensure this path is correct

// Mock image imports used in LanguageToggle
jest.mock('../assets/icons/uk_flag.webp', () => 'ukFlagUrl');
jest.mock('../assets/icons/es_flag.png', () => 'esFlagUrl');

describe('LanguageToggle', () => {

// Check if the component renders the correct flag for Spanish language
  test('renders with Spain flag when language is Spanish', () => {
    render(
      <LanguageToggle 
        currentLanguage="es" 
        onLanguageChange={jest.fn()} 
      />
    );

    const sliderIcon = screen.getByTestId('slider-icon');
    expect(sliderIcon).toHaveStyle(`background-image: url(esFlagUrl)`);
  });


// Verify that clicking the checkbox changes the language from English to Spanish
  test('toggles language from English to Spanish', () => {
    const onLanguageChange = jest.fn();
    
    render(
      <LanguageToggle 
        currentLanguage="en" 
        onLanguageChange={onLanguageChange} 
      />
    );

    const checkbox = screen.getByTestId('language-checkbox');
    fireEvent.click(checkbox);

    expect(onLanguageChange).toHaveBeenCalledWith('es');
  });

// Verify that clicking the checkbox changes the language from Spanish to English
  test('toggles language from Spanish to English', () => {
    const onLanguageChange = jest.fn();
    
    render(
      <LanguageToggle 
        currentLanguage="es" 
        onLanguageChange={onLanguageChange} 
      />
    );

    const checkbox = screen.getByTestId('language-checkbox');
    fireEvent.click(checkbox);

    expect(onLanguageChange).toHaveBeenCalledWith('en');
  });
});
