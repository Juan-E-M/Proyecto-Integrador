import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'



const Product = ({item}) => {

    const addToBasket =()=>{
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item: {
                id:item.id,
                nombre: item.nombre,
                img1: item.img1,
                precio: parseFloat(item.precio),
                categoria:item.categoria,
                descripcion: item.descripcion
            }
        })
    }
    const[{basket}, dispatch] =useStateValue();

  return (
    <div className="card me-5">
      <Link to={`/productos/${item.id}`}><img className="card-img-top imagen" src={item.img1} alt={item.id} /></Link>
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
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

Product

export default Product;
