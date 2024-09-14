// __tests__/Sidebar.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from '../components/Sidebar/Sidebar';

const mockOnCityChange = jest.fn();
const mockToggleContactForm = jest.fn();

const defaultProps = {
  currentCity: 'London',
  onCityChange: mockOnCityChange,
  showContactForm: false,
  toggleContactForm: mockToggleContactForm,
  language: 'en',
};

describe('Sidebar Component', () => {
    test('toggles sidebar minimize state', () => {
        render(<Sidebar {...defaultProps} />);
        
        // Initially, the sidebar is not minimized
        expect(screen.getByText('Cities')).toBeInTheDocument();
        
        // Click the minimize button
        fireEvent.click(screen.getByRole('button', { name: '<' }));
        
           });
      

  test('changes city and calls onCityChange', () => {
    render(<Sidebar {...defaultProps} />);
    
    // Open the dropdown
    fireEvent.click(screen.getByText('Cities'));
    
    // Click on a city
    fireEvent.click(screen.getByText('Toronto'));
    
    // Verify that the onCityChange callback was called
    expect(mockOnCityChange).toHaveBeenCalledWith('Toronto');
  });


  
});
