import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


const EditProfile = () => {

    const navigate = useNavigate()
    const {user,logoutUser,setUser} = useContext(AuthContext)
    const {editarUsuario} = useContext(AuthContext)
    
    const[username , setUsername] = useState('')
    const[first_name , setFirst_name] = useState('')
    const[last_name , setLast_name] = useState('')
    const[address , setAddress] = useState('')
    const[email, setEmail]=useState('')
    const[perfil_image , setPerfil_image] = useState()


    function verificando(data){
        if (username){
            data.append('username',username)
        }
        if (first_name){
            data.append('first_name',first_name)
        }
        if (last_name){
            data.append('last_name',last_name)
        }
        if (address){
            data.append('address',address)
        }
        if (email){
            data.append('email',email)
        }
        if (perfil_image){
            data.append('perfil_image',perfil_image,perfil_image.name)
        }
    }



    let editar = async () => {
        const uploadData = new FormData();
        verificando(uploadData);
        console.log(uploadData)
        let result = await fetch('http://localhost:8000/api/usuarios/' + user.id,{ 
            method:'PATCH',
            body:  uploadData
        })
        result = await result.json();
        setUser(result)
        if (email || username){
            logoutUser()
            navigate('/login')
        }else{
            navigate('/profile')
        }
    }

    
    return(

        <div className="container m-5">
            <div className="row justify-content-md-center">
                <div className="col-6">
                <h1>Editar los datos de {user.username}</h1><br></br>
                <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input placeholder={user.username} onChange={(e)=>setUsername(e.target.value)} type="text" name="username" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input placeholder={user.first_name} onChange={(e)=>setFirst_name(e.target.value)} type="text" name="first_name" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input placeholder={user.last_name} onChange={(e)=>setLast_name(e.target.value)} type="text" name="last_name" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input placeholder={user.address} onChange={(e)=>setAddress(e.target.value)} type="text"  name="address" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo Electrónico</label>
                    <input placeholder={user.email} onChange={(e)=>setEmail(e.target.value)} type="email"  name="email" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Foto de Perfil </label>
                    <input type="file" onChange={(e)=>setPerfil_image(e.target.files[0])} className="form-control"/>
                </div>
                
                <button onClick={()=>editar()} className="btn btn-primary button">
                    Editar
                </button>
                <button onClick={()=>{navigate('/profile')}} className="btn btn-danger btn-primary button">
                    Cancelar
                </button>
                </div>
            </div>
        </div>


        /*
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
        </div>*/
    ) 
}

export default EditProfile;