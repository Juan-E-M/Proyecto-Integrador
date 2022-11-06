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
        const data =  await fetch('http://127.0.0.1:8000/api/proyectos/'+id)
        const proyectos = await data.json()
        setProyectos(proyectos)
    }

    

    return (
        <div className = "Proyecto">
                <div className="container py-3">
                <div class="card">
                    <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div class="card-body py-5 px-5">
                                <h5 class="card-title">{proyectos.titulo}</h5>
                                <p class="card-text">{proyectos.descripcion}</p>
                                <a href="#" class="btn btn-primary">Inscribirse</a>
                            </div>
                        </div>
                        <div class="col-sm contenedorcarrusel">
                        <div id="carouselExampleControls" class="carousel slide py-3 " data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img class="d-block w-100 carrusel" src={proyectos.imagen} alt="First slide"/>
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100 carrusel" src={proyectos.imagen} alt="Second slide"/>
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100 carrusel" src={proyectos.imagen} alt="Third slide"/>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                                <span class="sr-only">-</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon"></span>
                                <span class="sr-only">-</span>
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
