import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      style={{
        display: showButton ? "block" : "none",
        position: "fixed",
        bottom: 20,
        right: 20,
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        borderRadius: 5,
        padding: "10px 20px",
        cursor: "pointer",
        width: "50px",
        height: "50px",
      }}
      onClick={scrollToTop}
    >
      TEXT
    </button>
  );
};

export default ScrollToTopButton;
