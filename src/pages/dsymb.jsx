import MainLayout from "../layout/MainLayout";
import Dots from "../layout/Dots";

function DSymb() {
  return (
    <MainLayout>
      <div>
        <h3 className="pageMargin">ΔΙΟΙΚΗΤΙΚΟ ΣΥΜΒΟΥΛΙΟ</h3>
        <div className="dsymb2023a">Ιανουάριος 2023 - Ιανουάριος 2026</div>
        <table style={{ fontSize: "0.9rem" }} className="dsymb2023t">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "160px", textAlign: "left" }}>
                <strong>ΠΡΟΕΔΡΟΣ</strong>
              </td>
              <td style={{ textAlign: "left" }}>Χρονά Ελένη</td>
            </tr>

            <tr>
              <td style={{ width: "160px", textAlign: "left" }}>
                <strong>ΑΝΤΙΠΡΟΕΔΡΟΣ</strong>
              </td>
              <td style={{ textAlign: "left" }}>Κολοτούρα Αθηνά</td>
            </tr>
            <tr>
              <td style={{ width: "160px", textAlign: "left" }}>
                <strong>ΓΕΝ. ΓΡΑΜΜΑΤΕΑΣ</strong>
              </td>
              <td style={{ textAlign: "left" }}>Τσιρογιάννη Αικατερίνη</td>
            </tr>
            <tr>
              <td style={{ width: "160px", textAlign: "left" }}>
                <strong>ΤΑΜΙΑΣ:</strong>
              </td>
              <td style={{ textAlign: "left" }}>Αρναούτογλου Ελένη</td>
            </tr>
            <tr>
              <td style={{ width: "160px", textAlign: "left" }}>
                <strong>ΜΕΛΗ:</strong>
              </td>
              <td style={{ textAlign: "left" }}>Κετεκίδου Ευγενία</td>
            </tr>
            <tr>
              <td style={{ width: "160px" }}></td>
              <td style={{ textAlign: "left" }}>Νύκταρη Βασιλεία</td>
            </tr>
            <tr>
              <td style={{ width: "160px" }}></td>
              <td style={{ textAlign: "left" }}>Πουλοπούλου Σοφία</td>
            </tr>
            <tr>
              <td style={{ width: "160px", textAlign: "left" }}>
                <strong>ΑΝΑΠΛ. ΜΕΛΗ:</strong>
              </td>
              <td style={{ textAlign: "left" }}>Βαρβέρη Μαριάνθη</td>
            </tr>
            <tr>
              <td style={{ width: "160px" }}></td>
              <td style={{ textAlign: "left" }}>Μπαρέκα Μεταξά</td>
            </tr>
            <tr>
              <td style={{ width: "160px", textAlign: "left" }}>
                <strong>ΣΥΜΒΟΥΛΟΣ EFIC</strong>
              </td>
              <td style={{ textAlign: "left" }}>Βαγδατλή Κυριακή</td>
            </tr>
          </tbody>
        </table>
        <Dots />
        <br />
        <br />
        <div
          onClick={() =>
            window.open(
              "/../pdfs/praktiko_sigkrotisis/praktiko_sigkrotisis_2023.pdf"
            )
          }
          className="RedirectLinks dsymb2023link"
        >
          ΠΡΑΚΤΙΚΟ ΣΥΓΚΡΟΤΗΣΗΣ ΣΕ ΣΩΜΑ ΤΟΥ ΝΕΟΥ Δ.Σ.
          <br />
          <br />
          <div
            onClick={() =>
              window.open(
                "/../pdfs/praktiko_eforeutikis/praktiko_eforeutikis_2023.pdf"
              )
            }
          >
            ΠΡΑΚΤΙΚΟ ΕΦΟΡΕΥΤΙΚΗΣ ΕΠΙΤΡΟΠΗΣ ΑΡΧΑΙΡΕΣΙΩΝ
          </div>
        </div>
      </div>
      <Dots />
      <br />
      <br />
    </MainLayout>
  );
}

export default DSymb;
