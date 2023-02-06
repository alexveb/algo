import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="navContent">
      <Container>
        {/* <Navbar.Brand href="#home">
            <img
              src="images/algo-logo.ico"
              width="25"
              height="25"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand> */}
        {/* <Navbar.Brand href="#">Μενού</Navbar.Brand> */}
        {/* function for onClick
        
        onClick={() =>
                  window.open("/pdfs/katastatiko/EEA_katastatiko_2006.pdf")
                }
                 */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto style={{ justifyContent: 'center' }} items">
            <Nav.Link>
              <Link className="no-underline" to="/">
                Αρχική
              </Link>
            </Nav.Link>
            {/*<Nav.Link href="#">Σχετικά με εμάς</Nav.Link>*/}
            <NavDropdown title="Σχετικά με εμάς" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/pdfs/katastatiko/EEA_katastatiko_2006.pdf">
                Καταστατικό
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="no-underline" to="/dsymboulio2023-2026">
                  Διοικητικό Συμβούλιο
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/pdfs/ligaLogiaGiaEmas/2020-12-09.pdf">
                Λίγα λόγια για εμάς
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/pdfs/diadromi1994/istoriko_algologias.pdf">
                Η διαδρομή της Ε.Ε.Α από το 1994 μέχρι σήμερα
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="no-underline" to="/dsymboulia1994-2023">
                  Προηγούμενα Διοικητικά Συμβούλια
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Εις μνήμην</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="no-underline" to="/aitisi-eggrafis-melous">
                  Αίτηση Εγγραφής Μέλους στην Ε.Ε.Α.
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Συνέδρια και Εκδηλώσεις"
              id="navbarScrollingDropdown"
              className="no-underline"
            >
              <NavDropdown.Item>
                <Link className="no-underline" to="/">
                  Ελληνικά Συνέδρια και Εκδηλώσεις
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                Διεθνή Συνέδρια και Εκδηλώσεις
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Δημοσιεύσης - Συστάσεις</Nav.Link>
            <Nav.Link>
              <Link className="no-underline" to="/Education">
                Εκπαίδευση
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="no-underline" to="/PublicationsEEA">
                Εκδόσεις Ε.Ε.Α
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
