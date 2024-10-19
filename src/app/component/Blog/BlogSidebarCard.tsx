import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


interface BlogSidebarCardProps {
    item: {
        _id: string;
        image1: string;
        title1: string;
    };
}
const BlogSidebarCard: React.FC<BlogSidebarCardProps> = ({ item }) => {
    return (
        <div className="flex justify-start gap-2  hover:text-[#005294]">
            <Image

                src={item.image1}
                width={90}
                height={80}
                alt="Picture of the author"
            />
            <Link className=" lg:w-[250px] lg:h-[80px]" href={`/blog/${item._id}`}>
                <div className="space-y-1 p-3">

                    <h1 className="text-[14px] font-bold">{item.title1.slice(0, 50)}</h1>
                    <p className="text-[10px] font-semibold text-[#2B5BFD]"> Marketing</p>

                </div>
            </Link>
        </div>
    );
};

export default BlogSidebarCard;