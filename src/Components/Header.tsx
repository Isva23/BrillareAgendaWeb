import React, { useState } from 'react';

const Header: React.FC = () => {
  // Estado para manejar la visibilidad del menú móvil
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función para abrir/cerrar el menú móvil
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-pink-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold font-poppins">
          <a href="/">LuBeauty</a>
        </div>

        {/* Navigation Links (Desktop version) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="hover:font-bold hover:border-b-2 hover:border-white transition font-poppins hover:pb-2">
            Servicios
          </a>
          <a href="#appointments" className="hover:font-bold hover:border-b-2 hover:border-white transition font-poppins hover:pb-2">
            Agenda
          </a>
          <a href="#contact" className="hover:font-bold hover:border-b-2 hover:border-white transition font-poppins hover:pb-2">
            Contacto
          </a>
        </nav>

        {/* Action Button (Desktop version) */}
        <div className="max-2xl:hidden">
          <a
            href="#quote"
            className="bg-white text-pink-500 font-semibold py-2 px-4 rounded-lg hover:bg-pink-100 transition font-poppins"
          >
            Cotizar ahora
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Sidebar) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-transform duration-300 ease-in-out"
          onClick={toggleMobileMenu} // Close menu when clicking outside
        >
          <div
            className="w-[250px] h-full backdrop-blur-sm bg-pink-500 bg-opacity-60 p-4 fixed left-0 top-0 transition-transform duration-300 ease-in-out transform"
          >
            <button onClick={toggleMobileMenu} className="text-white text-2xl absolute top-4 right-4">
              &times; {/* Cerrar icono */}
            </button>
            <nav className="flex flex-col space-y-6 mt-12">
              <a href="#services" className="text-white font-poppins hover:text-pink-100">Servicios</a>
              <a href="#appointments" className="text-white font-poppins hover:text-pink-100">Agenda</a>
              <a href="#contact" className="text-white font-poppins hover:text-pink-100">Contacto</a>
            </nav>
          </div>
        </div>
      )}
    </header> 
  );
};

export default Header;
