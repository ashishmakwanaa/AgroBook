
import './App.css';
// import Navbar from './component/Navbar';
import {  Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignupPage from './component/SignupPage.js';
import Login from './component/Login.js';
import Dashboard from './Pages/Dashboard.js';


function App() {

  return (

      // <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      // </BrowserRouter>
    
  );
}

export default App;
