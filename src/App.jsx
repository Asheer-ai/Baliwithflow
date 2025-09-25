import './App.css'
import AboutHost from './components/AboutHost'
import AdditionalInfo from './components/AdditionalInfo'
import Availability from './components/Availability'
import BookingForm from './components/BookingForm'
import DiscoverCulture from './components/Discover'
import ExperienceDetails from './components/ExperienceDetails'
import Footer from './components/Footer'
import Highlights from './components/Highlights'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Suggestions from './components/Suggestions'
import Testimonials from './components/Testimonials'


function App() {
  return (
    <div className="bg-bali-beige mx-auto min-h-screen font-sans">
      <Navbar />
      <Home />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16 px-6 lg:px-20 mb-20">
        <div className="lg:col-span-2">
          <section id='ExperienceDetails'>
            <ExperienceDetails />
          </section>

        </div>
        <div>
          <BookingForm />

        </div>
      </div>

      <div className="flex  w-1/2  my-12">
        <div className="flex-1 border-t border-dashed border-black ml-2"></div>
      </div>
      <Highlights />
      <div className="flex  w-1/2  my-12">
        <div className="flex-1 border-t border-dashed border-black ml-2"></div>
      </div>
      <section id="DiscoverCulture">
        <DiscoverCulture />
      </section>
      <div className="flex  w-1/2  my-12">
        <div className="flex-1 border-t border-dashed border-black ml-2"></div>
      </div>
      <Availability />
      <div className="flex  w-1/2  my-12">
        <div className="flex-1 border-t border-dashed border-black ml-2"></div>
      </div>
      <section id='AdditionalInfo'>
        <AdditionalInfo />
      </section>


      <AboutHost />

      <Testimonials />

      <section id='Suggestions'><Suggestions /></section>

      <Footer />
    </div>
  )
}

export default App
