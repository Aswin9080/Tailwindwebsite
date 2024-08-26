import { useState } from "react";
import Home from "./home";
function Navbar() {

    const [menu,setmenu]=useState(false)
    function handlemenu(){
        setmenu(prev=> !prev)
    }

    console.log(menu)
    return (
        <div>
            <section className='bg-purple-100 rounded-2xl flex p-5 mb-10'>
                <div className='container  mx-auto'>
                    <div className='flex items-center'>
                        <span className='font-bold text-2xl pr-5  mr-5 border-r border-purple-300'>Agency</span>
                        <div className='flex my-auto'>
                            <button className='lg:hidden' onClick={handlemenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                            <ul className='lg:flex font-bold text-gray-600 hidden'>
                                <li className='pr-5 cursor-po w-fullinter'><span className=' hover:opacity-60px-3 py-2'>Home</span></li>
                                <li className='pr-5 cursor-pointer'><span className='border  hover:border-purple-300 px-3 py-2'>About</span></li>
                                <li className='pr-5 cursor-pointer'><span className='border  hover:border-purple-300 px-3 py-2'>Services</span></li>
                                <li className='pr-5 cursor-pointer'><span className='border  hover:border-purple-300 px-3 py-2'>portfolio</span></li>
                                <li className='pr-5 cursor-pointer'><span className='border  hover:border-purple-300 px-3 py-2'>Contact</span> </li>
                            </ul>
                        </div>
                        <div className='text-medium bg-red-500 px-3 py-2 rounded font-bold text-white ml-auto flex gap-3'>
                            <span className='hidden lg:block'>Get a Quote</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                            </svg>

                        </div>
                    </div>
                    <div className="mt-3">
                        <ul className={`lg:hidden ${menu ?'' :'hidden'} font-bold text-gray-600 bg-violet-200 px-3 py-2`}> 
                            <li className='mt-1 cursor-pointer w-full hover:bg-violet-300'><span className=' py-2 '>Home</span></li>
                            <li className='mt-1 cursor-pointer w-full hover:bg-violet-300'><span className=' py-2 '>About</span></li>
                            <li className='mt-1 cursor-pointer w-full hover:bg-violet-300'><span className=' py-2 '>Services</span></li>
                            <li className='mt-1 cursor-pointer w-full hover:bg-violet-300'><span className=' py-2 '>portfolio</span></li>
                            <li className='mt-1 cursor-pointer w-full hover:bg-violet-300'><span className=' py-2 '>Contact</span> </li>
                        </ul>
                    </div>
                    <Home/>
                </div>
            </section>

        </div>
    );
}

export default Navbar;
