import React, {useContext} from 'react';
import '../../assets/css/Register.css';
import { useNavigate } from "react-router-dom";
import AuthContext from '../Context/AuthContext';


function Register(){
    const { register } = useContext(AuthContext);

    let history = useNavigate()
    return(
        <div className="container register">
                <div className="row test">
                    <div className="col-md-3 register-left">
                        <h2>Welcome</h2>
                        <p>¡Estás a punto de comenzar!</p>
                        <button type="button" className="btn btn-light" onClick={()=>{history("/login")}}>Login</button><br/>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h2 className="register-heading">Register</h2>
                                <form onSubmit={register}>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group m-1">
                                            <input type="text" className="form-control" placeholder="Username" name="username"/>
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="text" className="form-control" placeholder="Email" name="email"/>
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="password" className="form-control" placeholder="Password" name="password"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group m-1">
                                            <input type="text" className="form-control" placeholder="First name" name="first_name"/>
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="text" className="form-control" placeholder="Last name" name="last_name"/>
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="text" className="form-control" placeholder="Address" name="address"/>
                                        </div>
                                        <button  type="submit" className="btnRegister">Register</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}


export default Register;