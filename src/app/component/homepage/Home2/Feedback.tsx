
"use client"

import { useEffect, useRef, useState } from "react";
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";



interface Recommendation {
    logo: string;
    rating: number;
    text: string;
    authorImage: string;
    authorName: string;
    authorTitle: string;
}


const recommendations: Recommendation[] = [
    {
        logo: "https://i.ibb.co.com/FXYKzDv/Image-20.png",
        rating: 5,
        text: "“Amazing service. Excellent customer service and the work on behalf my work colleague Kirti S. from Wing is top notch. I’ve enjoyed the help and the genuine personality and willingness to learn. Also a big call out to Maryann U. my customer success manager.”",
        authorImage: "https://i.ibb.co/3FhMxn7/Image-4.png",
        authorName: "Orlando Diggs",
        authorTitle: "CEO & Founding Partner",
    },
    {
        logo: "https://i.ibb.co.com/hLvtWY8/Image-21.png",
        rating: 5,
        text: "“Amazing service. Excellent customer service and the work on behalf my work colleague Kirti S. from Wing is top notch. I’ve enjoyed the help and the genuine personality and willingness to learn. Also a big call out to Maryann U. my customer success manager.”",
        authorImage: "https://i.ibb.co/fMV3PMh/Image-5.png",
        authorName: "Riley O'Moore",
        authorTitle: "CEO & Founding Partner",
    },
    {
        logo: "https://i.ibb.co.com/BgwZ1gT/Image-22.png",
        rating: 5,
        text: "“Amazing service. Excellent customer service and the work on behalf my work colleague Kirti S. from Wing is top notch. I’ve enjoyed the help and the genuine personality and willingness to learn. Also a big call out to Maryann U. my customer success manager.”",
        authorImage: "https://i.ibb.co/RNGJhv3/Image-6.png",
        authorName: "Cameron Yang",
        authorTitle: "CEO & Founding Partner",
    },
];

const Feedback = () => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [slider, setSlider] = useState<KeenSliderInstance | null>(null);

    useEffect(() => {
        if (!sliderRef.current || recommendations.length === 0) return;

        const newSlider = new KeenSlider(sliderRef.current, {
            loop: true,
            slides: {
                origin: "auto",
                perView: 2.74,
                spacing: 10,
            },
            breakpoints: {
                "(min-width: 1024px)": {
                    slides: {
                        origin: "auto",
                        perView: 2.74,
                        spacing: 12,
                    },
                },
            },
        });

        setSlider(newSlider);

        return () => {
            newSlider.destroy();
        };
    }, []);

    const handlePrevClick = () => {
        if (slider) {
            slider.prev();
        }
    };

    const handleNextClick = () => {
        if (slider) {
            slider.next();
        }
    };

    return (
        <section className="lg:ml-56 ">
            <div className="px-4  sm:px-6 lg:px-8">
                <div className='space-y-3 text-center lg:pr-[20rem] mb-5 p-4'>
                    <h1 className='lg:text-6xl max-sm:text-3xl font-semibold text-white'> Client’s Feedback </h1>
                    <p className='text-[20px] font-normal  text-white'> 200+ Trusted Clients</p>
                </div>

                <div className="mt-8 sm:mt-12  flex flex-col lg:flex-row gap-5 text-gray-800">


                    <div ref={sliderRef} className="keen-slider ">
                        {recommendations.map((item, index) => (
                            <div key={index} className="keen-slider__slide ">
                                <blockquote className="flex lg:w-[560px] lg:h-[452px] flex-col lg:gap-y-6   lg:p-14 bg-white   rounded-[7px]">

                                    <footer className="mt-2 text-sm flex gap-3 max-sm:pt-5">

                                        <span className="text-[#fb6511] text-[24px]"> <IoIosStar /></span>
                                        <span className="text-[#fb6511] text-[24px]"> <IoIosStar /></span>
                                        <span className="text-[#fb6511] text-[24px]"> <IoIosStar /></span>
                                        <span className="text-[#fb6511] text-[24px] "> <IoIosStar /></span>
                                        <span className="text-[#fb6511] text-[24px] max-sm: hidden"> <IoIosStar /></span>
                                    </footer>
                                    <div className="space-y-6">

                                        <p className="mt-2 lg:text-[20px] font-medium leading-relaxed max-sm:p-2">{item.text}</p>


                                        <div className="flex gap-3">

                                            <Image
                                                src={item.logo}
                                                width={48}
                                                height={48}
                                                alt="Picture of the author"
                                                className="rounded-full"
                                            />


                                            <div>
                                                <p className="lg:text-2xl font-bold">{item.authorName}</p>
                                                <p className="lg:font-semibold">{item.authorTitle}</p>
                                            </div>
                                        </div>



                                    </div>

                                </blockquote>
                            </div>
                        ))}
                    </div>

                    <div className="flex lg:hidden justify-center gap-3 mt-8  ">
                        <button
                            id="keen-slider-previous"
                            className="p-3 border border-white rounded-full bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] text-white"
                            onClick={handlePrevClick}
                        >
                            <IoIosArrowBack />
                        </button>
                        <button
                            id="keen-slider-next"
                            className="p-3 border border-white rounded-full bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] text-white"
                            onClick={handleNextClick}
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div >


                {/* for large*/}
                < div className="hidden lg:flex justify-center gap-3 mt-8 pr-[334px]">
                    <button
                        id="keen-slider-previous-desktop"
                        className="p-3 border border-white rounded-full  text-white"
                        onClick={handlePrevClick}
                    >
                        <IoIosArrowBack />
                    </button>
                    <button
                        id="keen-slider-next-desktop"
                        className="p-3 border border-white rounded-full  text-white"
                        onClick={handleNextClick}
                    >
                        <IoIosArrowForward />
                    </button>
                </div >

            </div >
        </section >
    );
};

export default Feedback;
