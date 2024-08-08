import React from "react";
import useSearchForm from "../hooks/useSearchForm";
import SearchInput from "../components/SearchInput";
import SearchButton from "../components/SearchButton";
import NavBar from "../components/NavBar";

const SearchPage = () => {
  const { userInput, updateUserInput, handleSearch } = useSearchForm();

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-1 flex justify-center items-center">
        <div>
          <p className="font-bold text-2xl p-4 w-[700px] text-center">
            Enter the name of the dish and press the search button to see the
            magic
          </p>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md w-[400px] mx-auto">
            <SearchInput
              value={userInput}
              onChange={updateUserInput}
              placeholder="Enter dish name"
            />
            <SearchButton onClick={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
