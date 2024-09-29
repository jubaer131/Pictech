"use client"

import React from 'react';

import Banner from './Banner';
import Navbar from '../share/Navbar';
import PowerfulFeature from './PowerfulFeature';
import Slider from './Slider';
import SeerviceBussiness from './SeerviceBussiness';

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
            <div>
                <Slider></Slider>
                <SeerviceBussiness></SeerviceBussiness>
            </div>


        </>
    );
};

export default Home;