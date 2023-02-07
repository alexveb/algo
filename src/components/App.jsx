import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MyNavbar from "./Navbar";
import CookieNotice from "./CookieNoticeBanner";
import UpFooter from "./UpFooter";
import FooterInfo from "./FooterInfo";

function App() {
  return (
    <article>
      <CookieNotice />
      {/* {posthog.has_opted_in_capturing()||posthog.has_opted_out_capturing() ? null : <CookieBanner
            location="bottom" />} */}
      <Header />
      <MyNavbar />
      <div className="addSpaceFooter"></div>
      <UpFooter />
      <FooterInfo />
      <Footer />
    </article>
  );
}

export default App;
