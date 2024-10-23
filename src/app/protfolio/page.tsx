"use client"
import React from 'react';
import Navbar from '../component/share/Navbar';
import MyTab from '../component/ProtFolio/MyTab';
import Navlink from '../component/share/Navlink';

const page = () => {




    return (
        <>
            <div style={{
                backgroundImage: "url(https://i.ibb.co.com/WGV9tQw/Background-2.png)",
            }}
                className='lg:h-[580px] max-sm:p-2'>
                <Navbar></Navbar>
                <div className='lg:h-[300px] lg:w-[1000px] mx-auto max-sm:p-6 lg:pt-28'>
                    <div className='text-center lg:space-y-5 space-y-3'>
                        <h1 className='lg:text-6xl text-2xl font-semibold'>Portfolio Grid 2 Columns</h1>
                        <p className='lg:text-[18px] font-normal'>Work the way you want using task management software that helps you organize <br className='max-sm:hidden' /> tasks, delegate work, track progress and communicate.</p>
                        <div className='space-x-4 '>


                            <Navlink href="/" activeClassName="text-[16px] font-semibold" nonActiveClassName="font-normal" className="">
                                Home
                            </Navlink>
                            <span className="font-semibold">/</span>
                            <Navlink href="/protfolio" activeClassName="text-[16px] font-semibold" nonActiveClassName="font-normal" className="">
                                Portfolio Grid 2 Columns
                            </Navlink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-[1272px] mx-auto lg:pt-16 pb-24'>

                <MyTab ></MyTab>

            </div>
        </>
    );
};

export default page;