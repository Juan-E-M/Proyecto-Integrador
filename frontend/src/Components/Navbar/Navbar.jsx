import React from "react";
import useUser from "../../hooks/useUser";
import {useRoute , Link } from 'react-router-dom'

const Navbar = () => {

    const isLogged = false ;

    return (
        <div>
            {
                isLogged
                ?
                <Link to='/Logout'>
                    Logout
                </Link>
                :
                <Link to='/login'>
                    Login
                </Link>
            }

            
        </div>
    )

}

export default Navbar ;