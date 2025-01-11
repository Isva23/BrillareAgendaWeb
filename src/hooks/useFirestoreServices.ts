import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config'; // Ruta al archivo de configuración
import { ServicesType } from '../types/mainTypes';


export function useFirestoreServicesCollection(collectionName: string) {
  const [data, setData] = useState<ServicesType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));

        const docsArray: ServicesType[] = querySnapshot.docs.map((doc) => {
          const docData = doc.data();

          // Asegurar que los datos tienen todos los campos de ServicesType
          return {
            id: doc.id,
            category: docData.category || 'N/A', // Valor predeterminado si falta
            date: docData.date || 'N/A',
            description: docData.description || 'N/A',
            imageBase64: docData.imageBase64 || '', // Si es opcional o vacío
            name: docData.name || 'Unnamed',
            price: typeof docData.price === 'number' ? docData.price : 0, // Validar que sea un número
          };
        });

        setData(docsArray);
      } catch (err) {
        console.error('Error al obtener datos:', err);
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [collectionName]);

  return { data, isLoading, error };
}
