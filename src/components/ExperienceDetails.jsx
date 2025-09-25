import { FaRegCompass, FaLeaf, FaHeart, FaGem, FaMapMarkerAlt, FaLock,FaRegClock } from 'react-icons/fa';

const includedItems = [
  { icon: <FaGem />, text: "Walk through the rice fields with Tiwi" },
  { icon: <FaLeaf />, text: "Learn how to make offerings & coconut oil" },
  { icon: <FaHeart />, text: "Cook & enjoy an authentic Balinese lunch" },
  { icon: <FaRegCompass />, text: "Option to stay overnight in the family home" },
];

const ExperienceDetails = () => {
  return (
    <div  className="font-nav text-gray-800">
        <h2 className="font-nav text-[32px] font-bold leading-[120%] text-[#384B40]">
        Experience a Day with a Balinese Family
        </h2>
        <p className="font-nav text-black font-normal text-lg leading-normal mt-4">
        Slow down. Watch the light move across the rice fields. Learn how to make coconut oil the way it’s been done for generations. This is Bali with soul — the part you don’t find in guidebooks.
        </p>

        <p className="font-nav font-bold text-lg leading-normal text-[#384B40] mt-8">
        How can I connect with locals without it feeling forced or touristy?
        </p>
        <p className="font-nav font-normal text-lg leading-normal mt-2">
        You spend a day with Tiwi and her family. You help make offerings, walk their land, cook lunch together, and share stories. No performance. Just presence.
        </p>

        <h3 className="text-xl font-bold text-[#384B40] mt-8">What's included?</h3>
        <ul className="mt-4 space-y-3">
        {includedItems.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="bg-orange-100 text-orange-500 p-1.5 rounded-full">
              {item.icon}
            </span>
            <span className="font-nav font-normal text-base leading-normal">{item.text}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 mt-8">
        <span className="flex items-center gap-2 bg-[#384B40] text-white text-sm px-4 py-1.5 rounded-full">
          <FaMapMarkerAlt /> Village near Ubud
        </span>
        <span className="flex items-center gap-2 bg-[#384B40] text-white text-sm px-4 py-1.5 rounded-full">
          <FaRegClock /> 9am - 12am
        </span>
        <span className="flex items-center gap-2 bg-[#384B40] text-white text-sm px-4 py-1.5 rounded-full">
          <FaLock /> Private
        </span>
      </div>
    </div>
  );
};

export default ExperienceDetails;