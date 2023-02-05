import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainComponent from "./ContentData";
import MyNavbar from "./Navbar";
import posthog from "posthog-js";
import CookieNotice from "./CookieNoticeBanner";

function App() {
  return (
    <div>
      <CookieNotice />
      {/* {posthog.has_opted_in_capturing()||posthog.has_opted_out_capturing() ? null : <CookieBanner
            location="bottom" />} */}
      <Header />
      <MyNavbar />
      <div className="addSpaceFooter"></div>
      <Footer />
    </div>
  );
}

export default App;
