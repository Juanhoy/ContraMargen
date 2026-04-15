import { Eye, Heart, Calendar, Download } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Se añadió 'v1/' que Cloudinary suele requerir para carpetas con espacios
const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1/Obras%20Contra%20Margen%20Edicion%201/';

export default function ArtesVisuales() {
  const artworks = [
    {
      id: 1,
      title: 'DIMENSIÓN ESPIRITUAL',
      artist: 'ISABELLA ZAPATA',
      medium: 'Pintura',
      year: '2026',
      image: `${CLOUDINARY_BASE_URL}IsabellaZapata-DimensionEspiritual.png`,
      views: 2341,
      likes: 189,
    },
    {
      id: 2,
      title: 'ESCULTURA 1',
      artist: 'JUAN VERDEZA',
      medium: 'Escultura',
      year: '2025',
      image: `${CLOUDINARY_BASE_URL}JuanVerdeza-Escultura1.png`,
      views: 1876,
      likes: 234,
    },
    {
      id: 3,
      title: 'HABITANDO LA MEMORIA 1',
      artist: 'MÓNICA ÁLVAREZ',
      medium: 'Instalación',
      year: '2026',
      image: `${CLOUDINARY_BASE_URL}MonicaAlvarez-Habitandolamemoria1.png`,
      views: 3102,
      likes: 412,
    },
    {
      id: 4,
      title: 'ARCANO MAYOR',
      artist: 'PAOLA QUINTERO',
      medium: 'Pintura',
      year: '2025',
      image: `${CLOUDINARY_BASE_URL}PaolaQuintero-ArcanoMayor.png`,
      views: 2547,
      likes: 298,
    },
    {
      id: 5,
      title: 'CONTENERSE',
      artist: 'LA MALACARA',
      medium: 'Pintura',
      year: '2025',
      image: `${CLOUDINARY_BASE_URL}LaMalacara-Contenerse.png`,
      views: 1923,
      likes: 167,
    },
    {
      id: 6,
      title: 'LA SEPARACIÓN',
      artist: 'PAOLA QUINTERO',
      medium: 'Pintura',
      year: '2026',
      // Codificación URL para la 'ó' (%C3%B3) vital para que la imagen cargue
      image: `${CLOUDINARY_BASE_URL}PaolaQuintero-LaSeparaci%C3%B3n.png`,
      views: 4231,
      likes: 523,
    },
  ];

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 bg-surface-container-low">
        <div className="container mx-auto">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-6 block">
            Curaduría Visual
          </span>
          <h1 className="display-lg mb-8">
            ARTES VISUALES.
          </h1>
          <p className="body-lg max-w-2xl text-foreground/70">
            Explorando las fronteras de la expresión visual contemporánea a través
            de una lente crítica y vanguardista.
          </p>
        </div>
      </section>

      {/* Featured Essay Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-primary block">
              Ensayo Destacado
            </span>
            <h2 className="text-4xl md:text-5xl leading-[0.9]">
              EL ARTE DIGITAL Y LA DEMOCRATIZACIÓN DE LA CREACIÓN.
            </h2>
            <p className="body-lg text-foreground/70 border-l-4 border-primary pl-8 py-4">
              En la última década, hemos sido testigos de una transformación radical en la forma
              en que se crea, se distribuye y se consume el arte. Las herramientas digitales han
              abierto nuevas posibilidades para artistas de todo el mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-24 bg-surface-container px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-5xl lowercase leading-none tracking-tighter">
              galería.
            </h2>
            <div className="flex flex-wrap gap-4">
              {['Todo', 'Pintura', 'Escultura', 'Digital', 'Fotografía'].map((filter) => (
                <button
                  key={filter}
                  className={`text-[10px] uppercase tracking-widest font-bold transition-all px-4 py-2 ${filter === 'Todo'
                    ? 'bg-primary text-white'
                    : 'text-foreground/40 hover:text-primary'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {artworks.map((artwork) => (
              <article
                key={artwork.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg mb-6">
                  <ImageWithFallback
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest font-bold">
                        <span className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          {artwork.views}
                        </span>
                        <span className="flex items-center gap-2">
                          <Heart className="w-4 h-4" />
                          {artwork.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-primary block">
                    {artwork.artist}
                  </span>
                  <h3 className="text-xl leading-tight group-hover:text-primary transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="body-lg text-foreground/40 text-xs">
                    {artwork.medium} • {artwork.year}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary py-32 px-4 text-white">
        <div className="container mx-auto max-w-2xl text-center space-y-8">
          <h2 className="text-5xl leading-[0.9]">
            ¿ERES ARTISTA VISUAL?
          </h2>
          <p className="body-lg text-white/80">
            Comparte tu trabajo con nuestra comunidad. Envíanos tu portafolio y
            forma parte de la próxima edición de Contra Margen.
          </p>
          <button className="h-16 px-12 bg-white text-primary uppercase tracking-widest text-xs font-bold hover:translate-y-[-4px] transition-transform">
            Enviar propuesta
          </button>
        </div>
      </section>
    </div>
  );
}