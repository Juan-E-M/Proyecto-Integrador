import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';



const EditProfile = () => {


    const {user} = useContext(AuthContext)
    
    // const[id , setId] = useState(user.id)
    // const[nombre , setNombre] = useState('')
    // const[apellido , setApellido] = useState('')
    // const[email , setEmail] = useState('')


    // setNombre(user.username)
    // setApellido(user.apellido)
    // setEmail(user.email)


    const {editarUsuario} = useContext(AuthContext)




    return(
        <div>
            <h1>Editar los datos de {user.username}</h1>

            <form onSubmit={editarUsuario}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input placeholder={user.username} type="text" name="nombre" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input placeholder={user.last_name} type="text" name="apellido" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo Electrónico</label>
                    <input placeholder={user.email} type="text"  name="email" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary button">
                    Editar
                </button>
                <button type="submit" className="btn btn-danger btn-primary button">
                    Cancelar
                </button>
            </form>
        </div>
    ) 
}
export default EditProfile;