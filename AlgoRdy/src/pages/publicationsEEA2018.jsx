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
        <div className="pageMargin RedirectLinks pointer pageSizeMobile">
          <RedirectDiv to="/../pdfs/ekdoseisEEA/2018/SEA-1-2018.pdf">
            Συνεχιζόμενη Εκπαίδευση στην Αλγολογία 2018 - Α΄ Κύκλος
          </RedirectDiv>
        </div>
        <div className="pageMargin RedirectLinks pointer pageSizeMobile">
          <RedirectDiv to="/../pdfs/ekdoseisEEA/2018/SEA-2-2018.pdf">
            Συνεχιζόμενη Εκπαίδευση στην Αλγολογία 2018 - Β΄ Κύκλος
          </RedirectDiv>
        </div>
        <div className="pageMargin RedirectLinks pointer pageSizeMobile">
          <RedirectDiv to="/../pdfs/ekdoseisEEA/2018/SEA-3-2018.pdf">
            Συνεχιζόμενη Εκπαίδευση στην Αλγολογία 2018 - Γ΄ Κύκλος
          </RedirectDiv>
        </div>
        <div className="pageMargin RedirectLinks pointer pageSizeMobile">
          <RedirectDiv to="/../pdfs/ekdoseisEEA/2018/SEA-4-2018.pdf">
            Συνεχιζόμενη Εκπαίδευση στην Αλγολογία 2018 - Δ΄ Κύκλος
          </RedirectDiv>
        </div>
        <br />
        <br />
      </div>
    </MainLayout>
  );
}

export default PublicationsEEA2018;
