import React,{Component} from "react";
import Register from './Register';
import axios from "axios";
import { useState } from "react";

let data_result;
class RegisterClass extends Component{

    async prueba(){
        const result = axios.get("http://127.0.0.1:8000/series");
        console.log(result.data)
    }
    

    // state = {
    //     series:[],
    // };

    // componentDidMount(){
    //     axios.get("http://127.0.0.1:8000/series").then(res =>{
    //         data_result = res.data;
    //         console.log(data_result);
    //         this.setState({series : res.data});
    //     });
    // };

    render(){
        return(
            <h1>registerclass</h1>
        );
    }
    

}
export default RegisterClass;