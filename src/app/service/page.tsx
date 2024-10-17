"use client"
import React from 'react';
import Navbar from '../component/share/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import AccordionComponent from '../component/homepage/AccordionComponent';
import { MdOutlineCheck } from "react-icons/md";
import Navlink from '../component/share/Navlink';


const page = () => {
    return (
        <>
            <div style={{
                backgroundImage: "url(https://i.ibb.co.com/WGV9tQw/Background-2.png)",
            }}
                className='lg:h-[580px]'>
                <Navbar></Navbar>
                <div className='lg:h-[300px] lg:w-[1000px] mx-auto max-sm:p-6 lg:pt-28'>
                    <div className='text-center lg:space-y-5 space-y-3'>
                        <h1 className='lg:text-6xl text-4xl font-semibold'>Services</h1>
                        <p className='lg:text-[18px] font-normal'>Work the way you want using task management software that helps you <br className='max-sm:hidden' /> organize tasks, delegate work, track progress and communicate.</p>
                        <div className='space-x-4 '>

                            <Navlink href="/" activeClassName="text-[16px] font-semibold" nonActiveClassName="font-normal" className="">
                                Home
                            </Navlink>
                            <span className="font-semibold">/</span>
                            <Navlink href="/service" activeClassName="text-[16px] font-semibold" nonActiveClassName="font-normal" className="">
                                Services
                            </Navlink>
                        </div>
                    </div>
                </div>
            </div>
            {/* second section */}
            <div className='lg:w-[1296px] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-5 lg:gap-y-12 gap-y-5 lg:py-36'>

                <div className='lg:w-[416px] h-[400px] space-y-5 px-10 bg-[#f8f9fc] py-16 rounded-2xl'>
                    <Image

                        src="https://i.ibb.co.com/QcKYjJB/Icon-box.png"
                        width={80}
                        height={80}
                        alt="Picture of the author"
                    />
                    <h1 className='text-2xl font-bold pt-2'>Programmatic SEO</h1>
                    <p className='text-[18px]'>With our innovative consulting today's breakthroughs Deliver a better owner experience, more value, transparency, and trust.</p>
                </div>
                <div className='lg:w-[416px] h-[400px] space-y-5 px-10 bg-[#f8f9fc] py-16 rounded-2xl'>
                    <Image

                        src="https://i.ibb.co.com/1TM572R/Icon-box-1.png"
                        width={80}
                        height={80}
                        alt="Picture of the author"
                    />
                    <h1 className='text-2xl font-bold pt-2'>Programmatic SEO</h1>
                    <p className='text-[18px]'>With our innovative consulting today's breakthroughs Deliver a better owner experience, more value, transparency, and trust.</p>
                </div>
                <div className='lg:w-[416px] h-[400px] space-y-5 px-10 bg-[#f8f9fc] py-16 rounded-2xl'>
                    <Image

                        src="https://i.ibb.co.com/HHhqKGn/Icon-box-2.png"
                        width={80}
                        height={80}
                        alt="Picture of the author"
                    />
                    <h1 className='text-2xl font-bold pt-2'>Programmatic SEO</h1>
                    <p className='text-[18px]'>With our innovative consulting today's breakthroughs Deliver a better owner experience, more value, transparency, and trust.</p>
                </div>
                <div className='lg:w-[416px] h-[400px] space-y-5 px-10 bg-[#f8f9fc] py-16 rounded-2xl'>
                    <Image

                        src="https://i.ibb.co.com/1nXwW2P/Icon-box-3.png"
                        width={80}
                        height={80}
                        alt="Picture of the author"
                    />
                    <h1 className='text-2xl font-bold pt-2'>Programmatic SEO</h1>
                    <p className='text-[18px]'>With our innovative consulting today's breakthroughs Deliver a better owner experience, more value, transparency, and trust.</p>
                </div>
                <div className='lg:w-[416px] h-[400px] space-y-5 px-10 bg-[#f8f9fc] py-16 rounded-2xl'>
                    <Image

                        src="https://i.ibb.co.com/dW298Z5/Icon-box-4.png"
                        width={80}
                        height={80}
                        alt="Picture of the author"
                    />
                    <h1 className='text-2xl font-bold pt-2'>Programmatic SEO</h1>
                    <p className='text-[18px]'>With our innovative consulting today's breakthroughs Deliver a better owner experience, more value, transparency, and trust.</p>
                </div>
                <div className='lg:w-[416px] h-[400px] space-y-5 px-10 bg-[#f8f9fc] py-16 rounded-2xl'>
                    <Image

                        src="https://i.ibb.co.com/hVB9Zyk/Icon-box-5.png"
                        width={80}
                        height={80}
                        alt="Picture of the author"
                    />
                    <h1 className='text-2xl font-bold pt-2'>Programmatic SEO</h1>
                    <p className='text-[18px]'>With our innovative consulting today's breakthroughs Deliver a better owner experience, more value, transparency, and trust.</p>
                </div>
            </div>
            {/* third section */}
            <div className='bg-[#f8f9fc] lg:py-32 py-16'>
                <div className='lg:w-[1296px] mx-auto '>
                    <h1 className='text-center  lg:text-5xl text-4xl max-sm:p-2 lg:font-bold font-semibold'>Plans for every stage of <br className='max-sm:hidden' /> your startups & enterprise</h1>
                    <div className=' grid lg:grid-cols-3 grid-cols-1 lg:mt-16'>
                        <div className='group'>
                            <div className='lg:w-[416px] lg:h-[700px] shadow-md p-10 group-hover:border-[#8fa8fa] transition-all duration-300 border-2 border-transparent '>
                                <h4 className='text-[20px] font-semibold pb-1'>GVA Part-Time</h4>
                                <h2 className='text-5xl font-medium group-hover:text-[#2b5bfd] transition-all duration-300'>$399/mo</h2>
                                <div>
                                    <ul className='space-y-4 mt-10'>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>160 Hours per month</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Dedicated Assistant</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Free replacement</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Customer Success Manager</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Rigorous quality supervision</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Wing Workspace App</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Your timezone - Any hours you want</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Share with colleagues</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Unlimited file sharing/storage</li>

                                    </ul>
                                </div>
                                <button className='btn w-full mt-10 bg-black  text-white group-hover:bg-[#2b5bfd] group-hover:text-white transition-all duration-300'>Get start</button>
                                <button className='btn w-full mt-3 bg-[#e3e7f4] text-black'>Start a Free Trail</button>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='lg:w-[416px] lg:h-[700px] shadow-md p-10 group-hover:border-[#8fa8fa] transition-all duration-300 border-2 border-transparent '>
                                <h4 className='text-[20px] font-semibold pb-1'>GVA Part-Time</h4>
                                <h2 className='text-5xl font-medium group-hover:text-[#2b5bfd] transition-all duration-300'>$399/mo</h2>
                                <div>
                                    <ul className='space-y-4 mt-10'>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>160 Hours per month</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Dedicated Assistant</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Free replacement</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Customer Success Manager</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Rigorous quality supervision</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Wing Workspace App</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Your timezone - Any hours you want</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Share with colleagues</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Unlimited file sharing/storage</li>

                                    </ul>
                                </div>
                                <button className='btn w-full mt-10 bg-black  text-white group-hover:bg-[#2b5bfd] group-hover:text-white transition-all duration-300'>Get start</button>
                                <button className='btn w-full mt-3 bg-[#e3e7f4] text-black'>Start a Free Trail</button>
                            </div>
                        </div>
                        <div className='group'>
                            <div className='lg:w-[416px] lg:h-[700px] shadow-md p-10 group-hover:border-[#8fa8fa] transition-all duration-300 border-2 border-transparent '>
                                <h4 className='text-[20px] font-semibold pb-1'>GVA Part-Time</h4>
                                <h2 className='text-5xl font-medium group-hover:text-[#2b5bfd] transition-all duration-300'>$399/mo</h2>
                                <div>
                                    <ul className='space-y-4 mt-10'>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>160 Hours per month</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Dedicated Assistant</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Free replacement</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Customer Success Manager</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Rigorous quality supervision</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Wing Workspace App</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Your timezone - Any hours you want</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Share with colleagues</li>
                                        <li className='flex items-center gap-2'><span><MdOutlineCheck /></span>Unlimited file sharing/storage</li>

                                    </ul>
                                </div>
                                <button className='btn w-full mt-10 bg-black  text-white group-hover:bg-[#2b5bfd] group-hover:text-white transition-all duration-300'>Get start</button>
                                <button className='btn w-full mt-3 bg-[#e3e7f4] text-black'>Start a Free Trail</button>
                            </div>
                        </div>

                    </div>
                    <p className='text-[18px] font-normal text-center pt-12'>Do you need specialization, end-to-end teams, bilingual options? <span><Link className='font-semibold underline' href='/contractus'>Contract Us</Link></span></p>
                </div>
            </div>
            <div className='pb-10'>
                < AccordionComponent></AccordionComponent>
            </div>

        </>
    );
};

export default page;