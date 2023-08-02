
import './App.css';
// import Navbar from './component/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import SignupPage from './component/SignupPage';
import Login from './component/Login';

function App() {

  // const links = [
  //      {name: "Home",link: "/"},
  //      {name: "About",link:"/about"},
  //      { name: "Services", link: "/services" },
  //       { name: "Contact Us", link: "/contact" },
  // ];
  
  return (
      <div> 
      <Routes>
        <Route  path="/" element={<HomePage/>}/>
        <Route  path="/signup" element={<SignupPage/>}/>
        <Route  path="/login" element={<Login/>}/>
      </Routes>
      </div>

  );
}

export default App;
