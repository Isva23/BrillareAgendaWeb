import React, { useState, useEffect } from "react";
import { useAgenda } from "../hooks/useAgenda";
import Swal from "sweetalert2";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Estilos del calendario
import "../styles/calendar.css"; // Personalización con Tailwind

export default function Calendario() {
  const { addAppointment, getAppointmentsByDate } = useAgenda();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<Date | any>(null);
  const [time, setTime] = useState("");
  const [disabledTimes, setDisabledTimes] = useState<string[]>([]);
  const [disabledDates, setDisabledDates] = useState<Date[]>([]);

  const availableTimes = ["02:00 PM", "05:00 PM", "08:00 PM"]; // Intervalos de 2 horas
  const availableTimesSaturday = ["09:00 AM", "12:00 PM", "03:00 PM", "06:00 PM"];

  const today = new Date();
  const twoMonthsFromNow = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());

  // Validar citas ocupadas al seleccionar una fecha
  useEffect(() => {
    const fetchAppointments = async () => {
      if (date) {
        const formattedDate = date.toISOString().split("T")[0];
        const appointments = await getAppointmentsByDate(formattedDate);

        // Bloquear horarios ya ocupados
        const occupiedTimes = appointments.map((appointment) => appointment.time);
        setDisabledTimes(occupiedTimes);

        // Bloquear el día completo si todos los horarios están ocupados
        if (occupiedTimes.length === availableTimes.length) {
          setDisabledDates((prev) => [...prev, date]);
        }
      }
    };

    if (date) {
      fetchAppointments();
    }
  }, [date]);

  // Validar días bloqueados (domingos y días sin disponibilidad)
  const isDateDisabled = ({ date }: { date: Date }) => {
    const day = date.getDay();
    const formattedDate = date.toISOString().split("T")[0];
    return (
      day === 0 || // Bloquear domingos
      disabledDates.some((d) => d.toISOString().split("T")[0] === formattedDate)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !date || !time) {
      Swal.fire("Error", "Por favor completa todos los campos", "error");
      return;
    }

    const formattedDate = date.toISOString().split("T")[0];
    const appointment = { name, email, date: formattedDate, time };

    // Guardar cita y enviar correo
    const result = await addAppointment(appointment);

    if (result.success) {
      Swal.fire("Éxito", "La cita se registró correctamente", "success");
      setName("");
      setEmail("");
      setDate(null);
      setTime("");
    } else {
      Swal.fire("Error", result.message || "No se pudo guardar la cita", "error");
    }
  };

  return (
    <section className="max-w-4xl mx-auto mt-[64px] p-6 bg-pink-100 rounded-lg shadow-lg h-screen md:h-screen">
      <h1 className="text-3xl font-bold text-center text-pink-500 mb-6 font-poppins">Agendar Cita</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Calendario */}
        <div>
          <h2 className="text-xl font-semibold text-pink-500 mb-4 font-poppins">Selecciona una fecha:</h2>
          <Calendar
            onChange={setDate}
            value={date}
            tileDisabled={isDateDisabled}
            minDate={today} // Fecha mínima: hoy
            maxDate={twoMonthsFromNow} // Fecha máxima: dos meses desde hoy
            className="react-calendar"
          />
        </div>

        {/* Formulario */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-poppins text-pink-700 mb-2 max-sm:text-lg">Nombre</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-white rounded-md p-2 font-poppins text-sm h-[50px]"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label className="block text-pink-700 font-poppins mb-2 max-sm:text-lg">Correo Electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-white rounded-md p-2 font-poppins text-sm h-[50px]"
                placeholder="Ingresa tu correo"
              />
            </div>
            <div>
              <label className="block text-pink-700 font-poppins mb-2 max-sm:text-lg">Hora</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border border-white rounded-md p-2 font-poppins text-sm bg-white h-[50px]"
              >
                <option value="">Selecciona una hora</option>
                {(date && date.getDay() === 6 ? availableTimesSaturday : availableTimes).map((hour) => (
                  <option
                    key={hour}
                    value={hour}
                    disabled={disabledTimes.includes(hour)}
                    className={disabledTimes.includes(hour) ? "text-gray-400" : ""}
                  >
                    {hour}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 h-[55px] font-poppins"
            >
              Agendar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
