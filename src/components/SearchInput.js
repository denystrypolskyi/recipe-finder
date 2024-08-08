import React from 'react';

const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="border rounded w-full p-2 focus:ring focus:ring-blue-300 focus:border-blue-300 transition focus:outline-none"
      placeholder={placeholder}
      onChange={onChange}
      type="text"
      value={value}
    />
  );
};

export default SearchInput;
