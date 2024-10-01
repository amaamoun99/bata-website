import React from 'react';

const SelectField = ({ value, onChange, options = [], name = '', className = '', placeholder = 'Select an option' }) => {
  return (
    <select
      value={value} // Current selected value
      onChange={onChange} // Function to handle value changes
      name={name} // Name attribute for the select field
      className={className} // Additional CSS classes if any
    >
      {/* Placeholder option */}
      <option value="" disabled>
        {placeholder}
      </option>

      {/* Rendering options dynamically */}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
