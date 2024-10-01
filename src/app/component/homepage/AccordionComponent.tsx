// import Question from "./Question";

// const AccordionComponent = () => {
//     const accordionData = [
//         {
//             question: 'What is React?',
//             answer:
//                 'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components.',
//         },
//         {
//             question: 'What is Tailwind CSS?',
//             answer:
//                 'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs.',
//         },
//         {
//             question: 'What is useState in React?',
//             answer:
//                 'useState is a React hook that allows you to add state management to functional components.',
//         },
//     ];

//     return (
//         <div className="max-w-lg mx-auto">
//             {accordionData.map((item, index) => (
//                 <Question key={index} question={item.question} answer={item.answer} />
//             ))}
//         </div>
//     );
// };

// export default AccordionComponent;



import React, { FC } from 'react';
import Question from './Question';

interface AccordionItem {
    question: string;
    answer: string;
    number: number;
}

const AccordionComponent: FC = () => {
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
        <div className="lg:w-[1010px] mx-auto py-20 ">

            <div className='text-center lg:my-12'>
                <h1 className='text-4xl'>Frequently Asked Questions</h1>
                <p>Find questions and answers related to the design system, purchase, updates, and support.</p>
            </div>

            {accordionData.map((item, index) => (
                <Question key={index} question={item.question} answer={item.answer} number={item.number} />
            ))}


        </div>
    );
};

export default AccordionComponent;
