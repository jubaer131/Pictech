import React from 'react';
import Image from 'next/image';


const ConnectTools = () => {
    return (
        <>
            <div className='lg:w-[1290px] lg:ml-[275px] lg:py-24'>
                <h1 className='text-center lg:text-6xl text-3xl font-semibold lg:pb-20 pt-5 max-sm:pb-10 max-sm:pt-20 px-5 text-white'>Easily connect to tools <br className='max-sm:hidden' />
                    you already use</h1>
                <div className='w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-2 max-sm:p-4'>
                    <div className='lg:w-[414px] lg:h-[276px]  bg-[#1c1c22] space-y-4 pb-8 pt-11 px-11 rounded-md'>
                        <Image
                            src="https://i.ibb.co.com/Sc5TWc3/mood.png"
                            width={41}
                            height={41}
                            alt="Picture of the author"
                            className='rounded-full pb-5 pt-3'
                        />
                        <h2 className='text-white text-2xl font-semibold'>Smart Messaging</h2>
                        <p className='text-white text-[18px] font-normal'>Obligations business will frequently occur that pleasures have to be  </p>
                    </div>
                    <div className='lg:w-[414px] lg:h-[276px]  bg-[#1C1C22] space-y-4 pb-8 pt-11 px-11 rounded-md'>
                        <Image
                            src="https://i.ibb.co.com/686M7Py/video-camera-back.png"
                            width={41}
                            height={41}
                            alt="Picture of the author"
                            className='rounded-full pb-5 pt-3'
                        />
                        <h2 className='text-white text-2xl font-semibold'>Audio & Video Calling</h2>
                        <p className='text-white text-[18px] font-normal'>Obligations business will frequently occur that pleasures have to be  </p>
                    </div>
                    <div className='lg:w-[414px] lg:h-[276px]  bg-[#1C1C22] space-y-4 pb-8 pt-11 px-11 rounded-md'>
                        <Image
                            src="https://i.ibb.co.com/M7KMrr8/airplay.png"
                            width={41}
                            height={41}
                            alt="Picture of the author"
                            className='rounded-full pb-5 pt-3'
                        />
                        <h2 className='text-white text-2xl font-semibold'>Screen Sharing</h2>
                        <p className='text-white text-[18px] font-normal'>Obligations business will frequently occur that pleasures have to be  </p>
                    </div>
                    <div className='lg:w-[414px] lg:h-[276px]  bg-[#1C1C22] space-y-4 pb-8 pt-11 px-11 rounded-md'>
                        <Image
                            src="https://i.ibb.co.com/phJyLxW/lock.png"
                            width={41}
                            height={41}
                            alt="Picture of the author"
                            className='rounded-full pb-5 pt-3'
                        />
                        <h2 className='text-white text-2xl font-semibold'>Private Conversations</h2>
                        <p className='text-white text-[18px] font-normal'>Obligations business will frequently occur that pleasures have to be  </p>
                    </div>
                    <div className='lg:w-[414px] lg:h-[276px]  bg-[#1C1C22] space-y-4 pb-8 pt-11 px-11 rounded-md'>
                        <Image
                            src="https://i.ibb.co.com/x1PQBBJ/album.png"
                            width={41}
                            height={41}
                            alt="Picture of the author"
                            className='rounded-full pb-5 pt-3'
                        />
                        <h2 className='text-white text-2xl font-semibold'>Call Recording</h2>
                        <p className='text-white text-[18px] font-normal'>Obligations business will frequently occur that pleasures have to be  </p>
                    </div>
                    <div className='lg:w-[414px] lg:h-[276px]  bg-[#1C1C22] space-y-4 pb-8 pt-11 px-11 rounded-md'>
                        <Image
                            src="https://i.ibb.co.com/X5H6cJ4/deskphone.png"
                            width={41}
                            height={41}
                            alt="Picture of the author"
                            className='rounded-full pb-5 pt-3'
                        />
                        <h2 className='text-white text-2xl font-semibold'>Phone Calls</h2>
                        <p className='text-white text-[18px] font-normal'>Obligations business will frequently occur that pleasures have to be  </p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ConnectTools;