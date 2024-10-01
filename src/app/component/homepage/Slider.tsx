


"use client"
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { LiaStarSolid } from "react-icons/lia";

const Slider: React.FC = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: { origin: "center", perView: 4.20, spacing: 0 },
        range: {
            min: -5,
            max: 5,
        },
    })

    return (
        <>
            <div className="text-center lg:py-20 lg:mt-20">
                <h1 className="text-4xl font-bold">Don't just take our word for it</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br /> industry's standard dummy text ever since the 1500s</p>
            </div>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide2 ">
                    <div className="container flex flex-col w-[420px] h-[418px]  p-6 m-0  rounded-md bg-white">
                        <div className="flex justify-between ">
                            <div>
                                <Image

                                    src="https://i.ibb.co.com/rckpwZr/Logo-2.png"
                                    width={76}
                                    height={28}
                                    alt="Clutch"
                                />
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                            </div>
                        </div>
                        <div className=" space-y-2 text-sm dark:text-gray-600 mt-6 py-2">
                            <p className="font-normal text-[18px] leading-7">“Amazing service. Excellent customer service and the work on behalf my work colleague Kirti S. from Wing is top notch. I’ve enjoyed the help and the genuine personality and willingness to learn. Also a big call out to Maryann U. my customer success manager.”</p>

                        </div>
                        <div className="flex space-x-4 mt-12">
                            <div>
                                <Image
                                    className="rounded-full"
                                    src="https://i.ibb.co.com/t4h0tpS/Image.png"
                                    width={48}
                                    height={48}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <p className="text-sm">Co-Founder & CEO, Living Spec </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide2">
                    <div className="container flex flex-col w-[420px] h-[418px]  p-6 m-0  rounded-md bg-white">
                        <div className="flex justify-between ">
                            <div>
                                <Image

                                    src="https://i.ibb.co.com/rckpwZr/Logo-2.png"
                                    width={76}
                                    height={28}
                                    alt="Clutch"
                                />
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                            </div>
                        </div>
                        <div className=" space-y-2 text-sm dark:text-gray-600 mt-6 py-2">
                            <p className="font-normal text-[18px] leading-7">“Amazing service. Excellent customer service and the work on behalf my work colleague Kirti S. from Wing is top notch. I’ve enjoyed the help and the genuine personality and willingness to learn. Also a big call out to Maryann U. my customer success manager.”</p>

                        </div>
                        <div className="flex space-x-4 mt-12">
                            <div>
                                <Image
                                    className="rounded-full"
                                    src="https://i.ibb.co.com/t4h0tpS/Image.png"
                                    width={48}
                                    height={48}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <p className="text-sm">Co-Founder & CEO, Living Spec </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide2">
                    <div className="container flex flex-col w-[420px] h-[418px]  p-6 m-0  rounded-md bg-white">
                        <div className="flex justify-between ">
                            <div>
                                <Image

                                    src="https://i.ibb.co.com/rckpwZr/Logo-2.png"
                                    width={76}
                                    height={28}
                                    alt="Clutch"
                                />
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                            </div>
                        </div>
                        <div className=" space-y-2 text-sm dark:text-gray-600 mt-6 py-2">
                            <p className="font-normal text-[18px] leading-7">“Amazing service. Excellent customer service and the work on behalf my work colleague Kirti S. from Wing is top notch. I’ve enjoyed the help and the genuine personality and willingness to learn. Also a big call out to Maryann U. my customer success manager.”</p>

                        </div>
                        <div className="flex space-x-4 mt-12">
                            <div>
                                <Image
                                    className="rounded-full"
                                    src="https://i.ibb.co.com/t4h0tpS/Image.png"
                                    width={48}
                                    height={48}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <p className="text-sm">Co-Founder & CEO, Living Spec </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide2">
                    <div className="container flex flex-col w-[420px] h-[418px]  p-6 m-0  rounded-md bg-white">
                        <div className="flex justify-between ">
                            <div>
                                <Image

                                    src="https://i.ibb.co.com/rckpwZr/Logo-2.png"
                                    width={76}
                                    height={28}
                                    alt="Clutch"
                                />
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                            </div>
                        </div>
                        <div className=" space-y-2 text-sm dark:text-gray-600 mt-6 py-2">
                            <p className="font-normal text-[18px] leading-7">“Amazing service. Excellent customer service and the work on behalf my work colleague Kirti S. from Wing is top notch. I’ve enjoyed the help and the genuine personality and willingness to learn. Also a big call out to Maryann U. my customer success manager.”</p>

                        </div>
                        <div className="flex space-x-4 mt-12">
                            <div>
                                <Image
                                    className="rounded-full"
                                    src="https://i.ibb.co.com/t4h0tpS/Image.png"
                                    width={48}
                                    height={48}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <p className="text-sm">Co-Founder & CEO, Living Spec </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide2">
                    <div className="container flex flex-col w-[420px] h-[418px]  p-6 m-0  rounded-md bg-white">
                        <div className="flex justify-between ">
                            <div>
                                <Image

                                    src="https://i.ibb.co.com/rckpwZr/Logo-2.png"
                                    width={76}
                                    height={28}
                                    alt="Clutch"
                                />
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                            </div>
                        </div>
                        <div className=" space-y-2 text-sm dark:text-gray-600 mt-6 py-2">
                            <p className="font-normal text-[18px] leading-7">“Amazing service. Excellent customer service and the work on behalf my work colleague Kirti S. from Wing is top notch. I’ve enjoyed the help and the genuine personality and willingness to learn. Also a big call out to Maryann U. my customer success manager.”</p>

                        </div>
                        <div className="flex space-x-4 mt-12">
                            <div>
                                <Image
                                    className="rounded-full"
                                    src="https://i.ibb.co.com/t4h0tpS/Image.png"
                                    width={48}
                                    height={48}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <p className="text-sm">Co-Founder & CEO, Living Spec </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide2">
                    <div className="container flex flex-col w-[420px] h-[418px]  p-6 m-0  rounded-md bg-white">
                        <div className="flex justify-between ">
                            <div>
                                <Image

                                    src="https://i.ibb.co.com/rckpwZr/Logo-2.png"
                                    width={76}
                                    height={28}
                                    alt="Clutch"
                                />
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                                <LiaStarSolid size={18} color="orange" />
                            </div>
                        </div>
                        <div className=" space-y-2 text-sm dark:text-gray-600 mt-6 py-2">
                            <p className="font-normal text-[18px] leading-7">“Amazing service. Excellent customer service and the work on behalf my work colleague Kirti S. from Wing is top notch. I’ve enjoyed the help and the genuine personality and willingness to learn. Also a big call out to Maryann U. my customer success manager.”</p>

                        </div>
                        <div className="flex space-x-4 mt-12">
                            <div>
                                <Image
                                    className="rounded-full"
                                    src="https://i.ibb.co.com/t4h0tpS/Image.png"
                                    width={48}
                                    height={48}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <p className="text-sm">Co-Founder & CEO, Living Spec </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;