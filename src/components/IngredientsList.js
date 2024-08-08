import React from "react";

const IngredientsList = ({ ingredients }) => (
  <div className="w-1/4 rounded text-center mx-auto">
    <h1 className="text-xl font-bold">Ingredients:</h1>
    <ul>
      {ingredients.map((ingredient, index) => (
        <li className="capitalize" key={index}>
          {ingredient.name} ({ingredient.amount.metric.value}
          {ingredient.amount.metric.unit
            ? ` ${ingredient.amount.metric.unit})`
            : ")"}
        </li>
      ))}
    </ul>
  </div>
);

export default IngredientsList;
