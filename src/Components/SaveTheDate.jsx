import React from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import content from '../content';



const SaveTheDate = () => {
  return (
    <div className='my-10'>
        <Zoom><img className='px-5' src={content.img_savethedate} /></Zoom>
        <div className='-mx-8 -my-5 px-16'>
          <div className='PrimaryBg pb-10'>
            <Fade bottom>
            <h1 className='PrimaryBg py-5 text-center MainTitle PrimaryColor text-3xl capitalize'>aparta la fecha</h1></Fade>
            <Fade bottom>
            <h1 className='MainTitle subtitleColor text-7xl text-center uppercase' dangerouslySetInnerHTML={{ __html: content.str_dia }}/>
            <h1 className='Title subtitleColor text-2xl text-center uppercase' dangerouslySetInnerHTML={{ __html: content.str_mes }}/>
            <h1 className='Title subtitleColor text-5xl text-center uppercase' dangerouslySetInnerHTML={{ __html: content.str_anio }}/>
          </Fade>
          </div>
        </div>
        
    </div>
    
  )
}

export default SaveTheDate