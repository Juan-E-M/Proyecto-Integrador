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

    let timestamp = new Date(proyectos.fecha).getTime();
    let day = new Date(timestamp).getDate();
    //let month = new Date(timestamp).getMonth() + 1;
    let month = new Date(timestamp).toLocaleString('default', { month: 'long' });
    let year = new Date(timestamp).getFullYear();
    let date = `${day} de ${month} del año ${year}.`;

    return (
        <div className = "Proyecto">
                <div className="container py-3">
                <div class="card">
                    <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div class="card-body py-5 px-5">
                                <h2 class="card-title">{proyectos.titulo}</h2>
                                <h5 class="card-text">{proyectos.descripcion}</h5>
                                <p class="card-text">Ubicacion: {proyectos.lugar}</p>
                                <p class="card-text">Fecha del Evento: {date}</p>
                                {console.log(proyectos)}
                                {console.log(proyectos.fecha)}
                                {console.log(date)}
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
