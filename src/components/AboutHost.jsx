import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
const forestBackground = '/host.jpg';
const hostImage = '/hostgirl.png';

const AboutHost = () => {
    return (
        <section className="relative w-full h-auto mx-auto flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center lg:h-[581px] lg:max-w-[1440px] px-4 py-16 sm:px-8 lg:px-[64px] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={forestBackground}
                    alt="Forest background"
                    className="w-full h-full object-cover saturate-150 opacity-80 object-right-top"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <img
                src={hostImage}
                alt="Host smiling"
                className="hidden lg:block absolute right-[100px] top-11 h-full z-10"
            />

            <div className="relative z-20 w-full flex flex-col items-center lg:items-start gap-8 lg:max-w-screen-md">
                <h2 className="font-nav text-4xl lg:text-5xl font-bold leading-[120%] text-white">
                    About the Host
                </h2>
                <p className="font-nav font-normal text-lg text-white leading-normal max-w-xl">
                    "I’ve spent 6+ years discovering the real Bali—what most people never get to see. I created BaliwithFlow to share that magic with escapees who crave meaning, depth, and effortless beauty in every detail."
                </p>
                
                <div className="w-full flex flex-col items-center gap-4 lg:flex-row lg:w-auto lg:gap-6">
                    <button className="w-full lg:w-[195px] h-[48px] flex items-center justify-center gap-2 px-5 py-3 bg-[#FBAD2C] text-white font-bold rounded-2xl border border-white/20">
                        Book Escape 

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                    <button className="w-full lg:w-[178px] h-[48px] flex items-center justify-center px-5 py-3 bg-white/20 text-white font-bold rounded-2xl border border-[#F4F8F6] hover:bg-white hover:text-gray-900 transition-colors">
                        Plan personal trip
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutHost;




