"use client"
import Navbar from '@/app/component/share/Navbar';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navlink from '@/app/component/share/Navlink';
import { ClockLoader } from 'react-spinners';



// Define the expected type for params
interface PageProps {
    params: {
        detailsId: string;
    };
}


interface PortfolioItem {
    _id: string;
    title: string;
    src: string;
    image: string;
    description: string;
    description1?: string;
    typeOfBusiness: string;
    relatedPictures3?: string[];
    problems?: string;
    challenges?: string;
    ourSolution?: string;
}


const Page: React.FC<PageProps> = ({ params }) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Portfolio, setPortfolio] = useState<PortfolioItem[]>([])

    useEffect(() => {
        fetch("https://next-and-typescript-server.vercel.app/saaspicprotfolio")
            .then(res => res.json())
            .then((data: PortfolioItem[]) => {
                console.log(data)
                setPortfolio(data)
            })
            .catch(error => console.error("Error fetching portfolio:", error));
    }, [])

    const { detailsId } = params

    const findprotfolio = Portfolio.find(product => product._id === detailsId);




    if (!findprotfolio) {
        return <div className="w-full h-[660px] flex items-center justify-center"><ClockLoader color="orange" size={150} />  </div>
    }


    return (
        <>

            <div style={{
                backgroundImage: "url(https://i.ibb.co.com/WGV9tQw/Background-2.png)",
            }}
                className='lg:h-[580px]'>
                <Navbar></Navbar>
                <div className='lg:h-[300px] lg:w-[1000px] mx-auto max-sm:p-6 lg:pt-28'>
                    <div className='text-center lg:space-y-5 space-y-3'>
                        <h1 className='lg:text-6xl text-2xl font-semibold'>Startup financial model</h1>
                        <p className='lg:text-[18px] font-normal'>Work the way you want using task management software that helps you organize <br /> tasks, delegate work, track progress and communicate.</p>
                        <div className='space-x-4 '>


                            <Navlink href="/" activeClassName="text-[16px] font-semibold" nonActiveClassName="font-normal" className="">
                                Home
                            </Navlink>
                            <span className="font-semibold">/</span>
                            <Navlink href="/protfolio" activeClassName="text-[16px] font-semibold" nonActiveClassName="font-normal" className="">
                                Portfolio
                            </Navlink>
                            <span className="font-semibold">/</span>
                            <Navlink href="" activeClassName="text-[16px] font-semibold" nonActiveClassName="font-normal" className="text-[16px] font-semibold">
                                Portfolio Details
                            </Navlink>
                        </div>
                    </div>
                </div>
            </div>


            <div className='lg:w-[1297px] mx-auto lg:mt-16 mt-5 lg:py-10'>
                <div className="w-full h-auto relative" style={{ aspectRatio: '1296 / 700' }}>
                    <Image
                        src={findprotfolio?.image}
                        layout="fill"
                        objectFit="cover"
                        alt="Picture of the author"

                    />
                </div>


                <div className='lg:w-[1048px] mx-auto lg:my-10  space-y-10 max-sm:p-6'>
                    <div className='space-y-10 lg:mb-28'>
                        <h1 className='text-[48px] font-bold  pt-12'>About Project</h1>
                        <p className='text-[20px]'>{findprotfolio?.description}</p>
                        <p className='text-[20px]'>{findprotfolio?.description1}</p>
                        <button className='text-[16px]  rounded-none border-b-2 border-[#1c1c1d] pb-2 '>Visit Website</button>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center pt-6'>
                        <div className='lg:w-[282px]'>
                            <h5 className='lg:text-[20px] font-normal text-[#7D7D82]'>Client:</h5>
                            <h2 className='lg:text-[26px] lg:font-semibold font-medium'>Stuart Watkins</h2>
                        </div>
                        <div className='lg:w-[282px]'>
                            <h5 className='lg:text-[20px] font-normal text-[#7D7D82]'>Industry:</h5>
                            <h2 className='lg:text-[26px] lg:font-semibold font-medium'>Sass & Software</h2>
                        </div>
                        <div className='lg:w-[282px]'>
                            <h5 className='lg:text-[20px] font-normal text-[#7D7D82]'>Timeline:</h5>
                            <h2 className='lg:text-[26px] lg:font-semibold font-medium'>3 Months</h2>
                        </div>
                    </div>
                </div>
                <div className='lg:flex justify-between items-center lg:pt-20 pt-10 '>

                    {
                        findprotfolio?.relatedPictures3?.map((item, index) => (
                            <Image
                                key={index}
                                src={item}
                                width={638}
                                height={520}
                                alt="Picture of the author"
                                className='lg:w-[638px] lg:h-[540px]'

                            />
                        ))
                    }
                </div>
                <div className="w-full h-auto relative mt-5" style={{ aspectRatio: '1296 / 700' }}>
                    <Image
                        src={findprotfolio?.image}
                        layout="fill"
                        objectFit="cover"
                        alt="Picture of the author"

                    />
                </div>
                <div className='lg:w-[1048px]  mx-auto lg:space-y-16 space-y-8 lg:py-32 py-16 max-sm:p-6'>
                    <div>
                        <h1 className='text-[42px] font-bold lg:pb-4'>Problems</h1>
                        <p className='text-[20px] font-normal '>{findprotfolio?.problems?.slice(0, 600)}</p>
                    </div>
                    <div>
                        <h1 className='text-[42px] font-bold lg:pb-4'>Challanges</h1>
                        <p className='text-[20px] font-normal'>{findprotfolio?.challenges?.slice(0, 500)}</p>
                    </div>
                    <div>
                        <h1 className='text-[42px] font-bold lg:pb-4'>Our Solutions</h1>
                        <p className='text-[20px] font-normal'>{findprotfolio?.ourSolution?.slice(0, 400)}</p>
                    </div>
                </div>

            </div>



            {/* third section */}
            <div className='bg-[#f8f9fc]  lg:py-32 py-16'>
                <div className='lg:w-[1290px] mx-auto'>
                    <h1 className='text-5xl font-bold text-center pb-10'>Related Projects</h1>

                    <div className='flex justify-between items-start gap-3 max-sm:p-3'>
                        {
                            Portfolio.slice(0, 2).map((item) => (

                                <Link key={item._id} href={`/protfolio/${item._id}`}>
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


                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;