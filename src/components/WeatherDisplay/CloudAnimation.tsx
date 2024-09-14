import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud } from 'react-icons/fa';
import './WeatherDisplay.scss';

const CloudAnimation: React.FC = () => (
  <>
    {/* First cloud with slower speed */}
    <motion.div
      initial={{ x: '650%' }}
      animate={{ x: '-650%' }}
      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      className="cloudIcon"
    >
      <FaCloud />
    </motion.div>

    {/* Second cloud with faster speed */}
    <motion.div
      initial={{ x: '650%' }}
      animate={{ x: '-650%' }}
      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      className="cloudIcon2"
    >
      <FaCloud />
    </motion.div>
  </>
);

export default CloudAnimation;
