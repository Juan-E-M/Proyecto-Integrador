import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const Product = ({item}) => {

    const addToBasket =()=>{
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item: {
                id:item.id,
                nombre: item.nombre,
                img: item.img,
                precio: parseFloat(item.precio),
                categoria:item.categoria,
                descripcion: item.descripcion
            }
        })
    }
    const[{basket}, dispatch] =useStateValue();

  return (
    <div className="card me-5">
      <img className="card-img-top" src={item.img} alt={item.id} />
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p class="card-text">{item.descripcion}</p>
        <p className="card-text">S/. {item.precio}</p>
        <a className="btn btn-primary"
            onClick={addToBasket}>Añadir al carrito</a>
      </div>
      <div className="card-footer">
        <small className="text-muted">{item.categoria}</small>
      </div>
    </div>
  );
};

export default Product;
