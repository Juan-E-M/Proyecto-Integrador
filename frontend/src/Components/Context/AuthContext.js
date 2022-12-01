import { createContext , useState  } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [user , setUser] = useState( () => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    let [authTokens , setAuthTokens] = useState( () => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);


    const navigate = useNavigate()

    let loginUser = async (e) => {
        e.preventDefault()

        let response = await fetch('http://192.168.63.234:8000/api/usuarios/login' , {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({'username': e.target.username.value , 'password': e.target.password.value})
        })
        let data = await response.json()
        
        if(response.status == 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens' , JSON.stringify(data))
            localStorage.setItem("user",JSON.stringify(jwt_decode(data.access)));
            navigate('/')

        }else{
            alert('Something went wrong')
        }

        console.log('data:' , data)
        //1:13
    }

    let register = async (e) => {
        e.preventDefault()
        setAuthTokens(null)
        setUser(null)

        let result = await fetch("http://192.168.63.234:8000/api/usuarios/register",
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

        //localStorage.setItem("user",result.id);
        localStorage.setItem("username",result.username);
        localStorage.setItem("user",JSON.stringify(result));
        setUser(result)
        if(result.id){
            navigate("/")
        }
        
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        localStorage.removeItem("user");
        localStorage.removeItem("username");
        navigate('/login')
    }

    let editarUsuario = async (e) => {
        e.preventDefault()
    
        
        let response = await fetch('http://localhost:8000/api/usuarios/' + user.id , {
            method : 'PATCH',
            body: JSON.stringify({
                'username' : e.target.nombre.value ,
                'last_name' : e.target.apellido.value ,
                'email' : e.target.email.value
             }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }

    let deleteUsuario = async(e) => {
        e.preventDefault()

        let response = await fetch('http://localhost:8000/api/usuarios/' + user.id , {
            method : 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        logoutUser()
    }


    let contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser : logoutUser,
        register: register,
        editarUsuario: editarUsuario,
        deleteUsuario: deleteUsuario
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}