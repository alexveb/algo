import React from "react";
import Showcase from "./Fontawesome";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p><Showcase /></p>
      <p>Copyright ⓒ 1994 - {year} EΛΛHNIKH ETAIPEIA AΛΓΟΛΟΓΙΑΣ. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
