// import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContextProvider";

function NavBar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Ana Sayfa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {!currentUser ? (
              <>
                <Nav.Link href="/login">Konu Anlatımı ve Testler </Nav.Link>{" "}
                <Nav.Link>Hoş Geldin </Nav.Link>
              </>
            ) : (
              <Nav>
                <NavDropdown
                  title="KONU ANLATIMLARI"
                  id="collasible-nav-dropdown"
                  bg="light"
                  variant="light"
                >
                  <NavDropdown.Item href="#">YAKINDA...</NavDropdown.Item>
                  <NavDropdown.Item href="#">YAKINDA...</NavDropdown.Item>
                  <NavDropdown.Item href="#">YAKINDA...</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="OTAĞ TESTLER" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="kt/test1">
                    OTAĞ TEST 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href=" #">YAKINDA....</NavDropdown.Item>
                  <NavDropdown.Item href=" #">YAKINDA....</NavDropdown.Item>
                </NavDropdown>
                <Box sx={{ ml: 15 }}>
                  <Nav.Link href="/">
                    HOŞ GELDİN {currentUser.displayName}
                  </Nav.Link>
                </Box>
              </Nav>
            )}
          </Nav>

          <Nav>
            <Nav.Link href="/blog">Soru Sor</Nav.Link>
            <Nav.Link href="/about">Hakkımda</Nav.Link>
            {currentUser && (
              <Nav.Link href="/" onClick={() => logOut()}>
                Çıkış Yap
              </Nav.Link>
            )}
            {!currentUser && (
              <Nav>
                <Nav.Link href="/login">Giriş Yap</Nav.Link>
                <Nav.Link eventKey={2} href="/register">
                  Kayıt Ol
                </Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
