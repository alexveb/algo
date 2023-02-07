import React from "react";

const Socials = () => (
  <div className="">
    <i
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.location.href = "https://www.facebook.com/";
      }}
      className="fa-brands fa-facebook socialIcons moveIcon"
    ></i>
    <i
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.location.href = "https://www.twitter.com/";
      }}
      className="fa-brands fa-twitter socialIcons moveIcon"
    ></i>
    <i
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.location.href = "https://www.instagram.com/";
      }}
      className="fa-brands fa-instagram socialIcons moveIcon"
    ></i>
    <i
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.location.href = "mailto:info@algologia.gr";
      }}
      className="fa-solid fa-envelope socialIcons moveIcon"
    ></i>
  </div>
);

export default Socials;
