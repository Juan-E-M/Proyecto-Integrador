import React from "react";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import { useNavigate } from "react-router-dom"



const Total = ({ estado1, setEstado1}) => {

  let history = useNavigate()
  function handleClick() {
    if(localStorage.getItem('user')){
      history("/pago")
    }else{
      setEstado1(!estado1)
    }
  }

  const[{basket}, dispatch] =useStateValue();
  //console.log(basket)
  return (
    <div className="card text-center m-3">
      <div className="card-body">
        <h5 className="card-title">Total</h5>
        <p className="card-text">
          Productos: {basket?.length}
        </p>
        <p className="card-text">
          S/. {getBasketTotal(basket)}
        </p>
        <button className="btn btn-success" onClick={() => handleClick()}>
          Cómpralos ya!
        </button>
      </div>
    </div>
  );
};

export default Total;
