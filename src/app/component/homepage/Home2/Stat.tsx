import React from 'react';
import { PiLineVerticalThin } from "react-icons/pi";


const Stat = () => {
    return (
        <div className='lg:w-[1444.5px] lg:h-[334px] lg:ml-[186px] lg:flex items-center justify-between lg:py-20 max-sm:p-2'>

            <div className='lg:flex justify-between items-center  py-8 '>
                <div className="space-y-2 lg:w-[265px]">
                    <div className="lg:text-5xl text-3xl font-semibold text-center text-white">1.5 billion+</div>
                    <div className="text-[18px] font-semibold text-center  text-white">Email Sent</div>
                </div>
                <div>
                    <span className='w-[2px] h-28 text-8xl max-sm:hidden text-white'><PiLineVerticalThin /></span>
                </div>
            </div>
            <div className='lg:flex justify-between items-center py-8 '>
                <div className="space-y-2 lg:w-[265px]">
                    <div className="lg:text-5xl text-3xl font-semibold text-center  text-white">150x</div>
                    <div className="text-[18px] font-semibold text-center  text-white">Average ROI</div>
                </div>
                <div>
                    <span className='w-[2px] h-28 text-8xl  max-sm:hidden text-white'><PiLineVerticalThin /></span>
                </div>
            </div>
            <div className='lg:flex justify-between items-center py-8 '>
                <div className="space-y-2 lg:w-[265px]">
                    <div className="lg:text-5xl text-3xl font-semibold text-center  text-white">99.5%</div>
                    <div className="text-[18px] font-semibold text-center  text-white">Customer Satisfaction</div>
                </div>
                <div>
                    <span className='w-[2px] h-28 text-8xl  max-sm:hidden text-white'><PiLineVerticalThin /></span>
                </div>
            </div>
            <div className='lg:flex justify-between items-center py-8 '>
                <div className="space-y-2 lg:w-[265px]">
                    <div className="lg:text-5xl text-3xl font-semibold text-center  text-white">4.8 stars</div>
                    <div className="text-[18px] font-semibold text-center  text-white">Customer Rating</div>
                </div>

            </div>


        </div>
    );
};

export default Stat;