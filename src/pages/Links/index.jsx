import { Link } from "react-router-dom";
import Logo from "../../Assets/logo2.0.jpg";
import Whatsapp from "../../Assets/whatsapp.png";
import Loc from "../../Assets/mapa.png";
import Catalogo from "../../Assets/catalogo.png";
import "../../index.css";

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header className="flex flex-col items-center py-8">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-300 mb-6">
          <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
        </div>

        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-widest text-orange-300 rubik-dirt-bold">
            BARBEARIA DO
            <br /> GUETO
          </h1>
        </div>

        <div className="w-80 h-0.5 bg-gray-200 mt-4"></div>

        <div>
          <p className="text-center mt-5 text-xl md:text-2xl text-gray-200">
            Links <br /> <span className="text-xl">Importantes</span>
          </p>
        </div>

        <div className="mt-4 -mb-8 animate-bounce">
          <span className="text-[#5AD5E7] text-3xl">↓</span>
        </div>
      </header>

      <div className="py-3 px-4 max-w-3xl mx-auto flex-grow">
        <div className="grid gap-4">
          <a
            href="https://wa.me/5585992224729?text=Venho%20através%20do%20Instagram%20e%20quero%20marcar%20um%20horário"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 lg:p-5 bg-gray-800 rounded-2xl shadow-md hover:bg-gray-700 transition-transform transform hover:scale-105"
          >
            <img
              src={Whatsapp}
              alt="WhatsApp"
              className="w-14 h-14 mr-3 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">Acesse WhatsApp</h2>
              <p className="text-gray-300 text-sm">
                Agende seu horário com facilidade pelo WhatsApp
              </p>
            </div>
          </a>

          <a
            href="https://maps.app.goo.gl/56HyJmJEu9sVAxKK6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 lg:p-5 bg-gray-800 rounded-2xl shadow-md hover:bg-gray-700 transition-transform transform hover:scale-105"
          >
            <img
              src={Loc}
              alt="Localização"
              className="w-14 h-14 mr-3 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">Localização</h2>
              <p className="text-gray-300 text-sm">
                Veja como chegar até nossa barbearia
              </p>
            </div>
          </a>

          <Link
            to="/catalogo"
            className="flex items-center p-4 lg:p-5 mb-2 bg-gray-800 rounded-2xl shadow-md hover:bg-gray-700 transition-transform transform hover:scale-105"
          >
            <img
              src={Catalogo}
              alt="Catálogo"
              className="w-14 h-14 mr-3 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">Catálogo</h2>
              <p className="text-gray-300 text-sm">
                Confira nossos serviços e escolha seu próximo visual
              </p>
            </div>
          </Link>
        </div>
      </div>

      <footer className="bg-gray-900 py-6">
        <div className="text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Arthur Macêdo. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;