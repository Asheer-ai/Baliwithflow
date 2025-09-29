const footerPattern = '/footer.png'; 

const Footer = () => {
  return (
    <footer className="relative max-w-[1550px] h-auto md:h-[381px] mx-auto bg-[#384B40] text-white overflow-hidden">

      <div 
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerPattern})` }}
      ></div>

      <div className="relative z-10 h-full flex flex-col justify-between items-center py-10 md:py-20 px-6 md:px-16">

        <div className="flex flex-col items-center gap-6 md:gap-8">
          <a href="#">
            <img 
              src="/Content.png" 
              alt="Baliwithflow logo" 
              className="h-8 md:h-10 w-auto"
              loading="lazy"  
              width={120}     
              height={40}     
            />
          </a>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-nav text-sm md:text-base text-center">
            <a href="#" className="hover:underline">Home</a>
            <a href="#ExperienceDetails" className="hover:underline">Experiences</a>
            <a href="#DiscoverCulture" className="hover:underline">Guide</a>
            <a href="#" className="hover:underline">Itineraries</a>
            <a href="#AdditionalInfo" className="hover:underline">FAQ</a>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-6 md:pt-8 gap-4 md:gap-0 text-center md:text-left">
          <p className="text-xs md:text-sm text-white/70">
            © 2024 Bali With Flow. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 font-nav text-xs md:text-sm">
            <a href="#" className="text-white/70 hover:text-white underline">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white underline">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white underline">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
