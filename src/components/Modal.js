import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Modal.css'; 

//Modal to fill a user contact form
const Modal = ({ show, handleClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    city: '',
    email: '',
    phone: ''
  });
  const [formError, setFormError] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isHovered, setHovered] = useState(false);

  // Clear form data and messages when closing the modal
  const handleModalClose = () => {
    setFormData({
      name: '',
      birthdate: '',
      city: '',
      email: '',
      phone: ''
    });
    setFormError({});
    setSuccessMessage('');
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, birthdate, city, email, phone } = formData;
    let errors = {};

    if (!name) errors.name = t('Name is required');
    if (name && /\d/.test(name)) errors.name = t('Name cannot contain numbers');

    if (!birthdate) errors.birthdate = t('Birthdate is required');
    if (birthdate && new Date(birthdate) > new Date()) errors.birthdate = t('Birthdate cannot be in the future');

    if (!city) errors.city = t('City is required');
    if (city && /\d/.test(city)) errors.city = t('City cannot contain numbers');

    if (!email) errors.email = t('Email is required');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = t('Email is invalid');

    if (!phone) errors.phone = t('Phone is required');
    if (phone && !/^\d{9}$/.test(phone)) errors.phone = t('Phone number must be 9 digits and contain only numbers');

    return errors;
  };

  const isFormValid = () => {
    return Object.keys(validateForm()).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormError(errors); // Set errors
      setSuccessMessage('');
    } else {
      setSuccessMessage(t('Form submitted successfully!'));
      setFormError({});
      setTimeout(() => {
        handleModalClose();
      }, 2000); // Close modal after 2 seconds
    }
  };

  return (
    <div
      className={`modal ${show ? 'show' : 'hide'}`}
      onClick={handleModalClose}
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <section
        className="modal-main"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title">{t('User Form')}</h2>
        <p id="modal-description">{t('Please fill out the form below')}</p>
        {successMessage && <p className="success-text">{successMessage}</p>}
        <form
          className="form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder={t('Enter your name')}
            aria-required="true"
          />
          {formError.name && <p className="error-text">{formError.name}</p>}
          
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            className="input"
            aria-required="true"
          />
          {formError.birthdate && <p className="error-text">{formError.birthdate}</p>}
          
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="input"
            placeholder={t('Enter your city')}
            aria-required="true"
          />
          {formError.city && <p className="error-text">{formError.city}</p>}
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder={t('Enter your email')}
            aria-required="true"
          />
          {formError.email && <p className="error-text">{formError.email}</p>}
          
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
            placeholder={t('Enter your phone number')}
            aria-required="true"
          />
          {formError.phone && <p className="error-text">{formError.phone}</p>}
          
          <button
            type="submit"
            className={`button ${isFormValid() ? '' : 'button-disabled'}`}
          >
            {t('Submit')}
          </button>
        </form>
        <button
          className={`close-button ${isHovered ? 'close-button-hover' : ''}`}
          onClick={handleModalClose}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          &times;
        </button>
      </section>
    </div>
  );
};

export default Modal;
