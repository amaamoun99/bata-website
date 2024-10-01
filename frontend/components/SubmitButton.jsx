// components/SubmitButton.js
import React from 'react';

const SubmitButton = ({ text, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-full py-2 px-4 bg-duckYellow text-duckWhite font-bold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
