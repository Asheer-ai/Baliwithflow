import React from 'react';
import { FaMapMarkerAlt, FaRegClock, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const tagStyles = {
  dark: 'bg-[#384B40] text-white',
  green: 'bg-[#407C59] text-white',
  light: 'bg-orange-100 text-[#384B40]',
};

const suggestionsData = [
  {
    images: ['/surf-in-canggu.jpg'], 
    tags: [
      { icon: <FaMapMarkerAlt />, text: 'Canggu', style: 'dark' },
      { icon: <FaRegClock />, text: 'Half Day Trip', style: 'green' },
      { text: 'Private', style: 'light' },
    ],
    title: 'Surf in Canggu',
    price: '35,00,000.00',
    description: "Wake up, grab your board and head to the beach while it's still quiet. This is your moment to catch your first wave — and do it with someone who kn...",
  },
  {
    images: ['/healing-retreat.jpg'],
    tags: [
      { icon: <FaMapMarkerAlt />, text: 'Canggu', style: 'dark' },
      { icon: <FaRegClock />, text: 'Half Day Trip', style: 'green' },
      { text: 'Private', style: 'light' },
    ],
    title: 'Balinese Healing in Retreat',
    price: '60,00,000.00',
    description: "You know that moment when you realise you've been carrying too much — in your body, your head, your heart? This is the kind of space that h...",
  },
  {
    images: ['/local-family.jpg'],
    tags: [
      { icon: <FaMapMarkerAlt />, text: 'Canggu', style: 'dark' },
      { icon: <FaRegClock />, text: 'Full Day Trip', style: 'green' },
      { text: 'Private', style: 'light' },
    ],
    title: 'Balinese Day with a local family',
    price: '15,00,000.00',
    description: "Slow down. Watch the light move across the rice fields. Learn how to make coconut oil the way it's been done for generations. This is Bali with soul...",
  },
];

const Suggestions = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-nav text-4xl font-bold text-center text-[#384B40] mb-12">
          You may also like
        </h2>

        <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
          {suggestionsData.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[360px] bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={card.images[0]}
                  alt={card.title}
                  className="w-full h-60 object-cover"
                  loading="lazy"
                  width={360}
                  height={240}
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-12 flex gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                  <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                </div>
              </div> 

              <div className="p-6 flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {card.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${tagStyles[tag.style] || tagStyles.light}`}
                    >
                      {tag.icon} {tag.text}
                    </span>
                  ))}
                </div>

                <h3 className="font-nav text-xl font-bold text-gray-900">{card.title}</h3>
                <p className="font-nav font-medium text-[20px] leading-[140%] text-[#407C59]">
                  From IDR {card.price}/ person
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
                
                <div className="flex items-center gap-4 pt-2">
                  <button className="bg-[#384B40] text-white font-bold text-sm py-2 px-4 rounded-lg hover:bg-opacity-90">
                    Book Escape
                  </button>
                  <a href="#" className="text-sm text-gray-600 font-medium underline hover:text-black">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-12">
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

export default Suggestions;
