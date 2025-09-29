import React from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import TestimonialCard from '../sections/TestimonialCard';

const testimonialsData = [
  {
    rating: 5,
    text: "We wanted magic, and Flora delivered it tenfold. From a private chef dinner in the jungle to a surprise waterfall hike I'll never forget — every detail felt like it was made for us. I didn't worry once. It was honestly the best week of our lives.",
    avatar: '/avatar1.png',
    name: 'Emily & Josh',
    title: 'Newlyweds, NYC',
  },
  {
    rating: 5,
    text: "I booked a few day trips to get out of Canggu and wow... life-changing. I saw a sunrise from the top of a volcano, had lunch with a local family, and worked from a bamboo treehouse with the best WIFI I've had in months. Totally inspired.",
    avatar: '/avatar2.png',
    name: 'Lena Ray',
    title: 'Solo Traveler, Berlin',
  },
  {
    rating: 5,
    text: "Flora's guide made everything so easy. It's like your well-traveled best friend whispering in your ear: 'Skip that, go here, trust me.' I downloaded it the night before my flight and felt totally ready. Worth 10x the price.",
    avatar: '/avatar3.png',
    name: 'Thomas',
    title: 'First-Time Visitor, London',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-bali-beige py-24 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-nav text-5xl font-bold text-[#384B40]">
          What our escapees say about us
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          See how escapees from around the world experienced the real Bali — curated with care, heart, and local soul.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              text={testimonial.text}
              avatar={testimonial.avatar}
              name={testimonial.name}
              title={testimonial.title}
              className="transition-transform hover:scale-105" 
              avatarProps={{ loading: 'lazy', width: 80, height: 80 }} 
            />
          ))}
        </div>

        <div className="flex gap-[10px] mt-12 justify-center">
          <button className="w-[125px] h-[56.5px] bg-white border-[3px] border-[#384B40] rounded-full flex items-center justify-center text-[#384B40] hover:bg-[#384B40] hover:text-white transition-colors">
            <FaLongArrowAltLeft size={34}/>
          </button>
          <button className="w-[125px] h-[56.5px] bg-white border-[3px] border-[#384B40] rounded-full flex items-center justify-center text-[#384B40] hover:bg-[#384B40] hover:text-white transition-colors">
            <FaLongArrowAltRight size={34}/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
