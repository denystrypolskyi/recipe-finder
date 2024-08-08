import React from "react";

const SearchButton = ({ onClick }) => {
  return (
    <button
      className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded w-full p-2 focus:outline-none focus:ring focus:ring-blue-300 transition duration-300"
      onClick={onClick}
    >
      Search
    </button>
  );
};

export default SearchButton;
