import React from 'react';
import { FaStar } from "react-icons/fa6";

const Home2Banner = () => {
    return (
        <>

            <div className='lg:w-[62%] mx-auto lg:h-[900px]    flex justify-start items-center'>

                <div className="lg:w-[772px] lg:h-[551px] lg:text-start  text-center ">

                    <h1 className="mb-5 lg:text-[70px] lg:leading-[70px] text-2xl font-semibold text-white">Engage your
                        customers with <br />
                        real-time chat</h1>
                    <p className="mb-5  text-white text-[18px] font-normal lg:w-[616px] ">
                        Pictech is a complete customer service platform that connects with your
                        website visitors in real-time to convert new leads, close more deals, and
                        provide better support to your customers.
                    </p>
                    <button className="btn bg-[#2b5bfd] text-white border-none">Get Started for Free</button>
                    <div className='flex justify-start items-center gap-2 mt-5'>
                        <span className='text-[#00b176]'><FaStar /></span>
                        <p className='text-white'>Rated 4.9/5 - from over 600 reviews</p>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Home2Banner;