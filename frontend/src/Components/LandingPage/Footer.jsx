import React from "react";
import logo from "../../assets/images/logo.png";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import '../../assets/css/Footer.css'


const Footer = () => {
    return(
      <footer className="footer-9938">
        <div className="container">
          <div className="row">
            <div className="col-md-4 logo-section">
              <img src={logo} href="reciclar" className="logo-footer footer-site-logo d-block mb-4"/>
              <p>Con los materiales reciclados, hemos creado campañas, eventos y exhibiciones para demostrar el arte fantástico y las ideas ingeniosas que todos podemos realizar únicamente reciclando los desechos de nuestros hogares o de la vida cotidiana </p>
            </div>
            <div className="col-md">
              <h3>Contactanos</h3>
              <ul className="list-unstyled nav-links">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Gmail</a></li>
              </ul>
            </div>
            <div className="col-md">
              <h3>Nosotros</h3>
              <ul className="list-unstyled nav-links">
                <li><a href="#">Equipo</a></li>
                <li><a href="#">Objetivo</a></li>
                <li><a href="#">Testimonios</a></li>
                <li><a href="#">Eventos</a></li>
              </ul>
            </div>
            <div className="col-md">
              <h3>Siguenos</h3>
              <ul className="social list-unstyled">
                <li>
                  <MDBBtn style={{ backgroundColor: '#55acee' }} href='#'>
                  <MDBIcon className='me-2' fab icon='twitter' /> Twitter
                  </MDBBtn>
                </li>
                <li>
                  <MDBBtn style={{ backgroundColor: '#3b5998' }} href='#'>
                  <MDBIcon className='me-2' fab icon='facebook' /> Facebook
                  </MDBBtn>
                </li>
                <li>
                  <MDBBtn style={{ backgroundColor: '#ac2bac' }} href='#'>
                  <MDBIcon className='me-2' fab icon='instagram' /> Instagram
                  </MDBBtn>
                </li>
                <li>
                  <MDBBtn style={{ backgroundColor: '#25d366' }} href='#'>
                  <MDBIcon className='me-2' fab icon='whatsapp' /> Whatsapp
                  </MDBBtn>
                </li>
              </ul>
            </div>
          </div> 
          <div className="row ">
            <div className="col-12 text-center">
              <div className="copyright pt-2">
                <p><small>&copy; 2022&mdash;2022 All Rights Reserved.</small></p>
              </div>
            </div>
          </div> 
        </div>
      </footer>
    )
}

export default Footer;