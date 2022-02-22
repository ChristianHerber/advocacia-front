import {Navbar, Nav, Container} from "react-bootstrap"

const NavbarMenu = () => {
    return (
        <header id="inicio">
            <Navbar bg="light" expand="lg" className="bg-white">
                <Container>
                    <Navbar.Brand href="#">
                        <img src="/logo.jorge.augusto.advocacia.webp" alt="Logo Advogado Criminalista Jorge Auguto" width="300" height="242" />
                    </Navbar.Brand>
                    <Navbar.Toggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                            <Nav.Link href="#inicio">Início</Nav.Link>
                            <Nav.Link href="#sobre">Sobre</Nav.Link>
                            <Nav.Link href="#escritorio">Escritório</Nav.Link>
                            <Nav.Link href="#contato">Contato</Nav.Link>
                            <Nav.Link href="#contato">Atendimento</Nav.Link>
                            <Nav.Link href="#endereco">Endereço</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}

export default NavbarMenu