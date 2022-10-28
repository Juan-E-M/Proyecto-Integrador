import React, { useEffect } from "react";
import { useState } from "react";


const Checkout = () =>{

    const [firstName, setFirstname] =useState("");

    const getData = () =>{
        console.log(localStorage.getItem("user"));
        return localStorage.getItem("user");
    }

    useEffect(()=>{
        setFirstname(getData());
        console.log(firstName);
    },[])
    

    return(
        <div className="container">
            <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-success rounded-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
  
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation">
            <div className="row g-3">
              <div className="col-sm-6">
                <label for="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" required readonly="readonly"/>
                
              </div>
  
              <div className="col-sm-6">
                <label for="lastName" className="form-label">{firstName}</label>
                <input type="text" className="form-control" id="lastName" value={firstName}  required readonly="readonly"/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
  
              <div className="col-12">
                <label for="username" className="form-label">Username</label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input type="text" className="form-control" id="username" placeholder="Username" required/>
                <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>
  
              <div className="col-12">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
  
              <div className="col-12">
                <label for="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
  
              <div className="col-12">
                <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
              </div>
  
              <div className="col-md-5">
                <label for="country" className="form-label">Country</label>
                <select className="form-select" id="country" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
  
              <div className="col-md-4">
                <label for="state" className="form-label">State</label>
                <select className="form-select" id="state" required>
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
  
              <div className="col-md-3">
                <label for="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required/>
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
  
            <hr className="my-4"/>
  
  
            <hr className="my-4"/>
  
            <h4 className="mb-3">Payment</h4>
  
        
  
            <div className="row gy-3">
              <div className="col-md-6">
                <label for="cc-name" className="form-label">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback">
                  Name on card is required
                </div>
              </div>
  
              <div className="col-md-6">
                <label for="cc-number" className="form-label">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
  
              <div className="col-md-3">
                <label for="cc-expiration" className="form-label">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
                <div className="invalid-feedback">
                  Expiration date required
                </div>
              </div>
  
              <div className="col-md-3">
                <label for="cc-cvv" className="form-label">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                <div className="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
  
            <hr className="my-4"/>
  
            <button className="w-100 btn btn-success btn-lg" type="submit">DONE</button>
         </form>
         
        </div>
        </div>
    </div>
    
        
    );
};

export default Checkout;