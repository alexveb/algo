import React from "react";
import { Link } from "react-router-dom";

function FooterInfo() {
  return (
    <div className="FooterInfo">
      <div className="row">
        <div style={{ marginTop: "20px" }} className="col-lg-6">
          <div>
            <h5>Επικοινωνία</h5>
          </div>
          <div>Επικοινωνείστε μαζί μας για οποιοδήποτε θέμα και πρόβλημα:</div>
          <br />
          <div>ΕΛΛΗΝΙΚΗ ΕΤΑΙΡΕΙΑ ΑΛΓΟΛΟΓΙΑΣ</div>
          <br />
          <div>Μακρυνίτσας 4 - 6. Αθήνα 115 22</div>
          <br />
          <div>Tηλ: 210 6444174 (Δε-Πέ 5-8 μ.μ.)</div>
          <br />
          <div>Fax: 210 6448686</div>
          <br />
          <div className="RedirectLinks pointer">
            <a className="RemoveUnderLineLink" href="mailto:info@algologia.gr">
              Email: info@algologia.gr
            </a>
          </div>
        </div>
        <div style={{ marginTop: "20px" }} className="col-lg-6">
          <div>
            <h5>Αίτηση Εγγραφής - Συνδρομές</h5>
          </div>
          <br />
          <div className="RedirectLinks pointer">
            <Link className="RemoveUnderLineLink" to="/aitisi-eggrafis-melous">
              Αίτηση Εγγραφής Μέλους Ε.Ε.Α.
            </Link>
          </div>
          <br />
          <div>
            Συνδρομές: Η τακτοποίηση των οικονομικών σας εκκρεμοτήτων με την
            Ε.Ε.Α. είναι δυνατή μόνο μέσω των δύο επισήμων λογαριασμών της
            Ελληνικής Εταιρείας Αλγολογίας στις Τράπεζες:
          </div>
          <br />
          <div>EUROBANK IBAN: GR4802600080000310102218133</div>
          <br />
          <div>
            Σας παρακαλούμε να στείλετε με email, fax ή επιστολή στην Εταιρεία
            την απόδειξη κατάθεσης της Τράπεζας.
          </div>
          <br />
          <div className="RedirectLinks pointer">
            <a className="RemoveUnderLineLink" href="mailto:info@algologia.org">
              Εάν είστε μέλος της Ε.Ε.Α. και έχουν αλλάξει τα στοιχεία σας
              στείλτε μας ένα σχετικό e-mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterInfo;
