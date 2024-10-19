"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import Image from "next/image";


interface NavLinkProps {
    children: React.ReactNode;
    href: string;
    activeClassName: string;
    nonActiveClassName: string;
    className?: string;

}

const NavLink: React.FC<NavLinkProps> = ({
    children,
    href,
    activeClassName,
    nonActiveClassName,
    className,
    ...rest
}) => {
    const pathname = usePathname();
    const isActive = pathname.endsWith(href) || (href.includes(pathname) && pathname !== "/");
    const newClassName = `${isActive ? activeClassName : nonActiveClassName} ${className}`;
    return (
        <Link href={href} className={newClassName} {...rest}>
            {children}
        </Link>
    );
};

const Navbar2 = () => {
    return (
        <div className="w-full lg:w-[67%] lg:ml-[340px]">
            <div className="navbar py-2 px-4 lg:pt-5  shadow-md">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown pr-2">
                        {/* Mobile hamburger menu */}
                        <div tabIndex={0} role="button" className="btn  bg-white lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {/* Dropdown menu for mobile */}
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
                    {/* Logo */}
                    <Link href="#" className="text-xl flex gap-3 items-center">
                        <Image
                            src="https://i.ibb.co.com/qCcmTcJ/Vector-3.png"
                            width={38}
                            height={38}
                            alt="Logo"
                            className="cursor-pointer"
                        />
                        <h1 className="text-white font-semibold">Pictech</h1>
                    </Link>
                </div>
                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="flex items-center hover:text-[#2b5bfd] font-medium text-white lg:pr-6">
                            Home <span className="text-xl"><MdOutlineExpandMore /></span>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 mt-6 z-[1] w-52 h-32 rounded-md p-4 shadow-md border-t-4 border-[#2b5bfd]">
                            <li className="hover:text-[#2b5bfd]">
                                <NavLink href="/" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black">
                                    Home 1
                                </NavLink>
                            </li>
                            <hr className="my-2 border-gray-200" />
                            <li className="hover:text-[#2b5bfd]">
                                <NavLink href="/home2" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black">
                                    Home 2
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="flex items-center hover:text-[#2b5bfd] font-medium text-white">
                            Pages <span className="text-xl"><MdOutlineExpandMore /></span>
                        </div>
                        <ul tabIndex={0} className="dropdown-content w-52 h-32 mt-6 menu bg-base-100 rounded-md z-[1] p-4 shadow-md border-t-4 border-[#2b5bfd]">
                            <li className="hover:text-[#2b5bfd]">
                                <NavLink href="/aboutus" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black">
                                    About Us
                                </NavLink>
                            </li>
                            <hr className="my-2 border-gray-200" />
                            <li className="hover:text-[#2b5bfd]">
                                <NavLink href="/service" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black">
                                    Services
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink href="/protfolio" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-white" className="hover:text-[#2b5bfd] font-medium lg:pr-6 lg:pl-6 flex items-center ">
                        Protfolio <span className="text-xl"><MdOutlineExpandMore /></span>
                    </NavLink>
                    <NavLink href="/blog" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-white" className="hover:text-[#2b5bfd] font-medium lg:pr-6 flex items-center ">
                        Blog <span className="text-xl"><MdOutlineExpandMore /></span>
                    </NavLink>
                    <NavLink href="/contractus" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-white" className="hover:text-[#2b5bfd] font-medium lg:pr-6">
                        Contact Us
                    </NavLink>
                </div>
                {/* Navbar End */}
                <div className="navbar-end space-x-3">
                    <NavLink href="/login" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-black" className="btn hover:text-[#2b5bfd] hover:bg-white ">
                        Login
                    </NavLink>
                    <NavLink href="/register" activeClassName="text-[#2b5bfd]" nonActiveClassName="text-white" className="btn bg-[#2b5bfd] hover:text-[#2b5bfd] hover:bg-white border-0">
                        <span className="max-sm:hidden ">Create Free</span> account
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;
