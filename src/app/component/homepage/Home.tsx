"use client"

import React from 'react';

import Banner from './Banner';
import Navbar from '../share/Navbar';
import PowerfulFeature from './PowerfulFeature';
import Slider from './Slider';
import SeerviceBussiness from './SeerviceBussiness';
import AccordionComponent from './AccordionComponent';
import NextStap from './NextStap';


const Home = () => {
    return (
        <>
            <div style={{
                backgroundImage: "url(https://i.ibb.co.com/yR24Fs4/Background-1.png)",
            }}>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <div>
                <PowerfulFeature></PowerfulFeature>
            </div>
            <div className='bg-[#f4f7ff]'>
                <Slider></Slider>
                <SeerviceBussiness></SeerviceBussiness>
            </div>
            <div className='bg-[#faf4ec]'>
                < AccordionComponent></AccordionComponent>
                <NextStap></NextStap>
            </div>
        </>
    );
};

export default Home;