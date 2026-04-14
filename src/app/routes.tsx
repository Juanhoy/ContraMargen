import { createBrowserRouter, Link, Outlet, useLocation } from 'react-router';
import { Header } from './components/Header';
import { useEffect } from 'react';
import Home from './pages/Home';
import Publicaciones from './pages/Publicaciones';
import ArtesVisuales from './pages/ArtesVisuales';
import SalaDeLectura from './pages/SalaDeLectura';
import Musica from './pages/Musica';
import Contacto from './pages/Contacto';
import logo from '@/assets/logo.jpg';

function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="bg-surface pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Contra Margen" className="h-6 w-auto" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground/40">Editorial Excellence</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
              <Link to="#" className="text-[10px] uppercase tracking-widest font-bold text-foreground/60 hover:text-primary transition-colors">Política de Privacidad</Link>
              <Link to="#" className="text-[10px] uppercase tracking-widest font-bold text-foreground/60 hover:text-primary transition-colors">Términos de Servicio</Link>
              <Link to="#" className="text-[10px] uppercase tracking-widest font-bold text-foreground/60 hover:text-primary transition-colors">Colaboraciones</Link>
              <Link to="#" className="text-[10px] uppercase tracking-widest font-bold text-foreground/60 hover:text-primary transition-colors">Boletín</Link>
              <Link to="/contacto" className="text-[10px] uppercase tracking-widest font-bold text-foreground/60 hover:text-primary transition-colors">Contacto</Link>
            </nav>
          </div>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">
              © 2026 THE DIGITAL CURATOR. EXCELENCIA EDITORIAL EN EL ARTE.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center space-y-8">
        <h1 className="text-9xl text-primary leading-none">
          404
        </h1>
        <p className="text-xs uppercase tracking-[0.5em] font-bold text-foreground/60">
          Página no encontrada.
        </p>
        <Link
          to="/"
          className="inline-flex h-16 items-center px-10 bg-primary text-white uppercase tracking-widest text-xs font-bold transition-all"
        >
          Volver al Inicio
        </Link>
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
      { path: 'sala-de-lectura', Component: SalaDeLectura },
      { path: 'musica', Component: Musica },
      { path: 'contacto', Component: Contacto },
      { path: '*', Component: NotFound },
    ],
  },
]);
