import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";

function Footer() {
  const year = new Date().getFullYear();
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
