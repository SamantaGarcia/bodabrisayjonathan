import React from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import content from '../content';



const Gifts = () => {
  return (
    <div className='my-20'>
      
      <Fade bottom><h1 className='MainTitle PrimaryColor text-3xl capitalize text-center'>Sugerencia de Regalos</h1></Fade>

      <div className='grid justify-items-center'>
      <Fade bottom>
      <p className='px-5 pt-10 Title text-lg text-center PrimaryColor' dangerouslySetInnerHTML={{ __html: content.str_regalosFrase }}/>

     </Fade>
      
      <Zoom><img className='h-32 mt-20' src={content.img_regalo1} /></Zoom><br />
      <Fade bottom>
      <p className='p-5 NormalText text-lg text-center PrimaryColor' dangerouslySetInnerHTML={{ __html: content.str_fraseRegalo1 }}/>
     </Fade>
      
     <Zoom><img className='h-32 mt-20' src={content.img_regalo2} /></Zoom><br />
      <Fade bottom>
      <p className='p-5 NormalText text-lg text-center PrimaryColor' dangerouslySetInnerHTML={{ __html: content.str_fraseRegalo2 }}/>

      <div className='flex'>
      <div className=' w-64'>
        <p className='px-1 NormalText text-lg text-left PrimaryColor'>Titular:</p>
        <p className='px-1 btnFont text-lg text-left PrimaryColor' dangerouslySetInnerHTML={{ __html: content.str_titular }}/>
        <p className='px-1 NormalText text-lg text-left PrimaryColor'>Entidad:</p>
        <p className='px-1 btnFont text-lg text-left PrimaryColor' dangerouslySetInnerHTML={{ __html: content.str_entidad }}/>
        </div>
      </div>

      <div className='flex'>
        <div className='w-48'>
        <p className='px-4 NormalText text-lg text-left PrimaryColor'>Núm. de Cuenta:</p>
        <p className='px-4 btnFont text-lg text-left PrimaryColor' dangerouslySetInnerHTML={{ __html: content.str_numCuenta }}/>
        </div>
        <CopyToClipboard text={content.str_numCuenta}>
        <button className='btn btnFont SecondaryBg text-white uppercase place-content-center'>Copiar</button>
        </CopyToClipboard>
      </div>

      <div className='flex '>
        <div className='w-48'>
        <p className='px-4 NormalText text-lg text-left PrimaryColor'>CLABE:</p>
        <p className='px-4 btnFont text-lg text-left PrimaryColor' dangerouslySetInnerHTML={{ __html: content.str_clabe }}/>
        </div>
        <CopyToClipboard text={content.str_clabe}>
        <button className='btn btnFont SecondaryBg text-white uppercase place-content-center'>Copiar</button>
        </CopyToClipboard>
      </div>

      <div className='flex '>
        <div className='w-48'>
        <p className='px-4 NormalText text-lg text-left PrimaryColor'>Código SWIFT (transferencias internacionales):</p>
        <p className='px-4 btnFont text-lg text-left PrimaryColor' dangerouslySetInnerHTML={{ __html: content.str_codSwift }}/>
        </div>
        <CopyToClipboard text={content.str_codSwift}>
        <button className='btn btnFont SecondaryBg text-white uppercase place-self-end'>Copiar</button>
        </CopyToClipboard>
      </div>

     </Fade>

      </div>
    </div>
  )
}

export default Gifts