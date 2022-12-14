import Button from 'react-bootstrap/Button';
import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
  
function InscribirseButton(props) {
    return (
        <Button href="/proyectos/${item.id}" onClick={props.onClick} variant="primary">Inscribirse</Button>
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
      super(props)

      this.handleInscribirseClick = this.handleInscribirseClick.bind(this);    //probar
      this.handleAnularClick = this.handleAnularClick.bind(this);  //probar
 
      this.state = {
          isInscrito: false,  //probar
          items: [],
          DataisLoaded: false
      };
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
      fetch("http://192.168.101.12:3000/api/proyectos")
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

      const isInscrito = this.state.isInscrito;  //probar
      let buttonInscripcion; //probar

      if (isInscrito) { 
        buttonInscripcion = <AnularButton onClick={this.handleAnularClick}/>;
      } else {
        buttonInscripcion = <InscribirseButton onClick={this.handleInscribirseClick}/>
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
                            <p class="card-text">{`${new Date(new Date(item.fecha).getTime()).getDate()}/${new Date(new Date(item.fecha).getMonth() + 1).getDate()}/${new Date(new Date(item.fecha).getTime()).getFullYear()}`}</p>
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