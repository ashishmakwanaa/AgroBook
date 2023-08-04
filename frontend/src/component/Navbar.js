import { React, useState } from 'react';
import Logo from '../images/Agro.png';
import { Link } from 'react-router-dom';
const Navbar = ({ links }) => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // let Links = [
  //     { name: "Home", link: "/" },
  //     { name: "About", link: "/" },
  //     { name: "Services", link: "/" },
  //     { name: "Contact Us", link: "/" },
  // ];
  return (
    // <div className="shadow-md w-full fixed top-0 left-0 p-2 rounded-full">
    //     <div className="flex justify-between item-center w-[92%] mx-auto">
    //         <div className='cursor-pointer flex item-center font-[Poppins] '>
    //             <img src={Logo} alt="" style={{ height: "60px", width: "73px" }} />
    //             <h1 className="my-auto text-2xl">AgroBook</h1>
    //         </div>
    //         <ul className='flex md:flex-row flex-col item-center  my-auto position-fixed '>
    //             {
    //                 Links.map((link) => (
    //                     <li key={link.name} className='md:ml-8 text-xl '>
    //                         <a href={link.link} className='hover:text-green-800 p-2 hover:bg-green-600 hover:rounded-xl hover:text-white duration-200'>{link.name} </a>
    //                     </li>
    //                 ))
    //             }
    //         </ul>
    //         <div className='my-auto'>
    //             <button className='bg-green-800 text-white  px-5 py-2 rounded-full hover:bg-white hover:text-green-800 hover:border-2 duration-200 mx-2'>
    //                 Sign In
    //             </button>
    //             <button className='bg-green-800 text-white  px-5 py-2 rounded-full hover:bg-white hover:text-green-800 hover:border-2 duration-200 '>
    //                Log In
    //             </button>
    //         </div>

    //     </div>
    // </div>
    <div className="shadow-md fixed top-0 left-0 right-0 p-2 bg-white" style={{ zIndex: 100 }}>
      <div className="container mx-auto md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={Logo} alt="" style={{ height: "60px", width: "73px" }} />
            <Link to="/"> <h1 className="my-auto text-2xl">AgroBook</h1></Link>
          </div>
          <button className="md:hidden text-green-800 focus:outline-none " onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <ul className={`md:flex md:flex-row md:space-x-4 ${showMobileMenu ? 'block mt-2 md:mt-0 ' : 'hidden md:block md:mt-0'} `}>
          {links.map((link) => (
            <li key={link.name} className="text-xl">
              <Link to={link.link} className={`hover:text-green-800 p-2 ${showMobileMenu ? 'block  mt-4' : ''} hover:bg-green-600 hover:rounded-xl hover:text-white duration-200`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={`md:block ${showMobileMenu ? 'block mt-2 md:mt-0' : 'hidden md:block md:mt-0'}`}>
          <Link to="/signup">
            <button className="bg-green-800 text-white px-5 py-2 rounded-full hover:bg-white hover:text-green-800 hover:border-2 duration-200 mx-2">
              Sign In
            </button>
          </Link>
          <Link to="/login">

            <button className="bg-green-800 text-white px-5 py-2 rounded-full hover:bg-white hover:text-green-800 hover:border-2 duration-200">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Navbar
