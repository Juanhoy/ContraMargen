import { Link, useLocation } from 'react-router';
import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/logo.jpg';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/publicaciones', label: 'Ediciones' },
    { path: '/artes-visuales', label: 'Artes Visuales' },
    { path: '/sala-de-lectura', label: 'Sala de lectura' },
    { path: '/musica', label: 'Música' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Contra Margen Logo" 
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative transition-all uppercase tracking-widest text-[12px] font-bold ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground/60 hover:text-primary'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Search/User Actions */}
          <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-surface-container-low transition-colors">
              <Search className="w-5 h-5 text-foreground/60" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-surface-container-low transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-8 pt-4 bg-surface border-t border-outline-variant">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-4 px-6 uppercase tracking-widest text-xs font-bold transition-all ${
                    location.pathname === item.path
                      ? 'bg-primary text-white'
                      : 'text-foreground/60 hover:bg-surface-container-low'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
