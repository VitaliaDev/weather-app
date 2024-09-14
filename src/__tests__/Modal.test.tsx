import React from 'react'; 
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../components/Modal/Modal';

// Mock useTranslation hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: any) => key // Return the key for simplicity
  })
}));

describe('Modal Component', () => {
  const handleClose = jest.fn();

  // Clear mocks before each test to ensure isolation
  beforeEach(() => {
    jest.clearAllMocks();
  });

   // Test: Calls handleClose when clicking outside the modal
  it('should call handleClose when clicking outside the modal', () => {
    render(<Modal show={true} handleClose={handleClose} />);
    fireEvent.click(screen.getByRole('dialog'));
    expect(handleClose).toHaveBeenCalled();
  });

  // Test: Does not call handleClose when clicking inside the modal
  it('should not call handleClose when clicking inside the modal', () => {
    render(<Modal show={true} handleClose={handleClose} />);
    fireEvent.click(screen.getByText('User Form'));
    expect(handleClose).not.toHaveBeenCalled();
  });

   // Test: Shows error messages for required fields when form is submitted empty
  it('should validate form and show error messages', async () => {
    render(<Modal show={true} handleClose={handleClose} />);

    fireEvent.submit(screen.getByRole('form'));

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(await screen.findByText('Birthdate is required')).toBeInTheDocument();
    expect(await screen.findByText('City is required')).toBeInTheDocument();
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(await screen.findByText('Phone is required')).toBeInTheDocument();
  });

  // Test: Shows success message and calls handleClose on successful form submission
  it('should show success message on successful form submission', async () => {
    render(<Modal show={true} handleClose={handleClose} />);

    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText('Enter your name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('birthdate'), { target: { value: '2000-01-01' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your city'), { target: { value: 'New York' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your phone number'), { target: { value: '123456789' } });

    // Submit form
    fireEvent.submit(screen.getByRole('form'));

    // Verify success message and handleClose call
    await waitFor(() => {
      expect(screen.getByText('Form submitted successfully!')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    }, { timeout: 3000 });
  });
});
