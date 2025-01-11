// ServiceQuotation.tsx
import React, { useState } from 'react';

type Service = {
  id: number;
  name: string;
  price: number;
};

const servicesData: Service[] = [
  { id: 1, name: 'Extensiones de pestañas', price: 500 },
  { id: 2, name: 'Manicure', price: 300 },
  { id: 3, name: 'Pedicure', price: 400 },
  { id: 4, name: 'Corte de cabello', price: 250 },
];

const ServiceQuotation: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectService = (service: Service) => {
    const isSelected = selectedServices.find((s) => s.id === service.id);

    if (isSelected) {
      const updatedServices = selectedServices.filter((s) => s.id !== service.id);
      setSelectedServices(updatedServices);
      setTotalPrice((prevTotal) => prevTotal - service.price);
    } else {
      setSelectedServices((prev) => [...prev, service]);
      setTotalPrice((prevTotal) => prevTotal + service.price);
    }
  };

  const isServiceSelected = (serviceId: number) => {
    return selectedServices.some((service) => service.id === serviceId);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Cotización de Servicios</h1>
      <div className="space-y-4">
        {servicesData.map((service) => (
          <div
            key={service.id}
            onClick={() => handleSelectService(service)}
            className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer ${
              isServiceSelected(service.id) ? 'bg-teal-100 border-teal-500' : 'bg-white border-gray-300'
            }`}
          >
            <span className="text-lg">{service.name}</span>
            <span className="font-semibold text-lg">${service.price}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-200 rounded-lg text-center">
        <span className="text-xl font-bold">Total: ${totalPrice}</span>
      </div>
    </div>
  );
};

export default ServiceQuotation;
