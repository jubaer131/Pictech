import React, { useEffect, useState } from 'react';
import BlogSidebarCard from './BlogSidebarCard';

const BlogSideBar = ({ handleSearch, }) => {

    const [postSidebar, setpostSidebar] = useState([])


    interface BlogPost {
        _id: string;
        date: string;
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

    useEffect(() => {
        fetch(`https://next-and-typescript-server.vercel.app/detail`)
            .then(res => res.json())
            .then(data => {
                setpostSidebar(data);

            });
    }, []);
    return (
        <div className="relative lg:w-[370px] pt-5">

            <div className="space-y-2 ">
                <h2 className='text-[20px] font-bold '>Search</h2>
                <form onSubmit={handleSearch} className="input input-bordered flex items-center gap-2">
                    <input type="text" name='search' className="grow" placeholder="Search" />
                    <button type="submit" >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                </form>

            </div>
            <div className="mt-5  space-y-6">
                <div>

                    <h2 className='text-[20px] font-bold'>Categories</h2>
                </div>
                <div className='space-y-3'>
                    <div className='flex items-center gap-4'>
                        <h5 className="text-sm font-normal text-[#60687A]">Guides </h5>
                        <span className="text-sm font-semibold">(2)</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <h5 className="text-sm font-normal text-[#60687A]">Fintech</h5>
                        <span className="text-sm font-semibold">(1)</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <h5 className="text-sm font-normal text-[#60687A]">Marketing</h5>
                        <span className="text-sm font-semibold">(1)</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <h5 className="text-sm font-normal text-[#60687A]">Software</h5>
                        <span className="text-sm font-semibold">(3)</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <h5 className="text-sm font-normal text-[#60687A]">Business</h5>
                        <span className="text-sm font-semibold">(5)</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <h5 className="text-sm font-normal text-[#60687A]">Technology</h5>
                        <span className="text-sm font-semibold">(1)</span>
                    </div>
                </div>
            </div>

            <div className=" py-5 space-y-4 mt-4 ">
                <div>
                    <h1 className="md:text-[20px] font-bold ">Recent posts</h1>
                </div>
                {
                    postSidebar?.slice(0, 3).map((item, index) => (
                        <BlogSidebarCard key={index} item={item}></BlogSidebarCard>
                    ))
                }

            </div>
            <div className="">
                <div className="mt-12">
                    <h1 className="text-[20px] font-bold ">Popular Tags</h1>
                </div>
                <div className="space-y-2 pt-4  ">
                    <div className="space-x-2 max-sm:space-y-2">
                        <button className="h-10 w-20 hover:bg-[#005294] hover:text-white font-normal text-[16px] text-[#1D2939] bg-[#f2f6ff]  px-5 py-2  rounded-none">Havits </button>
                        <button className="h-10 w-[98px] hover:bg-[#005294] hover:text-white font-normal text-[16px] text-[#1D2939]  bg-[#f2f6ff]  px-5 py-2  rounded-none">Interface</button>
                        <button className="h-10 w-24 hover:bg-[#005294] hover:text-white font-normal text-[16px] text-[#1D2939]  bg-[#f2f6ff]  px-2 py-2  rounded-none">Learning</button>
                    </div>
                    <div className="space-x-2 max-sm:space-y-2">

                        <button className="h-10 w-[118px] hover:bg-[#005294] hover:text-white font-normal text-[16px] text-[#1D2939]  bg-[#f2f6ff]   py-2  rounded-none">Mind-Blowing</button>
                        <button className="h-10 w-[108px] hover:bg-[#005294] hover:text-white font-normal text-[16px] text-[#1D2939]  bg-[#f2f6ff]   py-2  rounded-none">Technology</button>
                        <button className="h-10 w-[95px] hover:bg-[#005294] hover:text-white font-normal text-[16px] text-[#1D2939]  bg-[#f2f6ff]  py-2  rounded-none">Software</button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default BlogSideBar;