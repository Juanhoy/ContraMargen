import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const featuredArticles = [
    {
      id: 1,
      category: 'Artes Visuales',
      title: 'La Nueva Vanguardia del Arte Contemporáneo',
      excerpt: 'Exploramos las corrientes artísticas que están redefiniendo los límites de la expresión visual en la era digital.',
      image: 'https://images.unsplash.com/photo-1723721229325-b286656e768a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBleGhpYml0aW9uJTIwZ2FsbGVyeXxlbnwxfHx8fDE3NzUzNDUyOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/artes-visuales',
    },
    {
      id: 2,
      category: 'Artes Escritas',
      title: 'Poesía en los Márgenes',
      excerpt: 'Una colección de voces que habitan los espacios intermedios entre la tradición y la experimentación literaria.',
      image: 'https://images.unsplash.com/photo-1591079071536-b005da4a9677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2V0cnklMjBib29rJTIwd3JpdGluZyUyMGxpdGVyYXR1cmV8ZW58MXx8fHwxNzc1MzQ1Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/artes-escritas',
    },
    {
      id: 3,
      category: 'Música',
      title: 'Sonidos Desde el Borde',
      excerpt: 'Entrevistas y análisis de los músicos que están creando el soundtrack de nuestra generación.',
      image: 'https://images.unsplash.com/photo-1764805354851-7933a7116129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMHBlcmZvcm1pbmclMjBsaXZlJTIwY29uY2VydHxlbnwxfHx8fDE3NzUzNDUyOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/musica',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFC000] via-[#ff9500] to-[#E91E63]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-30"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 
            className="text-7xl md:text-8xl mb-6 tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Contra Margen
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95"
            style={{ fontFamily: 'Newsreader, serif' }}
          >
            Revista de arte, literatura y cultura contemporánea
          </p>
          <Link
            to="/publicaciones"
            className="inline-flex items-center gap-2 bg-white text-[#212121] px-8 py-4 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif]"
          >
            Explora las publicaciones
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12">
          <h2 
            className="text-5xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Destacados
          </h2>
          <div className="w-24 h-1 bg-[#FFC000]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <Link
              key={article.id}
              to={article.link}
              className="group"
            >
              <article className="h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span 
                      className="inline-block bg-[#FFC000] text-[#212121] px-4 py-1 rounded-full text-sm font-['Manrope',sans-serif]"
                    >
                      {article.category}
                    </span>
                  </div>
                </div>
                <h3 
                  className="text-2xl mb-3 group-hover:text-[#FFC000] transition-colors"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {article.title}
                </h3>
                <p 
                  className="text-[#A35765] leading-relaxed flex-1"
                  style={{ fontFamily: 'Newsreader, serif' }}
                >
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-4 text-[#212121] font-['Manrope',sans-serif]">
                  Leer más
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-5xl mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Más allá de los límites
            </h2>
            <p 
              className="text-xl text-[#A35765] leading-relaxed mb-6"
              style={{ fontFamily: 'Newsreader, serif' }}
            >
              <em>Contra Margen</em> es un espacio dedicado a explorar las expresiones artísticas 
              que desafían las convenciones y habitan los márgenes de la cultura contemporánea. 
              A través de nuestras publicaciones, celebramos la diversidad de voces y perspectivas 
              que enriquecen el panorama cultural actual.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Link
                to="/artes-visuales"
                className="bg-[#FFC000] text-[#212121] px-6 py-3 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif]"
              >
                Artes Visuales
              </Link>
              <Link
                to="/artes-escritas"
                className="bg-[#E91E63] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif]"
              >
                Artes Escritas
              </Link>
              <Link
                to="/musica"
                className="bg-[#212121] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif]"
              >
                Música
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
