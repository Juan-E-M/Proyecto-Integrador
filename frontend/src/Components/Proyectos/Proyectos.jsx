import Button from 'react-bootstrap/Button';
import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}
  
function GuestGreeting(props) {
   return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
}
  
function LoginButton(props) {
    return (
        <Button onClick={props.onClick}>
            Login
        </Button>
    );
} //probar
  
  function LogoutButton(props) {
    return (
        <Button variant="danger" onClick={props.onClick}>
            Logout
        </Button>
    );
  } //probar

function InscribirseButton(props) {
    return (
        <Button href="/proyectos/${item.id}" onClick={props.onClick} variant="primary">ver más</Button>
    );
} //probar

function AnularButton(props) {
    return (
        <Button onClick={props.onClick} variant="danger">Anular Inscripcion</Button>
    );
} //probar

class Proyectos extends Component {
   
  // Constructor 
  constructor(props) {
      super(props);

      this.handleLoginClick = this.handleLoginClick.bind(this);    //probar
      this.handleLogoutClick = this.handleLogoutClick.bind(this);  //probar

      this.handleInscribirseClick = this.handleInscribirseClick.bind(this);    //probar
      this.handleAnularClick = this.handleAnularClick.bind(this);  //probar
 
      this.state = {
          isLoggedIn: false,  //probar
          isInscrito: false,  //probar
          items: [],
          DataisLoaded: false
      };
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});   //probar
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false});  //probar
  }

  handleInscribirseClick() {
    this.setState({isInscrito: true});   //probar
  }
  handleAnularClick() {
    this.setState({isInscrito: false});  //probar
  }
 
  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
      fetch("http://localhost:8000/api/proyectos")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
  }
  render() {
      const { DataisLoaded, items } = this.state;
      
      const isLoggedIn = this.state.isLoggedIn;  //probar
      const isInscrito = this.state.isInscrito;  //probar
      let button, buttonInscripcion; //probar

      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
        if (isInscrito) { 
            buttonInscripcion = <AnularButton onClick={this.handleAnularClick}/>;
          } else {
            buttonInscripcion = <InscribirseButton onClick={this.handleInscribirseClick}/>
          }  //probar
        //buttonInscribirse = <InscribirseButton/>
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
        buttonInscripcion = <InscribirseButton/>
      }  //probar

      if (!DataisLoaded) return <div>
          <h1> Pleses wait some time.... </h1> </div> ;
 
      return (
      <div className = "Productos">
          <div className="container">
              <div className="row row-cols-1 row-cols-md-4 g-4">  {
              items.map((item) => ( 
                  <div class="col">
                      <div className="card me-5">
                        <img className="card-img-top imagen" src={item.imagen} alt={item.id} />
                        <div className="card-body">
                            <h5 className="card-title">{item.titulo}</h5>
                            <p class="card-text">{item.descripcion}</p>
                            <p class="card-text">{item.fecha.substring(0,10)}</p>
                            <Link to={`/proyectos/${item.id}`}>
                              {buttonInscripcion}
                            </Link>                               
                        </div>
                      </div>
                  </div>
              ))
              }
              </div>
          </div>
      </div>
  );
}
}
export default Proyectos;