import MainLayout from "../layout/MainLayout";
import { Table } from "react-bootstrap";

function DSymb2023() {
  return (
    <MainLayout>
      <div>
        <h3 className="dsymb2023">ΔΙΟΙΚΗΤΙΚΟ ΣΥΜΒΟΥΛΙΟ</h3>
        <p className="dsymb2023a">Ιανουάριος 2023 - Ιανουάριος 2026</p>
        <table className="dsymb2023t">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "160px" }}>
                <strong>ΠΡΟΕΔΡΟΣ</strong>
              </td>
              <td style={{ textAlign: "left" }}>Χρονά Ελένη</td>
            </tr>

            <tr>
              <td style={{ width: "160px" }}>
                <strong>ΑΝΤΙΠΡΟΕΔΡΟΣ</strong>
              </td>
              <td style={{ textAlign: "left" }}>Κολοτούρα Αθηνά</td>
            </tr>
            <tr>
              <td style={{ width: "160px" }}>
                <strong>ΓΕΝ. ΓΡΑΜΜΑΤΕΑΣ</strong>
              </td>
              <td style={{ textAlign: "left" }}>Τσιρογιάννη Αικατερίνη</td>
            </tr>
            <tr>
              <td style={{ width: "160px" }}>
                <strong>ΤΑΜΙΑΣ</strong>
              </td>
              <td style={{ textAlign: "left" }}>Αρναούτογλου Ελένη</td>
            </tr>
            <tr>
              <td style={{ width: "160px" }}>
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
              <td>
                <strong>ΑΝΑΠΛ. ΜΕΛΗ</strong>
              </td>
              <td style={{ textAlign: "left" }}>Βαρβέρη Μαριάνθη</td>
            </tr>
            <tr>
              <td style={{ width: "160px" }}></td>
              <td style={{ textAlign: "left" }}>Μπαρέκα Μεταξά</td>
            </tr>
            <tr>
              <td style={{ width: "160px" }}>
                <strong>ΣΥΜΒΟΥΛΟΣ EFIC</strong>
              </td>
              <td style={{ textAlign: "left" }}>Βαγδατλή Κυριακή</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <div className="dsymb2023link">
          <a href="/../pdfs/praktiko_sigkrotisis/praktiko_sigkrotisis_2023.pdf">
            ΠΡΑΚΤΙΚΟ ΣΥΓΚΡΟΤΗΣΗΣ ΣΕ ΣΩΜΑ ΤΟΥ ΝΕΟΥ Δ.Σ.
          </a>
          <br />
          <br />
          <a href="/../pdfs/praktiko_eforeutikis/praktiko_eforeutikis_2023.pdf">
            ΠΡΑΚΤΙΚΟ ΕΦΟΡΕΥΤΙΚΗΣ ΕΠΙΤΡΟΠΗΣ ΑΡΧΑΙΡΕΣΙΩΝ
          </a>
        </div>
      </div>
      <div className="addSpace"></div>
    </MainLayout>
  );
}

export default DSymb2023;
