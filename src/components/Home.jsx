import InfoFrame from "../sections/InfoBar"

function Home() {
  return (
    <section className="max-w-[1440px] mx-auto py-12 px-6 sm:py-16 sm:px-10 lg:py-24 lg:px-16">
      
      {/* Image Grid */}
      <div className="flex flex-col lg:flex-row gap-5 lg:h-[450px]">
        
        {/* Left column */}
        <div className="flex flex-col gap-5 flex-1">
          <img src="/Pic1.png" alt="Balinese rice farmers" className="rounded-xl object-cover h-48 sm:h-60 lg:h-1/2 w-full" />
          <img src="/Pic2.jpg" alt="Balinese offerings" className="rounded-xl object-cover h-48 sm:h-60 lg:h-1/2 w-full" />
        </div>

        {/* Middle big image */}
        <div className="flex-1">
          <img src="/Pic3.png" alt="Balinese temple statue" className="rounded-xl object-cover h-60 sm:h-80 lg:h-full w-full" />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5 flex-1">
          <img src="/Pic4.png" alt="Lush Bali landscape" className="rounded-xl object-cover h-48 sm:h-60 lg:h-1/2 w-full" />
          <img src="/Pic5.png" alt="Bali rice fields" className="rounded-xl object-cover h-48 sm:h-60 lg:h-1/2 w-full" />
        </div>

        {/* Full image with button */}
        <div className="flex-1 relative">
          <img src="/Pic6.png" alt="Tourist holding offering" className="rounded-xl object-cover h-60 sm:h-80 lg:h-full w-full" />
          <button className="absolute bottom-3 right-3 bg-white/90 text-gray-800 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md hover:bg-white transition-colors">
            View all images
          </button>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center mt-12 sm:mt-16 lg:mt-20">
        <h1 className="font-nav text-3xl sm:text-4xl lg:text-[52px] leading-snug font-bold text-[#384B40]">
          Balinese Day with a Local <br className="hidden sm:block" /> Family
        </h1>
        <p className="font-nav font-normal text-base sm:text-lg mt-4 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto text-black">
          Immerse yourself in the heart of Balinese culture by spending a day with a local family. This authentic experience offers a unique glimpse into daily life, traditions, and the warmth of Balinese hospitality.
        </p>
      </div>

      {/* Frame image */}
      <InfoFrame/>
    </section>
  )
}

export default Home
