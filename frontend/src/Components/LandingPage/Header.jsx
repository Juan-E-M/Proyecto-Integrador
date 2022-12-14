import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo/logo.png';
import '../../assets/css/Header.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useStateValue } from "../../StateProvider";
import { useContext } from "react";
import {  Link, Outlet } from "react-router-dom";
import AuthContext from '../Context/AuthContext';



const NavBar = () => {

  let {user, logoutUser} = useContext(AuthContext);
  const[{basket}] =useStateValue();
  
  return (
    <> 
    <Navbar className='navBg' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand><img alt="logo" className="logo" src={logo} /> RECICLA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          <Nav>
            <Nav.Link as={Link} to="/  ">Home</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/proyectos">Proyectos y Eventos</Nav.Link>

            {user != null ? (
                <Nav.Link onClick={()=>{
                  logoutUser()
                }}>Log Out</Nav.Link>

                ) : (
                    <Nav.Link as={Link} to = "/login"> Login </Nav.Link>
                )}
            <Nav.Link as={Link} to="/checkout"><FaShoppingCart/> <span className="badge bg-success rounded-pill">{basket?.length}</span></Nav.Link>
            
            {user != null ? (
                <Nav.Link as={Link} to="/profile">Perfil</Nav.Link>
                ) : (
                    <span></span>
                )}
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