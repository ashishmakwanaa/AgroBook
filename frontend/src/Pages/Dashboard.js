import React from 'react'
import Navbar from "../component/Navbar.js"
// import { Link } from 'react-router-dom'
export default function Dashboard() {
    const links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Contact Us", link: "/contact" },
        { name: "Dashboard", link: "/dashboard" },
    ];

    return (
        <>
            {/* <div className='bg-lime-800'>

                <Navbar links={links} />
            </div> */}
            <div className='md:h-20 h-12'>
                <Navbar links={links} />
            </div>
            <div className='flex flex-row'>
                <div className='md:w-1/4 w-2/4 bg-gray-200 border-2 '>
                    <table className='place-items-center w-full text-lime-500 capitalize md:text-xl font-medium tracking-wide'>
                        <tr className='border-b-2 hover:bg-gray-300 border-slate-500 h-20 flex items-center justify-center hover:uppercase cursor-pointer'>
                            DashBoard
                        </tr>
                        <tr className='border-b-2  hover:bg-gray-300 border-slate-500 h-20 flex items-center justify-center hover:uppercase cursor-pointer' >
                            History
                        </tr>
                        <tr className='border-b-2 hover:bg-gray-300 border-slate-500 h-20 flex items-center justify-center hover:uppercase cursor-pointer'>
                            Customer List
                        </tr>
                        <tr className='border-b-2 hover:bg-gray-300 border-slate-500 h-20 flex items-center justify-center hover:uppercase cursor-pointer'>
                            Item List
                        </tr>
                        <tr className='border-b-2 hover:bg-gray-300  border-slate-500 h-20 flex items-center justify-center hover:uppercase cursor-pointer'>
                            Recent
                        </tr>
                        <tr className='border-b-2 hover:bg-gray-300 border-slate-500 h-20 flex items-center justify-center hover:uppercase cursor-pointer'>
                            Invoice
                        </tr>
                        <tr className='border-b-2 hover:bg-gray-300  border-slate-500 h-20 flex items-center justify-center hover:uppercase cursor-pointer'>

                        </tr>
                        <tr className='h-20 flex  hover:bg-gray-300 items-center justify-center hover:uppercase cursor-pointer'>

                        </tr>
                    </table>
                </div>
                <div className='md:w-3/4 w-2/4'>

                </div>
            </div>
        </>
    )
}
