import MainLayout from "../layout/MainLayout";
import RedirectDiv from "../layout/RedirectDiv";
import Dots from "../layout/Dots";

function PublicationsEEA2018() {
  return (
    <MainLayout>
      <div>
        <h3 className="pageMargin">
          Βιβλία Συνεχιζόμενης Εκπαίδευσης στην Αλγολογία (ΣΕΑ)
        </h3>
        <div
          onClick={() =>
            window.open("/../pdfs/ekdoseisEEA/2018/SEA-1-2018.pdf")
          }
          className="pageMargin RedirectLinks pointer pageSizeMobile"
        >
          Συνεχιζόμενη Εκπαίδευση στην Αλγολογία 2018 - Α΄ Κύκλος
        </div>
        <div
          onClick={() =>
            window.open("/../pdfs/ekdoseisEEA/2018/SEA-2-2018.pdf")
          }
          className="pageMargin RedirectLinks pointer pageSizeMobile"
        >
          Συνεχιζόμενη Εκπαίδευση στην Αλγολογία 2018 - Β΄ Κύκλος
        </div>
        <div
          onClick={() =>
            window.open("/../pdfs/ekdoseisEEA/2018/SEA-3-2018.pdf")
          }
          className="pageMargin RedirectLinks pointer pageSizeMobile"
        >
          Συνεχιζόμενη Εκπαίδευση στην Αλγολογία 2018 - Γ΄ Κύκλος
        </div>
        <div
          onClick={() =>
            window.open("/../pdfs/ekdoseisEEA/2018/SEA-4-2018.pdf")
          }
          className="pageMargin RedirectLinks pointer pageSizeMobile"
        >
          Συνεχιζόμενη Εκπαίδευση στην Αλγολογία 2018 - Δ΄ Κύκλος
        </div>
        <br />
        <br />
        <div className="addSpace"></div>
      </div>
    </MainLayout>
  );
}

export default PublicationsEEA2018;
