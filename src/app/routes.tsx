import { createBrowserRouter } from 'react-router';
import { Outlet } from 'react-router';
import { Header } from './components/Header';
import Home from './pages/Home';
import Publicaciones from './pages/Publicaciones';
import ArtesVisuales from './pages/ArtesVisuales';
import ArtesEscritas from './pages/ArtesEscritas';
import Musica from './pages/Musica';
import Contacto from './pages/Contacto';

function Root() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="bg-[#212121] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 
                className="text-2xl mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Contra Margen
              </h3>
              <p 
                className="text-white/70"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                Revista de arte, literatura y cultura contemporánea.
              </p>
            </div>
            <div>
              <h4 
                className="mb-4 font-['Manrope',sans-serif]"
              >
                Secciones
              </h4>
              <ul className="space-y-2 text-white/70 font-['Manrope',sans-serif]">
                <li><a href="/publicaciones" className="hover:text-[#FFC000] transition-colors">Publicaciones</a></li>
                <li><a href="/artes-visuales" className="hover:text-[#FFC000] transition-colors">Artes Visuales</a></li>
                <li><a href="/artes-escritas" className="hover:text-[#FFC000] transition-colors">Artes Escritas</a></li>
                <li><a href="/musica" className="hover:text-[#FFC000] transition-colors">Música</a></li>
              </ul>
            </div>
            <div>
              <h4 
                className="mb-4 font-['Manrope',sans-serif]"
              >
                Conecta
              </h4>
              <ul className="space-y-2 text-white/70 font-['Manrope',sans-serif]">
                <li><a href="/contacto" className="hover:text-[#FFC000] transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-[#FFC000] transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-[#FFC000] transition-colors">Colabora</a></li>
              </ul>
            </div>
            <div>
              <h4 
                className="mb-4 font-['Manrope',sans-serif]"
              >
                Síguenos
              </h4>
              <ul className="space-y-2 text-white/70 font-['Manrope',sans-serif]">
                <li><a href="#" className="hover:text-[#FFC000] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#FFC000] transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-[#FFC000] transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p 
              className="text-white/70 font-['Manrope',sans-serif]"
            >
              © 2026 Contra Margen. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 
          className="text-6xl text-[#FFC000] mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          404
        </h1>
        <p 
          className="text-2xl text-[#212121] mb-8"
          style={{ fontFamily: 'Newsreader, serif' }}
        >
          Página no encontrada
        </p>
        <a
          href="/"
          className="inline-block bg-[#FFC000] text-[#212121] px-8 py-3 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif]"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'publicaciones', Component: Publicaciones },
      { path: 'artes-visuales', Component: ArtesVisuales },
      { path: 'artes-escritas', Component: ArtesEscritas },
      { path: 'musica', Component: Musica },
      { path: 'contacto', Component: Contacto },
      { path: '*', Component: NotFound },
    ],
  },
]);
