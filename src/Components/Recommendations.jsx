// src/Recommendations.js
import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import content from '../content';

const Recommendations = () => {
    return (
        <div className='mb-20'>
            <Fade bottom>
                <h1 className='pt-10 subtitleColor MainTitle text-center text-3xl capitalize pb-20'>
                    Recomendaciones para invitados
                </h1>
            </Fade>

            {/* ESTANCIA */}
            <Zoom>
                <div className='ml-4 flex'>
                    <img src="/Resources/hotel_icon.png" className=' h-10' />
                    <h1 className='Subtitle text-2xl ml-4 uppercase PrimaryColor '>Estancia</h1>
                </div>
            </Zoom>
            <Fade>
                <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
                    {content.estanciaItems.map((item, index) => (
                        <div key={index} className="carousel-item">
                            <div>
                                <img src={item.image} className="rounded-box h-72" />
                                <p className='Subtitle ml-3 my-2 text-lg PrimaryColor'>{item.title}</p>
                                <p className='btnFont PrimaryColor text-lg ml-3'>{item.phone}</p>
                                <div className='grid place-content-end mt-2 ml-4'>
                                    <a role="button" className="btn btnFont SecondaryBg text-white uppercase" href={item.link}>Ver más</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Fade>

            {/* TRANSPORTE */}
            <Zoom>
                <div className='ml-4 mt-20 flex'>
                    <img src="/Resources/transporte_icon.png" className=' h-10' />
                    <h1 className='Subtitle text-2xl ml-4 uppercase PrimaryColor '>Transporte</h1>
                </div>
            </Zoom>
            <Fade>
                <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
                    {content.transporteItems.map((item, index) => (
                        <div key={index} className="carousel-item">
                            <div>
                                <img src={item.image} className="rounded-box h-72" />
                                <p className='Subtitle ml-3 my-2 text-lg PrimaryColor'>{item.title}</p>
                                <p className='btnFont PrimaryColor text-lg ml-3'>{item.phone}</p>
                                <div className='grid place-content-end mt-2 ml-4'>
                                    <a role="button" className="btn btnFont SecondaryBg text-white uppercase" href={item.link}>Ver más</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    );
}

export default Recommendations;
