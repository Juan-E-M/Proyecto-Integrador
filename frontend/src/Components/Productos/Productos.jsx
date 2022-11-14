import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./Product";


/*
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
*/
class Productos extends Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/?format=json")
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
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
   
        return (
        <div className = "Productos">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 py-3">  {
                items.map((item) => ( 
                    <div className="col">
                        <Product key={item.id} item={item}/>
                    </div>
                ))
                }
                </div>
            </div>
        </div>
    );
}
}
export default Productos;