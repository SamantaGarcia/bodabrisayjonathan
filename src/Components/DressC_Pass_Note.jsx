import React from 'react'
import Fade from 'react-reveal/Fade';
import content from '../content';


const DressC_Pass_Note = () => {
  return (
    <div className='mt-10 mx-3 grid justify-items-center gap-4'>
       <div className='grid justify-items-center uppercase my-10'>
        <Fade bottom>
          <p className='PrimaryColor Subtitle text-2xl mt-5'>Hemos reservado</p>
          <img className='h-32 my-5' src="/Resources/pases.png" />
          <p className='PrimaryColor Subtitle text-2xl'>pase en tu honor</p>
          </Fade>
        </div>

        <Fade bottom>
        <div className="p-5">
          <p className='text-center Subtitle PrimaryColor text-xl mb-2 uppercase '><b>No Niños</b></p>
          <p className='text-center SecondaryColor text-lg NormalText' dangerouslySetInnerHTML={{ __html: content.str_ninos }}/>
        </div>
        </Fade>
        <Fade bottom>
        <div className="my-10">
            <p className='text-center MainTitle PrimaryColor text-xl capitalize PrimaryBg p-3' dangerouslySetInnerHTML={{ __html: content.str_etiqueta }}/>
        </div>
        </Fade>
        </div>

  )
}

export default DressC_Pass_Note