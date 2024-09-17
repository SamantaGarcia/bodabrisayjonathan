import MainQuote from './Components/MainQuote'
import MainPic from './Components/MainPic'
import SaveTheDate from './Components/SaveTheDate'
import Coutdown from './Components/Coutdown'
import BrideInfo from './Components/BrideInfo'
import GroomInfo from './Components/GroomInfo'
import Locations from './Components/Locations'
import PicAndPhrase from './Components/PicAndPhrase'
import Itinerary from './Components/Itinerary'
import DressC_Pass_Note from './Components/DressC_Pass_Note'
import Gifts from './Components/Gifts'
import RSVP from './Components/RSVP'
import Recommendations from './Components/Recommendations'
import Footer from './Components/Footer'
import InstaFilter from './Components/InstaFilter'
import AudioPlayer from './Components/AudioPlayer'
import Gallery from './Components/Gallery'
import content from './content.js';


function App() {
  

  return (
        <>   
       <div className="main-pic-container">
      <MainPic />
    </div>
    <div className="content">
      <div className="lg:grid grid-cols-6">
        <div className='lg:col-start-2 col-span-4 bg-white'>
          <AudioPlayer />
          <MainQuote />
          <SaveTheDate />
          <DressC_Pass_Note />
          <Coutdown countdownTimestampMs={content._timestamp} />
          <BrideInfo />
          <GroomInfo />
          <PicAndPhrase />
          <Locations />
          <InstaFilter />
          <Gifts />
          <RSVP />
          <Recommendations />  
          <Gallery />
          <Footer />
        </div>
      </div>
    </div>
        </>
  )
}

export default App
