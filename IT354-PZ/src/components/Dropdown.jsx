import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Components.css"

function Dropdown() {
  return (
    <Navbar variant="dark" bg="dark" style={{padding: "0"}} >
      <Container fluid style={{padding: "0"}} >
        <Navbar.Toggle aria-controls="navbar-dark-example"  />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown id="nav-dropdown-dark-example" title="Account" menuVariant="dark">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Registration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Modify Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">sign out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Dropdown;