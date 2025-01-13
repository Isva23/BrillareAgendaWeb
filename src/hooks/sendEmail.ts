import emailjs from "emailjs-com";

export const enviarCorreo = async (
  serviceId: string,
  templateId: string,
  parametros: Record<string, any>,
  userId: string
) => {
  try {
    const respuesta = await emailjs.send(serviceId, templateId, parametros, userId);
    console.log("Correo enviado exitosamente:", respuesta.status, respuesta.text);
    return { success: true };
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return { success: false, error };
  }
};
