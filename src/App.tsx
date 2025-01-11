import { useEffect, useState } from "react"
import CarrouselNow from "./Components/CarrouselNow"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Paquetes from "./Components/Paquetes"
import Promos from "./Components/Promos"
import Services from "./Components/Services"
import { useFirestoreServicesCollection } from "./hooks/useFirestoreServices"
import { useFirestoreCollection } from "./hooks/useFirestoreCollection"
import { ServicesType } from "./types/mainTypes"

function App() {
  const { data:service, isLoading, error } = useFirestoreServicesCollection('services');
  const [serviciosUser,setServiciosUser] = useState<ServicesType[]>([])
  const [paquetes,setPaquetes] = useState<ServicesType[]>([])
  const [promos,setPromos] = useState ([])


  useEffect(() => {
    const servicios: ServicesType[] = []; // Array temporal para acumular los elementos que cumplen la condición
    const paquetesTemp: ServicesType[] = [];
  
    service.forEach((item) => {
      switch (item.category) {
        case 'servicio':
          servicios.push(item);
          break;
        case 'paquete':
          paquetesTemp.push(item);
          break;
      }
    });
  
    setServiciosUser(servicios);
    setPaquetes(paquetesTemp);
  }, [service]);
  
  console.log(paquetes);


  return (
    <>
      <Header/>
      <CarrouselNow/>
      <Services data={serviciosUser}/>
      <Paquetes data={paquetes}/>
      <Promos/>
      <Footer/>
    </>
  )
}

export default App
