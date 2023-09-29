import React from 'react';

import "./App.css"
import { useState } from "react";

const ItemForm = () => {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(
        {
            itemname: "",
            itemcategory: "",
            costprice: "",
            sellingprice: "",
            quantity: "",
            units: ""
        }

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemForm = ({ setcategoryList}) => {

    const navigateTo = useNavigate();
    const handleGoToCategory = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption == 'AddNew') {
            navigateTo("/");
        }
    }
    return (
        <div className="item_form">
            <form action="">
                <h3 className="item_form_head">
                    Item Details
                </h3>
                <div className="item_content">
                    <div className="Item_inputs">
                        <div className="item_input_row">
                            <label htmlFor="name_items">Name: </label><br />
                            <input type="text" name="name_item" id="name_item" placeholder=' Enter Item Name ' />
                        </div>
                        <div className="item_input_row">
                            <label for="category">Category:</label><br />
                            <select id="item_category" onChange={handleGoToCategory}>
                                <option value="Powder" selected>Powder</option>
                                <option value="Liquid">Liquid</option>
                                <option value="Tools">Tools</option>
                                {/* <option value="AddNew">
                                    <Link to="/home">
                                        <button onClick={() => {
                                        
                                        }}>
                                            ADDNEW
                                        </button>
                                    </Link>
                                </option> */}
                            </select>
                        </div>
                        <div className="item_input_row">
                            <label htmlFor="item_cp" >Cost Price:</label><br />
                            <input type="number" name="item_cp" id="item_cp" placeholder=' Enter Price ' />
                        </div>
                        <div className="item_input_row">
                            <label htmlFor="item_sp">Selling Price:</label><br />
                            <input type="number" name="item_sp" id="item_sp" placeholder=' Enter Selling Price ' />
                        </div>
                        <div className="qty_units">
                            <div className="qty_units_row">
                                <label htmlFor="item_qty">Quantity:</label><br />
                                <button className="plus_item">+</button>
                                <input type="number" name="item_qty" id="item_qty" placeholder=' Enter Quantity' />
                                <button className="minus_item">-</button>
                            </div>
                            <div className="qty_units_row">
                                <label htmlFor="item_unit">Units:</label><br />
                                <select id="item_units">
                                    <option value="Kg" selected>Kilograms</option>
                                    <option value="Lit">Litres</option>
                                    <option value="per unit">Per Unit</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item_img_input">
                    <input type="file" name="" id="" />
                </div>
            </form>
        </div>

    );

    const handleSubmit = async (e) => {
        const url = "http://localhost:4000/add/createitem";
        e.preventDefault();
        // console.log("jj")
        // // console.log(formData)
        // console.log("kkkk")        
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
                alert('Item added successfully');
                // Clear the form
                setFormData({
                    itemname: "",
                    itemcategory: "",
                    costprice: "",
                    sellingprice: "",
                    quantity: "",
                    units: ""
                });
            } else {
                // Handle errors if necessary
                alert("Error Adding Item");
                console.error('Error adding Item');
            }
        } catch (error) {
            console.error('Error adding Item:', error);
        }
    };















    return (
        <div className="item_form">
            <form action="" onSubmit={handleSubmit}>
                <h3 className="item_form_head">
                    Item Details
                </h3>
                <div className="item_content">
                    <div className="Item_inputs">
                        <div className="item_input_row">
                            <label htmlFor="name_items">Name: </label><br />
                            <input
                                type="text"
                                name="name_item" id="name_item"
                                value={formData.itemane}
                                onChange={(e) => setFormData({ ...formData, itemname: e.target.value })}
                            />
                        </div>
                        <div className="item_input_row">
                            <label for="category">Category:</label><br />
                            <select
                                id="item_category"
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, itemcategory: e.target.value })}
                            >
                                <option value="Powder" selected>Powder</option>
                                <option value="Liquid">Liquid</option>
                                <option value="Tools">Tools</option>
                            </select>
                        </div>
                        <div className="item_input_row">
                            <label htmlFor="item_cp" >Cost Price:</label><br />
                            <input 
                            type="number" 
                            name="item_cp" 
                            id="item_cp" 
                            value={formData.costprice}
                            onChange={(e) => setFormData({ ...formData, costprice: e.target.value })}/>
                        </div>
                        <div className="item_input_row">
                            <label htmlFor="item_sp">Selling Price:</label><br />
                            <input 
                            type="number" 
                            name="item_sp" 
                            id="item_sp" 
                            value={formData.sellingprice}
                            onChange={(e) => setFormData({ ...formData, sellingprice: e.target.value })}
                            />
                        </div>
                        <div className="qty_units">
                            <div className="qty_units_row">
                                <label htmlFor="item_qty">Quantity:</label><br />
                                <button className="plus_item">-</button>
                                <input 
                                type="number" 
                                name="item_qty" 
                                id="item_qty" 
                                value={formData.quantity}
                                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                />
                                <button className="minus_item">+</button>
                            </div>
                            <div className="qty_units_row">
                                <label htmlFor="item_unit">Units:</label><br />
                                <select
                                id="item_units"
                                value={formData.units}
                                onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                            >
                                    <option value="Kg" selected>Kilograms</option>
                                    <option value="Lit">Litres</option>
                                    <option value="per unit">Per Unit</option>
                                </select>
                            </div>
                            <div className="form-row" id="customer_form_btn">
                            <div>
                                <button type="submit" className="form_btn">Add Item</button>
                                <button className="form_btn" id="clear_btn">Clear</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <div className="item_img_input">
                    <input type="file" name="" id="" />
                </div> */}
            </form>
        </div>
    ); 
}
export default ItemForm;