import React, {  useState } from 'react';
import '../../assets/css/Register.css'
import axios from 'axios';
import Register from './Register';



function RegisterTest(){

    const [name,setName]=useState("")
    const [release_date,setRelease_date]=useState("")
    const [rating,setRating]=useState("")
    const [category,setCategory]=useState("")

    async function signUp(){
        let item = {name,release_date,rating,category}
        console.warn(item);

        let result = await fetch("http://127.0.0.1:8000/series",
            {
                method:'POST',
                body:JSON.stringify(item),
                headers:{
                    "Content-Type":"application/json",
                    "Accept": "application/json"
                }
            })

        result = await result.json()
        console.warn("result",result)
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
                                            <input type="text" className="form-control" placeholder="name" value={name}
                                            onChange={(e)=>setName(e.target.value)}/>
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="text" className="form-control" placeholder="realese date" value={release_date}
                                            onChange={(e)=>setRelease_date(e.target.value)} />
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="text" className="form-control" placeholder="rating *" value={rating}
                                            onChange={(e)=>setRating(Number(e.target.value))} />
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="text" className="form-control" placeholder="category" value={category}
                                            onChange={(e)=>setCategory(e.target.value)} />
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="password" className="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="password" className="form-control"  placeholder="Confirm Password *" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group m-1">
                                            <input type="email" className="form-control" placeholder="Your Email *" value="" />
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" className="form-control" placeholder="Your Phone *" value="" />
                                        </div>
                                        <div className="form-group m-1">
                                            <select className="form-control">
                                                <option className="hidden"  selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div className="form-group m-1">
                                            <input type="text" className="form-control" placeholder="Enter Your Answer *" value="" />
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


export default RegisterTest;