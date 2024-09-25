import Link from 'next/link';
import React from 'react';
import { MdOutlineExpandMore } from "react-icons/md";
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='w-[75%] mx-auto'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a href='#' className=" text-xl"> <Image
                        src="https://i.ibb.co.com/8xxjLg4/Logo-1.png"
                        width={100}
                        height={50}
                        alt="Picture of the author"
                    /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="dropdown dropdown-hover ">
                        <div tabIndex={0} role="button" className="flex items-center hover:text-[#2b5bfd]   m-2">Home <span className="text-2xl"><MdOutlineExpandMore /></span></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100  z-[1] w-36 p-2 shadow-md border-t-4 border-[#2b5bfd]">
                            <li className=' hover:text-[#2b5bfd] '><a>Home 1</a></li>
                            <hr className="my-2 border-[#2b5bfd]" />
                            <li className=' hover:text-[#2b5bfd]'><a >Home2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover ">
                        <div tabIndex={0} role="button" className="flex items-center hover:text-[#2b5bfd]   m-2">Pages <span className="text-2xl"><MdOutlineExpandMore /></span></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100  z-[1] w-36 p-2 shadow-md border-t-4 border-[#2b5bfd]">
                            <li className=' hover:text-[#2b5bfd] '><a>Home 1</a></li>
                            <hr className="my-2 border-[#2b5bfd]" />
                            <li className=' hover:text-[#2b5bfd]'><a >Home2</a></li>
                        </ul>
                    </div>

                    <div>
                        <Link className="flex items-center justify-center m-2 hover:text-[#2b5bfd]" href="">Protfolio <span className="text-2xl"><MdOutlineExpandMore /></span></Link>
                    </div>
                    <div>
                        <Link className="flex items-center justify-center m-2 hover:text-[#2b5bfd]" href="">Blog <span className="text-2xl"><MdOutlineExpandMore /></span></Link>
                    </div>
                    <div>
                        <Link className='hover:text-[#2b5bfd] m-2' href=""> Contract Us</Link>
                    </div>
                </div>
                <div className="navbar-end space-x-3">
                    <Link href=""><button className='btn'>Login</button></Link>
                    <Link href=""><button className='btn bg-[#2b5bfd] text-white'>Creat Free account</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;