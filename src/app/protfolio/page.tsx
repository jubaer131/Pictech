"use client"
import React from 'react';
import Navbar from '../component/share/Navbar';
import Link from 'next/link';
import MyTab from '../component/ProtFolio/MyTab';

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
                        <h1 className='lg:text-6xl text-2xl font-semibold'>Portfolio Grid 2 Columns</h1>
                        <p className='lg:text-[18px] font-normal'>Work the way you want using task management software that helps you organize <br /> tasks, delegate work, track progress and communicate.</p>
                        <div className='space-x-4 '>
                            <Link href="/">Home</Link><span className='font-semibold'>/</span>

                            <Link className='font-semibold' href="/service">Portfolio Grid 2 Columns</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-[1272px] mx-auto'>

                <MyTab ></MyTab>

            </div>
        </>
    );
};

export default page;