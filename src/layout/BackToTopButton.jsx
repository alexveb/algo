import React, { useEffect, useState } from "react";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        console.log("Setting backToTopButton to true");
        setBackToTopButton(true);
      } else {
        console.log("Setting backToTopButton to false");
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          style={{
            backgroundColor: "red",
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "50px",
            zIndex: "1000",
          }}
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
