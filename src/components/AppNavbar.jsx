import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppNavbar = ({ products, carts, setToken }) => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="mb-5 shadow-sm border-bottom">
      <Container>
        <Navbar.Brand className="fw-bold text-primary fs-5">
          CSI205
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-3">
            <Nav.Link as={Link} to={"/home"} className="fw-500 text-dark">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/calculator"} className="fw-500 text-dark">
              Calculator
            </Nav.Link>
            <Nav.Link as={Link} to={"/animation"} className="fw-500 text-dark">
              Animation
            </Nav.Link>
            <Nav.Link as={Link} to={"/components"} className="fw-500 text-dark">
              Components
            </Nav.Link>
            <Nav.Link as={Link} to={"/todos"} className="fw-500 text-dark">
              Todos
            </Nav.Link>
            <Nav.Link as={Link} to={"/products"} className="fw-500 text-dark">
              Products <span className="badge bg-secondary">{products.length}</span>
            </Nav.Link>
            <Nav.Link as={Link} to={"/carts"} className="fw-500 text-dark position-relative">
              Carts
              {carts.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {carts.length < 10 ? carts.length : "9+"}
                  <span className="visually-hidden">unread messages</span>
                </span>
              )}
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button 
              variant="outline-danger" 
              size="sm"
              className="fw-500"
              onClick={() => { setToken('') }}
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;