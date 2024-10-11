"use client"
import Navbar from '@/app/component/share/Navbar';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


const page = ({ params }) => {









    // const specificProduct = products.find(product => product._id === params.productId);

    // console.log(specificProduct)

    console.log(params.productId)



    return (
        <>

            <div style={{
                backgroundImage: "url(https://i.ibb.co.com/WGV9tQw/Background-2.png)",
            }}
                className='lg:h-[580px]'>
                <Navbar></Navbar>
                <div className='lg:h-[300px] lg:w-[1000px] mx-auto max-sm:p-6 lg:pt-28'>
                    <div className='text-center lg:space-y-5 space-y-3'>
                        <h1 className='lg:text-6xl text-2xl font-semibold'>Startup financial model</h1>
                        <p className='lg:text-[18px] font-normal'>Work the way you want using task management software that helps you organize <br /> tasks, delegate work, track progress and communicate.</p>
                        <div className='space-x-4 '>
                            <Link href="/">Home</Link><span className='font-semibold'>/</span>

                            <Link className='font-semibold' href="/service">Portfolio</Link><span className='font-semibold'>/</span>
                            <Link className='font-semibold' href="/service">Portfolio Details</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* second section */}

            {/* {specificProduct ? (
                <button key={specificProduct._id}>check</button>
            ) : (
                <p>No product found.</p>
            )} */}

            <div className='lg:w-[1297px] mx-auto mt-16'>
                <Image

                    src=''
                    width={1296}
                    height={700}
                    alt="Picture of the author"
                />
                <div className='lg:w-[1048px] mx-auto my-10 space-y-10 p-4'>
                    <div className='space-y-10 mb-20'>
                        <h1 className='text-[48px] font-bold'>about</h1>
                        <p>Imagine creating your own software without typing a single code line.  Your starting point? No.Code.Tech. Picture it as your ultimate toolkit,  packed with resources, tutorials, and insights that enable anyone to  dive into software creation, regardless of their level of technical  know-how  <br /> <br /> <br />Imagine creating your own software without typing a single code line.  Your starting point? No.Code.Tech. Picture it as your ultimate toolkit,  packed with resources, tutorials, and insights that enable anyone to  dive into software creation, regardless of their level of technical  know-how</p>
                        <button className='text-[16px]  rounded-none border-b-2 border-[#2B5BFD] pb-2 '>Visit Website</button>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center '>
                        <div className='lg:w-[282px]'>
                            <h5>Client</h5>
                            <h2>Stuart Watkins</h2>
                        </div>
                        <div className='lg:w-[282px]'>
                            <h5>Industry</h5>
                            <h2>Sass & Software</h2>
                        </div>
                        <div className='lg:w-[282px]'>
                            <h5>Timeline</h5>
                            <h2>3 Months</h2>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-between items-center gap-3'>
                    <Image

                        src='https://i.ibb.co.com/rp3Ksft/Image-8.png'
                        width={636}
                        height={540}
                        alt="Picture of the author"
                    />
                    <Image

                        src='https://i.ibb.co.com/rp3Ksft/Image-8.png'
                        width={636}
                        height={540}
                        alt="Picture of the author"
                    />
                </div>
                <div className='mt-5'>
                    <Image

                        src='https://i.ibb.co.com/rp3Ksft/Image-8.png'
                        width={1296}
                        height={700}
                        alt="Picture of the author"
                    />
                </div>
                <div className='lg:w-[1048px] lg:h-[848px] mx-auto space-y-12 py-20'>
                    <div>
                        <h1 className='text-[42px] font-bold'>Problems</h1>
                        <p className='text-[22px] font-normal'>The platform initially struggled with presenting tailored resources and  educational content, often leaving users overwhelmed and leading to  abrupt exits. Our solution was to create different user-friendly paths  for content exploration, giving them compelling reasons to stay and  engage. This required a more strategic structuring of the platform,  linking diverse resources cohesively to form intuitive exploration  routes.</p>
                    </div>
                    <div>
                        <h1 className='text-[42px] font-bold'>Challanges</h1>
                        <p className='text-[22px] font-normal'>The platform initially struggled with presenting tailored resources and  educational content, often leaving users overwhelmed and leading to  abrupt exits. Our solution was to create different user-friendly paths  for content exploration, giving them compelling reasons to stay and  engage. This required a more strategic structuring of the platform,  linking diverse resources cohesively to form intuitive exploration  routes.</p>
                    </div>
                    <div>
                        <h1 className='text-[42px] font-bold'>Our Solutions</h1>
                        <p className='text-[22px] font-normal'>The platform initially struggled with presenting tailored resources and  educational content, often leaving users overwhelmed and leading to  abrupt exits. Our solution was to create different user-friendly paths  for content exploration, giving them compelling reasons to stay and  engage. This required a more strategic structuring of the platform,  linking diverse resources cohesively to form intuitive exploration  routes.</p>
                    </div>
                </div>

            </div>



            {/* third section */}
            <div className='lg:w-[1290px] mx-auto'>
                <h1 className='text-5xl font-bold text-center my-8'>Related Projects</h1>

                <div className=' flex justify-between items-center gap-3'>
                    <Image

                        src='https://i.ibb.co.com/rp3Ksft/Image-8.png'
                        width={636}
                        height={540}
                        alt="Picture of the author"
                    />
                    <Image

                        src='https://i.ibb.co.com/rp3Ksft/Image-8.png'
                        width={636}
                        height={540}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </>
    );
};

export default page;