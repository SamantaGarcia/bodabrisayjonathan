import { useState, useEffect } from "react"
import { getRemainingTimeUntilMsTimestamp } from '../Utils/TimerUtils'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const defaultRemainingTime ={
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
}

const Coutdown = ({countdownTimestampMs}) => {

  const [remainintTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(()=>{
      const intervalID = setInterval(() => {
          updateRemainingTime(countdownTimestampMs);
      }, 1000);
      return () => clearInterval(intervalID)
  }, [countdownTimestampMs])

  function updateRemainingTime(countd){
      setRemainingTime(getRemainingTimeUntilMsTimestamp(countd));
  }

  return (
    <div className='pt-10 '>
             <Fade bottom><p className="Title text-2xl text-center PrimaryColor uppercase pb-10">Faltan</p></Fade>

            <div className="mx-10 text-center grid gap-4 pb-10 justify-items-center">
              <div className="flex gap-4">
              <Fade><img className='h-24 mb-5' src="/Resources/flower1.png" /></Fade>
              <Fade right><div className="p-2">                    
                <span className="Subtitle subtitleColor text-3xl md:5xl">{remainintTime.days}</span>
                <span className="subtitleColor NormalText text-xl md:2xl"><br />Días</span>
                </div></Fade>
              </div>
                
              <div className="flex gap-4">
              <Fade><img className='h-24 mb-5' src="/Resources/flower2.png" /></Fade>
              <Fade right><div className="p-2">                    
                <span className="Subtitle subtitleColor text-3xl md:5xl">{remainintTime.hours}</span>
                <span className="subtitleColor NormalText text-xl md:2xl"><br />Horas</span>
                </div></Fade>
              </div>

              <div className="flex gap-4">
              <Fade><img className='h-24 mb-5' src="/Resources/flower4.png" /></Fade>
              <Fade right><div className="p-2">                    
                <span className="Subtitle subtitleColor text-3xl md:5xl">{remainintTime.minutes}</span>
                <span className="subtitleColor NormalText text-xl md:2xl"><br />Minutos</span>
                </div></Fade>
              </div>

              <div className="flex gap-4">
              <Fade><img className='h-24 mb-5' src="/Resources/flower3.png" /></Fade>
              <Fade right><div className="p-2">                    
                <span className="Subtitle subtitleColor text-3xl md:5xl">{remainintTime.seconds}</span>
                <span className="subtitleColor NormalText text-xl md:2xl"><br />Segundos</span>
                </div></Fade>
              </div>

            </div>

      </div>
  )
}

export default Coutdown