// import "./FormInput.module.css";
import React from "react";
import "./App.css"
import { useState } from "react";
// {// src/components/AddCustomer.js
// import React, { useState } from 'react';

// function AddCustomer() {
//   const [customerData, setCustomerData] = useState({
//     date: '',
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     address: {
//       city: '',
//       pincode: '',
//       state: '',
//       country: '',
//     },
//     phone: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCustomerData({ ...customerData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/add-customer', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(customerData),
//       });

//       if (response.status === 201) {
//         // Customer added successfully
//         alert('Customer added successfully');
//         // Clear the form
//         setCustomerData({
//           date: '',
//           firstName: '',
//           middleName: '',
//           lastName: '',
//           address: {
//             city: '',
//             pincode: '',
//             state: '',
//             country: '',
//           },
//           phone: '',
//           email: '',
//         });
//       } else {
//         // Handle errors if necessary
//         console.error('Error adding customer');
//       }
//     } catch (error) {
//       console.error('Error adding customer:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Customer</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Your form fields go here */}
//         {/* Example for a single input field */}
//         <label>Date:</label>
//         <input type="date" name="date" value={customerData.date} onChange={handleChange} />
//         {/* Repeat this pattern for other fields */}
//         {/* ... */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default AddCustomer;
// }

const FormInput = () => {
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(
        {
            shopkeeperid: "",
            firstname: "",
            middlename: "",
            lastname: "",
            address: "",
            city: "",
            pincode: "",
            state: "",
            country: "",
            email: "",
            phoneno: ""

        }
    );


    const handleSubmit = async (e) => {
        const url = "http://localhost:4000/add/createcustomer";
        e.preventDefault();
        console.log("jj")
        // console.log(formData)
        console.log("kkkk")        
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          
          if (response.status === 200) {
            // Customer added successfully
            alert('Customer added successfully');
            // Clear the form
            setFormData({
              shopkeeperid: "",
              firstname: "",
              middlename: "",
              lastname: "",
              address: "",
              city: "",
              pincode: "",
              state: "",
              country: "",
              email: "",
              phoneno: ""
            });
          } else {
            // Handle errors if necessary
            console.error('Error adding customer');
          }
        } catch (error) {
          console.error('Error adding customer:', error);
        }
      };
      


    return (
        <>
            <div className="customer_form">
                <form action="" className="customer_form_details" onSubmit={handleSubmit}>
                    <h3 className="customer_head">Customer Details</h3>
                    <div className="my_form" id="mytable">
                        <div className="form-row">
                            <label htmlFor="adding_date">Date: </label> <br />
                            <input type="date" name="adding_date" id="" placeholder="dd/mm/yyyy" required />
                        </div>
                        <div className="form-row">
                            <label htmlFor="shopkeeper_id">Shopkeeper ID:</label><br />
                            <input
                                type="text"
                                id="shopkeeperid"
                                name="shopkeeperid"
                                value={formData.shopkeeperid}
                                onChange={(e) => setFormData({ ...formData, shopkeeperid: e.target.value })}
                                placeholder="Enter Your ID"
                                required
                            />
                        </div>

                        <div className="form-row">
                            <label htmlFor="name">Name: </label><br />
                            &nbsp;
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={formData.firstname}
                                onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                placeholder="Firstname"
                                required
                            />
                           <input
                                type="text"
                                id="middlename"
                                name="middlename"
                                value={formData.middlename}
                                onChange={(e) => setFormData({ ...formData, middlename: e.target.value })}
                                placeholder="Middlename"
                                required
                            />
                           <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={formData.lastname}
                                onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                                placeholder="Lastname"
                                required
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="address">Address: </label><br />
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                placeholder="Address"
                                required
                            />
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                placeholder="city"
                                required
                            />
                            <input
                                type="text"
                                id="pincode"
                                name="pincode"
                                value={formData.pincode}
                                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                placeholder="pincode"
                                required
                            />
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                placeholder="state"
                                required
                            />
                             <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                placeholder="country"
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="email"
                                required
                            />
                            <input
                                type="text"
                                id="phoneno"
                                name="phoneno"
                                value={formData.phoneno}
                                onChange={(e) => setFormData({ ...formData, phoneno: e.target.value })}
                                placeholder="phoneno"
                                required
                            />
                        </div>
                        {/* <div className="form-row phno_email" >
                            <div>
                                <label htmlFor="phno">Phone:</label><br />
                                <input type="number" name="phno" id="" placeholder="Phone Number" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email: </label><br />
                                <input type="email" name="email" id="" placeholder="Email" />
                            </div>
                        </div> */}
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