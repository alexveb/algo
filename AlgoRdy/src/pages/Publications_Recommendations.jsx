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
          <div className="pageMargin RedirectLinks pointer Pub-Rec-Mobile">
            <RedirectDiv to="/..//pdfs/dimosieuseisSystaseis/articles/EJP-2021.1.pdf">
              European* clinical practice recommendations on opioids for chronic
              noncancer pain –Part 1: Role of opioids in the management of
              chronic noncancer pain (EJP 2021.1)
            </RedirectDiv>
          </div>
        </div>
        <Dots />
        <div>
          <div className="pageMargin RedirectLinks pointer Pub-Rec-Mobile">
            <RedirectDiv to="/..//pdfs/dimosieuseisSystaseis/articles/EJP-2021.2.pdf">
              European clinical practice recommendations on opioids for chronic
              noncancer pain –Part 2: Special situations (EJP 2021.2)
            </RedirectDiv>
          </div>
        </div>
        <Dots />
        <div>
          <div className="pageMargin RedirectLinks pointer">
            <RedirectDiv to="/..//pdfs/dimosieuseisSystaseis/articles/opioid epidemic in europe.pdf">
              Opioid epidemic in Europe
            </RedirectDiv>
          </div>
        </div>
        <Dots />
        <div>
          <div className="pageMargin RedirectLinks pointer">
            <RedirectDiv to="/..//pdfs/dimosieuseisSystaseis/articles/sxoliasmos EFIC gia opioeidh se mi karkiniko pono.pdf">
              Σχολιασμός EFIC για οπιοειδή σε μη καρκινικό πόνο
            </RedirectDiv>
          </div>
        </div>
        <Dots />
        <div>
          <div className="pageMargin RedirectLinks pointer Pub-Rec-Mobile">
            <RedirectDiv to="/..//pdfs/dimosieuseisSystaseis/articles/2020-12-01-1.pdf">
              Νέα οπιοειδή στη φαρέτρα του αναισθησιολόγου: Οξυκωδόνη -
              Σουφεντανύλη (12/2020)
            </RedirectDiv>
          </div>
        </div>
        <Dots />
        <div>
          <div className="pageMargin RedirectLinks pointer">
            <RedirectDiv to="/..//pdfs/dimosieuseisSystaseis/articles/2020-02-Syntagografisi_op_metegx.pdf">
              Συνταγογράφηση οπιοειδών μετεγχειρητικά (02/2020)
            </RedirectDiv>
          </div>
        </div>
        <Dots />
        <div>
          <div className="pageMargin RedirectLinks pointer">
            <RedirectDiv to="/..//pdfs/dimosieuseisSystaseis/articles/Magnesium-sulfate-in-pediatric-anesthesia.pdf">
              Magnesium sulfate in pediatric anesthesia: the Super Adjuvant
              (01/2020)
            </RedirectDiv>
          </div>
        </div>
        <Dots />
        <div>
          <div className="pageMargin RedirectLinks pointer">
            <RedirectDiv to="/..//pdfs/dimosieuseisSystaseis/articles/E-Alert on SIP 2016.pdf">
              E- Alert on SIP 2016
            </RedirectDiv>
          </div>
        </div>
        <Dots />
        <div>
          <div className="pageMargin RedirectLinks pointer">
            <RedirectDiv to="/..//pdfs/dimosieuseisSystaseis/articles/chronic_pain_kress_efic.pdf">
              Pan European article on Chronic Pain from Prof Hans G. Kress /
              EFIC
            </RedirectDiv>
          </div>
        </div>
        <Dots />
        <div>
          <h5 className="pageMargin">ΣΥΣΤΑΣΕΙΣ- ΚΑΤΕΥΘΥΝΤΗΡΙΕΣ ΟΔΗΓΙΕΣ:</h5>
        </div>
        <div>
          <div className="pageMargin RedirectLinks pointer Pub-Rec-Mobile">
            <RedirectDiv to="/..//pdfs/dimosieuseisSystaseis/guidelines/1-management of cancer pain.pdf">
              Management of cancer pain in adult patients: ESMO Clinical
              Practice Guidelines
            </RedirectDiv>
          </div>
        </div>
        <Dots />
        <div>
          <div className="pageMargin RedirectLinks pointer Pub-Rec-Mobile">
            <RedirectDiv to="/..//pdfs/dimosieuseisSystaseis/guidelines/1-Consensus_Guidelines_on_the_Use_of_Intravenous.11-2.pdf">
              Consensus Guidelines on the Use of Intravenous Ketamine Infusions
              for Chronic Pain From the American Society of Regional Anesthesia
              and Pain Medicine,
              <div>
                the American Academy of Pain Medicine, and the American Society
                of Anesthesiologists
              </div>
            </RedirectDiv>
          </div>
        </div>
        <Dots />
        <div>
          <div className="pageMargin RedirectLinks pointer Pub-Rec-Mobile Pub-Rec-Mobile">
            <RedirectDiv to="/..//pdfs/dimosieuseisSystaseis/guidelines/EAEanticoag FEB 2016.pdf">
              Νέες Επικαιροποιημένες Συστάσεις της Ελληνικής Αναισθησιολογικής
              Εταιρείας σχετικά με την «Περιοχική αναισθησία και αντιπηκτική
              αγωγή». (Φεβρουάριος 2016)
            </RedirectDiv>
          </div>
        </div>
        <div style={{ marginBottom: "50px" }}></div>
        <br />
        <br />
      </div>
    </MainLayout>
  );
}

export default PublicationsRecommendations;
