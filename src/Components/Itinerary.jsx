import React from 'react'
import Fade from 'react-reveal/Fade';
import { LuChurch, LuMusic, LuMusic3, LuPartyPopper, LuUser, LuUsers, LuUtensilsCrossed, LuWine } from 'react-icons/lu';

const Itinerary = () => {
  return (
    <div >
        <Fade bottom><h1 className='Title PrimaryColor text-5xl uppercase text-center my-20'>Itinerario</h1></Fade>

        <ul className="timeline timeline-snap-icon  timeline-vertical">
            <li>
            <hr className='PrimaryBg' />
            <div className="timeline-middle">
            <Fade><img className='h-5' src="/Resources/White_Circle.png" alt="" /></Fade>
                </div> 
                <Fade left><div className="timeline-start text-end mb-10">
                <time className="text-lg md:text-3xl Subtitle PrimaryColor capitalize">Ceremonia religiosa</time>
                <div className="SecondaryColor md:text-2xl NormalText">15:00 pm</div>
                </div></Fade>
                <Fade right><div className="timeline-end ml-10 mb-14">
                <time className=""><LuChurch size={40} /> </time>
                </div></Fade>
                <hr className='PrimaryBg'/>
            </li>
            <li>
                <hr className='PrimaryBg' />
                <div className="timeline-middle">
                <Fade><img className='h-5' src="/Resources/White_Circle.png" alt="" /></Fade>               </div>
                <Fade right><div className="timeline-end mb-10">
                <time className="text-lg md:text-3xl Subtitle PrimaryColor capitalize">recepción de invitados</time>
                <div className="SecondaryColor md:text-2xl NormalText">17:00 pm</div>
                </div></Fade>
                <Fade left><div className="timeline-start mr-10 mb-14">
                <time className=""><LuWine size={40} /> </time>
                </div></Fade>
                <hr className='PrimaryBg' />
            </li>
            <li>
                <hr className='PrimaryBg' />
                <div className="timeline-middle">
                <Fade><img className='h-5' src="/Resources/White_Circle.png" alt="" /></Fade>
                </div>
                <Fade left><div className="timeline-start text-end mb-10">
                <time className="text-lg md:text-3xl Subtitle PrimaryColor capitalize">vals</time>
                <div className="SecondaryColor md:text-2xl NormalText">18:00 pm</div>
                </div></Fade>
                <Fade right><div className="timeline-end ml-10 mb-14">
                <time className=""><LuUsers size={40} /> </time>
                </div></Fade>
                <hr className='PrimaryBg' />
            </li>
            <li>
                <hr className='PrimaryBg' />
                <div className="timeline-middle">
                <Fade><img className='h-5' src="/Resources/White_Circle.png" alt="" /></Fade>
                </div>
                <Fade right><div className="timeline-end mb-10">
                <time className="text-lg md:text-3xl Subtitle PrimaryColor capitalize">cena</time>
                <div className="SecondaryColor md:text-2xl NormalText">19:00 pm</div>
                </div></Fade>
                <Fade left><div className="timeline-start mr-10 mb-14">
                <time className=""><LuUtensilsCrossed size={40} /> </time>
                </div></Fade>
                <hr className='PrimaryBg' />
            </li>
            <li>
                <hr className='PrimaryBg' />
                <div className="timeline-middle">
                <Fade><img className='h-5' src="/Resources/White_Circle.png" alt="" /></Fade>
                </div>
                <Fade left><div className="timeline-start text-end mb-10">
                <time className="text-lg md:text-3xl Subtitle PrimaryColor capitalize">DJ</time>
                <div className="SecondaryColor md:text-2xl NormalText">20:00 pm</div>
                </div></Fade>
                <Fade right><div className="timeline-end ml-10 mb-14">
                <time className=""><LuPartyPopper size={40} /> </time>
                </div></Fade>
                <hr className='PrimaryBg' />
            </li>
            <li>
                <hr className='PrimaryBg' />
                <div className="timeline-middle">
                <Fade><img className='h-5' src="/Resources/White_Circle.png" alt="" /></Fade>
                </div>
                <Fade right><div className="timeline-end ">
                <time className="text-lg md:text-3xl Subtitle PrimaryColor capitalize">Mariachi</time>
                <div className="SecondaryColor md:text-2xl NormalText">23:00 pm</div>
                </div></Fade>
                <Fade left><div className="timeline-start mr-10 mb-5">
                <time className=""><LuMusic size={40} /> </time>
                </div></Fade>
                <hr className='PrimaryBg' />
            </li>
        </ul>
    </div>
  )
}

export default Itinerary