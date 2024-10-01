// components/InputField.js
import React from 'react';

const InputField = ({ label, type, id, placeholder, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-duckYellow">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 border-duckYellow border-2 rounded-lg bg-yellow-100 placeholder-duckOrange text-black focus:outline-none focus:ring-2 focus:ring-duckYellow"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
