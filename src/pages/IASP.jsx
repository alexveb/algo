import MainLayout from "../layout/MainLayout";
import Dots from "../layout/Dots";

function IASP() {
  return (
    <MainLayout>
      <div>
        <div className="pageMargin">
          <h3>
            Η IASP αναπρογραμματίζει το Παγκόσμιο Συνέδριο Πόνου για τον Ιούνιο
            του 2021
          </h3>
        </div>
        <div className="GreekConMobile pageMargin">
          Το Παγκόσμιο Συνέδριο Πόνου της IASP που ήταν προγραμματισμένο για τον
          Αύγουστο του 2020 αναβάλλεται. Νέες ημερομηνίες ορίζονται τον Ιούνιο
          του 2021.
        </div>
        <div className="pageMargin">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <img
                onClick={() =>
                  window.open("https://www.iaspworldcongress.org/")
                }
                className="RedirectLinks pointer RemoveUnderLineLink imgMobile"
                style={{
                  width: "70%",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
                src="/images/InternationalConferencesAndEvents/IASP.jpeg"
              />
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
        <div className="pageMargin GreekConMobile GreekCon">
          <h5 className="pageMargin">
            <strong>IASP World Congress on Pain Moved to June 2021</strong>
          </h5>
          <br />
          <br />
          The International Association for the Study of Pain (IASP) Council has
          made the tough decision to reschedule the IASP World Congress on Pain
          in Amsterdam to 27 June – 1 July 2021, due to the impact of the
          COVID-19 pandemic. Our primary parameter for rescheduling has been the
          health and safety of our participants and their families. We accepted
          a very favorable offer provided by the conference center (RAI) in
          Amsterdam for the June 2021 time slot.
          <br />
          The excellent scientific program already created for August 2020 will
          remain as intact as possible for the June 2021 Congress, aside from
          any necessary adjustments. All planned plenaries, lecture-style
          sessions, hands-on workshops, and more than 2,500 poster presentations
          (plus late breaking abstracts) will be rescheduled.
          <br />
          IASP will contact all participants with further details shortly. More
          information will soon be available at{" "}
          <span
            onClick={() => window.open("https://www.iaspworldcongress.org/")}
            className="RedirectLinks pointer RemoveUnderLineLink"
          >
            www.iaspworldcongress.org.
          </span>{" "}
          We hope for your understanding and patience as we work to
          expeditiously get the 2021 Congress planned. To ensure a continuous
          flow of scientific highlights while we wait for the 2021 World
          Congress we will disseminate updated knowledge via PERC to our members
          throughout the year. The <strong>early registration deadline</strong>{" "}
          for the 2021 Congress will be <strong>10 February 2021.</strong>
          <br />
          If you have already <strong>registered</strong> for the August 2020
          Congress, your registration will automatically transfer to the 2021
          Congress. You should have already received information regarding your
          registration. If you reserved <strong>hotel accommodations</strong>{" "}
          through the official IASP housing company, RAI Hotel Services{" "}
          <a className="RemoveUnderLineLink" href="mailto:hotelservices@rai.nl">
            (hotelservices@rai.nl)
          </a>
          , your booking will automatically transfer to June 2021. You will be
          contacted soon with an updated confirmation of your booking.
          <br />
          We are of course aware that some delegates may not be able to join the
          2021 meeting and refunds can be requested. If you have already made
          <strong>travel reservations</strong>, please contact your travel
          provider directly. I sincerely thank the IASP staff for their
          tremendous efforts to handle this unforeseen situation and for
          continuously providing the leadership with timely information. Thank
          you for your continued support of IASP during this unprecedented
          situation. Please visit{" "}
          <span
            onClick={() => window.open("https://www.iaspworldcongress.org/")}
            className="RedirectLinks pointer RemoveUnderLineLink"
          >
            www.iaspworldcongress.org
          </span>{" "}
          or email{" "}
          <a
            className="RemoveUnderLineLink"
            href="mailto:congress@iasp-pain.org"
          >
            congress@iasp-pain.org
          </a>{" "}
          for further information On behalf of the IASP leadership,
          <br />
          <br />
          <strong>Lars Arendt-Nielsen, Dr. Med., Phd President IASP</strong>
          <br />
          <br />
        </div>
        <Dots />
        <br />
        <br />
      </div>
    </MainLayout>
  );
}

export default IASP;
