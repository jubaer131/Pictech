import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import { MdReply } from "react-icons/md";

const Comment = () => {
    return (
        <>
            <div className='flex justify-between items-center py-8'>
                <button className='flex items-center gap-2 '>
                    <FaArrowLeft />
                    <h1 className='text-[16px] font-medium text-[#001F6D]'>Previous Post</h1>
                </button>
                <button className='flex gap-2 items-center'>
                    <h1 className='text-[16px] font-medium text-[#001F6D]'>Next Post</h1>
                    <FaArrowRight />
                </button>
            </div>
            <div className='space-y-12'>
                <h1 className='text-[32px] font-bold text-[#1D2939]'>2 comments</h1>
                <div className='flex items-start gap-5'>
                    <Image
                        src='https://i.ibb.co.com/jgWCDKY/Image-15.png'
                        width={90}
                        height={90}
                        alt="Picture of the author"
                    />
                    <div className='space-y-5'>
                        <p>Legal expertise and is client focused we enhance entrepreneurial environment  flexible supportive, allowing our lawyers introduced</p>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1 className='text-[18px] font-bold text-[#1D2939]'>Alexander Cameron</h1>
                                <p className='text-sm'>March 28, 2023</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdReply size={24} />
                                <p className='text-[16px] font-medium text-[#1D2939]'>Reply</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-start gap-5 pl-20'>
                    <Image
                        src='https://i.ibb.co.com/0F4SGBm/Ellipse.png'
                        width={90}
                        height={90}
                        alt="Picture of the author"
                    />
                    <div className='space-y-5'>
                        <p>Legal expertise and is client focused we enhance entrepreneurial environment  flexible supportive, allowing our lawyers introduced</p>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1 className='text-[18px] font-bold text-[#1D2939]'>Alexander Cameron</h1>
                                <p className='text-sm'>March 28, 2023</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdReply size={24} />
                                <p className='text-[16px] font-medium text-[#1D2939]'>Reply</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* inpute here */}
            <div className='space-y-5  py-20'>
                <h1 className='text-[32px] font-bold text-[#1D2939]  '>Leave a Reply</h1>
                <div className='flex items-center gap-4'>
                    <label className="form-control w-full">
                        <input type="text" placeholder="First Name" className="input input-bordered w-full rounded-md lg:h-16" />
                    </label>
                    <label className="form-control w-full ">
                        <input type="text" placeholder="Last Name" className="input input-bordered w-full rounded-md lg:h-16" />
                    </label>
                </div>
                <textarea
                    placeholder="Write your comment"
                    className="textarea textarea-bordered textarea-lg w-full lg:h-[220px] rounded-md">
                </textarea>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" />
                    <p className='text-sm font-normal-'>Save my name, email, and website in this browser for the next time I comment.</p>
                </div>
                <div className='pt-5'>
                    <button className='btn bg-[#2b5bfd] text-white '>Post Comment</button>
                </div>
            </div>
        </>
    );
};

export default Comment;