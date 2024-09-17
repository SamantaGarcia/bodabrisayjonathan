import React from 'react'
import Fade from 'react-reveal/Fade';
import content from '../content';

const MainPic = () => {
  return (
    <div className='bgPortrait h-screen'>
      <div className='absolute inset-x-0 top-5 h-16 w-full text-white text-center'>
      <Fade bottom>
        <h1 className='Title text-2xl pb-2' dangerouslySetInnerHTML={{ __html: content.str_nuestraboda }}/>
        <h1 className='MainTitle text-5xl' dangerouslySetInnerHTML={{ __html: content.str_nombrenovios }}/>
      </Fade>
      </div>
    </div>
  )
}

export default MainPic