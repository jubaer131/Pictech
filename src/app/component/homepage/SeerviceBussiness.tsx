"use client"
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AiOutlineSound } from "react-icons/ai";
import Image from 'next/image';

const SeerviceBussiness = () => {


    const [activeTabIndex, setActiveTabIndex] = useState(0); // Track active tab index

    const handleTabClick = (index) => {
        setActiveTabIndex(index); // Set the active tab index on click
    };



    return (
        <div className='lg:w-[1260px] mx-auto py-28'>
            <h1 className='text-center mb-4 text-4xl font-bold'>Built for service businesses of all <br /> types and sizes</h1>
            <p className='text-center mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br /> industry's standard dummy text ever since the 1500s</p>

            <Tabs>


                <TabList className="lg:flex items-center  text-gray-800">
                    {["Digital Marketing Agency", "Content Agency", "SEO Services", "Social Media Management", "Email Marketing"].map((tabName, index) => (
                        <Tab
                            key={index}
                            className={`lg:w-[252px] border-b-2 dark:border-gray-300 dark:text-gray-600 focus:outline-none cursor-pointer ${activeTabIndex === index ? 'dark:text-violet-600 dark:border-violet-600 ' : ''}`}
                            onClick={() => handleTabClick(index)}
                        >
                            <div className='lg:w-[252px] flex flex-col justify-center items-center space-y-6  bg-[#f4f7ff]'>
                                <div className={`w-[40px] h-[40px] flex justify-center items-center p-2 rounded-md ${activeTabIndex === index ? 'text-white bg-violet-600' : 'text-[#6d7568]'}`}>
                                    <AiOutlineSound size={30} />
                                </div>
                                <h1 className='text-center'>{tabName}</h1>
                            </div>
                        </Tab>
                    ))}

                </TabList>

                <TabPanel>
                    <div className="card lg:card-side bg-base-100 shadow-3xl p-12 mt-10 ">
                        <div>
                            <Image

                                src="https://i.ibb.co.com/82y66mP/Group-1171274817-1.png"
                                width={560}
                                height={504}
                                alt="Picture"
                            />
                        </div>
                        <div className="card-body">
                            <div className='lg:w-[509px] space-y-9 p-2'>
                                <div className='leading-10'>
                                    <h1 className="card-title">Content Agency</h1>
                                    <p>Achieve a more accurate picture of content Agency.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Client Onboarding</h2>
                                    <p>Picmatic time tracking tool can minimize such manual errors and encourage proper time management.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Managing projects</h2>
                                    <p>Break your long-term content projects down into small tasks. Assign your writers & editors all the tasks.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Invoice & payments</h2>
                                    <p>Once an order is completed, as an agency you can create invoices regarding that order.</p>
                                </div>
                                <button className='btn'>Try free version</button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="card lg:card-side bg-base-100 shadow-xl p-12 mt-10">
                        <div>
                            <Image

                                src="https://i.ibb.co.com/82y66mP/Group-1171274817-1.png"
                                width={560}
                                height={504}
                                alt="Picture"
                            />
                        </div>
                        <div className="card-body">
                            <div className='lg:w-[509px] space-y-9 p-2'>
                                <div className='leading-10'>
                                    <h1 className="card-title">Content Agency</h1>
                                    <p>Achieve a more accurate picture of content Agency.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Client Onboarding</h2>
                                    <p>Picmatic time tracking tool can minimize such manual errors and encourage proper time management.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Managing projects</h2>
                                    <p>Break your long-term content projects down into small tasks. Assign your writers & editors all the tasks.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Invoice & payments</h2>
                                    <p>Once an order is completed, as an agency you can create invoices regarding that order.</p>
                                </div>
                                <button className='btn'>Try free version</button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="card lg:card-side bg-base-100 shadow-xl p-12 mt-10">
                        <div>
                            <Image

                                src="https://i.ibb.co.com/82y66mP/Group-1171274817-1.png"
                                width={560}
                                height={504}
                                alt="Picture"
                            />
                        </div>
                        <div className="card-body">
                            <div className='lg:w-[509px] space-y-9 p-2'>
                                <div className='leading-10'>
                                    <h1 className="card-title">Content Agency</h1>
                                    <p>Achieve a more accurate picture of content Agency.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Client Onboarding</h2>
                                    <p>Picmatic time tracking tool can minimize such manual errors and encourage proper time management.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Managing projects</h2>
                                    <p>Break your long-term content projects down into small tasks. Assign your writers & editors all the tasks.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Invoice & payments</h2>
                                    <p>Once an order is completed, as an agency you can create invoices regarding that order.</p>
                                </div>
                                <button className='btn'>Try free version</button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="card lg:card-side bg-base-100 shadow-xl p-12 mt-10">
                        <div>
                            <Image

                                src="https://i.ibb.co.com/82y66mP/Group-1171274817-1.png"
                                width={560}
                                height={504}
                                alt="Picture"
                            />
                        </div>
                        <div className="card-body">
                            <div className='lg:w-[509px] space-y-9 p-2'>
                                <div className='leading-10'>
                                    <h1 className="card-title">Content Agency</h1>
                                    <p>Achieve a more accurate picture of content Agency.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Client Onboarding</h2>
                                    <p>Picmatic time tracking tool can minimize such manual errors and encourage proper time management.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Managing projects</h2>
                                    <p>Break your long-term content projects down into small tasks. Assign your writers & editors all the tasks.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Invoice & payments</h2>
                                    <p>Once an order is completed, as an agency you can create invoices regarding that order.</p>
                                </div>
                                <button className='btn'>Try free version</button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="card lg:card-side bg-base-100 shadow-xl p-12 mt-10">
                        <div>
                            <Image

                                src="https://i.ibb.co.com/82y66mP/Group-1171274817-1.png"
                                width={560}
                                height={504}
                                alt="Picture"
                            />
                        </div>
                        <div className="card-body">
                            <div className='lg:w-[509px] space-y-9 p-2'>
                                <div className='leading-10'>
                                    <h1 className="card-title">Content Agency</h1>
                                    <p>Achieve a more accurate picture of content Agency.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Client Onboarding</h2>
                                    <p>Picmatic time tracking tool can minimize such manual errors and encourage proper time management.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Managing projects</h2>
                                    <p>Break your long-term content projects down into small tasks. Assign your writers & editors all the tasks.</p>
                                </div>
                                <div className='leading-7'>
                                    <h2 className='font-bold'>Invoice & payments</h2>
                                    <p>Once an order is completed, as an agency you can create invoices regarding that order.</p>
                                </div>
                                <button className='btn'>Try free version</button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>

        </div>


    );
};

export default SeerviceBussiness;
