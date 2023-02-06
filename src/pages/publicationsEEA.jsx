import MainLayout from "../layout/MainLayout";
import RedirectDiv from "../layout/RedirectDiv";
import Dots from "../layout/Dots";

function PublicationsEEA() {
  return (
    <MainLayout>
      <div>
        <h3 className="pageMargin">Εκδόσεις Ε.Ε.Α.</h3>
        <h5 className="pageMargin">ΕΝΗΜΕΡΩΤΙΚΟ ΔΕΛΤΙΟ 2021</h5>
        <div className="pageMargin RedirectLinks pointer">
          <RedirectDiv to="/../pdfs/ekdoseisEEA/EEA2021_ED01_OSFYALGIA.pdf">
            Η ΠΑΓΚΟΣΜΙΑ ΕΠΙΒΑΡΥΝΣΗ ΑΠΟ ΤΗΝ ΟΣΦΥΑΛΓΙΑ
          </RedirectDiv>
        </div>
        <div className="pageMargin RedirectLinks pointer">
          <RedirectDiv to="/../pdfs/ekdoseisEEA/Global Year 2021_Pathophysiological Fact Sheet.pdf">
            ΠΑΘΟΦΥΣΙΟΛΟΓΙΚΗ ΑΞΙΟΛΟΓΗΣΗ ΤΗΣ “ΜΗ-ΕΙΔΙΚΗΣ” ΟΣΦΥΑΛΓΙΑΣ
          </RedirectDiv>
        </div>
        <div className="pageMargin RedirectLinks pointer">
          <RedirectDiv to="/../pdfs/ekdoseisEEA/EEA2021_ED02_AYXENALGIA.pdf">
            ΑΥΧΕΝΑΛΓΙΑ
          </RedirectDiv>
        </div>
        <div className="pageMargin RedirectLinks pointer">
          <RedirectDiv to="/../pdfs/ekdoseisEEA/EEA2021_ED03_Neural Mechanisms Fact Sheet.pdf">
            Νευροβιολογικοί Μηχανισμοί που συμβάλλουν στην Οσφυαλγία
          </RedirectDiv>
        </div>
        <Dots />
        <div className="pageMargin RedirectLinks pointer">
          <RedirectDiv to="/../pdfs/ekdoseisEEA/GNOSTIKO-EKPAIDEYTIKO-ANTIKEIMENO-ALGOLOGIAS-1.pdf">
            ΓΝΩΣΤΙΚΟ ΚΑΙ ΕΚΠΑΙΔΕΥΤΙΚΟ ΑΝΤΙΚΕΙΜΕΝΟ ΑΛΓΟΛΟΓΙΑΣ
          </RedirectDiv>
        </div>
        <Dots />
        <div className="pageMargin RedirectLinks pointer">
          <RedirectDiv to="/../pdfs/ekdoseisEEA/GNOSTIKO-EKPAIDEYTIKO-ANTIKEIMENO-ALGOLOGIAS-1.pdf">
            ΣΥΝΕΧΙΖΟΜΕΝΗ ΕΚΠΑΙΔΕΥΣΗ ΣΤΗΝ ΑΛΓΟΛΟΓΙΑ 2018
          </RedirectDiv>
        </div>

        <div className="addSpaceFooter"></div>
      </div>
    </MainLayout>
  );
}

export default PublicationsEEA;
