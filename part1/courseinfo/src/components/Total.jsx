import React from "react";

const Total = ({ parts }) => {
  const [exercises1, exercises2, exercises3] = parts.map(
    (part) => part.exercises
  );
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default Total;
