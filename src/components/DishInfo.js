import React from "react";

const DishInfo = ({ dish }) => {
  if (!dish) return null;

  return (
    <>
      <h1 className="mx-auto text-center text-xl font-bold mb-5 w-1/3">
        {dish.title}
      </h1>
      <img
        className="mx-auto rounded-md shadow-md mb-6"
        src={dish.image}
        alt={dish.title}
      />
    </>
  );
};

export default DishInfo;
