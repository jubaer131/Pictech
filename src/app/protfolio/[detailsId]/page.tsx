"use client"
import Navbar from '@/app/component/share/Navbar';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';


const page = ({ params }) => {

    const [Portfolio, setPortfolio] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/protfolio")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPortfolio(data)
            })
            .catch(error => console.error("Error fetching portfolio:", error));
    }, [])

    const { detailsId } = params

    const findprotfolio = Portfolio.find(product => product._id === detailsId);

    console.log(findprotfolio)


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


            <div className='lg:w-[1297px] mx-auto mt-16'>
                <div className="w-full h-auto relative" style={{ aspectRatio: '1296 / 700' }}>
                    <Image
                        src={findprotfolio?.image}
                        layout="fill"
                        objectFit="cover"
                        alt="Picture of the author"
                    />
                </div>


                <div className='lg:w-[1048px] mx-auto my-10 space-y-10 p-4'>
                    <div className='space-y-10 mb-20'>
                        <h1 className='text-[48px] font-bold'>About Project</h1>
                        <p className='text-[20px]'>{findprotfolio?.description}</p>
                        <p className='text-[20px]'>{findprotfolio?.description1}</p>
                        <button className='text-[16px]  rounded-none border-b-2 border-[#2B5BFD] pb-2 '>Visit Website</button>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center '>
                        <div className='lg:w-[282px]'>
                            <h5 className='text-[18px] text-[#7D7D82]'>Client:</h5>
                            <h2 className='text-[22px] font-semibold'>Stuart Watkins</h2>
                        </div>
                        <div className='lg:w-[282px]'>
                            <h5 className='text-[18px] text-[#7D7D82]'>Industry:</h5>
                            <h2 className='text-[22px] font-semibold'>Sass & Software</h2>
                        </div>
                        <div className='lg:w-[282px]'>
                            <h5 className='text-[18px] text-[#7D7D82]'>Timeline:</h5>
                            <h2 className='text-[22px] font-semibold'>3 Months</h2>
                        </div>
                    </div>
                </div>
                <div className='lg:flex justify-between items-center '>
                    <Image

                        src='https://i.ibb.co.com/rp3Ksft/Image-8.png'
                        width={638}
                        height={540}
                        alt="Picture of the author"
                    />
                    <Image

                        src='https://i.ibb.co.com/rp3Ksft/Image-8.png'
                        width={638}
                        height={540}
                        alt="Picture of the author"
                    />
                </div>
                <div className="w-full h-auto relative mt-5" style={{ aspectRatio: '1296 / 700' }}>
                    <Image
                        src={findprotfolio?.image}
                        layout="fill"
                        objectFit="cover"
                        alt="Picture of the author"
                    />
                </div>
                <div className='lg:w-[1048px] lg:h-[848px] mx-auto space-y-8 py-10'>
                    <div>
                        <h1 className='text-[42px] font-bold'>Problems</h1>
                        <p className='text-[20px] font-normal'>{findprotfolio?.problems?.slice(0, 600)}</p>
                    </div>
                    <div>
                        <h1 className='text-[42px] font-bold'>Challanges</h1>
                        <p className='text-[20px] font-normal'>{findprotfolio?.challenges?.slice(0, 500)}</p>
                    </div>
                    <div>
                        <h1 className='text-[42px] font-bold'>Our Solutions</h1>
                        <p className='text-[20px] font-normal'>{findprotfolio?.ourSolution?.slice(0, 400)}</p>
                    </div>
                </div>

            </div>



            {/* third section */}
            <div className='bg-[#f8f9fc]  py-20'>
                <div className='lg:w-[1290px] mx-auto'>
                    <h1 className='text-5xl font-bold text-center pb-10'>Related Projects</h1>

                    <div className='flex justify-between items-center gap-3'>
                        {
                            Portfolio.slice(0, 2).map((item) => (

                                <Link key={item._id} href={`/protfolio/${item._id}`}>
                                    <div className=" dark:bg-gray-50 dark:text-gray-800">
                                        <Image

                                            src={item.image}
                                            width={636}
                                            height={666}
                                            alt="Picture of the author"
                                        />
                                        <div className="flex flex-col justify-between py-5 ">
                                            <div className="space-y-2">
                                                <h2 className="text-[28px] font-bold ">{item.title}</h2>
                                                <p className="dark:text-gray-800">{item.typeOfBusiness}</p>

                                            </div>


                                        </div>
                                    </div>
                                </Link>


                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default page;