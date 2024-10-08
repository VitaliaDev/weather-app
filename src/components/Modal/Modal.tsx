import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Modal.scss';

interface ModalProps {
  show: boolean;
  handleClose: () => void;
}

interface FormData {
  name: string;
  birthdate: string;
  city: string;
  email: string;
  phone: string;
}

interface FormError {
  name?: string;
  birthdate?: string;
  city?: string;
  email?: string;
  phone?: string;
}

const Modal: React.FC<ModalProps> = ({ show, handleClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthdate: '',
    city: '',
    email: '',
    phone: ''
  });
  const [formError, setFormError] = useState<FormError>({});
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [isHovered, setHovered] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); // Track if the form is submitted

  // Close modal and reset form
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
    setIsSubmitted(false); // Reset submission state when the modal is closed
    handleClose();
  };

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Validate form fields
  const validateForm = (): FormError => {
    const { name, birthdate, city, email, phone } = formData;
    let errors: FormError = {};

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

  // Check if the form is valid
  const isFormValid = (): boolean => {
    return Object.keys(validateForm()).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      setSuccessMessage('');
    } else {
      setSuccessMessage(t('Form submitted successfully!'));
      setFormError({});
      setIsSubmitted(true); 
      setTimeout(() => {
        handleModalClose();
      }, 2000);
    }
  };

  return (
    <div 
    className={`modal ${show ? 'show' : 'hide'}`} 
    onClick={handleModalClose}
    role="dialog"
    aria-labelledby="modal-title"
  >   <section className="modal-main" onClick={(e) => e.stopPropagation()}>
        <h2 id="modal-title">{t('User Form')}</h2>
        {isSubmitted ? (
          <p className="success-text">{successMessage}</p> // Show success message if submitted
        ) : (
          <>
            <form className="form" role="form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                placeholder={t('Enter your name')}
                aria-required="true"
                 aria-label="name"

              />
              {formError.name && <p className="error-text">{formError.name}</p>}

              <input
                type="date"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                className="input"
                aria-required="true"
                aria-label="birthdate"
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
                 aria-label="city"
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
                aria-label="email"
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
                aria-label="phone"
              />
              {formError.phone && <p className="error-text">{formError.phone}</p>}

              <button type="submit" className={`button ${isFormValid() ? '' : 'button-disabled'}`}>
                {t('Submit')}
              </button>
            </form>
          </>
        )}
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
