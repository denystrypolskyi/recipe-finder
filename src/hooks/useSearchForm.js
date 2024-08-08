import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useSearchForm = () => {
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  const updateUserInput = useCallback((event) => {
    setUserInput(event.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    const trimmedInput = userInput.trim();
    if (trimmedInput) {
      navigate(`/result/${encodeURIComponent(trimmedInput)}`);
    }
  }, [userInput, navigate]);

  return { userInput, updateUserInput, handleSearch };
};

export default useSearchForm;
