import React from 'react';
import { motion } from 'framer-motion';
import { ServicesType } from '../types/mainTypes';
import { useFirestoreServicesCollection } from '../hooks/useFirestoreServices';
import LoadingModal from './LoadingModal';
import imageBg from '../assets/ImagesHomes/homeImage1.png'


const ServicesList: React.FC = () => {
  const { data: services, isLoading, error } = useFirestoreServicesCollection('services'); // Ajusta el nombre de tu colección

  // Filtrar servicios por categoría "servicios"
  const filteredServices = services.filter((service) => service.category.toLowerCase() === 'servicio');

  if (isLoading) {
    return <LoadingModal isOpen={isLoading}/>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  if (filteredServices.length === 0) {
    return <div className="text-center text-gray-500 font-poppins">No hay servicios disponibles en esta categoría.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-full mx-auto bg-pink-50 rounded-lg h-full mt-[64px]"
    >
      <div className='relative bg-pink-400 text-white w-full mb-8 py-[100px]'>
        <div className="absolute inset-0">
            <img
              src={imageBg} // Cambia esto por la ruta de tu imagen
              alt="Fondo decorativo"
              className="w-full h-full object-cover blur-md opacity-30"
            />
        </div>
        <div className='relative z-10'>
          <h1 className="text-3xl font-bold text-white text-center font-poppins">Nuestros Servicios</h1>
        </div>
      </div>

      {/* Lista de Servicios */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-poppins text-center max-w-6xl mx-auto"
      >
        {filteredServices.map((service: ServicesType) => (
          <motion.div
            key={service.id}
            className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow p-4 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {service.imageBase64 && (
              <motion.img
                src={service.imageBase64}
                alt={service.name}
                className="w-20 h-20 object-cover rounded-full mb-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
            <h2 className="text-lg font-semibold text-gray-800">{service.name}</h2>
            <p className="text-sm text-gray-500">{service.description}</p>
            <p className="text-sm text-gray-400 italic mb-3">Categoría: {service.category}</p>
            <p className="text-pink-500 font-bold text-lg">${service.price.toFixed(2)}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServicesList;
