import { Link, useLocation } from 'react-router';
import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Contra Margen' },
    { path: '/publicaciones', label: 'Publicaciones' },
    { path: '/artes-visuales', label: 'Artes Visuales' },
    { path: '/artes-escritas', label: 'Artes Escritas' },
    { path: '/musica', label: 'Música' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-[#FFC000]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="relative">
              <h1 
                className="text-3xl m-0 tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Contra Margen
              </h1>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#FFC000]"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative transition-colors font-['Manrope',sans-serif] ${
                  location.pathname === item.path
                    ? 'text-[#212121]'
                    : 'text-[#A35765] hover:text-[#212121]'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#FFC000]"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Search Icon */}
          <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-5 h-5 text-[#A35765]" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#212121]" />
            ) : (
              <Menu className="w-6 h-6 text-[#212121]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 mt-2">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg font-['Manrope',sans-serif] transition-colors ${
                    location.pathname === item.path
                      ? 'bg-[#FFC000] text-[#212121]'
                      : 'text-[#A35765] hover:bg-gray-100'
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
