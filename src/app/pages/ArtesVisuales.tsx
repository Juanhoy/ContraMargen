import { Eye, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ArtesVisuales() {
  const artworks = [
    {
      id: 1,
      title: 'Realidades Digitales',
      artist: 'Marina Vásquez',
      medium: 'Arte Digital / NFT',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1646299220293-3ae516d9c275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwTkZUJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzUzNDUzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      views: 2341,
      likes: 189,
    },
    {
      id: 2,
      title: 'Texturas del Alma',
      artist: 'Roberto Campos',
      medium: 'Instalación Textil',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1774560825316-148963c8e88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwYXJ0JTIwZmFicmljJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3NTM0NTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      views: 1876,
      likes: 234,
    },
    {
      id: 3,
      title: 'Fragmentos de Memoria',
      artist: 'Ana Morales',
      medium: 'Collage / Mixed Media',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1768483561026-12da6f4c318f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG1lZGlhJTIwY29sbGFnZSUyMGNvbnRlbXBvcmFyeXxlbnwxfHx8fDE3NzUzNDUzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      views: 3102,
      likes: 412,
    },
    {
      id: 4,
      title: 'Geometría Emocional',
      artist: 'Luis Torres',
      medium: 'Pintura Acrílica',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1716889033775-b93550f8247b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwY29sb3JmdWwlMjBtb2Rlcm58ZW58MXx8fHwxNzc1MzQ1Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      views: 2547,
      likes: 298,
    },
    {
      id: 5,
      title: 'Esculturas del Presente',
      artist: 'Carmen Silva',
      medium: 'Escultura / Instalación',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1773799038951-5c0f777246b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY3VscHR1cmUlMjBpbnN0YWxsYXRpb24lMjBhcnR8ZW58MXx8fHwxNzc1MzQ1MzI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      views: 1923,
      likes: 167,
    },
    {
      id: 6,
      title: 'Urbano y Crudo',
      artist: 'Diego Ramírez',
      medium: 'Arte Urbano',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1695221605217-171ebd060159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBhcnQlMjBncmFmZml0aSUyMHVyYmFufGVufDF8fHx8MTc3NTIzNTkxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      views: 4231,
      likes: 523,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63] via-[#c2185b] to-[#ad1457]">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 
            className="text-6xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Artes Visuales
          </h1>
          <p 
            className="text-xl text-white/90 max-w-2xl"
            style={{ fontFamily: 'Newsreader, serif' }}
          >
            Explorando las fronteras de la expresión visual contemporánea
          </p>
        </div>
      </section>

      {/* Featured Essay */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block bg-[#FFC000] text-[#212121] px-4 py-1 rounded-full text-sm font-['Manrope',sans-serif] mb-4">
              Ensayo Destacado
            </span>
            <h2 
              className="text-4xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              El Arte Digital y la Democratización de la Creación
            </h2>
            <p 
              className="text-[#A35765] leading-relaxed"
              style={{ fontFamily: 'Newsreader, serif' }}
            >
              En la última década, hemos sido testigos de una transformación radical en la forma 
              en que se crea, se distribuye y se consume el arte. Las herramientas digitales han 
              abierto nuevas posibilidades para artistas de todo el mundo, permitiendo que voces 
              previamente marginadas encuentren su espacio en el panorama artístico contemporáneo.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 flex justify-between items-center">
          <h2 
            className="text-4xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Galería
          </h2>
          <div className="flex gap-2">
            {['Todo', 'Pintura', 'Escultura', 'Digital', 'Fotografía'].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full font-['Manrope',sans-serif] transition-all ${
                  filter === 'Todo'
                    ? 'bg-[#FFC000] text-[#212121]'
                    : 'bg-gray-100 text-[#A35765] hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <article
              key={artwork.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <ImageWithFallback
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-4 text-sm font-['Manrope',sans-serif]">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {artwork.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {artwork.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 
                className="text-xl mb-1 group-hover:text-[#E91E63] transition-colors"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {artwork.title}
              </h3>
              <p 
                className="text-[#A35765] mb-1 font-['Manrope',sans-serif]"
              >
                {artwork.artist}
              </p>
              <p 
                className="text-sm text-[#A35765]/70 font-['Manrope',sans-serif]"
              >
                {artwork.medium} • {artwork.year}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#FFC000] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 
            className="text-4xl text-[#212121] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            ¿Eres artista visual?
          </h2>
          <p 
            className="text-[#212121]/80 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'Newsreader, serif' }}
          >
            Comparte tu trabajo con nuestra comunidad. Envíanos tu portafolio y 
            forma parte de la próxima edición de Contra Margen.
          </p>
          <button className="bg-[#212121] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif]">
            Enviar propuesta
          </button>
        </div>
      </section>
    </div>
  );
}
