import React from "react";



const Register = (props) => {



    //solucion una con llamados infinitos
    // const [data, setData] = useState([]);

    // useEffect(()=>{
    //     fetch("http://127.0.0.1:8000/series")
    // .then(function(response){
    //     return response.json();
    // }).then(function(dataApi){
    //     setData(dataApi)
    //     console.log(data);
    // })
    // },[])
    
    



    // const formulario = useRef(null);

    // // Formulario no controlado
    // const handleSubmit = (e) => {
    //     console.log(formulario.current);
    //     e.preventDefault();
    // };onSubmit={handleSubmit}


    return (
        
        <div className="container position-absolute top-50 start-50 translate-middle">
            <div className="row">
            <div className="col-md-3 mx-auto">
                <h2 className="mb-3 text-center">{props.info[1].name}</h2>
                <form >
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name="name"   className="form-control" minLength="2" maxLength="50" autoFocus required />
                        <label className="form-label">Email</label>
                        <input type="email" name="email"   className="form-control" minLength="2" maxLength="100" autoFocus required />
                        <label className="form-label">Password</label>
                        <input type="password" name="password"   className="form-control" minLength="2" maxLength="6" autoFocus required />
                        <label className="form-label">Adreess</label>
                        <input type="text" name="adress"  className="form-control" required />
                    </div>
                    <div className="row justify-content-around align-items-center">
                        <button type="submit" className="col-md-4 btn btn-primary">submit</button>
                        <button type="submit" className="col-md-4 btn btn-danger">cancel</button>
                    </div>
                    
                </form>
            </div>
            <div className="col-sm-6">
                    <img  src="https://cdn.hidrolit.com.ar/wp-content/uploads/2019/05/hidrolit-reciclaje.jpg" alt="" />
            </div>
            </div>
            
        </div>
        /*
        <div className="wrapper">
            <form action="" id="wizard">

                <h4></h4>
                <section>
                    <div className="inner">
                    	<a href="#" className="avartar">
                    		<img src="images/avartar.png" alt=""/>
                    	</a>
                    	<div className="form-row form-group">
                    		<div className="form-holder">
                    			<input type="text" className="form-control" placeholder="First Name"/>
                    		</div>
                    		<div className="form-holder">
                    			<input type="text" className="form-control" placeholder="Last Name"/>
                    		</div>
                    	</div>
                    	<div className="form-row">
                    		<div className="form-holder">
                    			<input type="password" className="form-control" placeholder="Password"/>
                    			<i className="zmdi zmdi-lock-open small"></i>
                    		</div>
                    	</div>
                    	<div className="form-row">
                    		<div className="form-holder">
                    			<input type="text" className="form-control" placeholder="Email"/>
                    			<i className="zmdi zmdi-email small"></i>
                    		</div>
                    	</div>
                    	<div className="form-row">
                    		<div className="form-holder">
                    			<input type="text" className="form-control" placeholder="Phone"/>
                    			<i className="zmdi zmdi-smartphone-android"></i>
                    		</div>
                    	</div>
                    	<div className="form-row">
                    		<div className="form-holder">
                    			<input type="text" className="form-control" placeholder="Address"/>
                                <i className="zmdi zmdi-map small"></i>
                    		</div>
                    	</div>
                    	<div className="form-row">
                    		<div className="form-holder">
                    			<input type="text" className="form-control" placeholder="Nation"/>
                                <i className="zmdi zmdi-account-box-o small"></i>

                    		</div>
                    	</div>
                    </div>
                </section>
                

                <h4></h4>
                <section>
                	<div className="inner">
                		<a href="#" className="avartar">
                    		<img src="images/avartar.png" alt=""/>
                    	</a>
                		<div className="form-row">
                            <div className="select">
                                <div className="form-holder">
                                    <div className="select-control">Gender</div>
                                    <i className="zmdi zmdi-caret-down small"></i>
                                </div>
                                <ul className="dropdown">
                                    <li rel="Male">Male</li>
                                    <li rel="Female">Female</li>
                                    <li rel="Other">Other</li>
                                </ul>
                            </div>
	                	</div>
	                	<div className="form-row">
                            <div className="select">
                                <div className="form-holder">
                                    <div className="select-control">Language</div>
                                    <i className="zmdi zmdi-caret-down small"></i>
                                </div>
                                <ul className="dropdown">
                                    <li rel="English">English</li>
                                    <li rel="France">France</li>
                                    <li rel="Vietnamese">Vietnamese</li>
                                </ul>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-holder">
                                <input type="text" className="form-control datepicker-here" data-language='en' data-date-format="dd - mm - yyyy" id="dp1" placeholder="Date of Birth"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-holder">
                                <input type="text" className="form-control" placeholder="Slogan"/>

                            </div>
                        </div>
                        <div className="form-row form-group">
                            <div className="form-holder">
                                <input type="text" className="form-control" placeholder="Twitter"/>
                                <i className="zmdi zmdi-twitter small"></i>
                            </div>
                            <div className="form-holder">
                                <input type="text" className="form-control" placeholder="Linked In"/>
                                <i className="zmdi zmdi-linkedin small"></i>
                            </div>
                        </div>
                        <div className="form-row form-group">
                            <div className="form-holder">
                                <input type="text" className="form-control" placeholder="Facebook"/>
                                <i className="zmdi zmdi-facebook small"></i>
                            </div>
                            <div className="form-holder">
                                <input type="text" className="form-control" placeholder="Google"/>
                                <i className="zmdi zmdi-google small"></i>
                            </div>
                        </div>
                	</div>
                </section>


                <h4></h4>
                <section className="section-3">
                    <div className="inner">
                        <a href="#" className="avartar">
                            <img src="images/avartar.png" alt=""/>
                        </a>
                        <h6>Payment Method</h6>
                        <div className="payment-block">
                            <div className="payment-item active">
                                <div className="payment-logo">
                                    <img src="images/visa.png" alt=""/>
                                </div>
                                <div className="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                            <div className="payment-item">
                                <div className="payment-logo">
                                    <img src="images/master-card.png" alt=""/>
                                </div>
                                <div className="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                            <div className="payment-item">
                                <div className="payment-logo">
                                    <img src="images/giropay.png" alt=""/>
                                </div>
                                <div className="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                            <div className="payment-item">
                                <div className="payment-logo">
                                    <img src="images/bleue.png" alt=""/>
                                </div>
                                <div className="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                            <div className="payment-item">
                                <div className="payment-logo">
                                    <img src="images/paypal.png" alt=""/>
                                </div>
                                <div className="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                            <div className="payment-item">
                                <div className="payment-logo">
                                    <img src="images/ideal.png" alt=""/>
                                </div>
                                <div className="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                            <div className="payment-item">
                                <div className="payment-logo">
                                    <img src="images/mister.png" alt=""/>
                                </div>
                                <div className="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                            <div className="payment-item">
                                <div className="payment-logo">
                                    <img src="images/maestro.png" alt=""/>
                                </div>
                                <div className="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
		</div>*/

        
    );
};
export default Register;