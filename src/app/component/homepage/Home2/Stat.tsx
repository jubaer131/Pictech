import React from 'react';
import { PiLineVerticalThin } from "react-icons/pi";


const Stat = () => {
    return (
        <div className='lg:w-[1444.5px] h-[334px] ml-[186px] flex items-center justify-between py-20 '>

            <div className='flex justify-between items-center  py-8 '>
                <div className="space-y-2 lg:w-[265px]">
                    <div className="text-5xl font-semibold text-center text-white">1.5 billion+</div>
                    <div className="text-[18px] font-semibold text-center  text-white">Email Sent</div>
                </div>
                <div>
                    <span className='w-[2px] h-28 text-8xl  text-white'><PiLineVerticalThin /></span>
                </div>
            </div>
            <div className='flex justify-between items-center py-8 '>
                <div className="space-y-2 lg:w-[265px]">
                    <div className="text-5xl font-semibold text-center  text-white">150x</div>
                    <div className="text-[18px] font-semibold text-center  text-white">Average ROI</div>
                </div>
                <div>
                    <span className='w-[2px] h-28 text-8xl  text-white'><PiLineVerticalThin /></span>
                </div>
            </div>
            <div className='flex justify-between items-center py-8 '>
                <div className="space-y-2 lg:w-[265px]">
                    <div className="text-5xl font-semibold text-center  text-white">99.5%</div>
                    <div className="text-[18px] font-semibold text-center  text-white">Customer Satisfaction</div>
                </div>
                <div>
                    <span className='w-[2px] h-28 text-8xl  text-white'><PiLineVerticalThin /></span>
                </div>
            </div>
            <div className='flex justify-between items-center py-8 '>
                <div className="space-y-2 lg:w-[265px]">
                    <div className="text-5xl font-semibold text-center  text-white">4.8 stars</div>
                    <div className="text-[18px] font-semibold text-center  text-white">Customer Rating</div>
                </div>

            </div>


        </div>
    );
};

export default Stat;