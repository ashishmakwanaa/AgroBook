import React, { useState } from 'react';
import AgroLogin from '../images/AgroLogin.mp4';

const Login = () => {
  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <video
        className="absolute top-0 left-0 object-cover w-full h-full opacity-80 z-0"
        loop
        autoPlay
        muted
      >
        <source
          src={AgroLogin}
          type="video/mp4"
        />
      </video>

      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg z-10">
        <h2 className="text-2xl text-center font-semibold mb-6"><span className='text-green-600 no-underline hover:underline hover:cursor-pointer'>Welcome Back</span>! Login to Explore Agrobook.</h2>
        <form onSubmit={handleSubmit}>
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full px-4 py-3 mb-4 border rounded-lg placeholder-gray-400 bg-gray-50 text-gray-800"
            placeholder="Enter Your Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full px-4 py-3 mb-4 border rounded-lg placeholder-gray-400 bg-gray-50 text-gray-800"
            placeholder="Enter Password"
            required
          />
         
          <button
            type="submit"
            className="w-full py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center p-2 text-2xl text-gray-700 text-sm">
         Do Not Have a Account? 
          <a href="/signup" className="ml-1 text-green-500 font-semibold">
          Create a Account  Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

