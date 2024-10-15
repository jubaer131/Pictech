// import Link from 'next/link';

// import React from 'react';
// import { MdOutlineExpandMore } from "react-icons/md";
// import Image from 'next/image'

// const Navbar = () => {
//     return (
//         <div className='lg:w-[68%] mx-auto'>
//             <div className="navbar lg:p-5 p-3">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                             <li><a>Item 1</a></li>
//                             <li>
//                                 <a>Parent</a>
//                                 <ul className="p-2">
//                                     <li><a>Submenu 1</a></li>
//                                     <li><a>Submenu 2</a></li>
//                                 </ul>
//                             </li>
//                             <li><a>Item 3</a></li>
//                         </ul>
//                     </div>
//                     <a href='#' className=" text-xl"> <Image
//                         src="https://i.ibb.co.com/8xxjLg4/Logo-1.png"
//                         width={100}
//                         height={50}
//                         alt="Picture of the author"
//                     /></a>
//                 </div>
//                 <div className="navbar-center pr-24 hidden lg:flex">
//                     <div className="dropdown  ">
//                         <div tabIndex={0} role="button" className="flex items-center hover:text-[#2b5bfd] font-medium  lg:pr-6">Home <span className="text-xl"><MdOutlineExpandMore /></span></div>
//                         <ul tabIndex={0} className="dropdown-content menu bg-base-100 mt-6  z-[1]  w-52 h-32 rounded-md  p-4 shadow-md border-t-4 border-[#2b5bfd]">
//                             <li className=' hover:text-[#2b5bfd] '><Link href="/">Home 1</Link></li>
//                             <hr className="my-2 border-gray-200" />
//                             <li className=' hover:text-[#2b5bfd]'><Link href="/home2">Home 2</Link></li>
//                         </ul>
//                     </div>
//                     <div className="dropdown  ">
//                         <div tabIndex={0} role="button" className="flex items-center hover:text-[#2b5bfd] font-medium  ">Pages <span className="text-xl"><MdOutlineExpandMore /></span></div>
//                         <ul tabIndex={0} className="dropdown-content w-52 h-32 mt-6 menu bg-base-100 rounded-md  z-[1]  p-4 shadow-md border-t-4 border-[#2b5bfd]">
//                             <li className=' hover:text-[#2b5bfd] '><Link href="/aboutus">About Us</Link></li>
//                             <hr className="my-2 border-gray-200" />
//                             <li className=' hover:text-[#2b5bfd]'><Link href="/service">Services</Link></li>
//                         </ul>
//                     </div>

//                     <div>
//                         <Link className="flex items-center justify-center lg:pr-6 lg:pl-6 hover:text-[#2b5bfd] font-medium" href="/protfolio">Protfolio <span className="text-xl"><MdOutlineExpandMore /></span></Link>
//                     </div>
//                     <div>
//                         <Link className="flex items-center justify-center lg:pr-6 hover:text-[#2b5bfd] font-medium" href="/blog">Blog <span className="text-xl"><MdOutlineExpandMore /></span></Link>
//                     </div>
//                     <div>
//                         <Link className='hover:text-[#2b5bfd] lg:pr-5 font-medium' href="/contractus"> Contract Us</Link>
//                     </div>
//                 </div>
//                 <div className="navbar-end space-x-3">
//                     <Link href=""><button className='btn hover:text-[#2b5bfd] hover:bg-white border '>Login</button></Link>
//                     <Link href=""><button className='btn bg-[#2b5bfd] text-white hover:text-[#2b5bfd] hover:bg-white border'><span className='max-sm:hidden'>Creat Free</span> account</button></Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react';
import { MdOutlineExpandMore } from "react-icons/md";
import Image from 'next/image';

// Custom NavLink Component
const NavLink = ({
    children,
    href,
    activeClassName,
    nonActiveClassName,
    className,
    ...rest
}) => {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(href);
    const newClassName = `${isActive ? activeClassName : nonActiveClassName} ${className}`;
    return (
        <Link href={href} className={newClassName} {...rest}>
            {children}
        </Link>
    );
};

const Navbar = () => {
    return (
        <div className='lg:w-[68%] mx-auto'>
            <div className="navbar lg:p-5 p-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink href="/" className="hover:text-[#2b5bfd]" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black">
                                    Home 1
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/home2" className="hover:text-[#2b5bfd]" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black">
                                    Home 2
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/aboutus" className="hover:text-[#2b5bfd]" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black">
                                    About Us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink href="/service" className="hover:text-[#2b5bfd]" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black">
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/blog" className="hover:text-[#2b5bfd]" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black">
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/contractus" className="hover:text-[#2b5bfd]" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link href="#" className="text-xl flex gap-3 items-center">
                        <Image
                            src="https://i.ibb.co.com/qCcmTcJ/Vector-3.png"
                            width={34}
                            height={34}
                            alt="Logo"
                            className="cursor-pointer"
                        />
                        <h1 className="text-black font-semibold lg:text-[28px]">Pictech</h1>
                    </Link>
                </div>

                <div className="navbar-center pr-12 hidden lg:flex">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="flex items-center hover:text-[#2b5bfd] font-medium lg:pr-6  text-[16px]">Home <span className="text-xl"><MdOutlineExpandMore /></span></div>
                        <ul className="dropdown-content menu bg-base-100 mt-6 z-[1] w-52 h-32 rounded-md p-4 shadow-md border-t-4 border-[#2b5bfd]">
                            <li><NavLink href="/" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black">Home 1</NavLink></li>
                            <li><NavLink href="/home2" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black">Home 2</NavLink></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="flex items-center hover:text-[#2b5bfd]  text-[16px] font-medium">Pages <span className="text-xl"><MdOutlineExpandMore /></span></div>
                        <ul className="dropdown-content menu bg-base-100 mt-6 z-[1] w-52 h-32 rounded-md p-4 shadow-md border-t-4 border-[#2b5bfd]">
                            <li><NavLink href="/aboutus" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black">About Us</NavLink></li>
                            <li><NavLink href="/service" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black">Services</NavLink></li>
                        </ul>
                    </div>
                    <NavLink href="/protfolio" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black" className="hover:text-[#2b5bfd]  text-[16px] font-medium lg:pr-6 lg:pl-6 flex items-center ">
                        Protfolio <MdOutlineExpandMore className="text-xl" />
                    </NavLink>
                    <NavLink href="/blog" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black" className="hover:text-[#2b5bfd]  text-[16px] font-medium lg:pr-6 flex items-center ">
                        Blog <MdOutlineExpandMore className="text-xl" />
                    </NavLink>
                    <NavLink href="/contractus" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black" className="hover:text-[#2b5bfd] text-[16px]  font-medium lg:pr-6">
                        Contact Us
                    </NavLink>
                </div>

                <div className="navbar-end space-x-3">
                    <NavLink href="/login" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black" className="btn hover:text-[#2b5bfd] hover:bg-white border">Login</NavLink>
                    <NavLink href="/signup" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-white" className="btn bg-[#2b5bfd] hover:text-[#2b5bfd] hover:bg-white border"><span className="max-sm:hidden">Create Free</span> Account</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
