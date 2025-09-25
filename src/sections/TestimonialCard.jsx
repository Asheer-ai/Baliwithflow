import React from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ rating, text, avatar, name, title }) => {
  return (
    
    <div className="bg-white p-8 rounded-3xl shadow-[0_0_0_4px_#FEEBCF] flex flex-col h-full">
      <div className="flex text-yellow-400 gap-1">
        {[...Array(rating)].map((_, i) => <FaStar key={i} size={20} />)}
      </div>
      <p className="mt-6 text-gray-800 leading-relaxed font-medium flex-grow">
        {text}
      </p>
      <div className="flex flex-col justify-center gap-3 mt-6">
        <img 
          src={avatar} 
          alt={name} 
          className="w-14 h-14 ml-4 rounded-full object-cover" 
        />
        <div className="ml-4">
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;