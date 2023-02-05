import React, { useState } from "react";
import PostHog from "posthog-js";

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
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const handleAcceptCookie = () => {
    setCookieAccepted(true);
    setShowBanner(false);
    PostHog.capture("accept_cookie", {});
    localStorage.setItem("cookieAccepted", true);
  };

  const handleDeclineCookie = () => {
    setCookieAccepted(false);
    setShowBanner(false);
    PostHog.capture("decline_cookie", {});
    localStorage.removeItem("cookieAccepted");
  };

  React.useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, []);

  if (!showBanner) {
    return null;
  }

  return (
    <div style={styles.container}>
      <p style={styles.message}>
        This website uses cookies to improve your experience. By continuing to
        use this site, you accept our use of cookies.
      </p>
      <div style={styles.buttonsContainer}>
        <button style={styles.button} onClick={handleAcceptCookie}>
          Accept
        </button>
        <button style={styles.button} onClick={handleDeclineCookie}>
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieNoticeBanner;
