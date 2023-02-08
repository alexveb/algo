import MainLayout from "../layout/MainLayout";
import Dots from "../layout/Dots";

function ImeridaAlgologias() {
  return (
    <MainLayout>
      <div>
        <div className="pageMargin">
          <h3>ΗΜΕΡΙΔΑ Αλγολογίας | Grand Hyatt Athens 24 Οκτωβρίου 2020</h3>
        </div>
        <div className="pageMargin">
          <h4>SAVE THE DATE!</h4>
        </div>
        <Dots />
        <div className="pageMargin GreekConMobile GreekCon">
          Αγαπητοί φίλοι και συνάδελφοι,
          <br />
          <br />
          H Οργανωτική και η Επιστημονική Επιτροπή του 13ου Πανελλήνιου
          Συνεδρίου Αλγολογίας αποφάσισε την ακύρωση του Συνεδρίου που επρόκειτο
          να πραγματοποιηθεί τον Οκτώβριο στην Καλαμάτα.
          <br />
          <br />
          Η τρέχουσα συγκυρία της πανδημίας Covid-19 και οι σοβαρές επιπτώσεις
          της στον εργασιακό και προσωπικό χώρο των εργαζομένων, μας οδήγησε
          στην δύσκολη αυτή απόφαση. Οι προσδοκίες μας για ένα συνέδριο με
          πλούσια ελληνική και διεθνή αντιπροσώπευση, με γόνιμες επιστημονικές
          συζητήσεις, ενεργή συμμετοχή σε κλινικά φροντιστήρια και πλούσια
          ζωντανή κοινωνική επαφή, θα ήταν δύσκολο να πραγματοποιηθούν κάτω από
          το φάσμα της κοινωνικής απόστασης που επιβάλλεται λόγω της πανδημίας.
          <br />
          <br />
          Ως εκ τούτου, αποφασίσαμε να ακυρώσουμε για εφέτος το συνέδριο. Αντί
          αυτού, προγραμματίζουμε μία πολυθεματική ημερίδα με ενδιαφέροντα
          θέματα και διαλέξεις, το Σάββατο 24 Οκτωβρίου 2020 στο Grand Hyatt
          Athens.
          <br />
          <br />
          Περισσότερες πληροφορίες θα αναρτηθούν σύντομα.
          <br />
          <br />
          Ελπίζουμε να είστε όλοι καλά και σας περιμένουμε, με καλύτερες
          συνθήκες, στην ημερίδα μας.
          <br />
          <br />
          <strong>Βαγδατλή Κυριακή</strong>
          <br />
          <br />
          Πρόεδρος Ελληνικής Εταιρείας Αλγολογίας
          <br />
          <br />
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <img
                style={{
                  width: "100%",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
                className="imgMobile"
                src="/images/GreekConferences/imeridaAlgologias24oc.jpeg"
              />
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
        <Dots />
        <br />
        <br />
      </div>
    </MainLayout>
  );
}

export default ImeridaAlgologias;
