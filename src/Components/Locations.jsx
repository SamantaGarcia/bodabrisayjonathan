import React from 'react'
import Fade from 'react-reveal/Fade';
import content from '../content';



const Locations = () => {
  return (
    <div className='py-5 text-white'>

        
        <div className='lg:flex lg:justify-center'>

         {/* CEREMONIA */}
         <div className='PrimaryBg PrimaryColor m-9 pt-20'>
        <Fade bottom>
        <h1 className='MainTitle text-center text-4xl md:text-5xl pt-15 '>CeremOniA</h1>
        <h1 className='Subtitle text-center text-lg capitalize mt-10 px-4' dangerouslySetInnerHTML={{ __html: content.str_lugarCer }}/>
        <h1 className='NormalText text-center text-2xl uppercase mt-10' dangerouslySetInnerHTML={{ __html: content.str_horaCer }}/>
        </Fade>
        <Fade bottom>
        <div className='grid place-content-center mt-10 pb-10'>
          <a className='btn btnFont SecondaryBg text-white uppercase place-content-center' href={content.path_googleCer} type='button'>Ver Ubicación</a>
        </div>
         </Fade>
         </div>

         {/* RECEPCION */}
         <div className='PrimaryBg PrimaryColor m-9 pt-20'>
        <Fade bottom>
        <h1 className='MainTitle text-center text-4xl md:text-5xl pt-15 '>RecepcióN</h1>
        <h1 className='Subtitle text-center text-lg capitalize mt-10 px-4' dangerouslySetInnerHTML={{ __html: content.str_lugarRec }}/>
        <h1 className='NormalText text-center text-2xl uppercase mt-10' dangerouslySetInnerHTML={{ __html: content.str_horaRec }}/>
        </Fade>
        <Fade bottom>
        <div className='grid place-content-center mt-10 pb-10'>
          <a className='btn btnFont SecondaryBg text-white uppercase place-content-center' href={content.path_googleRec} type='button'>Ver Ubicación</a>
        </div>
         </Fade>
         </div>
    </div>
    </div>
  )
}

export default Locations