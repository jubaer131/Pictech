

import React, { useState, FC } from 'react';

interface QuestionProps {
    question: string;
    answer: string;
    number: number;
}

const Question11: FC<QuestionProps> = ({ question, answer, number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" ">
            <div
                className="flex justify-between items-center p-6 cursor-pointer "
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold text-white">{number}. {question}</h3>
                <button className="text-xl text-white">{isOpen ? 'X' : '+'}</button>
            </div>
            {isOpen && (
                <div className="p-4 text-white ">
                    {answer}
                </div>
            )}
        </div>
    );
};

export default Question11;
