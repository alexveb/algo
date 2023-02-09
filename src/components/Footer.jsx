import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";

function Footer() {
  // const year = new Date().getFullYear();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <footer>
        <div>
          <Socials />
        </div>
        <div>
          Copyright ⓒ 1994 - {year} EΛΛHNIKH ETAIPEIA AΛΓΟΛΟΓΙΑΣ. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
