import { MapPin, Clock, Users, Briefcase, Globe } from "lucide-react";

function InfoFrame() {
  return (
    <div className="bg-white rounded-2xl border border-[#D9C9A3] p-6 max-w-[1100px] mx-auto mt-12 sm:mt-16 lg:mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#D9C9A3]">
        
        {/* Location */}
        <div className="flex items-center gap-2 px-4 py-3 justify-center lg:justify-start">
          <MapPin className="text-orange-500 w-5 h-5" />
          <div>
            <p className="text-sm font-semibold text-gray-800">Location</p>
            <p className="text-sm text-gray-600">Kaleki</p>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 px-4 py-3 justify-center lg:justify-start">
          <Clock className="text-orange-500 w-5 h-5" />
          <div>
            <p className="text-sm font-semibold text-gray-800">Duration</p>
            <p className="text-sm text-gray-600">Morning 9-12</p>
          </div>
        </div>

        {/* Escapees */}
        <div className="flex items-center gap-2 px-4 py-3 justify-center lg:justify-start">
          <Users className="text-orange-500 w-5 h-5" />
          <div>
            <p className="text-sm font-semibold text-gray-800">Escapees</p>
            <p className="text-sm text-gray-600">8</p>
          </div>
        </div>

        {/* Type of Trip */}
        <div className="flex items-center gap-2 px-4 py-3 justify-center lg:justify-start">
          <Briefcase className="text-orange-500 w-5 h-5" />
          <div>
            <p className="text-sm font-semibold text-gray-800">Type of trip</p>
            <p className="text-sm text-gray-600">Private</p>
          </div>
        </div>

        {/* Category */}
        <div className="flex items-center gap-2 px-4 py-3 justify-center lg:justify-start">
          <Globe className="text-orange-500 w-5 h-5" />
          <div>
            <p className="text-sm font-semibold text-gray-800">Category</p>
            <p className="text-sm text-gray-600">Full day trip</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoFrame;
