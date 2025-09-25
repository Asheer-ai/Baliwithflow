import { FaGem, FaLeaf, FaHeart, FaRegClock, FaRegCommentDots } from 'react-icons/fa';

const discoverItems = [
  { icon: <FaGem />, text: "Walk through the rice fields with Tiwi" },
  { icon: <FaLeaf />, text: "Learn how to make offerings & coconut oil" },
  { icon: <FaHeart />, text: "Cook & enjoy an authentic Balinese lunch" },
  { icon: <FaRegClock />, text: "Option to stay overnight in the family home" },
  { icon: <FaRegCommentDots />, text: "The host speaks french and english" },
];

const DiscoverCulture = () => {
  return (
    <section className="bg-green-50/50 p-12 rounded-xl">
      <h2 className="font-nav text-[32px] font-bold leading-[120%] text-[#384B40]">
        Discover Local Culture with a Balinese <br /> Family (Tiwi)
      </h2>
      <ul className="mt-8 space-y-4">
        {discoverItems.map((item, index) => (
          <li key={index} className="flex items-center gap-4">
            <span className="text-orange-500 text-xl">
              {item.icon}
            </span>
            <span className="font-nav text-lg text-gray-800">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      <a 
        href="#" 
        className="inline-block mt-6 font-nav font-medium text-gray-800 underline hover:text-black"
      >
        Show Details
      </a>
    </section>
  );
};

export default DiscoverCulture;