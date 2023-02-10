import MainLayout from "../../layout/MainLayout";
import Dots from "../../layout/Dots";
import { Link } from "react-router-dom";
import RedirectDiv from "../../layout/RedirectDiv";

function Main() {
  return (
    <MainLayout>
      <div>
        <div className="pageMargin">
          <h3>Τελευταία νέα - ανακοινώσεις</h3>
        </div>
        <div className="pageMargin"></div>
        <div className="GreekConMobile GreekCon">
          <h5 className="pageMargin">Ανακοίνωση για Painschool της EFIC</h5>
        </div>
        <div className="pageMargin GreekConMobile">
          Σχολείο πόνου της EFIC με θέμα τον Καρκινικό Πόνο και τη Παρηγορική
          Φροντίδα 16-19 Μαϊου 2023, Μπάριμπορ, Σλοβενία
        </div>
        <div className="pageMargin GreekConMobile redAlert">
          Δηλώστε συμμετοχή πριν τη λήξη της προθεσμίας στις 3 Μαρτίου 2023.
        </div>
        <div className="pageMargin GreekConMobile">
          <a
            className="RedirectLinks pointer RemoveUnderLineLink"
            href="/Article8"
          >
            Διαβάστε περισσότερα...
          </a>
        </div>
        <div className="pageMargin">
          <img
            style={{ margin: "auto" }}
            className="d-flex justify-content-center align-items-center imgMobile"
            src="/images/Home/efic.jpg"
          />
        </div>
        <div className="pageMargin"></div>
        <Dots />
        <div className="GreekConMobile GreekCon">
          <h5 className="pageMargin">
            Ανάκληση ενέσιμων κορτικοστεροειδών φαρμάκων από τον ΕΟΦ
          </h5>
        </div>
        <div className="pageMargin GreekConMobile GreekCon">
          Στην ανάκληση παρτίδων των ενέσιμων κορτικοστεροειδών φαρμακευτικών
          προϊόντων “CELESTONE CHRONODOSE INJ.SU.RET (3+3)MG/1 ML VIAL και
          PROPIOCHRONE INJ.SUSP (5+2)MG/1ML προχώρησε ο Εθνικός Οργανισμός
          Φαρμάκων(
          <span
            onClick={() =>
              window.open(
                "https://www.kathimerini.gr/tag/ethnikos-organismos-farmakon/"
              )
            }
            className="pageMargin RedirectLinks pointer RemoveUnderLineLink"
          >
            ΕΟΦ
          </span>
          ).
        </div>
        <div className="pageMargin GreekConMobile">
          <a
            className="RedirectLinks pointer RemoveUnderLineLink"
            href="/Article7"
          >
            Διαβάστε περισσότερα...
          </a>
        </div>
        <div className="pageMargin"></div>
        <Dots />
        <div className="GreekConMobile GreekCon">
          <h5 className="pageMargin">
            Ενστάσεις σχετικά με το Νομοσχέδιο «Ολοκληρωμένο Σύστημα Παροχής
            Ανακουφιστικής Φροντίδας
          </h5>
        </div>
        <div className="pageMargin GreekConMobile GreekCon">
          Η ΕΑΕ, η ΕΕΑ και η ΕΑΕΙΒΕ συνυπογράφουν και εκφράζουν τις επιφυλάξεις
          και ενστάσεις τους για το νομοσχέδιο που κατατέθηκε σχετικά με το
          φερόμενο ως «Ολοκληρωμένο Σύστημα Παροχής Ανακουφιστικής Φροντίδας».
          Το διάβημα αυτό εστάλη προς το Υπουργό Υγείας κ. Πλεύρη.
        </div>
        <div
          onClick={() => window.open("/pdfs/Home/nomosx_anak_fro.pdf")}
          className="pageMargin GreekConMobile RedirectLinks pointer RemoveUnderLineLink"
        >
          Διαβάστε περισσότερα...
        </div>
        <div className="pageMargin"></div>
        <Dots />
        <div className="GreekConMobile GreekCon">
          <h5 className="pageMargin">Ενημέρωση</h5>
        </div>
        <div className="pageMargin GreekConMobile GreekCon">
          Τα ναρκωτικά φάρμακα του κρατικού μονοπωλίου, μορφίνη και πεθιδίνη,
          όταν συνταγογραφούνται για εξωνοσοκομειακή χρήση και χορηγούνται από
          τα ιδιωτικά φαρμακεία, αποζημιώνονται από τους ασφαλιστικούς
          οργανισμούς χωρίς συμμετοχή του ασθενούς. Τα φάρμακα του πρώτου
          εδαφίου δύνανται να χορηγούνται επίσης από τα νοσοκομειακά φαρμακεία
          και σε εξωτερικούς ασθενείς αποζημιούμενα από τους ασφαλιστικούς
          οργανισμούς .
        </div>
        <div className="pageMargin GreekConMobile">
          <a
            href="/Article5"
            className="RedirectLinks pointer RemoveUnderLineLink"
          >
            Διαβάστε περισσότερα...
          </a>
        </div>
        <div className="pageMargin"></div>
        <Dots />
        <div className="GreekConMobile GreekCon">
          <h6 className="pageMargin">Αγαπητοί συνάδελφοι,</h6>
        </div>
        <div className="pageMargin GreekConMobile">
          Το Διοικητικό Συμβούλιο της Ελληνικής Εταιρείας Αλγολογίας σας
          γνωστοποιεί την νέα του σύνθεση μετά τις τελευταίες αρχαιρεσίες της
          14ης Ιανουαρίου 2023.
        </div>
        <div className="pageMargin GreekConMobile">
          <table style={{ fontSize: "0.9rem" }} className="dsymb2023t">
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: "160px", textAlign: "left" }}>
                  <strong>ΠΡΟΕΔΡΟΣ</strong>
                </td>
                <td style={{ textAlign: "left" }}>Ελένη Χρονά</td>
              </tr>

              <tr>
                <td style={{ width: "160px", textAlign: "left" }}>
                  <strong>ΑΝΤΙΠΡΟΕΔΡΟΣ</strong>
                </td>
                <td style={{ textAlign: "left" }}>Αθηνά Κολοτούρα</td>
              </tr>
              <tr>
                <td style={{ width: "160px", textAlign: "left" }}>
                  <strong>ΓΕΝ. ΓΡΑΜΜΑΤΕΑΣ</strong>
                </td>
                <td style={{ textAlign: "left" }}>Αικατερίνη Τσιρογιάννη</td>
              </tr>
              <tr>
                <td style={{ width: "160px", textAlign: "left" }}>
                  <strong>ΤΑΜΙΑΣ:</strong>
                </td>
                <td style={{ textAlign: "left" }}>Ελένη Αρναούτογλου</td>
              </tr>
              <tr>
                <td style={{ width: "160px", textAlign: "left" }}>
                  <strong>ΜΕΛΗ:</strong>
                </td>
                <td style={{ textAlign: "left" }}>Ευγενία Κετικίδου</td>
              </tr>
              <tr>
                <td style={{ width: "160px" }}></td>
                <td style={{ textAlign: "left" }}>Βασιλεία Νύκταρη</td>
              </tr>
              <tr>
                <td style={{ width: "160px" }}></td>
                <td style={{ textAlign: "left" }}>Σοφία Πουλοπούλου</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pageMargin GreekConMobile">
          Πιστεύουμε και ευελπιστούμε ότι η μέχρι σήμερα αρμονική συνεργασία μας
          θα συνεχισθεί και στο μέλλον.
        </div>
        <div className="pageMargin"></div>
        <Dots />

        <div className="pageMargin GreekConMobile">
          <a
            className="RedirectLinks pointer RemoveUnderLineLink"
            href="/Article3"
          >
            Διεξαγωγή Απολογιστικής Γενικής Συνέλευσης και Εκλογή Νέου
            Διοικητικού Συμβουλίου, Πειθαρχικού Συμβουλίου & Εξελεγκτικής
            Επιτροπής
          </a>
        </div>
        <Dots />

        <div className="row pageMargin">
          <div className="col-lg-4 container d-flex justify-content-center align-items-center">
            <img className="" src="/images/Home/sea2023banner1.jpg" alt="mis" />
          </div>
          <div className="pageMargin col-lg-8">
            <h5 className="GreekConMobile GreekCon">
              Ανακοίνωση προγράμματος Σεμιναρίου Εκπαίδευσης στην Αλγολογία
              (ΣΕΑ) 2023
            </h5>
            <br />
            <br />
            <h6 className="redAlert GreekCon GreekConMobile">
              Προσοχή: Nέες ημερομηνίες
            </h6>

            <div className="pageMargin GreekConMobile GreekCon">
              Η Ελληνική Εταιρεία Αλγολογίας ανακοινώνει την διεξαγωγή του
              ετήσιου Σεμιναρίου Εκπαίδευσης στην Αλγολογία για το έτος 2023. Το
              σεμινάριο θα διεξαχθεί σε πέντε κύκλους. Οι τέσσερις κύκλοι θα
              πραγματοποιηθούν διαδικτυακά και ο πέμπτος δια ζώσης. Ο πέμπτος
              κύκλος θα αφορά την παρουσίαση και την διαχείριση κλινικών
              περιστατικών χρόνιου πόνου.{" "}
              <span
                onClick={() => window.open("/pdfs/Home/anakinosi_sea_2023.pdf")}
                className="pageMargin RedirectLinks pointer RemoveUnderLineLink"
              >
                {" "}
                Διαβάστε περισσότερα...
              </span>
              <br />
            </div>
            <br />
            <div
              onClick={() => window.open("/pdfs/Home/SEA2023Program_new.pdf")}
              className="RedirectLinks pointer RemoveUnderLineLink GreekCon GreekConMobile"
            >
              ΔΕΙΤΕ ΤΟ ΠΡΟΓΡΑΜΜΑ
            </div>
            <br />
            <div
              onClick={() => window.open("/images/Home/SEA2023POSTER1.jpg")}
              className="RedirectLinks pointer RemoveUnderLineLink GreekCon GreekConMobile"
            >
              ΕΚΤΥΠΩΣΤΕ ΤΗΝ ΑΦΙΣΑ{" "}
            </div>
            <br />
            <div className="GreekCon GreekConMobile">
              <strong>Έναρξη πρώτου κύκλου 3 Μαρτίου 2023</strong>
              <table style={{ marginTop: "20px" }}>
                <tbody>
                  <tr>
                    <td style={{ width: "100px" }}>Α κύκλος</td>
                    <td>3-4 Μαρτίου</td>
                  </tr>
                  <tr>
                    <td>Β κύκλος</td>
                    <td>31 Μαρτίου- 1 Απριλίου</td>
                  </tr>
                  <tr>
                    <td>Γ κύκλος</td>
                    <td>6-7 Οκτωβρίου</td>
                  </tr>
                  <tr>
                    <td>Δ κύκλος</td>
                    <td>3-4 Νοεμβρίου</td>
                  </tr>
                  <tr>
                    <td>Ε κύκλος</td>
                    <td>02 Δεκεμβρίου</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Dots />
        <div className="pageMargin">
          <h5>Save the Date:13o Συνέδριο της EFIC</h5>
        </div>
        <div className="pageMargin"></div>
        <div className="GreekConMobile GreekCon">
          <h5 className="pageMargin">Βουδαπέστη 20-22 Σεπτεμβρίου 2023</h5>
        </div>
        <div className="pageMargin">
          <img
            onClick={() =>
              window.open(
                "https://europeanpainfederation.eu/efic2023/congress-topics/"
              )
            }
            style={{ margin: "auto" }}
            className="d-flex justify-content-center align-items-center imgMobile RedirectLinks pointer RemoveUnderLineLink"
            src="/images/Home/EFIC-1024X512.webp"
          />
        </div>
        <div className="pageMargin GreekConMobile GreekCon">
          Το 13ο Συνέδριο της EFIC θα πραγματοποιηθεί στην Βουδαπέστη στις 20-22
          Σεπτεμβρίου 2023 με θέμα :Personalized Pain Management: The Future Is
          Now! Η υποβολή εργασιών ξεκίνησε! Kαταληκτική ημερομηνία υποβολής
          εργασιών : 30 Δεκεμβρίου 2022
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="GreekConMobile GreekCon">
              <br />
              <br />
              <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                  <table style={{ textAlign: "center" }}>
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td style={{ width: "100px" }}>
                          Link1:{" "}
                          <span
                            onClick={() =>
                              window.open(
                                "https://europeanpainfederation.eu/efic2023/congress-topics/"
                              )
                            }
                            className="RedirectLinks pointer RemoveUnderLineLink"
                          >
                            <i className="fa-solid fa-link"></i>
                          </span>
                        </td>
                        <td style={{ width: "100px" }}>
                          {" "}
                          Link2:{" "}
                          <span
                            onClick={() =>
                              window.open(
                                "https://europeanpainfederation.eu/efic2023/abstract-submission/"
                              )
                            }
                            className="RedirectLinks pointer RemoveUnderLineLink"
                          >
                            <i className="fa-solid fa-link"></i>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-4"></div>
              </div>
              <br />
              <br />
              <div style={{ textAlign: "center" }}>
                <span
                  onClick={() =>
                    window.open("https://europeanpainfederation.eu/")
                  }
                  className="RedirectLinks pointer RemoveUnderLineLink"
                >
                  Για περισσότερες πληροφορίες στην επίσημη ιστοσελίδα της EFIC
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className="pageMargin"></div>
        <Dots />
        <div className="row pageMargin">
          <div className="col-lg-3"></div>
          <div className="col-lg-2">
            <a href="/">
              <img
                className="d-flex justify-content-center align-items-center imgMobile imgFooter RedirectLinks pointer RemoveUnderLineLink"
                src="/images/Home/footer-3.jpg"
              />
            </a>
          </div>
          <div className="col-lg-2">
            <a href="/">
              <img
                className="d-flex justify-content-center align-items-center imgMobile imgFooter RedirectLinks pointer RemoveUnderLineLink"
                src="/images/Home/footer-2.jpg"
              />
            </a>
          </div>
          <div className="col-lg-2">
            <a href="/">
              <img
                style={{ margin: "auto" }}
                className="d-flex justify-content-center align-items-center imgMobile imgFooter RedirectLinks pointer RemoveUnderLineLink"
                src="/images/Home/footer-1.jpg"
              />
            </a>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <br />
        <br />
      </div>
    </MainLayout>
  );
}

export default Main;
