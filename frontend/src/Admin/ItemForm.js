import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./App.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemForm = ({ setcategoryList }) => {
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
    )

// const ItemForm = ({ setcategoryList}) => {


// const ItemForm = ({ setcategoryList}) => {

    

// const ItemForm = ({ setcategoryList}) => {

//     const navigateTo = useNavigate();
//     const handleGoToCategory = (event) => {
//         const selectedOption = event.target.value;
//         if (selectedOption == 'AddNew') {
//             navigateTo("/");
//         }
//     }
    

//     const navigateTo = useNavigate();
//     const handleGoToCategory = (event) => {
//         const selectedOption = event.target.value;
//         if (selectedOption == 'AddNew') {
//             navigateTo("/");
//         }
//     }
    


//     const navigateTo = useNavigate();
//     const handleGoToCategory = (event) => {
//         const selectedOption = event.target.value;
//         if (selectedOption == 'AddNew') {
//             navigateTo("/");
//         }
//     }
    
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

const ItemForm = ({ setcategoryList}) => {
    const [imageSelected,setImageSelected] = useState(null);

      const handleImageChange = (e) => {
        // Function to handle file input change
      const file = e.target.files[0];
      if (file) {
        // Create a URL for the selected image
        const imageUrl = URL.createObjectURL(file);
        setImageSelected(imageUrl);
      }
    };

    const navigateTo = useNavigate();
    const handleGoToCategory = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption == 'AddNew') {
            navigateTo("/");
        }
    }
  
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
                                className="capitalize"
                                name="name_item" id="name_item"
                                value={formData.itemname}
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
                                onChange={(e) => setFormData({ ...formData, costprice: e.target.value })} />
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
                <div className="p-4">
                   <div className='item_img_input flex flex-col items-center'>
                      <label htmlFor="image-input" className="mb-2 text-xm font-semibold">
                          Select an image:
                      </label>
                      <input
                        type="file"
                        id="image-input"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="py-1 px-4 rounded border border-gray-300"
                      />
                   </div>
                   {imageSelected && (
                     <div className="w-[70%] h-[70%] mx-auto flex items-center">
                       <p className="text-xl font-semibold mr-10">Selected Image:</p>
                       <img
                         src={imageSelected}
                         alt="Selected"
                         className="mt-2" style={{maxWidth: '30%'}}
                       />
                   </div>
      )}
                </div>

                {/* <div className="item_img_input">
                    <input type="file" name="" id="" />
                </div> */}
            </form>
        </div>
    );
}
export default ItemForm;