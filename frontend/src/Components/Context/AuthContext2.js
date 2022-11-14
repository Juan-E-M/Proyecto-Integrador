import { createContext , useState } from "react";
import { useNavigate } from 'react-router-dom'

const AuthContext2 = createContext()

export default AuthContext2;

export const Auth2Provider = ({children}) => {

    let [usuario, setUsuario] = useState(() => localStorage.getItem("usuario") ? localStorage.getItem("usuario"): "");
    
    const history = useNavigate()

    let register = async (e) => {
        e.preventDefault()

        let result = await fetch("http://127.0.0.1:8000/api/usuarios/register",
            {
                method:'POST',
                body:JSON.stringify(
                    {'username': e.target.username.value,
                     'email': e.target.email.value,
                     'password': e.target.password.value,
                     'first_name': e.target.email.value,
                     'last_name': e.target.last_name.value,
                     'address':e.target.address.value

                }),
                headers:{
                    "Content-Type":"application/json",
                    "Accept": "application/json"
                }
            })

        result = await result.json();
        console.warn("result",result);

        localStorage.setItem("user",result.id);
        localStorage.setItem("username",result.username);
        localStorage.setItem("usuario",JSON.stringify(result));
        setUsuario(result)
        if(result.id){
            history("/")
        }
        
    }
    let logoutUser = () => {
        setUsuario(null)
        localStorage.removeItem("user");
        localStorage.removeItem("usuario");
        localStorage.removeItem("username");
        history('/login')
    }
    let contextData = {
        usuario:usuario,
        register:register,
        logoutUser:logoutUser
    }
    return(
        <AuthContext2.Provider value={contextData}>
            {children}
        </AuthContext2.Provider>
    )
}