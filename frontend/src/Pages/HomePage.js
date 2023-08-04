import React from 'react'
import Navbar from '../component/Navbar'
const HomePage = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <>
      <div className='bg-lime-800 w-screen h-screen'>
        <Navbar links={links} />
      </div>
    </>

  )
}

export default HomePage
