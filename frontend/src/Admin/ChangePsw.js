// PasswordChange.js
import React, { useState } from 'react';
import imgChange from "../images/changePsw.png"


function PasswordChange() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onClose = () =>{
    setNewPassword('');
    setConfirmPassword('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your password change logic here
    if (newPassword === confirmPassword) {
      // Passwords match, perform the change
      alert('Password changed successfully!');
    
    } else {
      // Passwords don't match, display an error message or handle accordingly
      alert('Passwords do not match. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg w-full sm:w-96 md:w-96 lg:w-96 mx-auto mt-28 drop-shadow-2xl">
        <img src={imgChange} alt="" className='mx-auto w-1/2 h-1/2'/>
      <h2 className=" font-bold font-[Poppins]  text-3xl text-center tracking-wide">Reset Password</h2>
      <p className='text-xs font-[Poppins] text-center '>You can now reset your password</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-black font-[Poppins] mb-1"> New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
            placeholder='Enter New Password'
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 drop-shadow-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-black font-[Poppins] mb-1">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            placeholder='Enter Confirm Password'
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 drop-shadow-lg"
          />
        </div>
        <div className="flex justify-between items-center pt-4">
          <button
            type="submit"
            className="bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-700 drop-shadow-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            Change Password
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black drop-shadow-lg focus:outline-none focus:ring focus:border-gray-300"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default PasswordChange;
