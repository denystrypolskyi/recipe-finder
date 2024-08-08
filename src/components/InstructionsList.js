import React from "react";

const InstructionsList = ({ instructions }) => (
  <div className="w-1/4 text-center mx-auto">
    <h1 className="text-xl font-bold">Instructions:</h1>
    <ul>
      {instructions.map((instruction, index) => (
        <li className="pr-4 pl-4" key={index}>
          {instruction}
        </li>
      ))}
    </ul>
  </div>
);

export default InstructionsList;
