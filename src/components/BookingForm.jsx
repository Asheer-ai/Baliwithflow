import { IoStarSharp } from "react-icons/io5";

const BookingForm = () => {
  return (
    <div className="bg-white p-6 rounded-2xl space-y-4 shadow-[4px_4px_0px_#F97316]">
      <div className="flex items-center gap-2">
        <div className="flex text-[#FBAD2C]">
          <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp />
        </div>
        <span className="font-nav font-medium text-[18.4px] leading-[120%] text-black">4.9</span>
        <span className="font-nav font-medium text-[18.4px] leading-[120%] text-black">(120)</span>
      </div>
        <p className="font-nav font-bold text-[28.37px] leading-[120%] text-[#384B40]"> From IDR 150,000.00/Person</p>
        
      <a href="#" className="text-sm text-[#9D9D9D] underline">Show Prices</a>

      <div className="space-y-3 pt-4">
        <select className="w-full text-gray-400 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-300 outline-none">
          <option >Guests</option>
        </select>
        <input 
          type="text" 
          placeholder="Date and Time" 
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-300 outline-none" 
        />
        <select className="w-full text-gray-400 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-orange-300 outline-none">
          <option>Select Add ons</option>
        </select>
      </div>

      <button className="w-1/2 bg-[#384B40] text-white p-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
        Reserve for free →
      </button>
    </div>
  );
};

export default BookingForm;