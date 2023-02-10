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
                <img
                  onClick={() => window.open("https://www.iasp-pain.org/")}
                  className="RedirectLinks pointer RemoveUnderLineLink"
                  style={{
                    width: "90px",
                    height: "50px",
                  }}
                  src="/images/logo/IASP_Logo_RGB_Color.jpg"
                  alt="IASP"
                />
              </div>
            </td>
            <td>
              <div
                style={{ marginLeft: "5px", marginRight: "5px" }}
                className="col-lg-3"
              >
                <img
                  onClick={() =>
                    window.open("https://europeanpainfederation.eu/")
                  }
                  className="RedirectLinks pointer RemoveUnderLineLink"
                  style={{
                    width: "90px",
                    height: "50px",
                  }}
                  src="/images/logo/logo-efic.png"
                  alt="efic"
                />
              </div>
            </td>
            <td>
              <div
                style={{ marginLeft: "5px", marginRight: "5px" }}
                className="col-lg-3"
              >
                <img
                  onClick={() => window.open("https://www.sip-platform.eu/en")}
                  className="RedirectLinks pointer RemoveUnderLineLink"
                  style={{
                    width: "90px",
                    height: "50px",
                  }}
                  src="/images/logo/logo_sip.png"
                  alt="SIP"
                />
              </div>
            </td>
            <td>
              <div
                style={{ marginLeft: "5px", marginRight: "5px" }}
                className="col-lg-3"
              >
                <img
                  onClick={() =>
                    window.open("https://anaesthesiology.gr/pages/gr.php")
                  }
                  className="RedirectLinks pointer RemoveUnderLineLink"
                  style={{
                    width: "100px",
                    height: "50px",
                  }}
                  src="/images/logo/_logo_eae_eea.jpg"
                  alt="eae_eea"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UpFooter;
