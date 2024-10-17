"use client"

import Link from 'next/link';
import Image from 'next/image';
import 'react-tabs/style/react-tabs.css';
import AboutSectionSlider from '../component/homepage/AboutSectionSlider';
import AboutBanner from '../component/share/AboutBanner';
import MyTab from '../component/homepage/AboutPage/MyTab';








const page = () => {








    return (
        <>
            <AboutBanner></AboutBanner>
            {/* second section */}
            <div className='lg:w-[1290px]  mx-auto  lg:mb-16  md:py-14'>
                <div className='lg:flex justify-center items-center gap-14 lg:my-20 mt-8 max-sm:space-y-4'>
                    <div className='lg:w-1/2  max-sm:p-4'>
                        <Image

                            src="https://i.ibb.co.com/nr332hg/image-1.png"
                            width={633}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='lg:w-1/2 space-y-10 md:pl-16 max-sm:p-4'>

                        <h1 className='text-5xl  font-bold '>Place to develop your business grwoth</h1>
                        <p>Design Season is a collaboration between Leicester's creative hub LCB based in the city's cultural quarter and designers and design businesses all over the city & county</p>
                        <p>By creating a strong brand presence on social media, you can reach broader audience get partners brand advocates</p>

                        <Link href="#"><button className='btn bg-[#2a5bfc] mt-5 text-white hover:bg-white hover:text-[#2a5bfc] '>Try pree version</button></Link>
                    </div>
                </div>
                <div className="lg:w-[1070px] mx-auto lg:flex items-center justify-between pt-8 max-sm:pl-8 max-sm:pb-5">

                    <div className="flex items-center gap-5">
                        <div className="stat-value ">4,200</div>
                        <div className="stat-title text-[18px] font-normal"><p>Total successfully</p>
                            <p>  projects done</p></div>

                    </div>
                    <div className="flex items-center gap-5">
                        <div className="stat-value ">4,200</div>
                        <div className="stat-title text-[18px] font-normal"><p>Raised via the</p>
                            <p> solutions we have</p></div>

                    </div>

                    <div className="flex items-center gap-5">
                        <div className="stat-value">1,200</div>
                        <div className="stat-title text-[18px] font-normal"><p>Hight qualified</p>
                            <p>  specialists</p></div>
                    </div>
                </div>
            </div>

            {/* Third section */}
            <div className='bg-[#f8f9fc] p-12'>
                <div className='lg:w-[1290px]  mx-auto  lg:mb-24 '>
                    <div className='lg:flex  items-center lg:gap-20 lg:my-20 mt-8 max-sm:space-y-4'>
                        <div className='lg:w-[578px]  max-sm:p-4'>
                            <Image

                                src="https://i.ibb.co.com/CmwCxhw/Image-3.png"
                                width={578}
                                height={636}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='lg:w-[592px] space-y-10 px-8 max-sm:p-4'>

                            <h1 className='text-5xl  font-semibold line-'>We help global brands <br />deliver great results </h1>

                            <p>Take your life to the next level with Rise, built-in business <br /> consultation with our expert with 10+ years of experience.</p>

                            <MyTab></MyTab>
                        </div>
                    </div>

                </div>
            </div >

            {/* forth section */}

            <div className='w-[1290px] mx-auto lg:py-40 py-20 max-sm:pl-10'>
                <h1 className='lg:text-center lg:text-4xl text-3xl font-bold max-sm:p-2'>Meet with our experts</h1>
                <div className='lg:flex justify-between items-center mt-10'>
                    <div>
                        <Image

                            src="https://i.ibb.co.com/ypYSZGr/Img.png"
                            width={305}
                            height={330}
                            alt="Picture of the author"
                        />
                        <h4 className='lg:text-center mt-6 text-[20px] font-semibold'>Rafael E. Kennison</h4>
                        <p className='lg:text-center'>Web Developer</p>

                    </div>
                    <div>
                        <Image

                            src="https://i.ibb.co.com/g4gXq8B/Img-1.png"
                            width={305}
                            height={330}
                            alt="Picture of the author"
                        />
                        <h4 className='lg:text-center mt-6 text-[20px] font-semibold'>Rafael E. Kennison</h4>
                        <p className='lg:first-letter:text-center'>Web Developer</p>

                    </div>
                    <div>
                        <Image

                            src="https://i.ibb.co.com/xz4cnVx/Img-2.png"
                            width={305}
                            height={330}
                            alt="Picture of the author"
                        />
                        <h4 className='lg:text-center mt-6 text-[20px] font-semibold'>Rafael E. Kennison</h4>
                        <p className='lg:text-center'>Web Developer</p>

                    </div>
                    <div>
                        <Image

                            src="https://i.ibb.co.com/RTpfcm9/Img-3.png"
                            width={305}
                            height={330}
                            alt="Picture of the author"
                        />
                        <h4 className='lg:text-center mt-6 text-[20px] font-semibold'>Rafael E. Kennison</h4>
                        <p className='lg:text-center'>Web Developer</p>

                    </div>
                </div>
            </div>

            {/* slider */}
            <div className='bg-[#f8f9fc] lg:py-36 py-20'>
                <AboutSectionSlider></AboutSectionSlider>
            </div>
            <div className='lg:h-[580px] max-sm:py-20'>
                <div className='lg:h-[300px] lg:w-[1000px] mx-auto max-sm:p-6 lg:pt-36'>
                    <div className='text-center lg:space-y-5 space-y-4'>
                        <h1 className='lg:text-[56px] text-3xl lg:leading-[70px]  font-bold'>Consult your business <br />
                            dream at affordable prices</h1>
                        <p className='lg:text-[18px] font-normal'>Unleash your financial possibilities by tapping into untapped opportunities and employing.</p>
                        <div className='space-x-4'>

                            <Link href="#"><button className='btn bg-[#2a5bfc] mt-5 text-white hover:bg-white hover:text-[#2a5bfc]'>Request a Consultation</button></Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default page;