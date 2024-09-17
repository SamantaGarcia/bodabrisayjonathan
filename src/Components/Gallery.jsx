import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import content from '../content';

const Gallery = () => {

  // Estado para mantener el índice de la imagen actual
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  // Función para manejar el clic en una imagen
  const handleClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setCurrentImageIndex(null);
  };

  return (
    <div className="container mx-auto px-2 PrimaryBg">
      <h2 className="py-10 subtitleColor MainTitle text-center text-3xl capitalize">Galería de Imágenes</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        {content.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            onClick={() => handleClick(index)}
            className="cursor-pointer"
          />
        ))}
      </div>

      




      {/* Modal para mostrar la imagen en tamaño completo */}
      {currentImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50" onClick={closeModal}>
          <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black opacity-80" onClick={closeModal}></div>
          <div className="modal-container w-full md:max-w-4xl mx-auto z-50 overflow-y-auto">
            <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50" onClick={closeModal}>
              <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M18 1.8L16.2 0 9 7.2 1.8 0 0 1.8 7.2 9 0 16.2 1.8 18 9 10.8 16.2 18 18 16.2 10.8 9z"/>
              </svg>
              <span className="text-sm">(Cerrar)</span>
            </div>
            <img
              src={content.images[currentImageIndex]}
              alt={`Imagen ${currentImageIndex + 1}`}
              className="max-h-screen"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
