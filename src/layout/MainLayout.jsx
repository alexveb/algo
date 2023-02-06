import React from "react";
import MyNavbar from "../components/Navbar";
import CookieNotice from "../components/CookieNoticeBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout({ children }) {
  return (
    <div>
      <CookieNotice />
      {/* {posthog.has_opted_in_capturing()||posthog.has_opted_out_capturing() ? null : <CookieBanner
        location="bottom" />} */}
      <Header />
      <MyNavbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
