import { useState, useEffect } from 'react';

import uñasPromo from '../assets/ImagesHomes/uñasPromo1.jpg';
import uñasPromo2 from '../assets/ImagesHomes/uñasPromo2.jpg';
import uñasPromo3 from '../assets/ImagesHomes/uñasPromo3.avif';

export default function Paquetes() {
  const paquetesPromos = [
    { title: 'Paquete 1', price: '$200', description: 'GEL SEMIPERMANENTE', img: `${uñasPromo}` },
    { title: 'Paquete 2', price: '$400', description: 'UÑAS DEL 1 AL 3 CON DISEÑO SENCILLO', img: `${uñasPromo2}` },
    { title: 'Paquete 3', price: '$550', description: 'UÑAS DEL 1 AL 3 CON DISEÑO A ELEGIR', img: `${uñasPromo3}` },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  // Cambio automático de diapositivas cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % paquetesPromos.length);
    }, 3000);

    return () => clearInterval(interval); // Limpieza del intervalo
  }, [paquetesPromos.length]);

  return (
    <section className='bg-white w-[90%] mx-auto mt-[70px] mb-[100px] md:w-8/12'>
      <h2 className='text-center text-2xl font-poppins font-medium mb-5'>Paquetes</h2>

      {/* Contenedor del carrusel */}
      <div className='relative w-full overflow-hidden'>
        {/* Desplazamiento de los paquetes */}
        <div
          className='flex transition-transform duration-500'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {paquetesPromos.map((item, index) => (
            <div
              key={index}
              className='w-full flex-shrink-0 p-2'
            >
              <div className='relative group'>
                <img
                  src={item.img}
                  alt={item.img}
                  className='h-[400px] w-full object-cover rounded-md'
                />
                {/* Contenedor del texto */}
                <div className='absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-pink-300 bg-opacity-60 p-5 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100'>
                  <p className='font-poppins'>{item.description}</p>
                  <p className='font-poppins text-white font-medium'>{item.price}</p>
                </div>
                {/* Nombre del paquete (siempre visible) */}
                <h3 className='absolute bottom-5 left-0 right-0 text-black font-poppins text-lg font-medium group-hover:opacity-0 transition-opacity duration-500'>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de página */}
        <div className='left-0 right-0 flex justify-center space-x-2'>
          {paquetesPromos.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                currentIndex === index ? 'bg-pink-500' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
