import React from "react";

const Filter = ({ searched, handleSearch }) => {
  return (
    <div>
      <p>
        filter shown with a{" "}
        <input type="text" value={searched} onChange={handleSearch} />
      </p>
    </div>
  );
};

export default Filter;
