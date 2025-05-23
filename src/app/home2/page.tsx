import React from 'react';
import Home2bannerImage from '../component/homepage/Home2/Home2bannerImage';
import Home2Banner from '../component/homepage/Home2/Home2Banner';
import Navbar2 from '../component/share/Navbar2';
import PowerFullpeatureHome2 from '../component/homepage/Home2/PowerFullpeatureHome2';
import Feedback from '../component/homepage/Home2/Feedback';
import SaaspicQusetion from '../component/homepage/Home2/SaaspicQusetion';
import Stat from '../component/homepage/Home2/Stat';
import ConnectTools from '../component/homepage/Home2/ConnectTools';
import FreeFor30 from '../component/homepage/Home2/FreeFor30';

const page = () => {
    return (
        <>
            <div className='bg-[#121217]'>

                <div style={{
                    backgroundImage: "url(https://i.ibb.co.com/k5D9Hwq/09.png)",
                    backgroundSize: 'cover',  // Cover the entire area
                    backgroundRepeat: 'no-repeat', // No repeat
                }} >
                    <Navbar2></Navbar2>
                    <Home2Banner></Home2Banner>
                </div>
                <Home2bannerImage></Home2bannerImage>
                <PowerFullpeatureHome2></PowerFullpeatureHome2>
            </div>
            <div className='py-20' style={{
                backgroundImage: "url(https://i.ibb.co.com/qpZF1sV/BG-2.png)",
                backgroundSize: 'cover',  // Cover the entire area
                backgroundRepeat: 'no-repeat', // No repeat
            }} >
                <Feedback></Feedback>
            </div>
            <div className='lg:bg-[#121217] lg:py-20'>
                <SaaspicQusetion></SaaspicQusetion>
            </div>
            <div style={{
                backgroundImage: "url('https://i.ibb.co/7SggSn6/BG-3.png')", // Corrected URL syntax
                backgroundSize: 'cover',  // Cover the entire area
                backgroundRepeat: 'no-repeat', // No repeat
            }}>
                <Stat></Stat>
            </div>
            <div className='bg-[#121217]'>
                <ConnectTools></ConnectTools>
            </div>
            <div>
                <FreeFor30></FreeFor30>
            </div>

        </>
    );
};

export default page;