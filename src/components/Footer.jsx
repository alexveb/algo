import React from "react";
import { Container } from "react-bootstrap";
import Showcase from "./Fontawesome";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div id="footer">
    <footer>
      <p><Showcase /></p>
      <p>Copyright ⓒ 1994 - {year} EΛΛHNIKH ETAIPEIA AΛΓΟΛΟΓΙΑΣ. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default Footer;
