import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ResultPage() {
  const { query } = useParams();
  const [dishInfo, setDishInfo] = useState({});
  const [dishIngredients, setDishIngredients] = useState([]);
  const [dishInstructions, setDishInstructions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let newDishInfo;

    const urlDishInfo = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${process.env.REACT_APP_API_KEY}`;
    axios
      .get(urlDishInfo)
      .then((res) => {
        newDishInfo = res.data.results[0];
        setDishInfo(newDishInfo);
        const urlDishIngredients = `https://api.spoonacular.com/recipes/${newDishInfo.id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`;
        return axios.get(urlDishIngredients);
      })
      .then((res) => {
        setDishIngredients(res.data.ingredients);
        const urlDishInstructions = `https://api.spoonacular.com/recipes/${newDishInfo.id}/analyzedInstructions?apiKey=${process.env.REACT_APP_API_KEY}`;
        return axios.get(urlDishInstructions);
      })
      .then((res) => {
        const instructions = res.data[0]?.steps.map((step) => step.step) || [];
        setDishInstructions(instructions);
        setLoading(false);
      })
      .catch(handleError);
  }, []);

  const handleError = (error) => {
    console.error("Error fetching data:", error);
  };

  const renderDishInfo = () => {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">{dishInfo.title}</h1>
        <img
          className="mx-auto rounded-md shadow-md mb-4"
          src={dishInfo.image}
          alt=""
        />
      </div>
    );
  };

  const renderIngredients = () => {
    return (
      <div className="rounded mb-4">
        <h2 className="text-lg font-bold">Ingredients:</h2>
        <ul>
          {dishIngredients.map((ingredient, index) => (
            <li className="capitalize" key={index}>
              {ingredient.name} ({ingredient.amount.metric.value}
              {!ingredient.amount.metric.unit
                ? ")"
                : ` ${ingredient.amount.metric.unit})`}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderInstructions = () => {
    return (
      <div className="w-1/2 text-center font-mono ">
        <div className="h-full justify-center items-center flex">
          <div>
            <h1 className="text-2xl font-bold">Instructions: </h1>
            <ul>
              {dishInstructions.map((instruction, index) => (
                <li className="capitalize pr-4 pl-4" key={index}>
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return loading ? (
    <p className="text-xl text-center font-mono font-bold">
      Loading... <br />
      (If this message doesn't disappear for a long time, then go to the search page and try again)
    </p>
  ) : (
    <div className="flex font-mono">
      {renderInstructions()}
      <div className="text-center mx-auto font-mono w-1/2 ">
        {renderDishInfo()}
        {renderIngredients()}
      </div>
    </div>
  );
}

export default ResultPage;
