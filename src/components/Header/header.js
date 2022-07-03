// import "./header.css"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";


function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#cursos">Cursos</Nav.Link>
            <Nav.Link href="#professores">Professores</Nav.Link>
            <Nav.Link href="#portfolio">Portifólio</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
            <Nav.Link href="#localização">Localização</Nav.Link>
            <Button  href="/login" variant="primary" type="submit">Login</Button>
          </Nav>
        </Container>
      </Navbar>

       </>
  );
}

export default Header;
