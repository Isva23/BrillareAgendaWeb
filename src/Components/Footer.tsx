import imageBg from '../assets/ImagesHomes/uñasPromo2.jpg'

export default function Footer() {
    return (
      <footer className="relative bg-pink-400 text-white py-8">
        {/* Fondo difuminado */}
        <div className="absolute inset-0">
          <img
            src={imageBg} // Cambia esto por la ruta de tu imagen
            alt="Fondo decorativo"
            className="w-full h-full object-cover blur-md opacity-30"
          />
        </div>
  
        {/* Contenido del footer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contenedor principal */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            {/* Descripción */}
            <div className="mb-6 md:mb-0">
              <h1 className="text-2xl font-bold font-poppins">Estilo Perfecto</h1>
              <p className="mt-2 text-sm">
                Tu lugar ideal para servicios de estilismo, diseño de cejas y manicure.
              </p>
            </div>
  
            {/* Enlaces de navegación */}
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
              <a href="#home" className="hover:underline text-sm font-poppins">
                Inicio
              </a>
              <a href="#services" className="hover:underline text-sm font-poppins">
                Servicios
              </a>
              <a href="#about" className="hover:underline text-sm font-poppins">
                Nosotros
              </a>
              <a href="#contact" className="hover:underline text-sm font-poppins">
                Contacto
              </a>
            </div>
  
            {/* Redes sociales y contacto */}
            <div className="mt-6 md:mt-0 flex flex-col space-y-4">
              <a
                href="https://www.instagram.com/lugonzalezbeauty___/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline text-sm font-poppins"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.338 3.608 1.314.975.975 1.251 2.241 1.313 3.608.059 1.265.071 1.645.071 4.849s-.012 3.584-.071 4.849c-.062 1.366-.338 2.633-1.313 3.608-.975.975-2.241 1.251-3.608 1.313-1.265.059-1.645.071-4.849.071s-3.584-.012-4.849-.071c-1.366-.062-2.633-.338-3.608-1.313-.975-.975-1.251-2.241-1.313-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.071-4.849c.062-1.366.338-2.633 1.313-3.608.975-.975 2.241-1.251 3.608-1.313C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.015 7.052.072c-1.664.07-3.128.501-4.308 1.681C1.564 3.117 1.134 4.581 1.065 6.246.997 7.526.982 7.935.982 12c0 4.065.015 4.474.072 5.754.07 1.664.501 3.128 1.681 4.308 1.18 1.18 2.644 1.61 4.308 1.681 1.28.057 1.689.072 5.754.072s4.474-.015 5.754-.072c1.664-.07 3.128-.501 4.308-1.681 1.18-1.18 1.61-2.644 1.681-4.308.057-1.28.072-1.689.072-5.754s-.015-4.474-.072-5.754c-.07-1.664-.501-3.128-1.681-4.308-1.18-1.18-2.644-1.61-4.308-1.681C15.474.015 15.065 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.325c-2.3 0-4.162-1.862-4.162-4.162s1.862-4.162 4.162-4.162 4.162 1.862 4.162 4.162-1.862 4.162-4.162 4.162zm6.406-10.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
                Instagram
              </a>
              <a href="tel:+523141654868" className="flex items-center hover:underline text-sm font-poppins">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2 fill-current"
                    viewBox="0 0 512 512">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                </svg>
                +52 3141654868
              </a>
            </div>
          </div>
  
          {/* Línea divisoria */}
          <hr className="my-6 border-white/30" />
  
          {/* Leyenda */}
          <div className="text-center text-sm font-poppins">
            © 2024 LuBeauty. Desarrollado por {''}
            <a
              href="https://isaaclopez-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200 font-poppins"
            >
              Isaac Lopez
            </a>
          </div>
        </div>
      </footer>
    );
  }
  