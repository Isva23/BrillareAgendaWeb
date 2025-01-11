import { useState, useEffect } from 'react';
import { useFirestoreCollection } from '../hooks/useFirestoreCollection';

export default function CarrouselNow() {
  const { data: images, isLoading, error } = useFirestoreCollection('imagesNow');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar automáticamente de slide cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [images.length]);

  // Cambiar manualmente al slide seleccionado
  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  if (isLoading) {
    return <p className="text-center">Cargando imágenes...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error al cargar imágenes.</p>;
  }

  return (
    <div className="h-auto w-full relative">
      {/* Imágenes del carrusel */}
      <div className="h-full w-full overflow-hidden">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.imageBase64}
            alt={`Slide ${index + 1}`}
            className={`object-fill w-full h-[250px] md:h-[500px] transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 absolute top-0'
            }`}
          />
        ))}
      </div>

      {/* Indicadores (círculos) */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-pink-500' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
