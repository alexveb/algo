import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import RedirectDiv from "../layout/RedirectDiv";
import Dots from "../layout/Dots";

function GreekConferencesAndEvents() {
  return (
    <MainLayout>
      <div>
        <div>
          <h3 className="pageMargin">Ελληνικά Συνέδρια και Εκδηλώσεις</h3>
        </div>
        <div className="pageMargin">
          <h5>Προσεχή Συνέδρια και Εκδηλώσεις</h5>
        </div>
        <Dots />
        <div className="pageMargin">
          <div className="GreekConMobile">
            <span>
              Παρακολουθείστε το διαδικτυακό Σεμινάριο της Ελληνικής Εταιρείας
              Επείγουσας Ιατρικής{" "}
            </span>
            <span
              className="RedirectLinks pointer RemoveUnderLineLink"
              onClick={() =>
                window.open(
                  "https://www.hesem.gr/?event=%ce%b4%ce%b9%ce%b1%ce%b4%ce%b9%ce%ba%cf%84%cf%85%ce%b1%ce%ba%cf%8c-%cf%83%ce%b5%ce%bc%ce%b9%ce%bd%ce%ac%cf%81%ce%b9%ce%bf-webinar-%ce%bf-%cf%80%cf%8c%ce%bd%ce%bf%cf%82-%cf%83%cf%84%ce%bf-%cf%84"
                )
              }
            >
              {" "}
              "Ο ΠΟΝΟΣ ΣΤΑ ΤΕΠ"
            </span>{" "}
            <span>(Τρίτη 15 Ιουνίου 2021, 16:00-20:45).</span>
          </div>
          <div className="pageMargin">
            <img
              className="imgMobile"
              src="/images/GreekConferences/2021-06-15.jpg"
            ></img>
          </div>
        </div>
        <Dots />
        <div className="pageMargin">
          <h5>Διεξαχθέντα Συνέδρια και Εκδηλώσεις</h5>
        </div>
        <Dots />
        <div className="pageMargin">
          <div className="GreekConMobile GreekCon">
            <strong>
              Ανακοίνωση της Β’ Πανεπιστημιακής Κλινικής Αναισθησιολογίας και
              της Ελληνικής Αναισθησιολογικής Εταιρείας
            </strong>{" "}
            Εκ μέρους της Β’ Πανεπιστημιακής Κλινικής Αναισθησιολογίας της
            Ιατρικής Σχολής του ΕΚΠΑ και της Ελληνικής Αναισθησιολογικής
            Εταιρείας, σας προσκαλούμε να παρακολουθήσετε τις παρακάτω
            εκδηλώσεις:
            <br /> <br />- Συμπόσιο{" "}
            <strong>
              ΑΝΑΙΣΘΗΣΙΟΛΟΓΙΑ & ΕΠΕΙΓΟΥΣΑ ΙΑΤΡΙΚΗ ΣΤΗΝ ΕΠΟΧΗ ΤΟΥ COVID-19,
            </strong>
            <br /> <br />- Τελετή Αναγόρευσης σε Επίτιμο Διδάκτορα της Ιατρικής
            Σχολής του ΕΚΠΑ, του κ. Αθανάσιου Παπαδήμου, Professor of
            Anesthesiology, The Ohio State University, College of Medicine,
            Colombus, Ohio, USA
            <br />
            <br />
            Και οι δύο εκδηλώσεις θα προβληθούν διαδικτυακά την Παρασκευή 14
            Μαΐου 2021. Η συμμετοχή είναι ελεύθερη για κάθε ενδιαφερόμενο και η
            παρακολούθηση θα γίνει μέσω των παρακάτω συνδέσμων:{" "}
            <strong>ΣΥΜΠΟΣΙΟ: </strong>
            <span
              className="RedirectLinks pointer RemoveUnderLineLink"
              onClick={() => window.open("https://banesth-eae.gr/")}
            >
              https://banesth-eae.gr/
            </span>{" "}
            | <strong>ΑΝΑΓΟΡΕΥΣΗ: </strong>
            <strong>Aναγόρευση του καθηγητή Thomas John Papadimos</strong>{" "}
            {/* <Link to="https://www.youtube.com/watch?v=cyy2wfUOI5Q">
              <i class="fa-brands fa-youtube"></i>
            </Link>{" "} */}
            <strong
              className="RedirectLinks pointer RemoveUnderLineLink"
              onClick={() =>
                window.open("https://www.youtube.com/watch?v=cyy2wfUOI5Q")
              }
            >
              <i class="fa-brands fa-youtube"></i>
            </strong>{" "}
            |{" "}
            <span
              className="RedirectLinks pointer RemoveUnderLineLink"
              onClick={() =>
                window.open("/pdfs/GreekConferences/2021-05-14-Programma.pdf")
              }
            >
              Πρόγραμμα Συμποσίου
            </span>{" "}
            |{" "}
            <span
              className="RedirectLinks pointer RemoveUnderLineLink"
              onClick={() =>
                window.open("/pdfs/GreekConferences/2021-05-14 PAPADIMOS.pdf")
              }
            >
              Πρόσκληση Αναγόρευσης
            </span>
            . Για κάθε επιπλέον πληροφορία ή τεχνική υποστήριξη μπορείτε να
            καλέσετε στη γραμματεία των εκδηλώσεων ERA Ltd, τηλ. 210 3634944.
          </div>
        </div>
        <Dots />
        <div className="pageMargin">
          <div>
            <img
              src="/images/GreekConferences/afisa4.jpg"
              className="RedirectLinks pointer RemoveUnderLineLink GreekConMobile imgMobile"
              onClick={() =>
                window.open("/pdfs/GreekConferences/Webinar_2021-05-31.pdf")
              }
            />
          </div>
          <div className="pageMargin">
            <div>
              <h3>
                <span
                  className="RedirectLinks pointer RemoveUnderLineLink"
                  onClick={() =>
                    window.open("/pdfs/GreekConferences/Webinar_2021-05-31.pdf")
                  }
                >
                  Πρόγραμμα
                </span>{" "}
                |{" "}
                <span
                  className="RedirectLinks pointer RemoveUnderLineLink"
                  onClick={() =>
                    window.open(
                      "https://zoom.us/webinar/register/WN_MFgZfjr5RuK8nnHd09fIOw"
                    )
                  }
                >
                  Εγγραφή
                </span>
              </h3>
            </div>
          </div>
        </div>
        <Dots />
        <div className="pageMargin">
          <div className="GreekConMobile GreekCon">
            Στα πλαίσια των εκπαιδευτικών μας δραστηριοτήτων η ΕΕΑ σας καλεί να
            παρακολουθήσετε την <strong>Δευτέρα 12 Απριλίου, ώρα 19.00</strong>{" "}
            το ενδιαφέρον διαδικτυακό σεμινάριο <br />
            <br />{" "}
            <span
              className="RedirectLinks pointer RemoveUnderLineLink"
              onClick={() =>
                window.open(
                  "https://zoom.us/webinar/register/WN_eluTmZ1dQri0IJbC2ey6bg"
                )
              }
            >
              "Πόνος κεφαλής τραχήλου. Ελάχιστα επεμβατικές τεχνικές στην
              καθημερινή πρακτική"
            </span>{" "}
            <br />
            <br />
            με εισηγητές την κα Μπατιστάκη Χ., αναισθησιολόγο, καθηγήτρια ΕΚΠΑ
            και την κα Σουλιώτη Ε. MD, PhD αναισθησιολόγο επιμελήτρια Β΄ΠΝΓ
            "Αττικόν" Στο σεμινάριο θα γίνει επίδειξη και συζήτηση ελάχιστα
            επεμβατικών τεχνικών σε συγκεκριμένες ενδείξεις (κεφαλαλγία,
            νευραλγίες, καρκινικός πόνος κ.α.) που συναντάμε καθημερινά στο
            Ιατρείο Πόνου. Το Σεμινάριο είναι δωρεάν για όλα τα μέλη της ΕΕΑ τα
            οποία έχουν εκπληρώσει τις οικονομικές τους υποχρεώσεις για το έτος
            2021.
          </div>
        </div>
        <Dots />
        <div className="pageMargin row">
          <div className="col-lg-6">
            <img
              style={{ width: "90%" }}
              className="RedirectLinks pointer RemoveUnderLineLink imgMobile"
              onClick={() =>
                window.open(
                  "/images/GreekConferences/2021-01-18-webinar-kalteq.jpg"
                )
              }
              src="/images/GreekConferences/2021-01-18-webinar-kalteq.jpg"
            />
          </div>
          <div className="col-lg-6">
            <div className="GreekConMobile GreekCon pageMargin">
              <br />Η ΕΕΑ σας προσκαλεί να παρακολουθήσετε το webinar με θέμα:
              <br />
              <br />
              <strong>
                "Κρυοαναλγησία: ένας νέος τρόπος στην αντιμετώπιση του χρόνιου
                πόνου"
              </strong>
              <br />
              <br />
              Δευτέρα 18 Ιανουαρίου 2021 και ώρα 19:00 Για το πρόγραμμα καθώς
              και τις απαραίτητες πληροφορίες της εκδήλωσης (οδηγίες εγγραφής,
              διαδικτυακή παρακολούθηση), πατήστε ΕΔΩ <br />
              <div
                style={{ marginTop: "50px" }}
                className="RedirectLinks pointer RemoveUnderLineLink"
                onClick={() =>
                  window.open(
                    "/pdfs/GreekConferences/CRYONEUROLYSIS _WEBINAR.pdf"
                  )
                }
              >
                Δείτε την αφίσα σε pdf
              </div>
            </div>
          </div>
        </div>
        <Dots />
        <div className="pageMargin row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <img
              style={{ width: "70%" }}
              src="/images/GreekConferences/EEA_13_2022_05-19-21.jpg"
            />
          </div>
          <div className="col-lg-4"></div>
        </div>
        <Dots />
        <div className="pageMargin">
          <div className="GreekConMobile">
            <strong>
              20ο Πανελλήνιο Συνεδριο Περιοχικής Αναισθησίας, Θεραπείας Πόνου
              και Παρηγορικής Φροντίδας.
            </strong>
            <br />
            <br />
            <span>25-28 Ιουνίου 2020, Αγιος Νικόλαος, Κρήτη</span>{" "}
            <span>(Τρίτη 15 Ιουνίου 2021, 16:00-20:45).</span>
            <br />
            <br />
            <span
              className="RedirectLinks pointer RemoveUnderLineLink"
              onClick={() =>
                window.open(
                  "https://grpalliative.gr/parisia2019-2609-001-anakoinoseis/"
                )
              }
            >
              Ιστοσελίδα
            </span>
          </div>
        </div>
        <Dots />
        <div className="pageMargin">
          <div className="GreekConMobile">
            <strong>
              16ο Συνέδριο Αναισθησιολογίας & Εντατικής Ιατρικής Βορείου Ελλάδος
            </strong>
            <br />
            <br />
            <span>1 - 4 Οκτωβρίου 2020, Θεσσαλονίκη</span>
            <br />
            <br />
            <span
              className="RedirectLinks pointer RemoveUnderLineLink"
              onClick={() => window.open("https://anesthesiaicu.gr/")}
            >
              Ιστοσελίδα
            </span>
          </div>
        </div>
        <Dots />
        <div className="pageMargin">
          <div className="GreekConMobile">
            <strong>Ημερίδα Αλγολογίας Ελληνικής Εταιρείας Αλγολογίας</strong>
            <br />
            <br />
            <span>24 Οκτωβρίου 2020, Αθήνα</span>
            <br />
            <br />
            <span
              onClick={() => window.open("/ImeridaAlgologias")}
              className="RedirectLinks pointer RemoveUnderLineLink"
            >
              Ιστοσελίδα
            </span>
          </div>
          <br />
          <div className="row pageMargin">
            <div
              className="RedirectLinks pointer RemoveUnderLineLink col-lg-5"
              onClick={() => window.open("/ImeridaAlgologias")}
            >
              <img
                style={{ width: "70%" }}
                className="imgMobile"
                src="/images/GreekConferences/imeridaAlgologias24oc.jpeg"
              />
            </div>
            <div className="col-lg-7">
              <br />
              <div>Αγαπητοί φίλοι και συνάδελφοι,</div>
              <br />
              <div className="GreekCon GreekConMobile">
                H Οργανωτική και η Επιστημονική Επιτροπή του 13ου Πανελλήνιου
                Συνεδρίου Αλγολογίας αποφάσισε την ακύρωση του Συνεδρίου που
                επρόκειτο να πραγματοποιηθεί τον Οκτώβριο στην Καλαμάτα.
                <br /> Η τρέχουσα συγκυρία της πανδημίας Covid-19 και οι σοβαρές
                επιπτώσεις της στον εργασιακό και προσωπικό χώρο των
                εργαζομένων, μας οδήγησε στην δύσκολη αυτή απόφαση. Οι
                προσδοκίες μας για ένα συνέδριο με πλούσια ελληνική και διεθνή
                αντιπροσώπευση, με γόνιμες επιστημονικές συζητήσεις, ενεργή
                συμμετοχή σε κλινικά φροντιστήρια και πλούσια ζωντανή κοινωνική
                επαφή, θα ήταν δύσκολο να πραγματοποιηθούν κάτω από το φάσμα της
                κοινωνικής απόστασης που επιβάλλεται λόγω της πανδημίας.
                <br /> Ως εκ τούτου, αποφασίσαμε να ακυρώσουμε για εφέτος το
                συνέδριο. Αντί αυτού, προγραμματίζουμε μία πολυθεματική ημερίδα
                με ενδιαφέροντα θέματα και διαλέξεις, το Σάββατο 24 Οκτωβρίου
                2020 στο Grand Hyatt Athens. Περισσότερες πληροφορίες θα
                αναρτηθούν σύντομα.
                <br /> Ελπίζουμε να είστε όλοι καλά και σας περιμένουμε, με
                καλύτερες συνθήκες, στην ημερίδα μας. <br />
                <br />
                Βαγδατλή Κυριακή <br />
                Πρόεδρος Ελληνικής Εταιρείας Αλγολογίας
              </div>
            </div>
          </div>
        </div>
        <Dots />
        <div className="pageMargin">
          <div className="GreekConMobile">
            <strong>
              Νεοεισερχόμενα Αναισθησιολογικά Φάρμακα στην Ελληνική Επικράτεια:
              Διλήμματα & Σύγχρονοι Προβληματισμοί
            </strong>
            <br />
            <br />
            <span>Αθήνα: Σάββατο, 15 Φεβρουαρίου 2020</span>
            <span>Θεσσαλονίκη: Σάββατο, 22 Φεβρουαρίου 2020</span>
            <br />
            <br />
            <span
              className="RedirectLinks pointer RemoveUnderLineLink"
              onClick={() =>
                window.open("https://www.esrahellas.gr/news/details/114.html")
              }
            >
              Ιστοσελίδα
            </span>
          </div>
        </div>
        <Dots />
        <div className="pageMargin">
          <div className="RedirectLinks pointer RemoveUnderLineLink">
            <img
              onClick={() => window.open("https://algologiameeting.gr/")}
              className="imgMobile"
              src="/images/GreekConferences/2019-09-28.png"
            />
          </div>
          <div className="pageMargin"></div>
          <div
            onClick={() => window.open("/EEATrikala")}
            className="GreekConMobile RedirectLinks pointer RemoveUnderLineLink"
          >
            Ενημέρωση για την 13η Επιστημονική εκδήλωση της ΕΕΑ στα Τρίκαλα.
          </div>
        </div>
        <Dots />
        <div className="pageMargin">
          <div className="pageMargin"></div>
          <div
            onClick={() => window.open("/EEATrikala")}
            className="GreekConMobile RedirectLinks pointer RemoveUnderLineLink"
          >
            Η Ελληνική Εταιρεία Αλγολογίας υποστηρίζει την{" "}
            <span
              className="RedirectLinks pointer RemoveUnderLineLink"
              onClick={() =>
                window.open(
                  "https://www.nextdeal.gr/epikairotita/ygeia/109100/emvoliasteite-gia-na-prolavete-ton-erpita-zostira-kindyneyoyn-oloi-oi"
                )
              }
            >
              εκστρατεία ενημέρωσης του κοινού για την πρόληψη του Ερπητα
              Ζωστήρα μέσω του εμβολιασμού.
            </span>
            (11/10/2019)
          </div>
        </div>
        <Dots />
        <div className="pageMargin">
          <div className="pageMargin"></div>
          <div
            onClick={() => window.open("/EEATrikala")}
            className="GreekConMobile RedirectLinks pointer RemoveUnderLineLink"
          >
            <span
              className="RedirectLinks pointer RemoveUnderLineLink"
              onClick={() =>
                window.open("/pdfs/GreekConferences/2018-11-06.pdf")
              }
            >
              Κλινικές εφαρµογές αποκλεισµού του σφηνοϋπερώιου γαγγλίου (SPG
              Block) ΠΓΝ ΑΤΤΙΚΟΝ - 6 Νοεμβρίου 2018
            </span>
            (11/10/2019)
          </div>
        </div>
        <Dots />
        {/* Need Update URL */}
        <div className="pageMargin">
          <div className="GreekConMobile RedirectLinks pointer RemoveUnderLineLink">
            15ο Συνέδριο Αναισθησιολογίας και Εντατικής Ιατρικής, Θεσσαλονίκη
            20-23 Σεπτεμβρίου 2018
          </div>
        </div>
        <Dots />
        <div className="pageMargin">
          <div className="pageMargin"></div>
          <div className="GreekConMobile">
            <span
              onClick={() =>
                window.open("/pdfs/GreekConferences/Atiikon_240218.pdf")
              }
              className="RedirectLinks pointer RemoveUnderLineLink"
            >
              Φροντιστηριακή Ημερίδα Αλγολογίας ΠΓΝ "ΑΤΤΙΚΟΝ"
            </span>{" "}
            (7ος Κύκλος) - Σάββατο 24 Φεβρουαρίου 2018
          </div>
        </div>
        <Dots />
        <br />
        <br />
      </div>
    </MainLayout>
  );
}

export default GreekConferencesAndEvents;
