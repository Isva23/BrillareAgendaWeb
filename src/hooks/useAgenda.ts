import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";
import { enviarCorreo } from "./sendEmail";
import { Appointment } from "../types/mainTypes";


const serviceId = "service_hbf1kvk"; // Reemplaza con tu Service ID
const userId = "vQVcF6u2Bhl7on2o6"; // Reemplaza con tu User ID
const templateUsuario = "template_kkr02zu"; // ID del template para el usuario
const templateCliente = "template_yqjm1c7"; // ID del template para el cliente

export const useAgenda = () => {
  const addAppointment = async (cita: Appointment) => {
    try {
      // Verificar si ya existe una cita en la misma fecha y hora
      const q = query(
        collection(db, "appointments"),
        where("date", "==", cita.date),
        where("time", "==", cita.time)
      );

      const citasExistentes = await getDocs(q);
      if (!citasExistentes.empty) {
        return { success: false, message: "Ya existe una cita en este horario." };
      }

      // Guardar la cita en la base de datos
      const docRef = await addDoc(collection(db, "appointments"), cita);

      // Enviar correo al usuario
      const correoUsuario = await enviarCorreo(
        serviceId,
        templateUsuario,
        {
          to_name: cita.name, // Nombre del usuario
          date: cita.date, // Fecha de la cita
          time: cita.time, // Hora de la cita
          email: cita.email
        },
        userId
      );

      if (!correoUsuario.success) {
        console.error("Error al enviar correo al usuario:", correoUsuario.error);
      }

      // Enviar correo al cliente
      const correoCliente = await enviarCorreo(
        serviceId,
        templateCliente,
        {
          to_name: "Lu", // Nombre del cliente (quien recibe las citas)
          from_name: cita.name, // Nombre del usuario que agenda
          from_email: cita.email, // Email del usuario que agenda
          date: cita.date, // Fecha de la cita
          time: cita.time, // Hora de la cita
          email: 'lupi7968@gmail.com', // Correo del cliente
        },
        userId
      );

      if (!correoCliente.success) {
        console.error("Error al enviar correo al cliente:", correoCliente.error);
      }

      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("Error al guardar la cita: ", error);
      return { success: false, error };
    }
  };
  const getAppointmentsByDate = async (date: string) => {
    try {
      const q = query(collection(db, "appointments"), where("date", "==", date));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => doc.data() as Appointment);
    } catch (error) {
      console.error("Error al obtener citas: ", error);
      return [];
    }
  };

  return { addAppointment, getAppointmentsByDate };

};
