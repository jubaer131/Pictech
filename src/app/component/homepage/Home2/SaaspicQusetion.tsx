"use client"

import React from 'react';
import Image from 'next/image';
import Question11 from './Question11';


const SaaspicQusetion = () => {

    interface AccordionItem {
        question: string;
        answer: string;
        number: number;
    }

    const accordionData: AccordionItem[] = [
        {
            question: 'How does the trial work?',
            answer:
                "Business owners who can't write keyword-rich, natural-sounding SEO content won't optimize their Google rankings. Choose great SEO virtual assistants to avoid monthly retainer fees and onsite staffing costs  Your virtual assistant can analyze page views, bounce rates, backlinks, link-building efforts, and other SEO tasks like creating blog posts and relevant content With SEO’s help, you can reach your ideal customers online and scale your business faster.",
            number: 1
        },
        {
            question: 'What is Tailwind CSS?',
            answer:
                'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs.',
            number: 2
        },
        {
            question: 'What is useState in React?',
            answer:
                'useState is a React hook that allows you to add state management to functional components.',
            number: 3
        },
        {
            question: 'What is useState in React?',
            answer:
                'useState is a React hook that allows you to add state management to functional components.',
            number: 3
        },
        {
            question: 'What is useState in React?',
            answer:
                'useState is a React hook that allows you to add state management to functional components.',
            number: 3
        },
    ];




    return (

        <>
            <div className='lg:w-[1296px] lg:ml-64'>
                <h1 className='text-center lg:text-4xl font-bold mb-2 max-sm:px-4 text-white'>
                    Saaspic managed remote <br />
                    talent experience
                </h1>


                <div className='flex lg:flex-row flex-col-reverse justify-between items-center  gap-2 lg:mt-20'>

                    <div className="lg:w-[600px] h-auto relative" style={{ aspectRatio: '600/ 560' }}>
                        <Image
                            src='https://i.ibb.co.com/MR3dh1t/Graphics.png'
                            layout="fill"
                            objectFit="cover"
                            alt="Picture of the author"
                        />
                    </div>

                    <div
                        className="lg:w-[598px] lg:h-[540px] space-y-20 overflow-y-auto lg:border-l border-gray-400 lg:order-1 lg:self-start "
                        style={{
                            direction: 'rtl',
                            scrollbarWidth: 'thin',
                        }}
                    >
                        <div style={{
                            direction: 'ltr',
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#ffffff #f0f0f0',
                        }}>
                            {accordionData.map((item, index) => (
                                <Question11 key={index} question={item.question} answer={item.answer} number={item.number} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default SaaspicQusetion;