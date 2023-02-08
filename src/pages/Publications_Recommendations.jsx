import MainLayout from "../layout/MainLayout";
import RedirectDiv from "../layout/RedirectDiv";
import Dots from "../layout/Dots";

function PublicationsRecommendations() {
  return (
    <MainLayout>
      <div>
        <div>
          <h3 className="pageMargin">Δημοσιεύσεις - Συστάσεις</h3>
          <h5 className="pageMargin">ΔΗΜΟΣΙΕΥΣΕΙΣ- ΕΝΔΙΑΦΕΡΟΝΤΑ ΑΡΘΡΑ:</h5>
          <div
            onClick={() =>
              window.open(
                "/..//pdfs/dimosieuseisSystaseis/articles/EJP-2021.1.pdf"
              )
            }
            className="pageMargin RedirectLinks pointer Pub-Rec-Mobile"
          >
            European* clinical practice recommendations on opioids for chronic
            noncancer pain –Part 1: Role of opioids in the management of chronic
            noncancer pain (EJP 2021.1)
          </div>
        </div>
        <Dots />
        <div>
          <div
            onClick={() =>
              window.open(
                "/..//pdfs/dimosieuseisSystaseis/articles/EJP-2021.2.pdf"
              )
            }
            className="pageMargin RedirectLinks pointer Pub-Rec-Mobile"
          >
            European clinical practice recommendations on opioids for chronic
            noncancer pain –Part 2: Special situations (EJP 2021.2)
          </div>
        </div>
        <Dots />
        <div>
          <div
            onClick={() =>
              window.open(
                "/..//pdfs/dimosieuseisSystaseis/articles/opioid epidemic in europe.pdf"
              )
            }
            className="pageMargin RedirectLinks pointer"
          >
            Opioid epidemic in Europe
          </div>
        </div>
        <Dots />
        <div>
          <div
            onClick={() =>
              window.open(
                "/..//pdfs/dimosieuseisSystaseis/articles/sxoliasmos EFIC gia opioeidh se mi karkiniko pono.pdf"
              )
            }
            className="pageMargin RedirectLinks pointer"
          >
            Σχολιασμός EFIC για οπιοειδή σε μη καρκινικό πόνο
          </div>
        </div>
        <Dots />
        <div>
          <div
            onClick={() =>
              window.open(
                "/..//pdfs/dimosieuseisSystaseis/articles/2020-12-01-1.pdf"
              )
            }
            className="pageMargin RedirectLinks pointer Pub-Rec-Mobile"
          >
            Νέα οπιοειδή στη φαρέτρα του αναισθησιολόγου: Οξυκωδόνη -
            Σουφεντανύλη (12/2020)
          </div>
        </div>
        <Dots />
        <div>
          <div
            onClick={() =>
              window.open(
                "/..//pdfs/dimosieuseisSystaseis/articles/2020-02-Syntagografisi_op_metegx.pdf"
              )
            }
            className="pageMargin RedirectLinks pointer"
          >
            Συνταγογράφηση οπιοειδών μετεγχειρητικά (02/2020)
          </div>
        </div>
        <Dots />
        <div>
          <div
            onClick={() =>
              window.open(
                "/..//pdfs/dimosieuseisSystaseis/articles/Magnesium-sulfate-in-pediatric-anesthesia.pdf"
              )
            }
            className="pageMargin RedirectLinks pointer"
          >
            Magnesium sulfate in pediatric anesthesia: the Super Adjuvant
            (01/2020)
          </div>
        </div>
        <Dots />
        <div>
          <div
            onClick={() =>
              window.open(
                "/..//pdfs/dimosieuseisSystaseis/articles/E-Alert on SIP 2016.pdf"
              )
            }
            className="pageMargin RedirectLinks pointer"
          >
            E- Alert on SIP 2016
          </div>
        </div>
        <Dots />
        <div>
          <div
            onClick={() =>
              window.open(
                "/..//pdfs/dimosieuseisSystaseis/articles/chronic_pain_kress_efic.pdf"
              )
            }
            className="pageMargin RedirectLinks pointer"
          >
            Pan European article on Chronic Pain from Prof Hans G. Kress / EFIC
          </div>
        </div>
        <Dots />
        <div>
          <h5 className="pageMargin">ΣΥΣΤΑΣΕΙΣ- ΚΑΤΕΥΘΥΝΤΗΡΙΕΣ ΟΔΗΓΙΕΣ:</h5>
        </div>
        <div>
          <div
            onClick={() =>
              window.open(
                "/..//pdfs/dimosieuseisSystaseis/guidelines/1-management of cancer pain.pdf"
              )
            }
            className="pageMargin RedirectLinks pointer Pub-Rec-Mobile"
          >
            Management of cancer pain in adult patients: ESMO Clinical Practice
            Guidelines
          </div>
        </div>
        <Dots />
        <div>
          <div
            onClick={() =>
              window.open(
                "/..//pdfs/dimosieuseisSystaseis/guidelines/1-Consensus_Guidelines_on_the_Use_of_Intravenous.11-2.pdf"
              )
            }
            className="pageMargin RedirectLinks pointer Pub-Rec-Mobile"
          >
            Consensus Guidelines on the Use of Intravenous Ketamine Infusions
            for Chronic Pain From the American Society of Regional Anesthesia
            and Pain Medicine,
            <div>
              the American Academy of Pain Medicine, and the American Society of
              Anesthesiologists
            </div>
          </div>
        </div>
        <Dots />
        <div>
          <div
            onClick={() =>
              window.open(
                "/..//pdfs/dimosieuseisSystaseis/guidelines/EAEanticoag FEB 2016.pdf"
              )
            }
            className="pageMargin RedirectLinks pointer Pub-Rec-Mobile Pub-Rec-Mobile"
          >
            Νέες Επικαιροποιημένες Συστάσεις της Ελληνικής Αναισθησιολογικής
            Εταιρείας σχετικά με την «Περιοχική αναισθησία και αντιπηκτική
            αγωγή». (Φεβρουάριος 2016)
          </div>
        </div>
        <Dots />
        <br />
        <br />
      </div>
    </MainLayout>
  );
}

export default PublicationsRecommendations;
