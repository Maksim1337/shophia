import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const MyNavBar = () => {
  const phoneNum = "+001 555 801";
  const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />

  return (
    <Navbar bg="light" expand="lg">
      <div>
        {phoneIcon}
        <Navbar.Brand href="#home">Call {phoneNum}</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Navbar.Text>
          WELCOME MSG!
        </Navbar.Text>
        <Nav>
          <Nav.Link href="#account">MY ACCOUNT</Nav.Link>
          <Nav.Link href="#wishlist">MY WISHLIST</Nav.Link>
          <Nav.Link href="#login">LOGIN</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export { MyNavBar };
