import React from "react";

const Notification = ({ message, success }) => {
  const successStyle = {
    color: "green",
    fontSize: 22,
    borderRadius: 10,
    background: "#dfe6e1",
    border: "solid green",
  };
  const errorStyle = {
    color: "red",
    fontSize: 22,
    borderRadius: 10,
    background: "#dfe6e1",
    border: "solid red",
  };

  return (
    <div>
      {message === null ? null : (
        <div className="success" style={success ? successStyle : errorStyle}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Notification;
