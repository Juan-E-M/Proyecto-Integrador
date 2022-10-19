import React from "react";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";


const LoginPage = () => {

    let {loginUser} = useContext(AuthContext)


    return (
        <div>
            <div className="container loged">
              <div className="row">
                <div className="col-sm-6">
                    <h1>Recicla</h1>
                    <form onSubmit = {loginUser}>
                        <div className="sm-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" name="username"/>
                        </div>
                        <div className="sm-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" name="password"/>
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
        </div>
    )

}

export default LoginPage;




// import React from "react";
// import Loged from "./Loged";
// import { useEffect } from "react";
// import {useState} from "react";



// const Login = () => {

//     const [user , setUser] = useState([]);

//     useEffect(() => {
        
//         fetch("http://127.0.0.1:8000/api/token/")
//             .then((response) => response.json())
//             .then((user) => {
//                 setUser(user)
//             });
//     },[])

//     return (
//         <Loged user = {user}/>
//     )
// }

// export default Login;