import React, { useReducer } from "react";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import AuthContext from "../../Context/AuthContext";
import HomePage from "../../Pages/HomePage";
import Main from "../Main/Main";


const Header = () => {

    let {user , logoutUser} = useContext(AuthContext);

    return(
        
        <div>
            <Link to="/"> Home </Link>
            <span>    |    </span>
            {user ? (
                <p onClick={logoutUser}> Logout </p>
                ) : (
                    <Link to = "/login"> Login </Link>
                )}
            {user && <HomePage/>}
        </div>

    )


}

export default Header