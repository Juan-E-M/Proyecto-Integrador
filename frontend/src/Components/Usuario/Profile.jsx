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
            <div className="row">
                <div className="col-4">
                    <img src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117" className="rounded-circle img-profile-user"/>
                </div>
                <div className="col-8">
                    <div className="row">
                        <h2>Nombre de Usuario</h2>
                        <p>{user.username}</p>
                        <h2>Apellidos</h2>
                        <p>{user.last_name}</p>
                        <h2>Correo</h2>
                        <p>{user.email}</p>
                    </div>
                    
                </div>
            </div>
            {/* <DetailEvent /> */}
        </div>
    )
}

export default Profile;