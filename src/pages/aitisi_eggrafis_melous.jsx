import MainLayout from "../layout/MainLayout";
import RedirectDiv from "../layout/RedirectDiv";
import Dots from "../layout/Dots";

function Aitisi() {
  return (
    <MainLayout>
      <div className="aitisi">
        <h3>Αίτηση Εγγραφής Μέλους στην Ε.Ε.Α.</h3>
      </div>
      <div className=" dsymb2023link RedirectLinks pointer">
        <RedirectDiv to="/../pdfs/aitisi/eea_aitisi_eggrafis.doc">
          Αίτηση Μέλους σε μορφή Word
        </RedirectDiv>
      </div>
      <Dots />
      <br />
      <br />
      <div
        onClick={() => window.open("/../pdfs/aitisi/eea_aitisi_eggrafis.pdf")}
        className="autisi dsymb2023link RedirectLinks pointer"
      >
        Αίτηση Μέλους σε μορφή PDF
      </div>
      <Dots />
      <br />
      <br />
      <br />
      <br />
    </MainLayout>
  );
}

export default Aitisi;
