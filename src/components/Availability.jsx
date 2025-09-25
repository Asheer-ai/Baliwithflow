import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Availability = () => {
  const [selected, setSelected] = useState(new Date());

  const formatWeekdayName = (day) => format(day, 'EEEEE');

  return (
    <section className="p-8 bg-teal-50/50 rounded-xl">
      <h2 className="font-nav text-3xl font-bold text-[#384B40] mb-6">
        Next Available Dates
      </h2>
      <div className="flex flex-col items-start gap-">

        <div className="w-full max-w-sm">
          <DayPicker
            required
            selected={selected}
            onSelect={setSelected}
            formatters={{ formatWeekdayName }}
            weekStartsOn={0} 
          />
        </div>
        <div>
          <h3 className="font-nav mt-4 text-xl font-semibold text-[#384B40]">
            {selected ? `Book slot for ${format(selected, 'MMMM d')}` : 'Please select a day'}
          </h3>
          <div className="mt-4">
            <button className="font-nav text-sm font-medium border border-gray-400 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors">
              9 am - 12 am
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Availability;