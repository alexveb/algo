import MainLayout from "../layout/MainLayout";
import RedirectDiv from "../layout/RedirectDiv";

function Aitisi() {
  return (
    <MainLayout>
      <div className="aitisi">
        <h3>Αίτηση Εγγραφής Μέλους στην Ε.Ε.Α.</h3>
      </div>
      <div className="autisi dsymb2023link RedirectLinks pointer">
        <RedirectDiv to="/../pdfs/aitisi/eea_aitisi_eggrafis.doc">
          Αίτηση Μέλους σε μορφή Word
        </RedirectDiv>
      </div>
      <br />
      <br />
      <div className="autisi dsymb2023link RedirectLinks pointer">
        <RedirectDiv to="/../pdfs/aitisi/eea_aitisi_eggrafis.pdf">
          Αίτηση Μέλους σε μορφή PDF
        </RedirectDiv>
      </div>
      <br />
      <br />
      <div className="addSpace"></div>
    </MainLayout>
  );
}

export default Aitisi;
