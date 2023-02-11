import React, { useEffect } from "react";
import MyNavbar from "../components/Navbar";
import CookieNotice from "../components/CookieNoticeBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UpFooter from "../components/UpFooter";
import FooterInfo from "../components/FooterInfo";
import ArrowUp from "./ArrowUp";

function MainLayout({ children }) {
  return (
    <div>
      <CookieNotice />
      <Header />
      <MyNavbar />
      <div>{children}</div>
      <UpFooter />
      <FooterInfo />
      <Footer />
      <ArrowUp />
    </div>
  );
}

export default MainLayout;

{
  /* {posthog.has_opted_in_capturing()||posthog.has_opted_out_capturing() ? null : <CookieBanner
        location="bottom" />} */
}
