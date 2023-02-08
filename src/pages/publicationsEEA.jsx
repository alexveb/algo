import MainLayout from "../layout/MainLayout";
import RedirectDiv from "../layout/RedirectDiv";
import Dots from "../layout/Dots";
import { Link } from "react-router-dom";

function PublicationsEEA() {
  return (
    <MainLayout>
      <div>
        <h3 className="pageMargin">Εκδόσεις Ε.Ε.Α.</h3>
        <h5 className="pageMargin">ΕΝΗΜΕΡΩΤΙΚΟ ΔΕΛΤΙΟ 2021</h5>
        <div
          onClick={() =>
            window.open("/../pdfs/ekdoseisEEA/EEA2021_ED01_OSFYALGIA.pdf")
          }
          className="pageMargin RedirectLinks pointer"
        >
          Η ΠΑΓΚΟΣΜΙΑ ΕΠΙΒΑΡΥΝΣΗ ΑΠΟ ΤΗΝ ΟΣΦΥΑΛΓΙΑ
        </div>
        <div
          onClick={() =>
            window.open(
              "/../pdfs/ekdoseisEEA/Global Year 2021_Pathophysiological Fact Sheet.pdf"
            )
          }
          className="pageMargin RedirectLinks pointer"
        >
          ΠΑΘΟΦΥΣΙΟΛΟΓΙΚΗ ΑΞΙΟΛΟΓΗΣΗ ΤΗΣ “ΜΗ-ΕΙΔΙΚΗΣ” ΟΣΦΥΑΛΓΙΑΣ
        </div>
        <div
          onClick={() =>
            window.open("/../pdfs/ekdoseisEEA/EEA2021_ED02_AYXENALGIA.pdf")
          }
          className="pageMargin RedirectLinks pointer"
        >
          ΑΥΧΕΝΑΛΓΙΑ
        </div>
        <div
          onClick={() =>
            window.open(
              "/../pdfs/ekdoseisEEA/EEA2021_ED03_Neural Mechanisms Fact Sheet.pdf"
            )
          }
          className="pageMargin RedirectLinks pointer"
        >
          Νευροβιολογικοί Μηχανισμοί που συμβάλλουν στην Οσφυαλγία
        </div>
        <Dots />
        <div
          onClick={() =>
            window.open(
              "/../pdfs/ekdoseisEEA/GNOSTIKO-EKPAIDEYTIKO-ANTIKEIMENO-ALGOLOGIAS-1.pdf"
            )
          }
          className="pageMargin RedirectLinks pointer"
        >
          ΓΝΩΣΤΙΚΟ ΚΑΙ ΕΚΠΑΙΔΕΥΤΙΚΟ ΑΝΤΙΚΕΙΜΕΝΟ ΑΛΓΟΛΟΓΙΑΣ
        </div>
        <Dots />
        <div
          // onClick={() => window.open("/PublicationsEEA2018")}
          className="pageMargin RedirectLinks pointer"
        >
          <RedirectDiv to="/PublicationsEEA2018">
            ΣΥΝΕΧΙΖΟΜΕΝΗ ΕΚΠΑΙΔΕΥΣΗ ΣΤΗΝ ΑΛΓΟΛΟΓΙΑ 2018
          </RedirectDiv>
        </div>
        <Dots />
        <div className="pageMargin RedirectLinks pointer">
          <RedirectDiv
            className="RemoveUnderLineLink"
            to="/do_not_suffer_in_silence"
          >
            ΜΗΝ ΥΠΟΦΕΡΕΤΕ ΣΙΩΠΗΛΑ
          </RedirectDiv>
        </div>
        <Dots />
        <div>
          <h5 className="pageMargin">ΕΝΗΜΕΡΩΤΙΚΟ ΔΕΛΤΙΟ 2000-2011</h5>
          <div className="pageMargin pointer">
            <table className="dsymb2023t dsymb2023t-mobile tableResizeMobile">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/enDeltio2000-2011/E-2000.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2000
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/enDeltio2000-2011/E-2001.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2001
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/enDeltio2000-2011/E-2002.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2002
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/enDeltio2000-2011/E2003-1.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2003
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/enDeltio2000-2011/E2004-1.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2004
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/enDeltio2000-2011/E2005-1.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2005-1
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/enDeltio2000-2011/E2005-2.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2005-2
                  </td>
                </tr>
                <br />
                <tr>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/enDeltio2000-2011/E2006-1.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2006
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/enDeltio2000-2011/E2008-1.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2008-1
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/enDeltio2000-2011/E2008-2.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2008-2
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/enDeltio2000-2011/E2009-3.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2009
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/enDeltio2000-2011/E2010-1.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2010
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/enDeltio2000-2011/E2011-1.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2011-1
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/enDeltio2000-2011/E2011-2.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2011-2
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Dots />
        <div>
          <h5 className="pageMargin">ΑΛΓΟΣ - ΚΛΙΝΙΚΑ ΧΡΟΝΙΚΑ 2003-2011</h5>
          <div className="pageMargin pointer">
            <table className="dsymb2023t dsymb2023t-mobile tableResizeMobile">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/klinikaXronika2003-2011/A2003-1.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2003
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/klinikaXronika2003-2011/A2005-1.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2005-1
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/klinikaXronika2003-2011/A2005-2.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2005-2
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/klinikaXronika2003-2011/A2005-3.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2005-3
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/klinikaXronika2003-2011/A2006-1.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2006
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/klinikaXronika2003-2011/A2008-1.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2008-1
                  </td>
                </tr>
                <br />
                <tr>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/klinikaXronika2003-2011/A2008-2.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2008-2
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/klinikaXronika2003-2011/A2008-3.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2008-3
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/klinikaXronika2003-2011/A2009-4.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2009
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/klinikaXronika2003-2011/A2010-1.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2010
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/klinikaXronika2003-2011/A2011-1.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2011-1
                  </td>
                  <td
                    onClick={() =>
                      window.open(
                        "/../pdfs/ekdoseisEEA/klinikaXronika2003-2011/E2011-2.pdf"
                      )
                    }
                    className="RedirectLinks"
                    style={{ width: "80px" }}
                  >
                    2011-2
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Dots />
        <br />
        <br />
      </div>
    </MainLayout>
  );
}

export default PublicationsEEA;
