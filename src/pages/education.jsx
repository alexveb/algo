import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import RedirectDiv from "../layout/RedirectDiv";
import Dots from "../layout/Dots";

function Education() {
  return (
    <MainLayout>
      <div>
        <div>
          <h3 className="pageMargin">Εκπαίδευση</h3>
          <div className="pageMargin RedirectLinks pointer">
            {/* Link Need Update */}
            <RedirectDiv to="/">
              ΠΡΟΓΡΑΜΜΑ ΣΕΜΙΝΑΡΙΟΥ ΕΚΠΑΙΔΕΥΣΗΣ ΣΤΗΝ ΑΛΓΟΛΟΓΙΑ (ΣΕΑ)
            </RedirectDiv>
          </div>
          <div
            onClick={() =>
              window.open("/../pdfs/ekpaideush/2021-05-ARETAIEIO.pdf")
            }
            className="pageMargin RedirectLinks pointer"
          >
            ΕΠΑΝΑΛΗΠΤΙΚΑ ΜΑΘΗΜΑΤΑ ΓΙΑ ΤΙΣ ΕΞΕΤΑΣΕΙΣ ΤΟΥ ΕΥΡΩΠΑΪΚΟΥ ΔΙΠΛΩΜΑΤΟΣ
            ΑΝΑΙΣΘΗΣΙΟΛΟΓΙΑΣ - ΜΑΙΟΣ 2021
          </div>
          <div
            onClick={() =>
              window.open(
                "https://europeanpainfederation.eu/education/pain-schools/"
              )
            }
            className="pageMargin RedirectLinks pointer RemoveUnderLineLink"
          >
            EFIC Pain Schools
          </div>
          <div
            onClick={() =>
              window.open(
                "https://europeanpainfederation.eu/education/pain-exams/european-diploma-in-pain-medicine-edpm/"
              )
            }
            className="pageMargin RedirectLinks pointer RemoveUnderLineLink"
          >
            EFIC European Diploma in Pain Medicine (EDPM)
          </div>
          <div
            onClick={() =>
              window.open(
                "https://europeanpainfederation.eu/education/efic-fellowships/"
              )
            }
            className="pageMargin RedirectLinks pointer RemoveUnderLineLink"
          >
            EFIC Fellowships
          </div>
          <div
            onClick={() =>
              window.open(
                "https://europeanpainfederation.eu/education/efic-education-platform/"
              )
            }
            className="pageMargin RedirectLinks pointer RemoveUnderLineLink"
          >
            EFIC Education Platform
          </div>
          <div
            onClick={() =>
              window.open("https://interventionalpainpractice.org/")
            }
            className="pageMargin RedirectLinks pointer RemoveUnderLineLink"
          >
            WIP Fellow of Interventional Pain Practice (FIPP)
          </div>
          <div
            onClick={() => window.open("https://esraeurope.org/edra/")}
            className="pageMargin RedirectLinks pointer RemoveUnderLineLink"
          >
            ESRA European Diploma in Regional Anaesthesia (EDRA)
          </div>
        </div>
        <Dots />
        <br />
        <br />
      </div>
    </MainLayout>
  );
}

export default Education;
