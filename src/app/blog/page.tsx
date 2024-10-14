"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Navbar from '../component/share/Navbar';
import BlogCard from '../component/Blog/BlogCard';
import BlogSideBar from '../component/Blog/BlogSideBar';

// Define the interface for blog details
interface BlogDetails {
    _id: string;
    title: string;
    content: string;
    // Add other properties as needed from your blog details
}

// Define the response structure for pagination count
interface PaginationCount {
    count: number;
}

const Page: React.FC = () => {
    const [blogDetails, setBlogDetails] = useState<BlogDetails[]>([]);  // State for blog details with the correct type
    const [search, setSearch] = useState<string>('');  // State for search input
    const [itemsPerPage, setItemsPerPage] = useState<number>(5);  // State for items per page
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
                const response = await fetch(`http://localhost:8000/blogpost?search=${search}&page=${currentPage}&size=${itemsPerPage}`);
                const data: BlogDetails[] = await response.json();
                setBlogDetails(data);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            } finally {
                setLoading(false);  // Set loading to false when fetching ends
            }
        };
        fetchBlogPosts();
    }, [search, currentPage, itemsPerPage]);



    // Fetch the total count of blog posts
    useEffect(() => {
        const fetchPaginationCount = async () => {
            try {
                const response = await fetch('http://localhost:8000/paginationcount');
                const data: PaginationCount = await response.json();
                setCount(data.count);
            } catch (error) {
                console.error("Error fetching pagination count:", error);
            }
        };
        fetchPaginationCount();
    }, []);


    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.search.value;
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
                            <Link href="/">Home</Link><span className='font-semibold'>/</span>
                            <Link className='font-semibold' href="/service">Blog Classic</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog and Pagination Section */}
            <div className="md:flex justify-center gap-5 md:max-w-7xl mx-auto md:mt-12 mt-6">
                <div className="grid grid-cols-1 gap-4">
                    {/* Show loading indicator when fetching data */}
                    {loading ? (
                        <div className="text-center">Loading...</div>
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