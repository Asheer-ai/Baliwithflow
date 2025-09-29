import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const highlightsData = [
  {
    image: '/Pic7.jpg',
    caption: 'Balinese Day with a local family',
  },
  {
    image: '/Pic3.png',
    caption: 'Visit a local temple',
  },
  // You can add more highlights here
];

const Highlights = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 318; // width of each highlight card
      const gap = 42; // gap between cards (adjust based on your layout)
      const scrollAmount = cardWidth + gap;

      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className=" flex flex-col px-4 sm:px-8 lg:px-20">
      <div className="w-full lg:w-[657px] flex justify-between items-center mb-8 ">
        <h2 className="font-nav text-3xl font-bold text-[#384B40]">
          Experience Highlights
        </h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => scroll('left')}
            aria-label="Previous highlight"
            className="text-gray-500 hover:text-black transition-colors"
          >
            <FaArrowLeft size={28} />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next highlight"
            className="text-gray-500 hover:text-black transition-colors"
          >
            <FaArrowRight size={28} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-[42px] overflow-x-auto scrollbar-hide scroll-smooth py-4"
      >
        {highlightsData.map((highlight, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[318px] h-[466px] rounded-xl overflow-hidden shadow-sm bg-white transition-transform hover:scale-105"
          >
            <img
              src={highlight.image}
              alt={highlight.caption}
              className="w-full h-[380px] object-cover rounded-[12px]"
              loading="lazy"
              width={318}  
              height={380}  
            />
            <div className="p-6">
              <p className="font-nav font-semibold text-lg text-black">
                {highlight.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
