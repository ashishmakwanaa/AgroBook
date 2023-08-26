
import './App.css';
// import Navbar from './component/Navbar';
import {  Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignupPage from './component/SignupPage.js';
import Login from './component/Login.js';
// import Navbar from './component/Navbar';

function App() {


  return (

      // <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      // </BrowserRouter>
    
  );
}

export default App;
