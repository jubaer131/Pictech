


import React, { useState, FC } from 'react';

interface QuestionProps {
    question: string;
    answer: string;
    number: number;
}

const Question: FC<QuestionProps> = ({ question, answer, number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-t border-b border-[#E6E6E6] ">
            <div
                className="flex justify-between items-center p-6 cursor-pointer "
                onClick={() => setIsOpen(!isOpen)}
            >

                <h3 className="text-lg font-semibold ">{number}. {question}</h3>

                <button className="text-xl ">{isOpen ? 'X' : '+'}</button>
            </div>
            {isOpen && (
                <div className="p-4  text-gray-700">
                    {answer}
                </div>
            )}
        </div>
    );
};

export default Question;
