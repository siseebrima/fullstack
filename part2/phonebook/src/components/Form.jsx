import React from "react";

const Form = ({
  handleForm,
  newName,
  handleInput,
  newNumber,
  handleNumber,
}) => {
  return (
    <div>
      <h2>add a new</h2>
      <form onSubmit={handleForm}>
        <div>
          name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          number:{" "}
          <input type="text" value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
