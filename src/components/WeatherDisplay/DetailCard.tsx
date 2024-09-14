import React from 'react';
import { motion } from 'framer-motion';
import './WeatherDisplay.scss';

interface DetailCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  iconColor: string;
  animationClass: string;
}

const DetailCard: React.FC<DetailCardProps> = ({ icon: Icon, label, value, iconColor, animationClass }) => (
  <motion.div
    className="detailCard"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
     {/* Icon section with dynamic color and animation class */}
    <motion.div
      className={animationClass}
      style={{ color: iconColor }}
    >
      {/* Label and value section */}
      <Icon className="detailIcon" />
    </motion.div>
    <p className="detailText">{label}</p>
    <p className="detailText">{value}</p>
  </motion.div>
);

export default DetailCard;
