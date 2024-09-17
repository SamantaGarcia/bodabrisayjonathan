import React from 'react'
import Fade from 'react-reveal/Fade';
import content from '../content';


const MainQuote = () => {
  return (
    <div className='text-center grid justify-items-center p-5'>
      <Fade bottom>
      <img className='h-20 my-5' src="/Resources/flor.png" />

        <p className='SecondaryColor text-lg NormalText my-10' dangerouslySetInnerHTML={{ __html: content.str_fraseromantica }}/>
      </Fade>

      <Fade bottom>
                <img className='h-28 my-5' src="/Resources/1icon.png" />
        <p className='PrimaryColor text-xl Title mt-10' dangerouslySetInnerHTML={{ __html: content.str_invitar }}/>
      </Fade>
      
       
      
    </div>
    
  )
}

export default MainQuote