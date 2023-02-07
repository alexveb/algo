import React from "react";
import { Link } from "react-router-dom";

function UpFooter() {
  return (
    <div>
      <table style={{ margin: "auto", marginBottom: "20px" }}>
        <tbody>
          <tr>
            <td>
              <div
                style={{ marginLeft: "5px", marginRight: "5px" }}
                className="col-lg-3"
              >
                <Link to="https://www.iasp-pain.org/">
                  <img
                    style={{
                      width: "100px",
                      height: "50px",
                    }}
                    src="/images/logo/IASP_Logo_RGB_Color.jpg"
                    alt="IASP"
                  />
                </Link>
              </div>
            </td>
            <td>
              <div
                style={{ marginLeft: "5px", marginRight: "5px" }}
                className="col-lg-3"
              >
                <Link to="https://europeanpainfederation.eu/">
                  <img
                    style={{
                      width: "100px",
                      height: "50px",
                    }}
                    src="/images/logo/logo-efic.png"
                    alt="IASP"
                  />
                </Link>
              </div>
            </td>
            <td>
              <div
                style={{ marginLeft: "5px", marginRight: "5px" }}
                className="col-lg-3"
              >
                <Link to="https://www.sip-platform.eu/en">
                  <img
                    style={{
                      width: "80px",
                      height: "50px",
                    }}
                    src="/images/logo/logo_sip.png"
                    alt="IASP"
                  />
                </Link>
              </div>
            </td>
            <td>
              <div
                style={{ marginLeft: "5px", marginRight: "5px" }}
                className="col-lg-3"
              >
                <Link to="https://anaesthesiology.gr/pages/gr.php">
                  <img
                    style={{
                      width: "100px",
                      height: "50px",
                    }}
                    src="/images/logo/_logo_eae_eea.jpg"
                    alt="IASP"
                  />
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UpFooter;
