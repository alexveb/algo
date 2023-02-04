import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Showcase from './Fontawesome';


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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto style={{ justifyContent: 'center' }} items">
            <Nav.Link href="/">Αρχική</Nav.Link>
            {/*<Nav.Link href="#">Σχετικά με εμάς</Nav.Link>*/}
            <NavDropdown title="Σχετικά με εμάς" id="navbarScrollingDropdown">
              <NavDropdown.Item href="" onClick={() => window.open("/pdfs/katastatiko/EEA_katastatiko_2006.pdf")}>
                Καταστατικό
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="" onClick="">
                Διοικητικό Συμβούλιο
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="" onClick={() => window.open("/pdfs/ligaLogiaGiaEmas/2020-12-09.pdf")}>
                Λίγα λόγια για εμάς
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => window.open("/pdfs/diadromi1994/istoriko_algologias.pdf")}>
                Η διαδρομή της Ε.Ε.Α από το 1994 μέχρι σήμερα
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Προηγούμενα Διοικητικά Συμβούλια
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">
                Εις μνήμην
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Συνέδρια και Εκδηλώσεις" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://www.google.com/">
                Ελληνικά Συνέδρια και Εκδηλώσεις
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                Διεθνή Συνέδρια και Εκδηλώσεις
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#">Δημοσιεύσης - Συστάσεις</Nav.Link>
            <Nav.Link href="#">Εκπαίδευση</Nav.Link>
            <Nav.Link href="#">Εκδόσεις Ε.Ε.Α</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;