import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import { useStateValue } from "../../StateProvider";
import "../../assets/css/CheckOut.css";
import styled from "styled-components";
import Modal1 from "../Modals/Modal1";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const CheckoutPage = () => {
  let history = useNavigate()
  const[{basket}, dispatch] =useStateValue();
  const [estadomodal1,setEstadomodal1] = useState(false);

  return (
    <div>
      <div className="check">
        <div className="container text-center">
          <div className="row h-75">
            <div className="col">
              <h1>Shopping Kart</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 text-center">
              <div className="row">
                {basket?.map((item) => (
                    <div className="col-sm-6 col-lg-4">
                      <CheckoutCard key={item.id} item={item} />
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="col">
                <Total estado1={estadomodal1}
                setEstado1={setEstadomodal1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal1
        estado1={estadomodal1}
        setEstado1={setEstadomodal1}>
        <Contenido>
          <h2>Para continuar...</h2>
          <p>Se requiere de ingresar o registrarse</p>
          <Boton onClick={()=>{history("/login")}}>Aceptar</Boton>
        </Contenido>
      </Modal1>
    </div>
  );
};

export default CheckoutPage;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #0D7A63;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #86C19D;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  padding-bottom :20px;
  padding-left: 20px;
  padding-right: 20px;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
    text-align:center;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;