import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import '../../assets/css/Producto.css'
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const Producto = () => {
    const {id} = useParams();
    const [productos, setProductos] = useState([])
    useEffect(()=>{
        obtenerDatos()
    },[])

    const obtenerDatos = async () =>{
        const data =  await fetch('http://192.168.63.234:8000/api/'+id+'?format=json')
        const productos = await data.json()
        setProductos(productos)
    }
    const addToBasket =()=>{
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item: {
                id:productos.id,
                nombre: productos.nombre,
                img1: productos.img1,
                precio: parseFloat(productos.precio),
                categoria:productos.categoria,
                descripcion: productos.descripcion
            }
        })
    }
    const[{basket}, dispatch] =useStateValue();

    return (
        <div className = "Producto">
                <div className="container py-3">
                <div class="card">
                    <h5 class="card-header">{productos.categoria}</h5>
                    <div class="container">
                    <div class="row">
                        <div class="col-sm contenedorcarrusel">
                        <div id="carouselExampleControls" class="carousel slide py-3 " data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img class="d-block w-100 carrusel" src={productos.img1} alt="First slide"/>
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100 carrusel" src={productos.img2} alt="Second slide"/>
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100 carrusel" src={productos.img3} alt="Third slide"/>
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
                        <div class="col-sm">
                            <div class="card-body py-5 px-5">
                                <h5 class="card-title">{productos.nombre}</h5>
                                <p class="card-text">{productos.descripcion}</p>
                                <p className="card-text">S/. {productos.precio}</p>
                                <a class="btn btn-primary" onClick={addToBasket}>Añadir al carrito</a>
                            </div>
                        </div>
                        </div>
                        </div>
                </div>
                </div>
            </div>
      );
};

export default Producto;