import { Link } from "react-router-dom";
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
              ΑΝΑΙΣΘΗΣΙΟΛΟΓΙΑΣ - ΜΑΙΟΣ 2021
            </RedirectDiv>
          </div>
          <div className="pageMargin RedirectLinks pointer">
            <Link
              className="RemoveUnderLineLink"
              to="https://europeanpainfederation.eu/education/pain-schools/"
            >
              EFIC Pain Schools
            </Link>
          </div>
          <div className="pageMargin RedirectLinks pointer">
            <Link
              className="RemoveUnderLineLink"
              to="https://europeanpainfederation.eu/education/pain-exams/european-diploma-in-pain-medicine-edpm/"
            >
              EFIC European Diploma in Pain Medicine (EDPM)
            </Link>
          </div>
          <div className="pageMargin RedirectLinks pointer">
            <Link
              className="RemoveUnderLineLink"
              to="https://europeanpainfederation.eu/education/efic-fellowships/"
            >
              EFIC Fellowships
            </Link>
          </div>
          <div className="pageMargin RedirectLinks pointer">
            <Link
              className="RemoveUnderLineLink"
              to="https://europeanpainfederation.eu/education/efic-education-platform/"
            >
              EFIC Education Platform
            </Link>
          </div>
          <div className="pageMargin RedirectLinks pointer">
            <Link
              className="RemoveUnderLineLink"
              to="https://interventionalpainpractice.org/"
            >
              WIP Fellow of Interventional Pain Practice (FIPP)
            </Link>
          </div>
          <div className="pageMargin RedirectLinks pointer">
            <Link
              className="RemoveUnderLineLink"
              to="https://esraeurope.org/edra/"
            >
              ESRA European Diploma in Regional Anaesthesia (EDRA)
            </Link>
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
