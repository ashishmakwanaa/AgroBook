import React from 'react'
import "../Admin/App.css"

const CustomerEditInput = () => {
  return (
    <div className='CustomerInputEdit'>
      <form action="" className="customer_edit_details">
        <div class="container_head_edit">
          <h2>Edit Customer Details</h2>
          <button class="edit-button">EDIT</button>
        </div>
        <div className="edit_form" id="my_table">
          <div className="form_row_edit">
            <label htmlFor="">First Name :</label>
            <input type="text" name="FirstName" id="" placeholder="First Name" required />
          </div>
          <div className="form_row_edit">
            <label htmlFor="">Middle Name :</label>
            <input type="text" name="MiddleName" id="" placeholder="Middle Name" required />
          </div>
          <div className="form_row_edit">
            <label htmlFor="">Last Name :</label>
            <input type="text" name="LastName" id="" placeholder="Last Name" required />
          </div>
          <div className="form_row_edit">
            <label htmlFor="">Address : </label>
            <input class="edir_address" type="text" name="Address" id="" placeholder="Address" required />
          </div>
          <div className="form_row_edit">
            <label htmlFor="">City : </label>
            <input type="text" name="City" id="" placeholder="City" required />
          </div>
          <div className="form_row_edit">
            <label htmlFor="">Pin Code : </label>
            <input type="text" name="Pincode" id="" placeholder="Pin Code" required />
          </div>
          <div className="form_row_edit">
            <label htmlFor="">State : </label>
            <input type="text" name="State" id="" placeholder="State" required />
          </div>
          <div className="form_row_edit">
            <label htmlFor="">Country : </label>
            <input type="text" name="Country" id="" placeholder="Country" required />
          </div>
          <div className="form_row_edit">
            <label htmlFor="">Phone No :</label>
            <input type="number" name="phone_no" id="" placeholder="Phone No" required />
          </div>
          <div className="form_row_edit">
            <label htmlFor="">E-Mail : </label>
            <input type="email" name="E-Mail" id="" placeholder="E-Mail" required />
          </div>
          <div className="center_aligned">
            <button type="Submit" class="save_button">Save</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CustomerEditInput
