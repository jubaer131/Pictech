import React from 'react';
import Image from 'next/image'



const Banner = () => {
    return (
        <>
            <div
                className="hero h-[668px] container mx-auto"
                style={{
                    backgroundImage: "url()",
                }}>
                <div className=" "></div>
                <div className='flex justify-between items-center w-full mt-28' >
                    <div className="text-start w-1/2  ml-16">
                        <div className="w-[552px]">
                            <h1 className="mb-5 text-6xl font-bold">Manage Clients <br /> & Teams in Your Digital Business</h1>
                            <p className="mb-5">
                                A powerful, agile, all-in-one recruiting tool designed with productivity and loaded with features more successfully
                            </p>
                            <button className="btn bg-[#2b5bfd] text-white">Get Started for Free</button>
                        </div>
                    </div>
                    <div>
                        <Image

                            src="https://i.ibb.co.com/YN8FwbG/Video.png"
                            width={815}
                            height={510}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div >
            <div className='max-w-[1600px] mx-auto mt-20'>
                <h2 className='text-center'>Trusted by agencies managing 100+ client projects daily</h2>
                <div className='flex items-center justify-between pt-8 pb-12'>
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