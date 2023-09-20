// import "./FormInput.module.css";
import React from "react";
import "./App.css"

const FormInput = () =>{
    return(  
        <>
      <div className="customer_form">
             <form action="" className="customer_form_details">
             <h3 className="customer_head">Customer Details</h3>
             <div className="my_form" id="mytable">
                 <div className="form-row">
                     <label htmlFor="adding_date">Date: </label> <br />
                     <input type="date" name="adding_date" id="" placeholder="dd/mm/yyyy" required/>
                 </div>
                 <div className="form-row">
                     <label htmlFor="name">Name: </label><br />
                     &nbsp;
                     <input type="text" name="name" id="" placeholder="First Name" autocomplete="off" required/>
                     <input type="text" name="" id="" placeholder="Middle Name Name"autocomplete="off"/>
                     <input type="text" name="" id="" placeholder="Last Name" autocomplete="off"/>
                 </div>
                 <div className="form-row">
                     <label htmlFor="address">Address: </label><br />
                     <input type="text" name="address" id="address" placeholder="Address Line 1" required/>
                     <input type="text" placeholder="City" required/>
                     <input type="text" name="" id="" placeholder="Pin Code" required/>
                     <input type="text" name="" id="" placeholder="State" required/>
                     <input type="text" name="" id="" placeholder="Country" required/>
                 </div>
                 <div className="form-row phno_email" >
                    <div>
                    <label htmlFor="phno">Phone:</label><br />
                    <input type="number" name="phno" id="" placeholder="Phone Number" required/>
                    </div>
                    <div>
                    <label htmlFor="email">Email: </label><br />
                     <input type="email" name="email" id="" placeholder="Email"/>
                    </div>
                 </div>  
                 <div className="form-row" id="customer_form_btn">
                     <div>
                     <button type="submit" className="form_btn">Submit</button>
                     <button className="form_btn" id="clear_btn">Clear</button>
                     </div>
                 </div>
             </div>
             </form>
       </div>
    </>
    );
}

export default FormInput;