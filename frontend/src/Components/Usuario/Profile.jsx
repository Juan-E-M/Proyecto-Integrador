import React from "react";
import { useContext } from "react";

import AuthContext from "../Context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';


const Profile = () => {

    const {user} = useContext(AuthContext)

    console.log(user)

    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src="https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1589759117/project-covers/000/721/921/721921-original.png?1589759117" className="rounded-circle img-profile-user"/>
                </div>
                <div className="col-8">
                    <div className="row">
                        <h2>Nombre de Usuario</h2>
                        <p>{user.username}</p>
                        <h2>Apellidos</h2>
                        <p>Llerena Paricahua</p>
                        <h2>Edad</h2>
                        <p>17</p>
                    </div>
                    <div className="buttons-container">
                        <button type="button" class="btn btn-success buttons-edit-delete">Editar perfil</button>
                        <button type="button" class="btn btn-danger buttons-edit-delete">Eliminar cuenta</button>
                    </div>

                </div>
            </div>
            {/* <DetailEvent /> */}
        </div>
    )
}

export default Profile;