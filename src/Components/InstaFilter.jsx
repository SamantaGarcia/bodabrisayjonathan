import React from 'react'
import Zoom from 'react-reveal/Zoom';
import content from '../content';

const InstaFilter = () => {
  return (
    <div className='mt-20'>
      
        <div className="hero min-h-screen bgFiltro">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-nutral-content">
            <Zoom><div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold uppercase Title">Sonríe!</h1>
                <p className=" NormalText">Usa nuestro filtro de instagram el día de la boda</p>
                <p className="mb-5 NormalText">No olvides etiquetarnos</p>
                <a className="btn btnFont SecondaryBg text-white uppercase border-0" href={content.path_filtro}>Usar Filtro</a>
                </div></Zoom>
            </div>
        </div>
    </div>
  )
}

export default InstaFilter