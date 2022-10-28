import React from "react";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom"


const Total = () => {

  let history = useNavigate()
  function handleClick() {
    history("/pago")
  }

  const[{basket}, dispatch] =useStateValue();
  console.log(basket)
  return (
    <div className="card text-center m-3">
      <div className="card-body">
        <h5 className="card-title">TOTAL</h5>
        <p className="card-text">
          Productos: {basket?.length}
        </p>
        <p className="card-text">
          S/. {getBasketTotal(basket)}
        </p>
        <a className="btn btn-success" onClick={() => handleClick()}>
          Buy them!
        </a>
      </div>
    </div>
  );
};

export default Total;
