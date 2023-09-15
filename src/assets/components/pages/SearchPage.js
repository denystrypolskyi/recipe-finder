import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function SearchPage() {
  const [userInput, setUserInput] = useState("");
  const Navigate = useNavigate();

  const updateUserInput = (event) => {
    const newValue = event.target.value;
    setUserInput(newValue);
  };

  const handleSearch = () => {
    Navigate(`/result/${encodeURIComponent(userInput)}`);
  };

  return (
    <div className="flex font-mono">
      <div className="h-96 w-full flex justify-center items-center text-center">
        <p className="font-bold text-3xl p-4">
          Enter name of the dish and press the search button to see the magic
        </p>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md w-1/2 h-2/5 mr-8">
          <input
            className="border rounded w-full p-2 focus:ring focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
            placeholder="Enter dish name"
            onChange={updateUserInput}
            type="text"
            value={userInput}
          />
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded w-full p-2 focus:outline-none focus:ring focus:ring-blue-300 transition duration-300"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
