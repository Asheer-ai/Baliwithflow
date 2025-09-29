import { MapPin, Clock, Users, Briefcase, Globe } from "lucide-react";

function InfoFrame() {
  return (
    <div className="bg-white rounded-2xl border border-[#D9C9A3] px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-stretch gap-4 sm:gap-0 max-w-[1100px] mx-auto mt-12 sm:mt-16 lg:mt-20">
      
      {/* Location */}
      <div className="flex items-center gap-2 flex-1 justify-center sm:justify-start">
        <MapPin className="text-orange-500 w-5 h-5" />
        <div>
          <p className="text-sm font-semibold text-gray-800">Location</p>
          <p className="text-sm text-gray-600">Kaleki</p>
        </div>
      </div>
      <div className="hidden sm:block w-px bg-[#D9C9A3]" />

      {/* Duration */}
      <div className="flex items-center gap-2 flex-1 justify-center sm:justify-start">
        <Clock className="text-orange-500 w-5 h-5" />
        <div>
          <p className="text-sm font-semibold text-gray-800">Duration</p>
          <p className="text-sm text-gray-600">Morning 9-12</p>
        </div>
      </div>
      <div className="hidden sm:block w-px bg-[#D9C9A3]" />

      {/* Escapees */}
      <div className="flex items-center gap-2 flex-1 justify-center sm:justify-start">
        <Users className="text-orange-500 w-5 h-5" />
        <div>
          <p className="text-sm font-semibold text-gray-800">Escapees</p>
          <p className="text-sm text-gray-600">8</p>
        </div>
      </div>
      <div className="hidden sm:block w-px bg-[#D9C9A3]" />

      {/* Type of Trip */}
      <div className="flex items-center gap-2 flex-1 justify-center sm:justify-start">
        <Briefcase className="text-orange-500 w-5 h-5" />
        <div>
          <p className="text-sm font-semibold text-gray-800">Type of trip</p>
          <p className="text-sm text-gray-600">Private</p>
        </div>
      </div>
      <div className="hidden sm:block w-px bg-[#D9C9A3]" />

      {/* Category */}
      <div className="flex items-center gap-2 flex-1 justify-center sm:justify-start">
        <Globe className="text-orange-500 w-5 h-5" />
        <div>
          <p className="text-sm font-semibold text-gray-800">Category</p>
          <p className="text-sm text-gray-600">Full day trip</p>
        </div>
      </div>
    </div>
  );
}

export default InfoFrame;
