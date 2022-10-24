import { useEffect } from "react";
import { useState } from "react";
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import { useStateValue } from "../../StateProvider";

const CheckoutPage = () => {

    const[{basket}, dispatch] =useStateValue();
  
    /*const [productos, setProductos] = useState([])

    useEffect(()=>{
        obtenerDatos()
    },[])

    const obtenerDatos = async () =>{
        const data =  await fetch('http://127.0.0.1:8000/api/?format=json')
        const productos = await data.json()
        setProductos(productos)
    }*/



  return (
    <div className="container text-center">
      <div className="row h-75">
        <div className="col">
            <h1>Shopping Cart</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 text-center">
        <div className="row">
        {basket?.map((item) => ( //en vez de basket? puede ser products
            <div className="col-sm-6 col-lg-4">
                    <CheckoutCard key={item.id} item={item}/>
            </div>
        ))}
        </div>
        </div>
        <div className="col-lg-3">
            <div className="col">
               <Total/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
