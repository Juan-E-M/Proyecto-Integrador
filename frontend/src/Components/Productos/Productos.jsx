import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./Product";

class Productos extends Component {
   
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch("http://localhost:8000/api/?format=json")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
   
        return (
        <div className = "Productos">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 py-3">  {
                items.map((item) => ( 
                    <div className="col">
                        <Product key={item.id} item={item}/>
                    </div>
                ))
                }
                </div>
            </div>
        </div>
    );
}
}
export default Productos;