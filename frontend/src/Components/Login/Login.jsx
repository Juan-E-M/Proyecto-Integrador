import React from "react";
import {useState} from "react";



const Login = () => {

    // const [user , setUser] = useState("");

    // fetch("http://127.0.0.1:8000/user")
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(userAPI){
    //     setUser(userAPI)
        
    // })

    return (
        <div className="container position-absolute top-50 start-50 translate-middle">
              <div className="row">
                <div className="col-sm-6">
                    <h1>Recicla</h1>
                    <form>
                        <div className="sm-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="sm-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                            <div id="emailHelp" className="form-text">¿Has olvidado la contraseña?</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Ingresar</button>
                    </form>
                </div>
                <div className="col-sm-6">
                    <img className="image-login" src="https://media.istockphoto.com/photos/recycling-symbol-on-grass-picture-id1325018993?b=1&k=20&m=1325018993&s=170667a&w=0&h=_r0hGFSSj1dj2ZRq17B3DCnLiA_0pOuWOlmpwZDzH-Y=" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login;