
function Home() {
  return (
    <section className="max-w-[1440px] mx-auto py-24 px-16">

        <div className="flex gap-5 h-[450px]">

            <div className="flex flex-col gap-5 flex-1">
            <img src="/Pic1.png" alt="Balinese rice farmers" className="rounded-xl object-cover h-1/2 w-full" />
            <img src="/Pic2.jpg" alt="Balinese offerings" className="rounded-xl object-cover h-1/2 w-full" />
            </div>

            <div className="flex-1">
            <img src="/Pic3.png" alt="Balinese temple statue" className="rounded-xl object-cover h-full w-full" />
            </div>

            <div className="flex flex-col gap-5 flex-1">
            <img src="/Pic4.png" alt="Lush Bali landscape" className="rounded-xl object-cover h-1/2 w-full" />
            <img src="/Pic5.png" alt="Bali rice fields" className="rounded-xl object-cover h-1/2 w-full" />
            </div>

            <div className="flex-1 relative">
            <img src="/Pic6.png" alt="Tourist holding offering" className="rounded-xl object-cover h-full w-full" />
            <button className="absolute bottom-4 right-4 bg-white/90 text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-white transition-colors">
                View all images
            </button>
            </div>

        </div>
      

            <div className="text-center mt-20">
            <h1 className="font-nav text-[52px] leading-[120%] font-bold text-[#384B40]">
            Balinese Day with a Local
            <br />
            Family
            </h1>
            <p className="font-nav font-normal text-lg leading-normal mt-4 max-w-3xl mx-auto text-black">
            Immerse yourself in the heart of Balinese culture by spending a day with a local family. This authentic experience offers a unique glimpse into daily life, traditions, and the warmth of Balinese hospitality.
            </p>
        </div>

        <img 
        src="/Frame.png" 
        alt="Experience highlights including location, duration, and trip type"
        className="w-[1100px] h-[100px] rounded-[32px] mx-auto mt-20"
        />
    </section>
  )
}

export default Home