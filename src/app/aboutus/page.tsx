"use client"
import React, { useState } from 'react';
import Navbar from '../component/share/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { PiCheck } from 'react-icons/pi';
import AboutSectionSlider from '../component/homepage/AboutSectionSlider';







const page = () => {



    const [activeTabIndex, setActiveTabIndex] = useState(0); // Track active tab index

    const handleTabClick = (index) => {
        setActiveTabIndex(index); // Set the active tab index on click
    };


    return (
        <>
            <div style={{
                backgroundImage: "url(https://i.ibb.co.com/WGV9tQw/Background-2.png)",
            }}
                className='lg:h-[580px]'>
                <Navbar></Navbar>
                <div className='lg:h-[300px] lg:w-[1000px] mx-auto max-sm:p-6 lg:pt-28'>
                    <div className='text-center lg:space-y-5 space-y-3'>
                        <h1 className='lg:text-6xl text-2xl font-semibold'>About Us</h1>
                        <p className='lg:text-[18px] font-normal'>Work the way you want using task management software that helps you <br /> organize tasks, delegate work, track progress and communicate.</p>
                        <div className='space-x-4 '>
                            <Link href="/">Home</Link><span className='font-semibold'>/</span>

                            <Link className='font-semibold' href="/service">Services</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* second section */}
            <div className='lg:w-[1290px]  mx-auto  lg:mb-24 '>
                <div className='lg:flex justify-center items-center gap-8 lg:my-20 mt-8 max-sm:space-y-4'>
                    <div className='lg:w-1/2  max-sm:p-4'>
                        <Image

                            src="https://i.ibb.co.com/nr332hg/image-1.png"
                            width={633}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='lg:w-1/2 space-y-10 px-16 max-sm:p-4'>

                        <h1 className='text-5xl  font-semibold line-'>Place to develop your business grwoth</h1>
                        <p>Design Season is a collaboration between Leicester's creative hub LCB based in the city's cultural quarter and designers and design businesses all over the city & county</p>
                        <p>By creating a strong brand presence on social media, you can reach broader audience get partners brand advocates</p>

                        <Link href="#"><button className='btn bg-[#2a5bfc] mt-10 text-white'>Try pree version</button></Link>
                    </div>
                </div>
                <div className="lg:w-[1070px] mx-auto flex items-center justify-between ">

                    <div className="flex items-center gap-5">
                        <div className="stat-value ">4,200</div>
                        <div className="stat-title text-[18px] font-normal"><p>Total successfully</p>
                            <p>  projects done</p></div>

                    </div>
                    <div className="flex items-center gap-5">
                        <div className="stat-value ">4,200</div>
                        <div className="stat-title text-[18px] font-normal"><p>Raised via the</p>
                            <p> solutions we have</p></div>

                    </div>

                    <div className="flex items-center gap-5">
                        <div className="stat-value">1,200</div>
                        <div className="stat-title text-[18px] font-normal"><p>Hight qualified</p>
                            <p>  specialists</p></div>
                    </div>
                </div>
            </div>

            {/* Third section */}
            <div className='bg-[#f8f9fc] p-10'>
                <div className='lg:w-[1290px]  mx-auto  lg:mb-24 '>
                    <div className='lg:flex  items-center gap-10 lg:my-20 mt-8 max-sm:space-y-4'>
                        <div className='lg:w-[578px]  max-sm:p-4'>
                            <Image

                                src="https://i.ibb.co.com/CmwCxhw/Image-3.png"
                                width={578}
                                height={636}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='lg:w-[592px] space-y-10 px-8 max-sm:p-4'>

                            <h1 className='text-5xl  font-semibold line-'>We help global brands <br />deliver great results </h1>

                            <p>Take your life to the next level with Rise, built-in business <br /> consultation with our expert with 10+ years of experience.</p>
                            <Tabs>
                                <TabList className="lg:flex items-center ">
                                    {["Our Mission", "Our Vision"].map((tabName, index) => (
                                        <Tab
                                            key={index}
                                            className={`border-b-2 dark:border-violet-600  focus:outline-none cursor-pointer ${activeTabIndex === index ? 'border-b-2 border-violet-600 ' : ''}`}
                                            onClick={() => handleTabClick(index)}
                                        >
                                            <div
                                                className={`flex   items-center bg-[#f8f9fc]  ${index === 0 ? 'lg:w-[120px] ' : 'lg:w-[470px]'
                                                    }`}
                                            >
                                                <h1
                                                    className={`flex justify-center items-center p-2  ${activeTabIndex === index ? 'text-violet-600' : 'text-[#6d7568]'
                                                        }`}
                                                >
                                                    {tabName}
                                                </h1>
                                            </div>
                                        </Tab>
                                    ))}
                                </TabList>


                                <TabPanel>
                                    <div className="card  pt-4">

                                        <div className="">
                                            <div className='lg:w-[509px] space-y-9 p-2'>

                                                <div className='leading-7'>
                                                    <p>Partnering with us means unlocking unparalleled technological advancements tailored to fuel your growth. At Paragon,dedicated being your strategic partner in success</p>
                                                </div>
                                                <ul>
                                                    <li className='flex items-center gap-3 '><PiCheck /> Integrate a diverse range of ideas</li>
                                                    <li className='flex items-center gap-3'><PiCheck /> Deliver the highest quality outcomes</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="card  pt-4">

                                        <div className="">
                                            <div className='lg:w-[509px] space-y-9 p-2'>

                                                <div className='leading-7'>
                                                    <p>Partnering with us means unlocking unparalleled technological advancements tailored to fuel your growth. At Paragon,dedicated being your strategic partner in success</p>
                                                </div>
                                                <ul>
                                                    <li className='flex items-center gap-3 '><PiCheck /> Integrate a diverse range of ideas</li>
                                                    <li className='flex items-center gap-3'><PiCheck /> Deliver the highest quality outcomes</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                            </Tabs>

                        </div>
                    </div>

                </div>
            </div >

            {/* forth section */}

            <div className='w-[1290px] mx-auto py-24'>
                <h1 className='text-center text-4xl font-bold'>Meet with our experts</h1>
                <div className='flex justify-between items-center mt-10'>
                    <div>
                        <Image

                            src="https://i.ibb.co.com/ypYSZGr/Img.png"
                            width={305}
                            height={330}
                            alt="Picture of the author"
                        />
                        <h4 className='text-center mt-6 text-[20px] font-semibold'>Rafael E. Kennison</h4>
                        <p className='text-center'>Web Developer</p>

                    </div>
                    <div>
                        <Image

                            src="https://i.ibb.co.com/g4gXq8B/Img-1.png"
                            width={305}
                            height={330}
                            alt="Picture of the author"
                        />
                        <h4 className='text-center mt-6 text-[20px] font-semibold'>Rafael E. Kennison</h4>
                        <p className='text-center'>Web Developer</p>

                    </div>
                    <div>
                        <Image

                            src="https://i.ibb.co.com/xz4cnVx/Img-2.png"
                            width={305}
                            height={330}
                            alt="Picture of the author"
                        />
                        <h4 className='text-center mt-6 text-[20px] font-semibold'>Rafael E. Kennison</h4>
                        <p className='text-center'>Web Developer</p>

                    </div>
                    <div>
                        <Image

                            src="https://i.ibb.co.com/RTpfcm9/Img-3.png"
                            width={305}
                            height={330}
                            alt="Picture of the author"
                        />
                        <h4 className='text-center mt-6 text-[20px] font-semibold'>Rafael E. Kennison</h4>
                        <p className='text-center'>Web Developer</p>

                    </div>
                </div>
            </div>

            {/*  */}
            <div className='bg-[#f8f9fc] pb-20'>
                <AboutSectionSlider></AboutSectionSlider>
            </div>
            <div className='lg:h-[580px]'>
                <div className='lg:h-[300px] lg:w-[1000px] mx-auto max-sm:p-6 lg:pt-28'>
                    <div className='text-center lg:space-y-5 space-y-3'>
                        <h1 className='lg:text-6xl text-2xl font-semibold'>Consult your business <br />
                            dream at affordable prices</h1>
                        <p className='lg:text-[18px] font-normal'>Unleash your financial possibilities by tapping into untapped opportunities and employing.</p>
                        <div className='space-x-4 '>
                            <button className='btn bg-[#2b5bfd] text-white'>Request a Consultation</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default page;