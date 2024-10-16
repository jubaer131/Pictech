import React from 'react';
import Image from 'next/image'



const Banner = () => {
    return (
        <>

            <div className='lg:max-w-[1570px] mx-auto flex flex-col-reverse lg:flex-row justify-center lg:gap-8 lg:mt-20 mt-5'>

                <div className="lg:w-[580px] lg:text-start lg:ml-32 text-center lg:mt-16 p-4">

                    <h1 className="mb-5 lg:text-[70px] lg:leading-[70px] text-2xl font-semibold">Manage Clients <br /> & Teams in Your Digital Business</h1>
                    <p className="mb-5">
                        A powerful, agile, all-in-one recruiting tool designed with <br className='max-sm:hidden' /> productivity and loaded with features more successfully
                    </p>
                    <button className="btn bg-[#2b5bfd] text-white">Get Started for Free</button>

                </div>

                <div className='max-sm:p-4'>
                    <Image

                        src="https://i.ibb.co.com/YN8FwbG/Video.png"
                        width={815}
                        height={520}
                        alt="Picture of the author"
                    />
                </div>
            </div>

            <div className='lg:max-w-[1600px] w-full mx-auto lg:mt-20 mt-10'>
                <h2 className='text-center text-[18px] font-normal'>Trusted by agencies managing <span className='font-bold'>100+</span> client projects daily</h2>
                <div className='lg:flex  items-center justify-between max-sm:grid grid-cols-2 gap-4 max-sm:p-12 pt-6 lg:pb-28 '>

                    <Image

                        src="https://i.ibb.co.com/c36XNCM/Vector-2.png"
                        width={171}
                        height={38}
                        alt="Picture of the author"

                    />
                    <Image

                        src="https://i.ibb.co.com/SvQQcZG/Dropbox.png"
                        width={171}
                        height={38}
                        alt="Picture of the author"

                    />


                    <Image

                        src="https://i.ibb.co.com/mvK1kF3/DocuSign.png"
                        width={171}
                        height={38}
                        alt="Picture of the author"

                    />
                    <Image

                        src="https://i.ibb.co.com/dtGwz9p/Lucidchart.png"
                        width={171}
                        height={38}
                        alt="Picture of the author"

                    />


                    <Image

                        src="https://i.ibb.co.com/Zg9PypG/Eventbrite.png"
                        width={171}
                        height={38}
                        alt="Picture of the author"

                    />
                    <Image

                        src="https://i.ibb.co.com/fnbJ3zk/GitBook.png"
                        width={171}
                        height={38}
                        alt="Picture of the author"

                    />

                    <Image

                        src="https://i.ibb.co.com/k2VxySg/Zendesk.png"
                        width={171}
                        height={38}
                        alt="Picture of the author"

                    />

                </div>
            </div>
        </>
    );
};

export default Banner;