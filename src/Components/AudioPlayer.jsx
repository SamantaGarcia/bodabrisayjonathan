import React, { useState, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Fade from 'react-reveal/Fade';
import content from '../content';


const AudioPlayer = () => {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.audioEl.current.pause();
    } else {
      audioRef.current.audioEl.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Fade bottom>
    <div className='mt-10 px-5 gap-5 flex place-items-center lg:justify-center'>
        
        <div className='text-center w-60 custom-audio-player'>
            <ReactAudioPlayer
              ref={audioRef}
              src="/Resources/audio.mp3"
              autoPlay={true}
              controls
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              style={{ display: 'none' }} // Ocultar el reproductor de audio

          />
          <button onClick={handlePlayPause} className={isPlaying ? 'spin' : ''}>
            <img src={content.img_vinilo} className=' h-28' />
            {isPlaying}
          </button>

        </div>
        <div>
          <p className='SecondaryColor text-md NormalText text-justify'>Toca el vinilo para escuchar o pausar nuestra canción</p>
        </div>
    </div>
    </Fade>
  )
}

export default AudioPlayer