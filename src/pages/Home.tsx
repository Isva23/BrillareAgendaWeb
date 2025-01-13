import { useEffect, useState } from "react";
import { useFirestoreServicesCollection } from "../hooks/useFirestoreServices";
import { ServicesType } from "../types/mainTypes";
import Header from "../Components/Header";
import CarrouselNow from "../Components/CarrouselNow";
import Services from "../Components/Services";
import Paquetes from "../Components/Paquetes";
import Promos from "../Components/Promos";
import Footer from "../Components/Footer";
import LoadingModal from "../Components/LoadingModal";

const Home = () => {
  const { data: service, isLoading, error } = useFirestoreServicesCollection('services');
  const [serviciosUser, setServiciosUser] = useState<ServicesType[]>([]);
  const [paquetes, setPaquetes] = useState<ServicesType[]>([]);
  const [promos, setPromos] = useState<ServicesType[]>([]);

  useEffect(() => {
    const servicios: ServicesType[] = [];
    const paquetesTemp: ServicesType[] = [];
    const promosTemp: ServicesType[] = [];

    service.forEach((item) => {
      switch (item.category) {
        case "servicio":
          servicios.push(item);
          break;
        case "paquete":
          paquetesTemp.push(item);
          break;
        case "promo":
          promosTemp.push(item);
          break;
      }
    });

    setServiciosUser(servicios);
    setPaquetes(paquetesTemp);
    setPromos(promosTemp);
  }, [service]);

  if (isLoading) return <LoadingModal isOpen={isLoading}/>
  if (error) return <p>Error al cargar servicios: {error.message}</p>;
  
  return (
    <>
      <Header />
      <CarrouselNow />
      <Services data={serviciosUser} />
      <Paquetes data={paquetes} />
      <Promos data={promos} />
      <Footer />
    </>
  );
};

export default Home;
