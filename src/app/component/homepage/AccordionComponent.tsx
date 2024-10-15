



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
            question: 'Do I need a credit card to access the free trial?',
            answer:
                'Whether you need a credit card to access a free trial often depends on the specific service or platform you are signing up for. Many services, such as streaming platforms, software tools, and subscription services, require a credit card to activate the free trial. This practice is commonly used to facilitate automatic billing once the trial period ends. However, some platforms offer free trials without needing a credit card, allowing users to access the service without the risk of being charged after the trial concludes. It is essential to read the terms and conditions associated with the free trial before signing up. If you are uncertain, you can usually find specific information in the FAQ section or during the signup process.',
            number: 2
        },
        {
            question: 'What services does PicmaticWeb offer?',
            answer:
                'These services are designed to help businesses maximize their online potential and achieve their digital marketing goals. For specific offerings or packages, it’s best to visit the PicmaticWeb website or contact them directly.',
            number: 3
        },
        {
            question: 'How do I get started with PicmaticWeb??',
            answer:
                'To get started with PicmaticWeb, first, visit their website to explore the range of services they offer, including their portfolio and relevant information. Once you have familiarized yourself with their offerings, reach out to the PicmaticWeb team using the contact form or provided contact details, such as email or phone, to inquire about their services and pricing. Scheduling a consultation with a representative will allow you to discuss your business goals and specific needs, enabling them to tailor their services accordingly. After your discussion, PicmaticWeb will provide a proposal outlining the recommended services, timelines, and costs. Upon agreeing to the proposal, you may need to sign a contract detailing the scope of work and payment terms. Once everything is finalized, PicmaticWeb will kick off your project, keeping you updated with regular check-ins. Throughout the process, providing feedback will ensure the final outcome aligns with your vision and goals',
            number: 4
        },
        {
            question: 'How much does it cost to hire an SEO virtual assistant from PicmaticWeb?',
            answer:
                'The cost to hire an SEO virtual assistant from PicmaticWeb can vary based on several factors, including the specific services required, the assistant is experience and skill level, and the complexity of your SEO needs. Typically, virtual assistants may charge on an hourly basis or a flat monthly rate.',
            number: 5
        },
    ];

    return (
        <div className="lg:w-[1010px] mx-auto lg:py-20 py-10 ">

            <div className='text-center lg:py-12 space-y-4'>
                <h1 className='text-5xl font-semibold'>Frequently Asked Questions</h1>
                <p className='text-[18px] font-normal'>Find questions and answers related to the design system, <br /> purchase, updates, and support.</p>
            </div>

            {accordionData.map((item, index) => (
                <Question key={index} question={item.question} answer={item.answer} number={item.number} />
            ))}


        </div>
    );
};

export default AccordionComponent;
