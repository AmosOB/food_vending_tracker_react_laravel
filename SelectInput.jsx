// SelectInput.jsx

import React, { forwardRef, useEffect, useRef } from 'react';

const SelectInput = forwardRef(({ className = '', isFocused = false, options = [], value, ...props }, ref) => {
  const select = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      select.current.focus();
    }
  }, [isFocused]);

  return (
    <select
      {...props}
      className={
        'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
        className
      }
      ref={select}
      value={value}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

export default SelectInput;
