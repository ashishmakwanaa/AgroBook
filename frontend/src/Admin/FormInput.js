import "../Admin/App.css";
import React from "react";

const FormInput = () =>{
    return(
    <div className="customer_form">
            <form action="" className="customer_form_details">
            <h3 className="customer_head">Add Customer Details</h3>
            <div className="my_form" id="mytable">
                <div className="form-row">
                    <label htmlFor="adding_date">Date: </label>
                    <input type="date" name="adding_date" id="" placeholder="dd/mm/yyyy" required/>
                </div>
                <div className="form-row">
                    <label htmlFor="name">Name: </label>
                    &nbsp;
                    <input type="text" name="name" id="" placeholder="First Name" required/>
                    <input type="text" name="" id="" placeholder="Middle Name Name"/>
                    <input type="text" name="" id="" placeholder="Last Name"/>
                </div>
                <div className="form-row">
                    <label htmlFor="address">Address: </label>
                    <input type="text" name="address" id="address" placeholder="Address Line 1" required/>
                </div>
                <div className="form-row">
                    <input type="text" placeholder="City" required/>
                    <input type="text" name="" id="" placeholder="Pin Code" required/>
                    <input type="text" name="" id="" placeholder="State" required/>
                    <input type="text" name="" id="" placeholder="Country" required/>
                </div>
                <div className="form-row">
                   <label htmlFor="phno">Phone:</label>
                   <input type="number" name="phno" id="" placeholder="Phone Number" required/>
                </div>
                <div className="form-row">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="" placeholder="Email"/>
                </div>
                <div className="form-row">
                    <div className="customer_form_btn">
                    <button type="submit" id="form_btn">Submit</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
    );
}

export default FormInput;