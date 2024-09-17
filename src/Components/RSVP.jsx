import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Fade';
import content from '../content';


const RSVP = () => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);


  return (
    <div className='PrimaryBg'>
    <Fade bottom><h1 className='pt-10 subtitleColor MainTitle text-center text-3xl capitalize'>Confirmación de Asistencia</h1></Fade>

    <Zoom><div className='grid justify-items-center my-5'><img className='p-3 h-44' src="/Resources/pases3.png" alt="" /></div></Zoom>
    <div class="text-xl p-4 SecondaryBg  text-center rounded-lg mb-10 mx-3 lg:mx-20" role="alert">
    <div>
        <span class="text-white text-xl NormalText"dangerouslySetInnerHTML={{ __html: content.str_fechaLimite }}/>
    </div>
    </div>
  
    <div className='my-5'>
    <iframe src={content.path_formulario} className=' w-full h-screen' frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
   </div>

</div>
  )
}

export default RSVP