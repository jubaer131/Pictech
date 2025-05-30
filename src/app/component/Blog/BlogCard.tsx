import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface BlogCardProps {
    item: {
        _id: string;
        image1: string;
        date: string;
        title1: string;
        description1: string;

    };
}


const BlogCard: React.FC<BlogCardProps> = ({ item }) => {
    return (
        <div className="relative lg:w-[856px] dark:bg-gray-50 dark:text-gray-800  ">

            <div className="space-y-8">

                <div className="w-full h-auto relative mt-5" style={{ aspectRatio: '1296 / 700' }}>
                    <Image
                        src={item.image1}
                        layout="fill"
                        objectFit="cover"
                        alt="Picture of the author"
                    />
                </div>
                <div className="space-y-5  md:pb-10  ">
                    <time className=' text-[16px] font-semibold text-[#2B5BFD] ' dateTime="2024-10-12">{item.date}</time>

                    <h3 className="md:text-4xl font-bold dark:text-violet-600 ">{item.title1}</h3>

                    <p className="leading-snug dark:text-gray-600 text-[15px]">{item.description1.slice(0, 300)} </p>
                    <Link href={`/blog/${item._id}`} ><button className='text-[16px]  rounded-none border-b-2 border-[#47484b] pb-2 py-8'>Visit Website</button></Link>

                </div>
            </div>
        </div >

    );
};

export default BlogCard;