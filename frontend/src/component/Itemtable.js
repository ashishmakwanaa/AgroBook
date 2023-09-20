import React from 'react'
import { useState } from 'react';

function Itemtable() {
    const data = [
        { IID: 1, name: "Pipe", Price: 200, Quentity: 10, Total: 2000 },
        { IID: 2, name: "Seed", Price: 750, Quentity: 20, Total: 14000 },
        { IID: 3, name: "prestiside", Price: 800, Quentity: 30, Total: 24000 },
        { IID: 4, name: "prestiside", Price: 800, Quentity: 30, Total: 24000 },
        { IID: 5, name: "prestiside", Price: 800, Quentity: 30, Total: 24000 },
        { IID: 6, name: "prestiside", Price: 800, Quentity: 30, Total: 24000 },
        { IID: 7, name: "prestiside", Price: 800, Quentity: 30, Total: 24000 },
        { IID: 8, name: "prestiside", Price: 800, Quentity: 30, Total: 24000 },
    ]
    // const [date, setDate] = useState();
    var today = new Date();
    var date = today.getDay() + '-' + today.getMonth() + '-' + today.getFullYear();
    // console.log(typeof (datee))
    // setDate(datee);
    return (
        <div className='flex'>
            <div className='md:w-3/5 w-3/5  p-4'>
                <div>
                    <table className=' border  rounded-md md:w-full w-full' >
                        <tbody className=''>
                            <tr className='border border-slate-700'>
                                <span className='ml-6'>Customer ID : </span><span>20</span>
                            </tr>
                            <tr className='border border-slate-700'>
                                <span className='ml-6'>Customer Name : </span><span>Mandeepsinh</span>
                            </tr>
                            <tr className='border border-slate-700 '>
                                <span className='ml-6'>Customer Phone No. : </span><span>6598754689</span>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex h-10 items-center justify-between mt-7'>
                    <div className='border rounded-md w-3/5'>
                        <input type="text" placeholder='Item Search' className='w-full bg-slate-200' />
                    </div >
                    <div className=' ml-10 w-2/5'>
                        <button className='w-full border rounded-md   bg-green-600'>
                            Search
                        </button>
                    </div>
                </div>
                <div className=' mt-8 w-full  flex justify-center items-center'>
                    <table className='w-full border rounded-md border-slate-700'>
                        <tr>
                            <th className='border-b-2 border-slate-700'>IID</th>
                            <th className='border-b-2 border-slate-700'>Name</th>
                            <th className='border-b-2 border-slate-700'>Price</th>
                            <th className='border-b-2 border-slate-700'>Quantity</th>
                            <th className='border-b-2 border-slate-700'>Total</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td className='text-center'>{val.IID}</td>
                                    <td className='text-center'>{val.name}</td>
                                    <td className='text-center'>{val.Price}</td>
                                    <td
                                        className='text-center'>{val.Quentity}
                                    </td>
                                    <td className='text-center'>{val.Total}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            <div className='md:w-2/5 w-2/5'>
                <div className=' border border-slate-500 mt-2 ml-36 w-3/5 bg-green-500 rounded-md'>
                    <div className=' ml-3 p-1' >
                        <span>Date:</span><span>{new Date().toLocaleString() + ''}</span>
                    </div>
                </div>
                <div className='mt-4 h-5/6 border border-slate-500 rounded-md'>


                </div>
            </div>
        </div >
    )
}


export default Itemtable

