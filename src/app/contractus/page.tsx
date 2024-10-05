"use client"
import React from 'react';
import Navbar from '../component/share/Navbar';
import Link from 'next/link';
import Image from 'next/image';




const page: React.FC = () => {
    return (
        <>
            <div style={{
                backgroundImage: "url(https://i.ibb.co.com/WGV9tQw/Background-2.png)",
            }}
                className='lg:h-[580px]'>
                <Navbar></Navbar>
                <div className='lg:h-[300px] lg:w-[1000px] mx-auto max-sm:p-6 lg:pt-28'>
                    <div className='text-center lg:space-y-5 space-y-3'>
                        <h1 className='lg:text-6xl text-2xl font-semibold'>Contract Us</h1>
                        <p className='lg:text-[18px] font-normal'>Work the way you want using task management software that helps you organize <br /> tasks, delegate work, track progress and communicate.</p>
                        <div className='space-x-4 '>
                            <Link href="/">Home</Link><span className='font-semibold'>/</span>

                            <Link className='font-semibold' href="/contractus">Contract Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* second section */}

            <div className='lg:w-[1296px] mx-auto lg:flex justify-between  items-start lg:py-28 py-16'>
                <div className='lg:w-1/2 space-y-8 p-5 '>
                    <h1 className='text-5xl font-bold'>Get free business consultation today</h1>
                    <p>Our commitment to ethical practices has been a driving force. Clients rely on us for clear communication, honest collaboration, and reliable results. This foundation of trust has been key to our journey, fostering relationships and fueling our enduring success.</p>
                    <div className='flex items-center justify-start gap-5 '>
                        <div>
                            <Image

                                src="https://i.ibb.co.com/mCkVhFN/icon-6.png"
                                width={52}
                                height={52}
                                alt="Picture of the author"
                            />
                        </div>
                        <div>
                            <p>9675 Grant Ave.</p>
                            <p>Chicago Heights, IL 60411</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-start gap-5'>
                        <div>
                            <Image

                                src="https://i.ibb.co.com/mCkVhFN/icon-6.png"
                                width={52}
                                height={52}
                                alt="Picture of the author"
                            />
                        </div>
                        <div>
                            <p>9675 Grant Ave.</p>
                            <p>Chicago Heights, IL 60411</p>
                        </div>
                    </div>

                </div>

                <div className='lg:w-[636px] '>
                    <section className=' p-7 md:p-10 mx-auto  rounded-md shadow-md bg-[#eef2ff]  h-full'>
                        <h2 className='text-2xl font-bold text-gray-700 capitalize pt-6'>
                            give Your Feedback
                        </h2>

                        <form className='space-y-5'>
                            <div className='grid grid-cols-1 gap-5 mt-4 sm:grid-cols-2 '>
                                <div>

                                    <input

                                        readOnly
                                        id='username'
                                        placeholder='User Name'
                                        name='username'
                                        type='text'
                                        className='block w-full px-4 h-16 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>

                                <div>

                                    <input

                                        id='phoneNumber'
                                        placeholder='Phone Number'
                                        type='number'
                                        name='number'
                                        className='block w-full  h-16 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>

                            </div>
                            <div>

                                <input

                                    id='emailAddress'
                                    placeholder='Email Address'
                                    type='email'
                                    name='email'
                                    className='block w-full h-16 px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <select className="select select-bordered w-full h-16  border-none">
                                <option disabled selected>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            <div className='flex flex-col gap-2 '>

                                <textarea
                                    className='block w-full h-56 px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    name='comment'
                                    placeholder='Describe about your project '
                                    id='comment'
                                    required
                                ></textarea>
                            </div>
                            <div className="card-actions ">
                                <button className='btn bg-[#2b5bfd] text-white'>Send Message</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>

            {/* 3'd section */}

            <div className='lg:w-[1296px] mx-auto lg:pb-32 pb-5 lg:pt-8'>
                <div className='text-center text-5xl font-bold lg:pb-10'>Different office locations</div>
                <div className='lg:flex justify-between items-center gap-5 '>
                    <div className='w-[416px] h-[364px] shadow-md flex justify-center items-center'>
                        <div className=' space-y-5'>
                            <h1 className='text-4xl font-semibold'>United State</h1>
                            <p className='text-[20px] leading-7'>27200 Calaroga Ave, Hayward,<br />
                                CA 94545, United States</p>
                            <p className='text-[18px]'>info.picmate@support.com <br />
                                +44 1793 123 456</p>
                            <button className='text-[16px]  rounded-none border-b-2 border-[#2B5BFD] pb-2'>Get derection</button>
                        </div>
                    </div>
                    <div className='w-[416px] h-[364px]   shadow-md flex justify-center items-center'>
                        <div className=' space-y-5'>
                            <h1 className='text-4xl font-semibold'>United Kingdom</h1>
                            <p className='text-[20px] leading-7'>27200 Calaroga Ave, Hayward,<br />
                                CA 94545, United States</p>
                            <p className='text-[18px]'>info.picmate@support.com <br />
                                +44 1793 123 456</p>
                            <button className='text-[16px]  rounded-none border-b-2 border-[#2B5BFD] pb-2'>Get derection</button>
                        </div>
                    </div>
                    <div className='w-[416px] h-[364px]   shadow-md flex justify-center items-center'>
                        <div className=' space-y-5'>
                            <h1 className='text-4xl font-semibold'>Australia</h1>
                            <p className='text-[20px] leading-7'>27200 Calaroga Ave, Hayward,<br />
                                CA 94545, United States</p>
                            <p className='text-[18px]'>info.picmate@support.com <br />
                                +44 1793 123 456</p>
                            <button className='text-[16px]  rounded-none border-b-2 border-[#2B5BFD] pb-2'>Get derection</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default page;



