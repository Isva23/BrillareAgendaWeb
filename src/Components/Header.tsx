import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-pink-500 text-white shadow-md fixed top-0 left-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-poppins">
          <a href="/">LuBeauty</a>
        </div>

        {/* Navigation Links (Desktop version) */}
        <nav className="hidden md:flex space-x-6">
          <button className="hover:font-bold hover:border-b-2 hover:border-white transition font-poppins hover:pb-2" onClick={()=> navigate('/')}>
            Inicio
          </button>
          <button
            onClick={() => navigate('/agenda')}
            className="hover:font-bold hover:border-b-2 hover:border-white transition font-poppins hover:pb-2">
            Agendar
          </button>
          <button  
            onClick={() => navigate('/servicios')}
            className="hover:font-bold hover:border-b-2 hover:border-white transition font-poppins hover:pb-2">
            Servicios
          </button>
        </nav>

        {/* Action Button (Desktop version) */}
        <div className="max-2xl:hidden">
          <button
            onClick={() => navigate("/cotizar")}
            className="bg-white text-pink-500 font-semibold py-2 px-4 rounded-lg hover:bg-pink-100 transition font-poppins"
          >
            Cotizar ahora
          </button>
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
          onClick={toggleMobileMenu}
        >
          <div
            className="w-[250px] h-full backdrop-blur-sm bg-pink-500 bg-opacity-60 p-4 fixed left-0 top-0 transition-transform duration-300 ease-in-out transform"
          >
            <button onClick={toggleMobileMenu} className="text-white text-2xl absolute top-4 right-4">
              &times; {/* Cerrar icono */}
            </button>
            <nav className="flex flex-col space-y-6 mt-12 justify-items-start items-start">
              <button onClick={()=>navigate("/")} className="text-white font-poppins hover:text-pink-300 text-lg">Inicio</button>
              <button onClick={()=>navigate("/agenda")} className="text-white font-poppins hover:text-pink-300 text-lg">Agendar</button>
              <button onClick={()=>navigate("/servicios")} className="text-white font-poppins hover:text-pink-300 text-lg">Servicios</button>
              <button onClick={()=>navigate("/cotizar")} className="text-white font-poppins hover:text-pink-300 text-lg">Cotizar</button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
