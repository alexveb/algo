import React, { useState } from "react";
import Cookies from "js-cookie";

const styles = {
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "white",
    padding: "1em",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  message: {
    fontSize: "0.8em",
    margin: 0,
  },
  buttonsContainer: {
    display: "flex",
  },
  button: {
    backgroundColor: "transparent",
    border: "1px solid white",
    color: "white",
    padding: "0.5em 1em",
    marginLeft: "0.5em",
    cursor: "pointer",
  },
};

const CookieNoticeBanner = () => {
  const [showBanner, setShowBanner] = useState(!Cookies.get("cookiesAccepted"));

  const handleAccept = () => {
    Cookies.set("cookiesAccepted", true, { expires: 365 });
    setShowBanner(false);
  };

  const handleDecline = () => {
    Cookies.set("cookiesAccepted", false, { expires: 7 });
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div style={styles.container} className="cookie-banner">
        <div style={styles.message}>
          By using this website, you agree to our use of cookies. We use cookies
          to provide you with a great experience and to help our website run
          effectively.
        </div>
        <div style={styles.buttonsContainer}>
          <button style={styles.button} onClick={handleAccept}>
            Accept
          </button>
          <button style={styles.button} onClick={handleDecline}>
            Decline
          </button>
        </div>
      </div>
    )
  );
};

export default CookieNoticeBanner;
