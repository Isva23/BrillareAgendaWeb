import { useState, useEffect } from 'react';

import { ServicesType } from '../types/mainTypes';

interface PaquetesProps {
  data : ServicesType[]
}

export default function Paquetes({data}:PaquetesProps) {

  const [currentIndex, setCurrentIndex] = useState(0);


  // Cambio automático de diapositivas cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval); // Limpieza del intervalo
  }, [data.length]);

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
          {data.map((item, index) => (
            <div
              key={index}
              className='w-full flex-shrink-0 p-2'
            >
              <div className='relative group'>
                <img
                  src={item.imageBase64}
                  alt={item.name}
                  className='h-[600px] w-full object-cover rounded-md'
                />
                {/* Contenedor del texto */}
                <div className='absolute rounded-md bottom-0 left-0 right-0 backdrop-blur-sm bg-pink-300 bg-opacity-70 p-20 text-center transition-opacity duration-500 opacity-0 group-hover:opacity-100'>
                  <p className='font-poppins text-xl text-white'>{item.description}</p>
                  <p className='font-poppins text-white font-bold text-2xl mt-3'>${item.price}</p>
                </div>
                {/* Nombre del paquete (siempre visible) */}
                <h3 className='absolute bg-pink-300 rounded-md bg-opacity-70 py-10 bottom-0 md:bottom-[0.5px]  text-center left-0 right-0 text-white font-poppins text-2xl font-medium group-hover:opacity-0 transition-opacity duration-500'>
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores de página */}
        <div className='left-0 right-0 flex justify-center space-x-2'>
          {data.map((_, index) => (
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
