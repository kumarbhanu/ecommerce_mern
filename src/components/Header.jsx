import { Container, Navbar,Nav } from "react-bootstrap";
import {LinkContainer, LinkContainerC} from 'react-router-bootstrap'
import { FaShoppingCart, FaUser } from "react-icons/fa";
const Header = () => {
return (
  <header>
  <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
    <Container>
  <LinkContainer to="/">
  <Navbar.Brand >Proshop</Navbar.Brand></LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
      <LinkContainer to="/cart">
      <Nav.Link >
            <FaShoppingCart /> Cart
          </Nav.Link></LinkContainer>
   <LinkContainer to="/login">
   <Nav.Link >
            <FaUser /> Login
          </Nav.Link></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</header>
)
};
export default Header;
