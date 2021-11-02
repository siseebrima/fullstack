import React from "react";

const Notification = ({ message }) => {
  return (
    <div>
      {message === null ? null : <div className="error">{message}</div>}
    </div>
  );
};

export default Notification;
