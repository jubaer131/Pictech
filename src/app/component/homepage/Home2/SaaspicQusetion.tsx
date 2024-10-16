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
            question: 'How is this service up to 80% quicker?',
            answer:
                "Our optimized processes and advanced technologies allow us to complete tasks significantly faster, reducing the time it takes by up to 80% compared to traditional methods. This means you get your results in a fraction of the usual time, without compromising on quality.",
            number: 1
        },
        {
            question: 'How does having a dedicated assistant benefit me?',
            answer:
                'With a dedicated assistant, you get personalized attention, faster response times, and better understanding of your project requirements. This ensures that your goals are met more efficiently and any changes or feedback are quickly implemented.',
            number: 2
        },
        {
            question: 'What does the Customer Success Manager do for me?',
            answer:
                'Your CSM will help you with onboarding, address any issues, provide guidance, and suggest optimizations tailored to your specific needs. They ensure that your goals are met and that you’re always moving in the right direction.',
            number: 3
        },
        {
            question: 'Wing Workspace App',
            answer:
                'All Wing clients receive complimentary access to the Wing Task Workspace App – a specialized app built to help you communicate with your assistant, manage tasks/projects, share files, record screen-sharing videos, and lot more.',
            number: 4
        },
        {
            question: 'Who handles the quality supervision?',
            answer:
                'Our experienced quality assurance team, along with your dedicated Customer Success Manager, will supervise the project. They will ensure that all aspects of the work meet your requirements and industry standards.',
            number: 5
        },
    ];




    return (

        <>
            <div className='lg:w-[1296px] lg:ml-64 max-sm:hidden'>
                <h1 className='text-center lg:text-4xl font-bold mb-2 max-sm:px-4 text-white'>
                    Saaspic managed remote <br />
                    talent experience
                </h1>


                <div className='lg:flex justify-between items-center  gap-2 lg:mt-20'>

                    <div className="lg:w-[600px] h-auto relative" style={{ aspectRatio: '600/ 560' }}>
                        <Image
                            src='https://i.ibb.co.com/MR3dh1t/Graphics.png'
                            layout="fill"
                            objectFit="cover"
                            alt="Picture of the author"
                        />
                    </div>

                    <div
                        className="lg:w-[598px] lg:h-[540px]  scroll  space-y-20 overflow-y-auto lg:border-l border-gray-400 lg:order-1 lg:self-start "
                        style={{
                            direction: 'rtl',
                            scrollbarWidth: 'thin',
                        }}
                    >
                        <div style={{
                            direction: 'ltr',
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#ffffff  #f0f0f0',
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