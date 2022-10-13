import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const drinksData = [
    {id : 0 ,  name : 'Tacho 1' , category:'Basureros Inteligentes' , price : 50 , rate : 4.5 , img : 'https://i.pinimg.com/564x/67/2f/30/672f3044588f2aeded27976ccf67cdfb.jpg'},
    {id : 1 ,  name : 'Tacho 2' , category:'Basureros Inteligentes' , price : 180 , rate : 5 , img : 'https://i.pinimg.com/564x/b3/4e/e3/b34ee34c3be832470808cbd065c4214c.jpg'},
    {id : 2 ,  name : 'Tacho 3' , category:'Basureros Inteligentes' , price : 100 , rate : 4.1 , img : 'https://cdnx.jumpseller.com/rehecho/image/25129378/resize/255/255?1660679243'},
    {id : 3 ,  name : 'Tacho 4' , category:'Basureros Inteligentes' , price : 30 , rate : 2.5 , img : 'https://i.pinimg.com/564x/e0/52/24/e05224bab40f205aab85f53483ebfc45.jpg'},
    {id : 4 ,  name : 'Tacho 5' , category:'Basureros Inteligentes' , price : 40 , rate : 3.5 , img : 'https://cdnx.jumpseller.com/rehecho/image/25385528/resize/255/255?1660676778'}
];

const Productos = () => {
    return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                drinksData.map((item) => 
                    
                    <div className="card me-5">
                    <img className="card-img-top" src={item.img} alt={item.id}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">S/. {item.price}</p>
                        <a className="btn btn-primary">Añadir al carrito</a>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">{item.category}</small>
                    </div>
                    </div>
                    
                )
            }
        </div>
        </div>
    )
}

export default Productos;