import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const CheckoutCard = ({item}) => {

    const[{basket}, dispatch] =useStateValue();

    const removeItem=()=>dispatch({
        type:actionTypes.REMOVE_ITEM,
        id: item.id
    })


    return (
      <div className="card m-3">
        <img className="card-img-top" src={item.img} alt={item.id} />
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p class="card-text">{item.descripcion}</p>
          <p className="card-text">S/. {item.precio}</p>
          <a className="btn btn-danger" onClick={removeItem}>Discard</a>
        </div>
        <div className="card-footer">
          <small className="text-muted">{item.categoria}</small>
        </div>
      </div>
    );
  };
  
  export default CheckoutCard;
  