import React from 'react';
import { useTranslation } from 'react-i18next';
import userIcon from '../../assets/icons/user_icon.png';

interface ContactFormButtonProps {
  toggleContactForm: () => void;// Function to toggle the contact form visibility
}

const ContactFormButton: React.FC<ContactFormButtonProps> = ({ toggleContactForm }) => {
  const { t } = useTranslation(); // Translation hook

  return (
    <div className="sidebar-item" onClick={toggleContactForm}>
      <img src={userIcon} alt={t('User Form')} className="icon" />
      <span>{t('User Form')}</span>
    </div>
  );
};

export default ContactFormButton;