import MainLayout from "../layout/MainLayout";
import Dots from "../layout/Dots";
import { Button } from "react-bootstrap";

function BiggestPainEdu() {
  return (
    <MainLayout>
      <div>
        <div className="pageMargin">
          <h3>Be Part of the Biggest Pain Education Event in 2020</h3>
        </div>
        <div className="pageMargin">
          <img
            style={{ margin: "auto" }}
            className="d-flex justify-content-center align-items-center imgMobile"
            src="/images/InternationalConferencesAndEvents/BePart_of_the_BiggestPainEducationEventin2020.jpg"
          />
        </div>
        <div className="pageMargin"></div>
        <div className="pageMargin GreekConMobile GreekCon">
          For over 25 years, the European Pain Federation has been bringing
          together the most recognised experts in the field of pain science to
          exchange knowledge, ideas and the latest advances in the field. We
          thank you for your support to our activities.
          <br />
          <br />
          2020 has been a challenging year, not least of all for education. To
          meet the needs of the pain community in 2020, the European Pain
          Federation is organising its first{" "}
          <span
            onClick={() =>
              window.open(
                "https://europeanpainfederation.eu/virtual-pain-education-summit/?utm_source=EFIC+MARKETING+DATABASE&utm_campaign=75048dd143-EMAIL_CAMPAIGN_SUMMIT_LAUNCH&utm_medium=email&utm_term=0_1e6a464f2d-75048dd143-112872967"
              )
            }
            className="RedirectLinks pointer RemoveUnderLineLink"
          >
            Virtual Pain Education Summit on 6-8 November 2020.
          </span>
          <br />
          <br />
          <div className="pageMargin">
            <h4>
              Take part in the biggest online pain education event of 2020
              featuring:
            </h4>
          </div>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <ul className="GreekConMobile">
              <li>Over 40 hours of teaching across 3 days</li>
              <li>
                Comprehensive discipline-specific educational tracks for
                physicians, physiotherapists, clinical psychologists and nurses
              </li>
              <li>Interprofessional learning sessions on a range of topics</li>
              <li>Cutting-edge science lectures on hot topics</li>
              <li>
                Informational and mentoring sessions focused on our diploma
                examinations
              </li>
            </ul>
          </div>
          <div className="GreekConMobile pageMargin">
            Mark your calendar and make sure you can join us for what we expect
            to be a game-changer in pain education.
          </div>
          <br />
          <br />
          <div
            onClick={() =>
              window.open(
                "https://europeanpainfederation.eu/virtual-pain-education-summit/?utm_source=EFIC+MARKETING+DATABASE&utm_campaign=75048dd143-EMAIL_CAMPAIGN_SUMMIT_LAUNCH&utm_medium=email&utm_term=0_1e6a464f2d-75048dd143-112872967"
              )
            }
            className="RedirectLinks pointer RemoveUnderLineLink d-flex justify-content-center align-items-center"
          >
            {" "}
            <Button variant="primary">Learn More</Button>{" "}
          </div>
        </div>
        <Dots />
        <br />
        <br />
      </div>
    </MainLayout>
  );
}

export default BiggestPainEdu;
