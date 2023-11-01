// components/Button.tsx
import React, { useState } from "react";

interface ButtonProps {
  isActivated: boolean;
  onToggle: () => void;
}

const Button: React.FC<ButtonProps> = ({ isActivated, onToggle }) => {
  const [buttonText, setButtonText] = useState("Data Science");
  const [buttonColor, setButtonColor] = useState("blue-500");
  const buttonClass = isActivated ? "night-btn" : "day-btn";
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const themeConfig = {
    light: {
      buttonText: "Data Science",
      buttonColor: "blue-500",
    },
    dark: {
      buttonText: "Research Science",
      buttonColor: "black",
    },
  };

  const handleButtonClick = () => {
    setIsButtonDisabled(true);
    const config = isActivated ? themeConfig.light : themeConfig.dark;
    setButtonText(config.buttonText);
    setButtonColor(config.buttonColor);
    onToggle();

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleButtonClick}
      disabled={isButtonDisabled}
      className={`h-20 w-10 fixed top-1/4 right-0 z-50 text-white p-1 rounded-md text-xs flex items-center justify-center ${
        buttonColor === "blue-500" ? "bg-blue-500" : "bg-black"
      }`}
    >
      <span className="transform -rotate-90">{buttonText}</span>
    </button>
  );
};

export default Button;
