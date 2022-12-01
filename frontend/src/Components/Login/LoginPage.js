import React from "react";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import '../../assets/css/LoginPage.css';
import { useNavigate } from "react-router-dom"
const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  let history = useNavigate()
  
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1>Login</h1>
            <form onSubmit={loginUser}>
              <div className="sm-3">
                <label className="form-label">Email</label>
                <input type="text" className="form-control" name="username" />
              </div>
              <div className="sm-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                />
                <div id="emailHelp" className="form-text">
                  ¿Has olvidado la contraseña?
                </div>
              </div>
              <button type="submit" className="btn btn-primary button">
                Ingresar
              </button>
            </form>

            <div id="emailHelp" className="form-text signup">
                  ¿Aún no tienes ninguna cuenta? <button onClick={()=>{history("/register")}} ><b>Regístrate</b></button>
            </div>

          </div>
          <div className="col-sm-6">
            <img
              className="image-login"
              src="https://media.istockphoto.com/photos/recycling-symbol-on-grass-picture-id1325018993?b=1&k=20&m=1325018993&s=170667a&w=0&h=_r0hGFSSj1dj2ZRq17B3DCnLiA_0pOuWOlmpwZDzH-Y="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
