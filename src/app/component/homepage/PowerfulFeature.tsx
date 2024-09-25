import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PiCheck } from "react-icons/pi";

const PowerfulFeature = () => {
    return (
        <div className='max-w-[1305px] mx-auto mt-28'>
            <h1 className='text-center'>Powerful Features That Set Us Apart and Ahead</h1>
            <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            <div className='flex justify-center items-center gap-28 mt-20'>
                <div className='w-1/2 space-y-4'>
                    <h5 className=' text-[#2563EB]  text-[16px] font-semibold'>Business Analytics</h5>
                    <h1 className='text-[40px] leading-[46px] font-semibold line-'>Accelerate your workflow and minimise your time</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe</p>
                    <ul className='space-y-3'>
                        <li className=" flex items-center gap-3">
                            <div className='bg-[#f2f2f2] shadow-sm p-1 rounded-sm'><span className='text-[16px]'><PiCheck /></span></div>
                            <p>Fully customisable for developers</p>
                        </li>
                        <li className=" flex items-center gap-3">
                            <div className='bg-[#f2f2f2] shadow-sm p-1 rounded-sm'><span className='text-[16px]'><PiCheck /></span></div>
                            <p>Variants  and Component propertie</p>
                        </li>
                        <li className=" flex items-center gap-3">
                            <div className='bg-[#f2f2f2] shadow-sm p-1 rounded-sm'><span className='text-[16px]'><PiCheck /></span></div>
                            <p>Interactions for easy prototyping</p>
                        </li>


                    </ul>
                    <Link href="#"><button className='btn bg-[#2a5bfc] mt-5 text-white'>Try pree version</button></Link>
                </div>
                <div className='w-1/2'>
                    <Image

                        src="https://i.ibb.co.com/3YNFTDS/Mockup.png"
                        width={600}
                        height={640}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <div className='flex justify-center items-center gap-28 mt-20'>
                <div className='w-1/2'>
                    <Image

                        src="https://i.ibb.co.com/3YNFTDS/Mockup.png"
                        width={600}
                        height={640}
                        alt="Picture of the author"
                    />
                </div>
                <div className='w-1/2 space-y-4'>
                    <h5 className=' text-[#2563EB]  text-[16px] font-semibold'>Business Analytics</h5>
                    <h1 className='text-[40px] leading-[46px] font-semibold line-'>Accelerate your workflow and minimise your time</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe</p>
                    <ul className='space-y-3'>
                        <li className=" flex items-center gap-3">
                            <div className='bg-[#f2f2f2] shadow-sm p-1 rounded-sm'><span className='text-[16px]'><PiCheck /></span></div>
                            <p>Fully customisable for developers</p>
                        </li>
                        <li className=" flex items-center gap-3">
                            <div className='bg-[#f2f2f2] shadow-sm p-1 rounded-sm'><span className='text-[16px]'><PiCheck /></span></div>
                            <p>Variants  and Component propertie</p>
                        </li>
                        <li className=" flex items-center gap-3">
                            <div className='bg-[#f2f2f2] shadow-sm p-1 rounded-sm'><span className='text-[16px]'><PiCheck /></span></div>
                            <p>Interactions for easy prototyping</p>
                        </li>


                    </ul>
                    <Link href="#"><button className='btn bg-[#2a5bfc] mt-5 text-white'>Try pree version</button></Link>
                </div>

            </div>
            <div className='flex justify-center items-center gap-28 mt-20'>
                <div className='w-1/2 space-y-4'>
                    <h5 className=' text-[#2563EB]  text-[16px] font-semibold'>Business Analytics</h5>
                    <h1 className='text-[40px] leading-[46px] font-semibold line-'>Accelerate your workflow and minimise your time</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe</p>
                    <ul className='space-y-3'>
                        <li className=" flex items-center gap-3">
                            <div className='bg-[#f2f2f2] shadow-sm p-1 rounded-sm'><span className='text-[16px]'><PiCheck /></span></div>
                            <p>Fully customisable for developers</p>
                        </li>
                        <li className=" flex items-center gap-3">
                            <div className='bg-[#f2f2f2] shadow-sm p-1 rounded-sm'><span className='text-[16px]'><PiCheck /></span></div>
                            <p>Variants  and Component propertie</p>
                        </li>
                        <li className=" flex items-center gap-3">
                            <div className='bg-[#f2f2f2] shadow-sm p-1 rounded-sm'><span className='text-[16px]'><PiCheck /></span></div>
                            <p>Interactions for easy prototyping</p>
                        </li>


                    </ul>
                    <Link href="#"><button className='btn bg-[#2a5bfc] mt-5 text-white'>Try pree version</button></Link>
                </div>
                <div className='w-1/2'>
                    <Image

                        src="https://i.ibb.co.com/3YNFTDS/Mockup.png"
                        width={600}
                        height={640}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </div>
    );
};

export default PowerfulFeature;