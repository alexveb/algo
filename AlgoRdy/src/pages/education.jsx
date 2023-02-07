import MainLayout from "../layout/MainLayout";
import RedirectDiv from "../layout/RedirectDiv";

function Education() {
  return (
    <MainLayout>
      <div>
        <div>
          <h3 className="pageMargin">Εκπαίδευση</h3>
          <div className="pageMargin RedirectLinks pointer">
            <RedirectDiv to="/">
              ΠΡΟΓΡΑΜΜΑ ΣΕΜΙΝΑΡΙΟΥ ΕΚΠΑΙΔΕΥΣΗΣ ΣΤΗΝ ΑΛΓΟΛΟΓΙΑ (ΣΕΑ)
            </RedirectDiv>
          </div>
          <div className="pageMargin RedirectLinks pointer">
            <RedirectDiv to="/../pdfs/ekpaideush/2021-05-ARETAIEIO.pdf">
              ΕΠΑΝΑΛΗΠΤΙΚΑ ΜΑΘΗΜΑΤΑ ΓΙΑ ΤΙΣ ΕΞΕΤΑΣΕΙΣ ΤΟΥ ΕΥΡΩΠΑΪΚΟΥ ΔΙΠΛΩΜΑΤΟΣ
              ΑΝΑΙΣΘΗΣΙΟΛΟΓΙΑΣ - ΜΑΙΟΣ 2021 Δείτε το πρόγραμμα
            </RedirectDiv>
          </div>
          <div className="pageMargin RedirectLinks pointer">
            <RedirectDiv to="https://europeanpainfederation.eu/education/pain-schools/">
              EFIC Pain Schools
            </RedirectDiv>
          </div>
          <div className="pageMargin RedirectLinks pointer">
            <RedirectDiv to="https://europeanpainfederation.eu/education/pain-exams/european-diploma-in-pain-medicine-edpm/">
              EFIC European Diploma in Pain Medicine (EDPM)
            </RedirectDiv>
          </div>
          <div className="pageMargin RedirectLinks pointer">
            <RedirectDiv to="https://europeanpainfederation.eu/education/efic-fellowships/">
              EFIC Fellowships
            </RedirectDiv>
          </div>
          <div className="pageMargin RedirectLinks pointer">
            <RedirectDiv to="https://europeanpainfederation.eu/education/efic-education-platform/">
              EFIC Education Platform
            </RedirectDiv>
          </div>
          <div className="pageMargin RedirectLinks pointer">
            <RedirectDiv to="https://interventionalpainpractice.org/">
              WIP Fellow of Interventional Pain Practice (FIPP)
            </RedirectDiv>
          </div>
          <div className="pageMargin RedirectLinks pointer">
            <RedirectDiv to="https://esraeurope.org/edra/">
              ESRA European Diploma in Regional Anaesthesia (EDRA)
            </RedirectDiv>
          </div>
        </div>
        <br />
        <br />
        <div style={{ marginBottom: "50px" }}></div>
      </div>
    </MainLayout>
  );
}

export default Education;
