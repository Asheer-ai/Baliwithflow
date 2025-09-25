import React from 'react';
import { FaMapMarkerAlt, FaClock, FaUserFriends, FaSuitcase, FaRegBookmark } from 'react-icons/fa';

const infoData = [
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Kaleki' },
  { icon: <FaClock />, label: 'Duration', value: 'Morning 9-12' },
  { icon: <FaUserFriends />, label: 'Escapees', value: '8' },
  { icon: <FaSuitcase />, label: 'Type of trip', value: 'Private' },
  { icon: <FaRegBookmark />, label: 'Category', value: 'Full day trip' },
];

const InfoBar = () => {
  return (
    <div className="flex justify-around items-center bg-white p-6 rounded-2xl divide-x divide-gray-200 shadow-[0_0_0_3px_#FDE68A]">
      {infoData.map((item, index) => (
        <div key={index} className="flex-1 flex justify-center items-center gap-3">
          <div className="text-orange-500 text-2xl">
            {item.icon}
          </div>
          <div>
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="font-semibold text-gray-800">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoBar;