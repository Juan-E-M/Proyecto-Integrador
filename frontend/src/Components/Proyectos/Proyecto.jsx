import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";

const Proyecto = () => {

    const { id } = useParams();
    const [proyectos, setProyectos] = useState([])

    useEffect(()=>{
        obtenerDatos()
    },[])
    
    const obtenerDatos = async () =>{
        const data =  await fetch('http://localhost:8000/api/proyectos/'+id)
        const proyectos = await data.json()
        setProyectos(proyectos)
        
    }

    let timestamp = new Date(proyectos.fecha).getTime();
    let day = new Date(timestamp).getDate();
    let month = new Date(timestamp).toLocaleString('default', { month: 'long' });
    let year = new Date(timestamp).getFullYear();
    let date = proyectos.fecha;

    return (
        <div className = "Proyecto">
                <div className="container py-3">
                <div className="card">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card-body py-5 px-5">
                                <h2 className="card-title">{proyectos.titulo}</h2>
                                <h5 className="card-text">{proyectos.descripcion}</h5>
                                <p className="card-text">Ubicacion: {proyectos.lugar}</p>
                                <p className="card-text">Fecha del Evento: {date}</p>
                                <a href="#" className="btn btn-primary">Inscribirse</a>
                            </div>
                        </div>
                        <div className="col-sm contenedorcarrusel">
                        <div id="carouselExampleControls" className="carousel slide py-3 " data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img className="d-block w-100 carrusel" src={proyectos.imagen} alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100 carrusel" src={proyectos.imagen} alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100 carrusel" src={proyectos.imagen} alt="Third slide"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                                <span className="sr-only">-</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                                <span className="sr-only">-</span>
                            </a>
                            </div>
                        </div>
                        </div>
                        </div>
                </div>
                </div>
            </div>
      );
};

export default Proyecto;