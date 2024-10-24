import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface ProtfolioItem {
    _id: string;
    image: string;
    title: string;
    typeOfBusiness: string;
}

// Define the props interface that expects the item object
interface ProtfolioDetailsProps {
    item: ProtfolioItem;
}

const ProtfolioDetails: React.FC<ProtfolioDetailsProps> = ({ item }) => {
    return (
        <Link href={`/protfolio/${item._id}`} className='pb-6'>
            <div className=" dark:bg-gray-50 dark:text-gray-800">
                <Image

                    src={item.image}
                    width={636}
                    height={666}
                    alt="Picture of the author"
                />
                <div className="flex flex-col justify-between py-5 ">
                    <div className="space-y-2">
                        <h2 className="text-[28px] font-bold ">{item.title}</h2>
                        <p className="dark:text-gray-800">{item.typeOfBusiness}</p>
                    </div>


                </div>
            </div>
        </Link>
    );
};

export default ProtfolioDetails;