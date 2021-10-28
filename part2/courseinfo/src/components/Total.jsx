import React from "react";

const Total = ({ parts }) => {
  const exercises = parts.map((part) => part.exercises);

  const reducer = (previousVal, currentVal) => previousVal + currentVal;

  const sum = exercises.reduce(reducer);

  return (
    <div>
      <h5>total of {sum} exercises</h5>
    </div>
  );
};

export default Total;
