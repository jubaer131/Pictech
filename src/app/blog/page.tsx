"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../component/share/Navbar';
import BlogCard from '../component/Blog/BlogCard';
import BlogSideBar from '../component/Blog/BlogSideBar';
import { ClockLoader } from 'react-spinners';
import Navlink from '../component/share/Navlink';

// Define the interface for blog details
interface BlogDetails {
    _id: string;
    title: string;
    content: string;
    image1: string;
    date: string;
    title1: string;
    description1: string;


}



interface PaginationCount {
    count: number;
}

const Page: React.FC = () => {
    const [blogDetails, setBlogDetails] = useState<BlogDetails[]>([]);  // State for blog details with the correct type
    const [search, setSearch] = useState<string>('');  // State for search input
    const [itemsPerPage] = useState<number>(5);  // State for items per page
    const [count, setCount] = useState<number>(1);  // State for total number of items
    const [currentPage, setCurrentPage] = useState<number>(1);  // State for current page
    const [loading, setLoading] = useState<boolean>(false);  // State for loading

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()].map((item) => item + 1);

    // Fetch blog posts based on search, current page, and items per page
    useEffect(() => {
        const fetchBlogPosts = async () => {
            setLoading(true);  // Set loading to true when fetching starts
            try {
                const response = await fetch(`https://next-and-typescript-server.vercel.app/allpost?search=${search}&page=${currentPage}&size=${itemsPerPage}`);
                const data: BlogDetails[] = await response.json();
                setBlogDetails(data);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            } finally {
                setLoading(false);  // Set loading to false when fetching ends
            }
        };
        fetchBlogPosts();
    }, [search, currentPage, itemsPerPage, loading]);




    useEffect(() => {
        const fetchPaginationCount = async () => {
            try {
                const response = await fetch('https://next-and-typescript-server.vercel.app/paginationcount');
                const data: PaginationCount = await response.json();
                setCount(data.count);
            } catch (error) {
                console.error("Error fetching pagination count:", error);
            }
        };
        fetchPaginationCount();
    }, []);




    const handleSearch = (e: React.FormEvent<Element>) => {
        e.preventDefault();
        const text = (e.target as HTMLFormElement).search.value;
        setSearch(text);
    };




    // Handle pagination button click
    const handleBtn = (value: number) => {
        setCurrentPage(value);
    };

    // Handle next button click
    const handleNext = () => {
        if (currentPage < numberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    };



    if (loading) return <div className="w-full h-[660px] flex items-center justify-center"><ClockLoader color="orange" size={200} />  </div>

    return (
        <>


            <div
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/WGV9tQw/Background-2.png)",
                }}
                className='lg:h-[580px]'
            >
                <Navbar />
                <div className='lg:h-[300px] lg:w-[1000px] mx-auto max-sm:p-6 lg:pt-28'>
                    <div className='text-center lg:space-y-5 space-y-3'>
                        <h1 className='lg:text-6xl text-2xl font-semibold'>Blog Classic</h1>
                        <p className='lg:text-[18px] font-normal'>
                            Work the way you want using task management software that helps you organize
                            <br /> tasks, delegate work, track progress and communicate.
                        </p>
                        <div className='space-x-4 '>

                            <Navlink href="/" activeClassName="text-[16px] font-semibold" nonActiveClassName="font-normal" className="">
                                Home
                            </Navlink>
                            <span className="font-semibold">/</span>
                            <Navlink href="/blog" activeClassName="text-[16px] font-semibold" nonActiveClassName="font-normal" className="">
                                Blog Classic
                            </Navlink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog and Pagination Section */}

            <div className="md:flex justify-center lg:gap-16 md:max-w-[1326px] mx-auto md:mt-12 lg:mt-6 pb-24 lg:pt-12 max-sm:p-4">
                <div className="grid grid-cols-1 gap-4">
                    {/* Show loading indicator when fetching data */}
                    {loading ? (
                        <div className="w-full h-[660px] flex items-center justify-center"><ClockLoader color="orange" size={200} />  </div>
                    ) : (
                        blogDetails.map(item => (
                            <BlogCard key={item._id} item={item} />
                        ))
                    )}

                    {/* Pagination buttons */}
                    <div className="flex justify-start space-x-1 dark:text-gray-800 mb-8">
                        {pages.map(btnNum => (
                            <button
                                onClick={() => handleBtn(btnNum)}
                                key={btnNum}
                                className={`${currentPage === btnNum
                                    ? 'bg-orange-400 text-gray-900 border'
                                    : 'border bg-white text-gray-900'
                                    } px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline hover:bg-orange-700 hover:text-white`}
                            >
                                {btnNum}
                            </button>
                        ))}

                        {/* Next button */}
                        <button
                            disabled={currentPage === numberOfPages}
                            onClick={handleNext}
                            type="button"
                            className="inline-flex items-center justify-center p-3 w-10 h-10 text-sm border rounded dark:bg-gray-50 dark:border-gray-100"
                            title="Next Page"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4"
                            >
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Blog Sidebar */}
                <div className="relative lg:w-[370px]">
                    <BlogSideBar handleSearch={handleSearch} />
                </div>
            </div>




        </>
    );
};

export default Page;
