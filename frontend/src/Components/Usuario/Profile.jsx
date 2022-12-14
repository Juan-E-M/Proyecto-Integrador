import React from "react";
import { useContext } from "react";
import "../../assets/css/UserProfile.css"
import AuthContext from "../Context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


const Profile = () => {

    const {user} = useContext(AuthContext)

    const{deleteUsuario} = useContext(AuthContext)


    return(
        <div className="container user-profile m-5">
            <div className="row justify-content-md-center" >
                <div className="col-4">
                    {user.perfil_image != null ? (
                        <img style={{width:'100%'}} src={"http://localhost:8000"+user.perfil_image}/>
                    ) : (
                        <img style={{width:'100%'}} src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-vert.png"/>
                    )}
                    
                    

                </div>
                <div className="col-4">
                    <div className="row">
                        <h2>Usuario</h2>
                        <p>{user.username}</p>
                        <h2>Nombre y Apellido</h2>
                        <p>{user.first_name+", "+user.last_name}</p>
                        <h2>Correo</h2>
                        <p>{user.email}</p>
                    </div>
                    <div className="buttons-container">
                        <Link to={"/editProfile"}><button type="button" className="btn btn-success buttons-edit-delete">Editar perfil</button></Link>
                        <button onClick={deleteUsuario} type="button" className="btn btn-danger buttons-edit-delete">Eliminar cuenta</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;