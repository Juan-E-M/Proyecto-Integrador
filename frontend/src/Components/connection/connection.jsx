import React from "react";
import {useState} from "react";


//useState - useEffect - use

const connection = () => {

    //LOGIN 
    //Usuario logeado  -> nombre de cuenta , correo electrónico , contraseña 

    const [user , setUser] = useState("");

    //    Variable , 

    fetch("http://127.0.0.1:8000/user")
    .then(function(response){
        return response.json();
    })
    .then(function(userAPI){
        setUser(userAPI)
        console.log(user[0].name);
    })
}


export default connection;