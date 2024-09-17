import React from 'react'
import { useEffect, useState } from "react"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import content from '../content';


const PicAndPhrase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % content.slides.length);
    }, 2000);
    
    // Limpieza del intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <Fade bottom>
      <div className='grid justify-items-center gap-5 my-10 NormalText' data-tip="Desliza aquí">
        <div className='h-56 md:h-96 overflow-hidden'>
          <img className="object-cover w-full h-full" src={content.slides[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
        <div>
          <p className=' Title text-xl text-center PrimaryColor' dangerouslySetInnerHTML={{ __html: content.str_fraseSlider }}/>
        </div>
        <Zoom><img className='h-24 mt-20' src="/Resources/flower6.png" alt="Flower" /></Zoom>
      </div>
    </Fade>

    
  )
}

export default PicAndPhrase