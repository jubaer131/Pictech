

// import React, { useState } from 'react';

// interface QuestionProps {
//     question: string;
//     answer: string;
// }




// const Question: FC<QuestionProps> = ({ question, answer }) => {


//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="border border-gray-300 rounded-lg my-4">
//             <div
//                 className="flex justify-between items-center p-4 cursor-pointer bg-gray-100"
//                 onClick={() => setIsOpen(!isOpen)}
//             >
//                 <h3 className="text-lg font-semibold">{question}</h3>
//                 <button className="text-xl">{isOpen ? 'X' : '+'}</button>
//             </div>
//             {isOpen && (
//                 <div className="p-4 bg-white text-gray-700">
//                     {answer}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Question;

import React, { useState, FC } from 'react';

interface QuestionProps {
    question: string;
    answer: string;
    number: number;
}

const Question: FC<QuestionProps> = ({ question, answer, number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-t border-b border-gray-100  ">
            <div
                className="flex justify-between items-center p-6 cursor-pointer "
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold">{number}. {question}</h3>
                <button className="text-xl">{isOpen ? 'X' : '+'}</button>
            </div>
            {isOpen && (
                <div className="p-4 bg-white text-gray-700">
                    {answer}
                </div>
            )}
        </div>
    );
};

export default Question;
