
"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/app/component/share/Navbar';
import Comment from '@/app/component/Blog/Comment';
import BlogSideBar from '@/app/component/Blog/BlogSideBar';
import { ClockLoader } from 'react-spinners';
import Navlink from '@/app/component/share/Navlink';

// Define the type for a blog post
interface BlogPost {
    _id: string;
    date: string;
    image1: string;
    title1: string;
    description1: string;
    description2: string;
    complexsentence: string;
    title2: string;
    description3: string;
    description4: string;
    image2: string;
    title3: string;
    description5: string;

}


interface PageProps {
    params: {
        id: string;
    };
}

const Page: React.FC<PageProps> = ({ params }) => {
    const [blog, setBlog] = useState<BlogPost[]>([]);
    useEffect(() => {
        fetch(`https://next-and-typescript-server.vercel.app/myblogpage`)
            .then(res => res.json())
            .then((data: BlogPost[]) => {
                setBlog(data);
            });
    }, []);

    const { id } = params;
    const blogDetails = blog.find((item) => item._id === id);


    if (!blogDetails) return <div className="w-full h-[660px] flex items-center justify-center"><ClockLoader color="orange" size={200} />  </div>

    const { image1, date, title1, description1, description2, complexsentence, title2, description3, description4, title3, description5 } = blogDetails;

    return (
        <>
            <div style={{
                backgroundImage: "url(https://i.ibb.co/WGV9tQw/Background-2.png)",
            }}
                className='lg:h-[580px]'>
                <Navbar />
                <div className='lg:h-[300px] lg:w-[1000px] mx-auto max-sm:p-6 lg:pt-28'>
                    <div className='text-center lg:space-y-5 space-y-3'>
                        <time className='text-[16px] font-semibold text-[#2B5BFD]' dateTime={date}>{date}</time>
                        <h1 className="md:text-[64px] leading-[70px] font-semibold dark:text-violet-600 ">{title1}</h1>
                        <div className='space-x-4'>

                            <Navlink href="/" activeClassName="text-[16px] font-semibold" nonActiveClassName="font-normal" className="">
                                Home
                            </Navlink>
                            <span className="font-semibold">/</span>
                            <Navlink href="/blog" activeClassName="text-[16px] font-semibold" nonActiveClassName="font-normal" className="">
                                Blog Classic
                            </Navlink>
                            <span className="font-semibold">/</span>
                            <Navlink href="/blog/id" activeClassName="text-[16px] font-semibold" nonActiveClassName="font-normal" className="text-[16px] font-semibold">
                                Blog Classic Details
                            </Navlink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second section */}
            <div className="md:flex justify-center gap-16 md:max-w-[1326px] mx-auto md:mt-12 mt-6 lg:py-12 max-sm:p-4">
                <div className="relative lg:w-[856px] dark:bg-gray-50 dark:text-gray-800">
                    <div className="space-y-8">
                        <div className="w-full h-auto relative mt-5" style={{ aspectRatio: '1296 / 700' }}>
                            <Image
                                src={image1}
                                layout="fill"
                                objectFit="cover"
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="space-y-5 md:pb-10">
                            <p>{description1}</p>
                            <p>{description2}</p>
                        </div>
                        <div className='flex justify-start items-center gap-2 bg-[#f2f6ff] p-5'>
                            <Image
                                src='https://i.ibb.co/M64Rprr/double-quotes-3.png'
                                width={60}
                                height={64}
                                alt="Picture of the author"
                            />
                            <h1 className='text-[20px] font-semibold italic'>{complexsentence.slice(0, 150)}</h1>
                        </div>
                        <div className='space-y-8'>
                            <h1 className='text-[28px] font-bold'>{title2}</h1>
                            <p>{description3}</p>
                            <p>{description4}</p>
                            <div className="w-full h-auto relative mt-5" style={{ aspectRatio: '1296 / 700' }}>
                                <Image
                                    src='https://i.ibb.co/rp3Ksft/Image-8.png'
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className='space-y-4'>
                                <h1 className='text-[28px] font-bold'>{title3}</h1>
                                <p>{description5}</p>
                                <p>{description5}</p>
                                <div className="space-x-2 max-sm:space-y-2">
                                    <button className="h-10 w-24 hover:bg-[#005294] hover:text-white font-normal text-[16px] text-[#1D2939] bg-[#f2f6ff] px-2 py-2 rounded-none">Learning</button>
                                    <button className="h-10 w-[118px] hover:bg-[#005294] hover:text-white font-normal text-[16px] text-[#1D2939] bg-[#f2f6ff] py-2 rounded-none">Mind-Blowing</button>
                                    <button className="h-10 w-[108px] hover:bg-[#005294] hover:text-white font-normal text-[16px] text-[#1D2939] bg-[#f2f6ff] py-2 rounded-none">Technology</button>
                                    <button className="h-10 w-[95px] hover:bg-[#005294] hover:text-white font-normal text-[16px] text-[#1D2939] bg-[#f2f6ff] py-2 rounded-none">Software</button>
                                </div>
                            </div>
                        </div>
                        <hr className='border border-gray-100' />
                        <div>
                            <Comment />
                        </div>
                    </div>
                </div>
                {/* Sidebar */}
                <BlogSideBar handleSearch={function (): void {
                    throw new Error('Function not implemented.');
                }} />
            </div>
        </>
    );
};

export default Page;
