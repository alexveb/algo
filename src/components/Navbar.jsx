import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import RedirectDiv from "../layout/RedirectDiv";

function MyNavbar() {
  const redirect = () => {
    window.location.assign("/");
  };
  return (
    <Navbar bg="light" expand="lg" className="navContent navbar">
      <Container>
        {/* function for onClick

        onClick={() =>
                  window.open("/pdfs/katastatiko/EEA_katastatiko_2006.pdf")
                }
                 */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto style={{ justifyContent: 'center' }} items">
            <Nav.Link as={Link} to="/">
              {/* <Link className="no-underline" to="/"> */}
              Αρχική
              {/* </Link> */}
            </Nav.Link>
            {/*<Nav.Link href="#">Σχετικά με εμάς</Nav.Link>*/}
            <NavDropdown title="Σχετικά με εμάς" id="navbarScrollingDropdown">
              <NavDropdown.Item
                onClick={() =>
                  window.open("/pdfs/katastatiko/EEA_katastatiko_2006.pdf")
                }
              >
                Καταστατικό
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/dsymboulio2023-2026">
                {/* <Link className="no-underline" to="/dsymboulio2023-2026"> */}
                Διοικητικό Συμβούλιο
                {/* </Link> */}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() =>
                  window.open("/pdfs/ligaLogiaGiaEmas/2020-12-09.pdf")
                }
              >
                Λίγα λόγια για εμάς
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() =>
                  window.open("/pdfs/diadromi1994/istoriko_algologias.pdf")
                }
              >
                Η διαδρομή της Ε.Ε.Α από το 1994 μέχρι σήμερα
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/dsymboulia1994-2023">
                {/* <Link className="no-underline" to="/dsymboulia1994-2023"> */}
                Προηγούμενα Διοικητικά Συμβούλια
                {/* </Link> */}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/inMemory">
                {/* <Link className="no-underline" to="/inMemory"> */}
                Εις μνήμην
                {/* </Link> */}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/aitisi-eggrafis-melous">
                {/* <Link className="no-underline" to="/aitisi-eggrafis-melous"> */}
                Αίτηση Εγγραφής Μέλους στην Ε.Ε.Α.
                {/* </Link> */}
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Συνέδρια και Εκδηλώσεις"
              id="navbarScrollingDropdown"
              className="no-underline"
            >
              <NavDropdown.Item as={Link} to="/GreekConferencesAndEvents">
                {/* <Link className="no-underline" to="/GreekConferencesAndEvents"> */}
                Ελληνικά Συνέδρια και Εκδηλώσεις
                {/* </Link> */}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/InternationalConferencesAndEvents"
              >
                {/* <Link
                  className="no-underline"
                  to="/InternationalConferencesAndEvents"
                > */}
                Διεθνή Συνέδρια και Εκδηλώσεις
                {/* </Link> */}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Publications_Recommendations">
              {/* <Link className="no-underline" to="/Publications_Recommendations"> */}
              Δημοσιεύσης - Συστάσεις
              {/* </Link> */}
            </Nav.Link>
            <Nav.Link as={Link} to="/Education">
              {/* <Link className="no-underline" to="/Education"> */}
              Εκπαίδευση
              {/* </Link> */}
            </Nav.Link>
            <Nav.Link as={Link} to="/PublicationsEEA">
              {/* <Link className="no-underline" to="/PublicationsEEA"> */}
              Εκδόσεις Ε.Ε.Α
              {/* </Link> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
