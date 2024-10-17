"use client"
import React from 'react';
import Navbar from './Navbar';
import Navlink from './Navlink';

const AboutBanner = () => {
    return (
        <>
            <div style={{
                backgroundImage: "url(https://i.ibb.co.com/WGV9tQw/Background-2.png)",
            }}
                className='lg:h-[580px]'>
                <Navbar></Navbar>
                <div className='lg:h-[300px] lg:w-[1000px] mx-auto max-sm:p-6 lg:pt-28'>
                    <div className='text-center lg:space-y-5 space-y-3'>
                        <h1 className='lg:text-6xl text-4xl font-semibold'>About Us</h1>
                        <p className='lg:text-[18px] font-normal'>Work the way you want using task management software that helps you <br className='max-sm:hidden' /> organize tasks, delegate work, track progress and communicate.</p>
                        <div className='space-x-4 '>

                            <Navlink href="/" activeClassName="text-[16px] font-semibold" nonActiveClassName="font-normal" className="">
                                Home
                            </Navlink>
                            <span className="font-semibold">/</span>
                            <Navlink href="/aboutus" activeClassName="text-[16px] font-semibold" nonActiveClassName="font-normal" className="">
                                About Us
                            </Navlink>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutBanner;