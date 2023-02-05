import MainLayout from "../layout/MainLayout";

function Aitisi() {
  return (
    <MainLayout>
      <div className="aitisi">
        <h3>Αίτηση Εγγραφής Μέλους στην Ε.Ε.Α.</h3>
      </div>
      <div className="autisi dsymb2023link">
        <a href="/../pdfs/aitisi/eea_aitisi_eggrafis.doc">
          Αίτηση Μέλους σε μορφή Word
        </a>
        <br />
        <br />
        <a href="/../pdfs/aitisi/eea_aitisi_eggrafis.pdf">
          Αίτηση Μέλους σε μορφή PDF
        </a>
      </div>
      <div className="addSpace"></div>
    </MainLayout>
  );
}

export default Aitisi;
