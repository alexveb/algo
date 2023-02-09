import MainLayout from "../../../layout/MainLayout";
import Dots from "../../../layout/Dots";
import { Link } from "react-router-dom";

function Article7() {
  return (
    <MainLayout>
      <div>
        <div className="pageMargin">
          <h3>Ανάκληση ενέσιμων κορτικοστεροειδών φαρμάκων από τον ΕΟΦ</h3>
        </div>
        <div className="pageMargin"></div>
        <div className="pageMargin GreekConMobile GreekCon">
          <br />
          <br />
          Ενημέρωση Στην ανάκληση παρτίδων των ενέσιμων κορτικοστεροειδών
          φαρμακευτικών προϊόντων “CELESTONE CHRONODOSE INJ.SU.RET (3+3)MG/1 ML
          VIAL και PROPIOCHRONE INJ.SUSP (5+2)MG/1ML προχώρησε ο Εθνικός
          Οργανισμός Φαρμάκων(
          <span
            onClick={() =>
              window.open(
                "https://www.kathimerini.gr/tag/ethnikos-organismos-farmakon/"
              )
            }
            className="pageMargin RedirectLinks pointer RemoveUnderLineLink"
          >
            ΕΟΦ
          </span>
          ).
          <br />
          <br />
          Όπως αναφέρεται στη σχετική ανακοίνωση του Οργανισμού, η απόφαση αυτή
          ελήφθη «μετά από ενημέρωση για πιθανότητα ανίχνευσης σωματιδίων από
          ανοξείδωτο ατσάλι, μέσα στο αποστειρωμένο διάλυμα, τα οποία
          (σωματίδια) προέρχονται από εξάρτημα, που αποτελεί μέρος της γραμμής
          παραγωγής του προϊόντος».
          <br />
          <br />
          <strong>Πρόκειται για παρτίδες των εξής δύο φαρμάκων:</strong>
          <br />
          <br />
          • CELESTONE CHRONODOSE INJ.SU.RET (3+3)MG/1 ML VIAL
          <br />
          <br />
          • PROPIOCHRONE INJ.SUSP (5+2)MG/1ML
          <br />
          <br />
          Δραστική ουσία και στα δύο φάρμακα είναι η βηταμεθαζόνη
          (betamethasone), η οποία κατατάσσεται ως προς τη δραστικότητα της στα
          ισχυρά τοπικά κορτικοστεροειδή κι έχει αντιφλεγμονώδη δράση. Η απόφαση
          του ΕΟΦ εκδίδεται προληπτικά στο πλαίσιο προάσπισης της δημόσιας
          υγείας, σημειώνει η ανακοίνωση
          <br />
          <br />
          Ο ΕΟΦ καλεί την υπεύθυνη φαρμακευτική εταιρεία να επικοινωνήσει άμεσα
          με τους αποδέκτες των συγκεκριμένων παρτίδων και να τις αποσύρει από
          την αγορά.
          <br />
          <br />
          <strong>
            Αναλυτικά τα ανακληθέντα φάρμακα, ο αριθμός παρτίδας και η
            ημερομηνία λήξης για το καθένα:
          </strong>
          <br />
          <br />
          <div className="pageMargin">
            <img
              style={{ margin: "auto" }}
              className="d-flex justify-content-center align-items-center imgMobile"
              src="/images/Home/pinakas.jpg"
            />
          </div>
        </div>
        <Dots />
        <br />
        <br />
      </div>
    </MainLayout>
  );
}

export default Article7;
