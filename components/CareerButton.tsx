// ThemeToggleButton.tsx
import React from 'react';

interface Props {
  isActivated: boolean;
  handleButtonClick: () => void;
  isButtonDisabled: boolean;
  buttonText: string;
  buttonColor: string;
}

const ThemeToggleButton: React.FC<Props> = ({ 
  isActivated, 
  handleButtonClick, 
  isButtonDisabled, 
  buttonText, 
  buttonColor 
}) => {
  const buttonClass = isActivated ? 'night-btn' : 'day-btn';

  return (
    <button
      onClick={handleButtonClick}
      disabled={isButtonDisabled}
      className={`h-20 w-10 fixed top-1/4 right-0 z-50 text-white p-1 rounded-md text-xs flex items-center justify-center ${buttonColor === 'blue-500' ? 'bg-blue-500' : 'bg-black'}`}
    >
      <span className="transform -rotate-90">{buttonText}</span>
    </button>
  );
}

export default ThemeToggleButton;
