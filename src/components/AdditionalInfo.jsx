import React, { useState } from 'react';
import AccordionItem from '../sections/AccordionItem';

    const WhereToMeetContent = () => (
        <>
        <div className="w-[708px] h-[480px] rounded-xl overflow-hidden relative">

            <div className="absolute -top-[45px] -left-[64px] w-full h-full">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.894396264875!2d115.26127161539493!3d-8.51065609386345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f5b75b92573%3A0x5e52c85b5420b985!2sUbud%2C%20Gianyar%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1664123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            
            </div>
            <p className="font-nav font-semibold text-lg leading-normal text-[#384B40]">
                <strong>Pickup & Drop-off Location:</strong> 
            <span className="font-nav font-normal text-lg leading-normal text-black">
                {' '}Your hotel or villa within Ubud, Canggu, Seminyak, or Sanur areas
            </span>
            </p>
            <p className="font-nav font-semibold text-lg leading-normal text-[#384B40]">Pickup Time: <span className="font-nav font-normal text-lg leading-normal text-black"> 7:30 AM – We’ll confirm the exact time based on your location</span></p>
            <p className="font-nav font-semibold text-lg leading-normal text-[#384B40]">Drop-off Time:<span className="font-nav font-normal text-lg leading-normal text-black"> Around 4:30 PM (depending on traffic and group pace)</span></p>
            <p className="font-nav font-semibold text-lg leading-normal text-[#384B40]">Private Transfers:<span className="font-nav font-normal text-lg leading-normal text-black"> Clean, air-conditioned vehicle with a friendly local driver</span></p>
        </>
    );

    const accordionData = [
        { title: "Where will we meet?", content: <WhereToMeetContent /> },
        { title: "Start and Ends", content: "Details about the start and end times and locations." },
        { title: "Suitability / Accessibility", content: "Information about who this trip is suitable for." },
        { title: "Cancellation and other policies", content: "Details on the cancellation policy." },
        { title: "What to Pack", content: "A list of recommended items to bring with you." },
    ];

    const AdditionalInfo = () => {
        const [openIndex, setOpenIndex] = useState(0); 

        const handleItemClick = (index) => {

            setOpenIndex(openIndex === index ? null : index);
        };

        return (
            <section className="p-8">
                <h2 className="font-nav text-[32px] font-bold leading-[120%] text-[#384B40] mb-6">
                Additional Information
                </h2>
                <div className="w-full">
                    {accordionData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={openIndex === index}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </div>
            </section>
        );
    };

    export default AdditionalInfo;