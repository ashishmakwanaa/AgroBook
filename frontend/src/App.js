
import './App.css';
// import Navbar from './component/Navbar';
import {  Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignupPage from './component/SignupPage.js';
import Login from './component/Login.js';
import Dashboard from './Pages/Dashboard.js';
import Service from './component/Service';
import Contact from './component/Contact';



function App() {
 

  return (

      // <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
      // </BrowserRouter>
    
  );
}

export default App;
