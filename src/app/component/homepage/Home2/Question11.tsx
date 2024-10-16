

import React, { useState, FC } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

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
                className="lg:flex justify-between items-center p-6 cursor-pointer "
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold text-white">{number}. {question}</h3>
                <button className="text-sm text-white">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</button>
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
