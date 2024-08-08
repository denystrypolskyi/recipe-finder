import React from "react";

const ErrorMessage = ({ message }) => (
  <p className="text-xl text-center font-bold text-red-600">
    {message}
  </p>
);

export default ErrorMessage;
