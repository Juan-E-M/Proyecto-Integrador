import React, {  useState } from 'react';
import '../../assets/css/Register.css'




function Register(){

    const [username,setName]=useState("")
    const [email,setEmail]=useState("")
    const [first_name,setFirst_name]=useState("")
    const [last_name,setLast_name]=useState("")
    const [password,setPassword]=useState("")
    const [address,setAddress]=useState("")


    async function signUp(){
        let item = {username,email,password,first_name,last_name,address}
        console.warn(item);

        let result = await fetch("http://127.0.0.1:8000/api/usuarios",
            {
                method:'POST',
                body:JSON.stringify(item),
                headers:{
                    "Content-Type":"application/json",
                    "Accept": "application/json"
                }
            })

        result = await result.json();
        console.warn("result",result);
        localStorage.setItem("user",JSON.stringify(result))
    }

    return(
        <div className="container register">
                <div className="row test">
                    <div className="col-md-3 register-left">
                        <img src="" alt=""/>
                        <h2>Welcome</h2>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <input type="submit" name="" value="Login"/><br/>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h2 className="register-heading">Register</h2>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group m-1">
                                            <input type="text" className="form-control" placeholder="Username" value={username}
                                            onChange={(e)=>setName(e.target.value)}/>
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="text" className="form-control" placeholder="Email" value={email}
                                            onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="password" className="form-control" placeholder="Password" value={password}
                                            onChange={(e)=>setPassword(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group m-1">
                                            <input type="text" className="form-control" placeholder="First name" value={first_name}
                                            onChange={(e)=>setFirst_name(e.target.value)}/>
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="text" className="form-control" placeholder="Last name" value={last_name}
                                            onChange={(e)=>setLast_name(e.target.value)}/>
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="text" className="form-control" placeholder="Address" value={address}
                                            onChange={(e)=>setAddress(e.target.value)} />
                                        </div>
                                        <button className="btnCancel"  value="Cancel">Cancel</button>
                                        <button onClick={signUp} className="btnRegister">Register</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
    );
}


export default Register;