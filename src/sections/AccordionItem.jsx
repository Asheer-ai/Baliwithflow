import React from 'react';

import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="w-1/2 border-b border-gray-200 py-2">
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full py-4 text-left"
            >
                <h3 className=" font-nav text-2xl font-bold leading-[120%] text-[#384B40]">{title}</h3>
                <span>
                    {isOpen ? <FiMinus size={24} /> : <FiPlus size={24} />}
                </span>
            </button>

            {isOpen && (
                <div className="pb-4 pr-8 text-gray-600 space-y-4">
                    {content}
                </div>
            )}
        </div>
    );
};

export default AccordionItem;