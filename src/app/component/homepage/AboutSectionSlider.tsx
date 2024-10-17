
"use client"
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { LiaStarSolid } from "react-icons/lia";

const reviews = [
    {
        logo: "https://i.ibb.co/rckpwZr/Logo-2.png",
        rating: 4,
        text: "“Amazing service. Excellent customer service and the work on behalf my work colleague Kirti S. from Wing is top notch. I’ve enjoyed the help and the genuine personality and willingness to learn. Also a big call out to Maryann U. my customer success manager.”",
        authorImage: "https://i.ibb.co/3FhMxn7/Image-4.png",
        authorName: "Leroy Jenkins",
        authorTitle: "Co-Founder & CEO, Living Spec",
    },
    {
        logo: "https://i.ibb.co/0tgm4JS/Logo-4.png",
        rating: 4,
        text: "“Amazing service. Excellent customer service and the work on behalf my work colleague Kirti S. from Wing is top notch. I’ve enjoyed the help and the genuine personality and willingness to learn. Also a big call out to Maryann U. my customer success manager.”",
        authorImage: "https://i.ibb.co/fMV3PMh/Image-5.png",
        authorName: "Leroy Jenkins",
        authorTitle: "Co-Founder & CEO, Living Spec",
    },
    {
        logo: "https://i.ibb.co/VgQgYNx/Logo-5.png",
        rating: 4,
        text: "“Amazing service. Excellent customer service and the work on behalf my work colleague Kirti S. from Wing is top notch. I’ve enjoyed the help and the genuine personality and willingness to learn. Also a big call out to Maryann U. my customer success manager.”",
        authorImage: "https://i.ibb.co/RNGJhv3/Image-6.png",
        authorName: "Leroy Jenkins",
        authorTitle: "Co-Founder & CEO, Living Spec",
    },
    {
        logo: "https://i.ibb.co/VgQgYNx/Logo-5.png",
        rating: 4,
        text: "“Amazing service. Excellent customer service and the work on behalf my work colleague Kirti S. from Wing is top notch. I’ve enjoyed the help and the genuine personality and willingness to learn. Also a big call out to Maryann U. my customer success manager.”",
        authorImage: "https://i.ibb.co/RNGJhv3/Image-6.png",
        authorName: "Leroy Jenkins",
        authorTitle: "Co-Founder & CEO, Living Spec",
    },
    {
        logo: "https://i.ibb.co/VgQgYNx/Logo-5.png",
        rating: 4,
        text: "“Amazing service. Excellent customer service and the work on behalf my work colleague Kirti S. from Wing is top notch. I’ve enjoyed the help and the genuine personality and willingness to learn. Also a big call out to Maryann U. my customer success manager.”",
        authorImage: "https://i.ibb.co/RNGJhv3/Image-6.png",
        authorName: "Leroy Jenkins",
        authorTitle: "Co-Founder & CEO, Living Spec",
    },

];

const AboutSectionSlider: React.FC = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: { origin: "center", perView: 4.38, spacing: 0 },
        range: {
            min: -5,
            max: 5,
        },
    })

    return (
        <>
            <div className="text-center lg:pb-20 ">
                <h1 className="lg:text-5xl text-4xl font-bold">Don't just take our word for it</h1>
            </div>
            <div ref={sliderRef} className="keen-slider">
                {reviews.map((review, index) => (
                    <div key={index} className="keen-slider__slide number-slide2">
                        <div className="container flex flex-col  w-[416px] h-[458px]  py-12 px-12 m-0 rounded-md bg-white">
                            <div className="flex justify-between ">
                                <div>
                                    <Image
                                        src={review.logo}
                                        width={76}
                                        height={28}
                                        alt="Clutch"
                                    />
                                </div>
                                <div className="flex items-center space-x-2 dark:text-yellow-700">
                                    {[...Array(review.rating)].map((_, starIndex) => (
                                        <LiaStarSolid key={starIndex} size={18} color="orange" />
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2 text-sm dark:text-gray-600 mt-6 py-2">
                                <p className="font-normal text-[18px] leading-7">{review.text}</p>
                            </div>
                            <div className="flex space-x-4 mt-12">
                                <div>
                                    <Image
                                        className="rounded-full"
                                        src={review.authorImage}
                                        width={48}
                                        height={48}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold">{review.authorName}</h4>
                                    <p className="text-sm">{review.authorTitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AboutSectionSlider;
