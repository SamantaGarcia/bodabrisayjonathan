import React from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import content from '../content';


const BrideInfo = () => {
  return (
    <div className='my-10 lg:mb-0 grid justify-items-center'>
      <Fade bottom>
      <h1 className='text-xl PrimaryColor Subtitle uppercase mb-3'>La Novia</h1>     
      <h1 className='MainTitle PrimaryColor text-3xl capitalize text-center'dangerouslySetInnerHTML={{ __html: content.str_nombreNovia }}/></Fade>        
      <Fade ><img className='py-10 px-5 md:w-80' src={content.img_novia} /></Fade>

        <div className='grid grid-cols-1 gap-10'>
        <Fade left>
            <div className='text-center SecondaryColor capitalize'>
                <p className='text-xl PrimaryColor Subtitle uppercase'>MIS PADRES</p><br />
                <p className='NormalText capitalize text-lg'dangerouslySetInnerHTML={{ __html: content.str_nombreMadreNovia }}/><br />
                <p className='NormalText capitalize text-lg' dangerouslySetInnerHTML={{ __html: content.str_nombrePadreNovia }}/>                
            </div>
          </Fade>  
          {/* <Fade right>
            <div className='text-center SecondaryColor capitalize'>
                <p className='text-xl PrimaryColor Subtitle uppercase'>MIS PADRINOS</p><br />
                <p className='NormalText capitalize text-lg'>Nombre de la madrina</p><br />
                <p className='NormalText capitalize text-lg'>Nombre del padrino</p>    
            </div>
          </Fade> */}

        </div>
        <Fade bottom><p className='text-xl mt-10 text-center PrimaryColor Subtitle uppercase'>damas de honor</p></Fade><br />

        <div className='grid grid-cols-2 text-center gap-5'>
        <Fade left><div className='text-right SecondaryColor capitalize'>
        {content.str_damasColumnaIzquierda.map((dama, index) => (
                <p key={index} className='NormalText capitalize text-lg'>
                    {dama}
                </p>
            ))}                        
            </div></Fade>
            <Fade right><div className='text-left SecondaryColor capitalize'>
            {content.str_damasColumnaDerecha.map((dama, index) => (
                <p key={index} className='NormalText capitalize text-lg'>
                    {dama}
                </p>
            ))}   
            </div></Fade>
        </div>

        <Zoom><img className='h-24 mt-20 mb-10' src="/Resources/flower5.png" /></Zoom>
    </div>
  )
}

export default BrideInfo