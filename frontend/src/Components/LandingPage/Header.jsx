import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo/logo.png';
import '../../assets/css/Header.css'

import {  Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <> 
    <Navbar className='navBg' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand><img alt="logo" className="logo" src={logo} /> RECICLA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
      <Outlet></Outlet>
    </section>
    </>
  )
}

export default NavBar;