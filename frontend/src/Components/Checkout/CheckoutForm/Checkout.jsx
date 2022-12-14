import React from "react";
import { useState, useContext } from "react";
import '../../../assets/css/CheckOut.css'
import { useStateValue } from "../../../StateProvider";
import { getBasketTotal } from "../../../reducer";
import '../../../assets/css/CheckOut.css';
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../../../reducer";
import swal from 'sweetalert';
import AuthContext from "../../Context/AuthContext";

const Checkout = () =>{
  let history = useNavigate()
  const[{basket}, dispatch] =useStateValue();
  let {user} = useContext(AuthContext);

  let desc = []
  basket?.forEach(function(numero){
    let item = {}
    item.id = numero.id
    item.nombre = numero.nombre
    item.precio = numero.precio
    desc.push(item)
  });

  //DATA
  const [user_id,setUser_id]=useState(parseInt(user.id))
  const [username, setUsername]=useState(user.username)
  const [first_name, setFirst_name]=useState("")
  const [total, setTotal]=useState(getBasketTotal(basket))
  const [last_name, setLast_name]=useState("")
  const [send_email, setSend_email]=useState("")
  const [full_name_card, setFull_name_card]=useState("")
  const [card_number, setCard_number]=useState("")
  const [exp_date, setExp_date]=useState("")
  const [cod, setCod]=useState("")
  const [departamento, setDepartamento] = useState("")
  const [provincia, setProvincia] = useState("")
  const [distrito, setDistrito] = useState("")
  const [send_address, setSend_address]=useState("")
  const [descripcion_compra, setDescripcion_compra] = useState(JSON.stringify(desc))
  
  const clean_basket=()=>dispatch({
    type:actionTypes.CLEAN_BASKET,
  })


  let comprar = async (e)=>{
    e.preventDefault()

    let item = {user_id,username,first_name,total,last_name,descripcion_compra,
      send_email,full_name_card,card_number,exp_date,cod,send_address,departamento,provincia,distrito}
      console.warn(item);
    let result = await fetch("http://localhost:8000/api/compras",
    {
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":"application/json",
            "Accept": "application/json"
        }
    })
    result = await result.json();
    console.warn("result",result);
    swal("¡FELICITACIONES!", "Gracias por su compra", "success");
    clean_basket();
    history("/productos")

  }

    return(
    <div>
    <div className="check">
      <div className="container checkout">
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h6 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-success">Carrito</span>
            <span className="badge bg-success rounded-pill">{basket?.length}</span>
          </h6>
          <ul className="list-group mb-3">
          {basket?.map((item) => (
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">{item.nombre}</h6>
                <small className="text-muted">{item.descripcion}</small>
              </div>
              <span className="text-muted">S/. {item.precio}</span>
            </li>
                    ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (Soles)</span>
              <strong>S/. {getBasketTotal(basket)}</strong>
            </li>
          </ul>
        </div>
        
      <div className="col-md-7 col-lg-8">
        <form onSubmit={comprar}>
          <h4 className="mb-3">Dirección de Envio</h4>
          <div className="row g-3">
            <div className="col-sm-6">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" name="first_name" onChange={(e)=>setFirst_name(e.target.value)} value={first_name}  required/>             
            </div>
            <div className="col-sm-6">
              <label className="form-label">Apellidos</label>
              <input type="text" className="form-control" name="last_name" onChange={(e)=>setLast_name(e.target.value)} value={last_name} required/>
            </div>

            <div className="col-12">
              <label className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" name="username" value={user.username} required readOnly="readOnly"/>
              </div>
            </div>

            <div className="col-12">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="send_email" placeholder="you@example.com" onChange={(e)=>setSend_email(e.target.value)} value={send_email} required />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label className="form-label">Dirección de Entrega</label>
              <input type="text" className="form-control" name="address" placeholder="1234 Main St" onChange={(e)=>setSend_address(e.target.value)} value={send_address} required/>
            </div>

            <div className="col-md-5">
              <label className="form-label">Departamento</label>
              <select className="form-select" name="departamento" onChange={(e)=>setDepartamento(e.target.value)} value={departamento} required>
              <option value="">Seleccione</option>
              <option value="Amazonas">Amazonas</option>
              <option value="Ancash">Ancash</option>
              <option value="Apurímac">Apurímac</option>
              <option value="Arequipa">Arequipa</option>
              <option value="Ayacucho">Ayacucho</option>
              <option value="Cajamarca">Cajamarca</option>
              <option value="Callao">Callao</option>
              <option value="Cuzco">Cuzco </option>
              <option value="Huancavelica">Huancavelica</option>
              <option value="Huánuco">Huánuco</option>
              <option value="Ica">Ica</option>
              <option value="Junín">Junín</option>
              <option value="La_Libertad">La Libertad</option>
              <option value="Lambayeque">Lambayeque</option>
              <option value="Lima">Lima</option>
              <option value="Loreto">Loreto</option>
              <option value="Madre_de_Dios">Madre de Dios</option>
              <option value="Moquegua">Moquegua</option>
              <option value="Pasco">Pasco</option>
              <option value="Piura">Piura</option>
              <option value="Puno">Puno</option>
              <option value="San_Martín">San Martín</option>
              <option value="Tacna">Tacna</option>
              <option value="Tumbes">Tumbes</option>
              <option value="Ucayali">Ucayali</option>
                <option>Peru</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Provincia</label>
              <input type="text" className="form-control" name="provincia" placeholder="Arequipa" onChange={(e)=>setProvincia(e.target.value)} value={provincia} required/>
            </div>

            <div className="col-md-3">
              <label className="form-label">Distrito</label>
              <input type="text" className="form-control" name="distrito" placeholder="Arequipa" onChange={(e)=>setDistrito(e.target.value)} value={distrito} required/>
            </div>
          </div>
  
          <hr className="my-4"/>
          <hr className="my-4"/>
  
          <h4 className="mb-3">Tarjeta</h4>
            <div className="row gy-3">
              <div className="col-md-6">
                <label className="form-label">Nombre y Apellidos</label>
                <input type="text" className="form-control" name="full_name_card" onChange={(e)=>setFull_name_card(e.target.value)} value={full_name_card} required/>
              </div>
  
              <div className="col-md-6">
                <label className="form-label">Número de tarjeta</label>
                <input type="text" className="form-control" name="card_number" onChange={(e)=>setCard_number(e.target.value)} value={card_number} required/>
              </div>
  
              <div className="col-md-3">
                <label className="form-label">Fecha de expiracion</label>
                <input type="text" className="form-control" name="exp_date" placeholder="2022-01-01" onChange={(e)=>setExp_date(e.target.value)} value={exp_date} required/>
              </div>
  
              <div className="col-md-3">
                <label className="form-label">Código de seguridad</label>
                <input type="text" className="form-control" name="cod" onChange={(e)=>setCod(e.target.value)} value={cod} required/>
              </div>
            </div>
          <hr className="my-4"/>
          <button type="submit" className="w-100 btn btn-success btn-lg">Continuar</button>
        </form>
      </div>
      </div>
    </div>
    </div>


    </div>
    );
};

export default Checkout;
