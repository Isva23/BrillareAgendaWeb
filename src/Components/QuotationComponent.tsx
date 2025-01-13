import React, { useState } from 'react';
import { ServicesType } from '../types/mainTypes';
import { useFirestoreServicesCollection } from '../hooks/useFirestoreServices';
import LoadingModal from './LoadingModal';

const QuotationComponent: React.FC = () => {
  const { data: services, isLoading, error } = useFirestoreServicesCollection('services'); // Ajusta el nombre de tu colección
  const [selectedServices, setSelectedServices] = useState<ServicesType[]>([]);
  const [total, setTotal] = useState(0);

  // Manejar selección de servicios
  const handleServiceSelect = (service: ServicesType) => {
    const isSelected = selectedServices.some((item) => item.id === service.id);

    if (isSelected) {
      // Si ya está seleccionado, lo eliminamos
      const updatedServices = selectedServices.filter((item) => item.id !== service.id);
      setSelectedServices(updatedServices);
      setTotal(updatedServices.reduce((sum, item) => sum + item.price, 0));
    } else {
      // Si no está seleccionado, lo añadimos
      const updatedServices = [...selectedServices, service];
      setSelectedServices(updatedServices);
      setTotal(updatedServices.reduce((sum, item) => sum + item.price, 0));
    }
  };

  // Función para desplazarse a la sección de cotización
  const scrollToQuoteSection = () => {
    const quoteSection = document.getElementById('cotizar');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <LoadingModal isOpen={isLoading} />;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  return (
    <section className="max-w-4xl mx-auto p-4 bg-pink-50 rounded-lg shadow-md mt-[64px] relative">
      <h1 className="text-2xl font-bold text-pink-500 mb-4 text-center font-poppins">Escoge los servicios</h1>

      {/* Lista de Servicios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 font-poppins text-center">
        {services.map((service) => (
          <div
            key={service.id}
            className={`border rounded-lg p-4 flex flex-col items-center ${
              selectedServices.some((item) => item.id === service.id)
                ? 'bg-pink-100 border-pink-500'
                : 'bg-white border-gray-200'
            }`}
            onClick={() => handleServiceSelect(service)}
          >
            {service.imageBase64 && (
              <img
                src={service.imageBase64}
                alt={service.name}
                className="w-16 h-16 object-cover rounded-full mb-2"
              />
            )}
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{service.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{service.description}</p>
            <p className="text-pink-500 font-bold mb-2">${service.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Resumen de Cotización */}
      <div id="cotizar" className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-pink-500 mb-2">Resumen de Cotización</h2>
        {selectedServices.length === 0 ? (
          <p className="text-gray-500">No se han seleccionado servicios.</p>
        ) : (
          <ul className="mb-4">
            {selectedServices.map((service) => (
              <li key={service.id} className="text-gray-700 flex justify-between">
                <span>{service.name}</span>
                <span>${service.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between font-bold text-lg text-pink-500">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Botón Flotante */}
      {selectedServices.length > 0 && (
        <button
          onClick={scrollToQuoteSection}
          className="fixed bottom-6 right-6 md:hidden bg-pink-500 text-white rounded-full p-4 shadow-lg hover:bg-pink-600 focus:outline-none"
        >
          Cotizar
        </button>
      )}
    </section>
  );
};

export default QuotationComponent;
