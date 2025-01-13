import { motion } from 'framer-motion';
import { ServicesType } from '../types/mainTypes';
import AnimatedButton from './AnimatedButton';

interface ServicesProps {
  data : ServicesType[]
}

export default function Services({data}:ServicesProps) {
  // Variantes de animación para la entrada
  const animationVariants = {
    hidden: { opacity: 0, x: -100 }, // Comienza fuera de la pantalla (izquierda)
    visible: { opacity: 1, x: 0 },  // Se anima a su posición original
  };
  const handleNavigate = () => {
    window.location.href = "https://www.instagram.com/lugonzalezbeauty___/"; // Reemplaza con el enlace deseado
  };

  return (
    <section className="bg-pink-100 p-2 text-center" id='services'>
      <h2 className="text-2xl font-poppins font-medium mt-[70px] mb-[30px]">Servicios</h2>
      <div className="w-[90%] mx-auto md:flex md:space-x-5 md:8/12">
        {/* Servicio 1 */}
        {data.map((item,index) => (
          <motion.div
            key={index}
            className="rounded-lg bg-gray-50 p-3 mb-4 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // La animación se activa cuando el 50% es visible
            transition={{ duration: 0.5, delay: 0.1 }} // Animación suave
            variants={animationVariants}
          >
            <img src={item.imageBase64} alt={item.id} className="h-[400px] md:h-[300px] w-full rounded-lg object-cover" />
            <div className='text-left px-2'>
              <p className="font-poppins text-xl pt-3 font-medium">{item.name}</p>
              <p className="font-poppins mt-2 text-lg">${item.price}</p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Botón animado */}
      <AnimatedButton text="VER MÁS" onPress={handleNavigate} />
      
    </section>
  );
}
