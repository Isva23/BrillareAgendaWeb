import React, { useEffect, useState } from 'react';
import imgPromo1 from '../assets/ImagesHomes/uñasPromo1.jpg';
import imgPromo2 from '../assets/ImagesHomes/uñasPromo2.jpg';

export default function Promos() {
  const promos = [
    {
      fecha: '10/01/2025',
      title: 'Promo uñas acrílicas',
      description: 'Promoción de uñas acrílicas de largo 1-3 con diseño sencillo.',
      price: '$250',
      img: imgPromo1,
    },
    {
      fecha: '15/01/2025',
      title: 'Promo pestañas clásicas',
      description: 'Obtén unas pestañas clásicas a precio especial, duración de 3 semanas.',
      price: '$300',
      img: imgPromo2,
    },
    {
      fecha: '20/01/2025',
      title: 'Promo gelish',
      description: 'Manicure con gelish en cualquier color, incluye decoración sencilla.',
      price: '$200',
      img: imgPromo2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [promos.length]);

  return (
    <section className="mt-[70px]">
      <h2 className="text-2xl font-poppins font-medium text-center mb-5">Promos</h2>
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {promos.map((promo, index) => (
            <div
              key={index}
              className="w-full md:flex md:space-x-0 text-pretty md:text-start flex-shrink-0"
            >
              <img
                src={promo.img}
                alt={promo.title}
                className="md:w-[50%] h-[450px] w-full transition-all duration-1000 ease-in-out"
              />
              <div className="md:w-[50%] w-full bg-pink-300 items-center flex">
                <div className="px-[50px] md:w-[80%] mt-5 md:mt-0">
                  <h3 className="text-lg font-poppins font-medium">{promo.fecha}</h3>
                  <h3 className="text-3xl font-poppins font-medium mb-4">{promo.title}</h3>
                  <p className="text-lg font-poppins font-light">
                    {promo.description} aprovecha esta oferta agenda ya tu cita!
                  </p>
                  <p className="font-poppins text-white font-bold p-2 text-2xl">{promo.price}</p>
                  <div className="flex mt-5 mb-[40px] justify-end md:mb-0">
                    <a
                      href=""
                      className="px-[25px] py-[10px] border border-black font-poppins font-medium hover:bg-pink-500 transition hover:text-white hover:border-pink-500"
                    >
                      AGENDAR
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
