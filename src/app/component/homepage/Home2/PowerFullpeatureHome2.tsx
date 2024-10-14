"use client"

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { PiCheck } from 'react-icons/pi';

const PowerFullpeatureHome2 = () => {
    return (
        <div className='lg:w-[1337px] mx-auto py-20'>
            <div className='lg:flex justify-center items-center gap-12   max-sm:space-y-4'>
                <div className='lg:w-1/2 max-sm:p-4'>
                    <Image

                        src="https://i.ibb.co.com/k10rH3R/Graphic-1.png"
                        width={612}
                        height={594}
                        alt="Picture of the author"
                    />
                </div>
                <div className='lg:w-[620px] space-y-4 max-sm:p-4'>
                    <h1 className='text-6xl  font-semibold text-white'>Messaging  with a
                        simple platform</h1>

                    <ul className='space-y-12 pt-8'>
                        <li className=" flex items-start  gap-4">
                            <div className='bg-[#2853e3] shadow-sm p-1 w-6 h-6 rounded-full mt-1'>
                                <span className='text-white'><PiCheck /></span>
                            </div>
                            <div className='space-y-3 '>
                                <h1 className='text-white text-2xl font-semibold'>Manage your spending and save</h1>
                                <p className='text-white text-[18px] font-normal'>Stay on top of your spending by tracking what’s <br />
                                    left after the bills are paid.</p>
                            </div>
                        </li>
                        <li className=" flex items-start gap-4">
                            <div className='bg-[#2853e3] shadow-sm p-1 w-6 h-6 rounded-full mt-1'>
                                <span className='text-[16px] text-white'><PiCheck /></span>
                            </div>
                            <div className='space-y-3 '>
                                <h1 className='text-white  text-2xl font-semibold'>Manage your spending and save</h1>
                                <p className='text-white text-[18px] font-normal'>Stay on top of your spending by tracking what’s <br />
                                    left after the bills are paid.</p>
                            </div>
                        </li>

                    </ul>

                </div>

            </div>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-12 gap-6 lg:mt-20 mt-8'>
                <div className='lg:w-[576px] space-y-8 max-sm:p-4 '>

                    <h1 className='text-6xl font-semibold line- text-white'>Keep the power of  chat  in your pocket</h1>
                    <p className='text-white text-[18px] font-normal'>All Wing clients receive complimentary access to the Wing <br /> Task Workspace App – a specialized app built to help you <br /> your assistant, manage tasks/projects,  </p>
                    <ul className='space-y-6'>
                        <li className=" flex items-center gap-3">
                            <div className='bg-[#2853e3] shadow-sm p-1 w-6 h-6 rounded-full '>
                                <span className='text-white'><PiCheck /></span>
                            </div>
                            <p className='text-white   text-[23px] font-semibold'>Link your bank or financial account</p>
                        </li>
                        <li className=" flex items-center gap-3">
                            <div className='bg-[#2853e3] shadow-sm p-1 w-6 h-6 rounded-full '>
                                <span className='text-white'><PiCheck /></span>
                            </div>
                            <p className='text-white text-[23px] font-semibold'>Easy way to view your total balance</p>
                        </li>
                        <li className=" flex items-center gap-3">
                            <div className='bg-[#2853e3] shadow-sm p-1 w-6 h-6 rounded-full '>
                                <span className='text-white'><PiCheck /></span>
                            </div>
                            <p className='text-white text-[23px] font-semibold'>Transaction history in real-time</p>
                        </li>


                    </ul>

                </div>
                <div className='lg:w-1/2 max-sm:p-4'>
                    <Image

                        src="https://i.ibb.co.com/KxtzgSF/Graphic.png"
                        width={612}
                        height={592}
                        alt="Picture of the author"
                    />
                </div>

            </div>

        </div>
    );
};

export default PowerFullpeatureHome2;