import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { useState } from "react";
import '../../assets/css/Informacion.css'
import {Link} from 'react-router-dom';

const Informacion = () => {
    const [productos, setProductos] = useState([])
    const [proyectos, setProyectos] = useState([])

    useEffect(()=>{
        obtenerDatos()
        obtenerDatosProyectos()
    },[])

    const obtenerDatos = async () =>{
        const data =  await fetch('http://localhost:8000/api/ultimo_producto?format=json')
        const productos = await data.json()
        setProductos(productos)
    }
    const obtenerDatosProyectos = async () =>{
        const data_proyectos =  await fetch('http://localhost:8000/api/proyectos/ultimo_proyecto?format=json')
        const proyectos = await data_proyectos.json()
        setProyectos(proyectos)
    }
    return (
        <main>
            <div className = "Producto">
            <div className=".container-fluid">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Proyecto RECICLA</h1>
                        <p className="lead">Este proyecto tiene como objetivo reducir la contaminación en la ciudad de Arequipa
                            e incentivar el reciclaje.</p>
                        <p>
                            <Link to={`/productos`} className="btn btn-secondary">VER PRODUCTOS</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div id="carouselExampleControls" className="carousel slide carruselinfo container" data-ride="carousel">
                    <div className="carousel-inner">
                        {productos.map((item) => ( 
                            <div className="carousel-item active">
                                <img className="d-block w-100 carrusel" src={item.img1} alt="First slide"/>
                                <div className="carousel-caption d-none d-md-block bloque m-3">
                                    <h5 className="text-white"><p>¡Lo nuevo en PRODUCTOS!</p>{item.nombre}</h5>
                                    <p className="text-white">{item.descripcion}</p>
                                </div>
                            </div>
                            ))
                        }
                        {proyectos.map((item) => ( 
                            <div className="carousel-item">
                                <img className="d-block w-100 carrusel" src={item.imagen} alt="Second slide"/>
                                <div className="carousel-caption d-none d-md-block bloque m-3">
                                    <h5 className="text-white"><p>¡Lo nuevo en EVENTOS!</p>{item.titulo}</h5>
                                    <p className="text-white">{item.descripcion}</p>
                                </div>
                            </div>
                        ))
                        }
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
            <div className="col-lg-7 col-md-8 mx-auto">
                <div className="row">
                    <div className="col">
                        <h3 className="fw-light">Misión</h3>
                        <p className="bg-light informacion-margin">Nuestra misión es alargar el ciclo de vida útil de los materiales ya usados mediante procesos de recuperación, reciclaje o procesamiento; y así, colaborar con la preservación del medio ambiente, 
                        al reducirse la necesidad de generar nuevos residuos y evitar el agotamiento de las materias primas que nos brinda la naturaleza, y son finitas. Ser una empresa familiar en relación con el público.
                        </p>
                    </div>
                    <div className="col">
                        <h3 className="fw-light">Visión</h3>
                        <p className="bg-light informacion-margin">Nuestra visión es ser líderes en el sector de la reutilización y el reciclaje, con un acérrimo compromiso en materia de cumplimiento y un camino trazado en la senda del desarrollo sostenible.
                        Con nuestra labor perseguimos una eficiente gestión de los recursos que permita favorecer la conservación de los mismos de manera que estén disponibles para las generaciones presentes y futuras.
                        </p>
                    </div>
                    <div className="col">
                        <h3 className="fw-light">Nosotros</h3>
                        <p className="bg-light informacion-margin">Nuestros valores son los que nos han permitido crecer, siempre nos hemos mantenido firmes en ellos, y en nuestro aprendizaje y progreso está saber sumar todos aquellos que nos hagan mejorar:
                        La sostenibilidad y el medio ambiente, son los imperativos empresariales que rigen nuestro crecimiento y progreso.
                        Las personas son el activo más importante de la empresa.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </main>
    )
}

export default Informacion;