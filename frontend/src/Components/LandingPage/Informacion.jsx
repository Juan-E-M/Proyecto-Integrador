import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { useState } from "react";
import Moment from 'moment';
import '../../assets/css/Informacion.css'
import {Link} from 'react-router-dom';

const Informacion = () => {
    const [productos, setProductos] = useState([])
    useEffect(()=>{
        obtenerDatos()
    },[])

    const obtenerDatos = async () =>{
        const data =  await fetch('http://127.0.0.1:8000/api/?format=json')
        const productos = await data.json()
        setProductos(productos)
    }

    var dicfechas = {};
    var arrayfechas = [];
    const ReturnFechaMasReciente = productos.map(function(producto) {
        var fechaprueba=producto.pub_date.substring(0, 10);
        var horaprueba=producto.pub_date.substr(11,8);
        var fecha_completa_prueba=fechaprueba.concat(" ", horaprueba);
        /*
        const fechas = new Date(fecha).toLocaleDateString();
        let arrayFechas = fechas.map((fechas_) => new Date(fechas_) );
        var max = new Date(Math.max.apply(null,arrayFechas));
        var min = new Date(Math.min.apply(null,arrayFechas));
        console.log("valor minimo" , min) 
        console.log("valor maximo" ,max)
        */
        //Moment.locale('es');
        //var fecha= Moment(producto.pub_date);
        //var valor = Moment(fecha, 'YYYY-MM-DD');
        
        /*
        const myDate = Moment();
        const diff = fecha.diff(myDate,'seconds');
        //insertar valores en el diccionario
        dicfechas[diff]=fecha;
        //insertar en array
        arrayfechas.push(diff);
        var min=Math.min.apply(null, arrayfechas);
        //buscar fecha en diccionario
        var valor = dicfechas[min];
        */
        return Moment(fecha_completa_prueba);//valor.toString();
    });
    var fecha=Moment.max(ReturnFechaMasReciente);
    var fecha_format=Moment(fecha).format("YYYY-MM-DDThh:mm:ss");
    fecha_format.toString();
    var fecha_completa = fecha_format.concat("Z");
    console.log(fecha_completa);

    var encontrados = productos.filter(function(elemento) {
        return elemento.pub_date == fecha_completa // ◄ Aquí se desea que aplique el arreglo comparaciones 
    });
    console.log(encontrados);

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
                <div id="carouselExampleCaptions" className="carousel slide carruselinfo container" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    
                    <div className="carousel-inner">
                        {encontrados.map((item) => ( 
                            <div className="carousel-item active">
                                <img src={item.img1} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="text-secondary"><p>¡Lo nuevo en PRODUCTOS!</p>{item.nombre}</h5>
                                    <p className="text-secondary">{item.descripcion}</p>
                                </div>
                            </div>
                            ))
                        }
                        <div className="carousel-item">
                            <img src="" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
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