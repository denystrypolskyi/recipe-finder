import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DishInfo from "../components/DishInfo";
import IngredientsList from "../components/IngredientsList";
import InstructionsList from "../components/InstructionsList";
import ErrorMessage from "../components/ErrorMessage";
import NavBar from "../components/NavBar";

const ResultPage = () => {
  const { query } = useParams();
  const [dishInfo, setDishInfo] = useState(null);
  const [dishIngredients, setDishIngredients] = useState([]);
  const [dishInstructions, setDishInstructions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
console.log(process.env.REACT_APP_SPOONACULAR_API_KEY);

  const fetchDishData = useCallback(async () => {
    try {
      const urlDishInfo = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;
      const {
        data: { results },
      } = await axios.get(urlDishInfo);
      const [newDishInfo] = results;
      setDishInfo(newDishInfo);

      const urlDishIngredients = `https://api.spoonacular.com/recipes/${newDishInfo.id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;
      const {
        data: { ingredients },
      } = await axios.get(urlDishIngredients);
      setDishIngredients(ingredients);

      const urlDishInstructions = `https://api.spoonacular.com/recipes/${newDishInfo.id}/analyzedInstructions?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;
      const {
        data: [instructionsData],
      } = await axios.get(urlDishInstructions);
      const instructions =
        instructionsData?.steps.map((step) => step.step) || [];
      setDishInstructions(instructions);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchDishData();
  }, [fetchDishData]);

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col">
        <NavBar />
        <div className="flex flex-1 justify-center items-center">
          <p className="text-xl text-center font-bold">
            Loading... <br />
            (If this message doesn't disappear for a long time, then go to the
            home page and try again)
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    console.error(error.response.data.message);

    return (
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-1 justify-center items-center">
          <ErrorMessage message="Error fetching data. Please try again later." />
        </div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <DishInfo dish={dishInfo} />
      <div className="flex mb-2">
        <IngredientsList ingredients={dishIngredients} />
        <InstructionsList instructions={dishInstructions} />
      </div>
    </>
  );
};

export default ResultPage;
