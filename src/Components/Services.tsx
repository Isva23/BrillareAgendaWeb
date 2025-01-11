import { motion } from 'framer-motion';
import { ServicesType } from '../types/mainTypes';

interface ServicesProps {
  data : ServicesType[]
}

export default function Services({data}:ServicesProps) {
  // Variantes de animación para la entrada
  const animationVariants = {
    hidden: { opacity: 0, x: -100 }, // Comienza fuera de la pantalla (izquierda)
    visible: { opacity: 1, x: 0 },  // Se anima a su posición original
  };

  return (
    <section className="bg-pink-100 p-2 text-center">
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
            <img src={item.imageBase64} alt={item.id} className="h-[200px] w-full rounded-lg" />
            <p className="font-poppins text-lg">{item.name}</p>
            <p className="font-poppins">${item.price}</p>
          </motion.div>
        ))}

      </div>

      {/* Botón animado */}
      <button className="mt-[10px] mb-[30px] font-poppins font-bold border px-9 py-3 border-black relative overflow-hidden group hover:border-pink-500">
        <span className="absolute inset-0 bg-pink-500 translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0"></span>
        <span className="relative z-10 text-black group-hover:text-white">VER MÁS</span>
      </button>
    </section>
  );
}
