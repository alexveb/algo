import React from "react";

function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <button onClick={handleClick}>Go to Top</button>;
}

export default ScrollToTop;
