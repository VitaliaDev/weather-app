import React from 'react';

interface MinimizeButtonProps {
  isMinimized: boolean;
  onToggle: () => void;
}

const MinimizeButton: React.FC<MinimizeButtonProps> = ({ isMinimized, onToggle }) => {
  return (
    <button
      className="minimize-button"
      onClick={onToggle}
      style={{
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
    >
      {isMinimized ? '>' : '<'}
    </button>
  );
};

export default MinimizeButton;
