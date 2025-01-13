import { useEffect, useState } from 'react';
import { ServicesType } from '../types/mainTypes';
import AnimatedButton from './AnimatedButton';
import { useNavigate } from "react-router-dom";

interface promosProp {
  data : ServicesType[]
}

export default function Promos({data}:promosProp) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  const handdleClickAgendar = () => {
    navigate("/agenda"); // Navega de regreso a la agenda
  }
  return (
    <section className="mt-[70px]">
      <h2 className="text-2xl font-poppins font-medium text-center mb-5">Promos</h2>
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((promo, index) => (
            <div
              key={index}
              className="w-full md:flex md:space-x-0 text-pretty md:text-start flex-shrink-0"
            >
              <img
                src={promo.imageBase64}
                alt={promo.name}
                className="md:w-[50%] h-[450px] w-full transition-all duration-1000 ease-in-out object-cover"
              />
              <div className="md:w-[50%] w-full bg-pink-300 items-center flex">
                <div className="px-[50px] md:w-[80%] mt-5 md:mt-0">
                  <h3 className="text-lg font-poppins font-medium">{promo.date}</h3>
                  <h3 className="text-3xl font-poppins font-medium mb-4">{promo.name}</h3>
                  <p className="text-lg font-poppins font-light">
                    {promo.description} aprovecha esta oferta agenda ya tu cita!
                  </p>
                  <p className="font-poppins text-white font-bold p-2 text-2xl">${promo.price}</p>
                  <div className="flex mt-5 mb-[40px] justify-end md:mb-0">
                    <AnimatedButton text="AGENDAR" onPress={handdleClickAgendar}/>
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
