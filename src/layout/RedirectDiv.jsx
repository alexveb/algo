import React from "react";

const RedirectDiv = ({ to, children }) => {
  const handleClick = () => {
    window.location.href = to;
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default RedirectDiv;
