import { Play, Music2, Headphones } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Musica() {
  const artists = [
    {
      id: 1,
      name: 'Los Errantes',
      genre: 'Indie / Folk Experimental',
      description: 'Una exploración sonora de las narrativas migrantes y los espacios de tránsito.',
      image: 'https://images.unsplash.com/photo-1767462420057-e8dce9448e4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGJhbmQlMjBjb25jZXJ0JTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzc1MzQ1NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tracks: 12,
      featured: true,
    },
    {
      id: 2,
      name: 'Analógico',
      genre: 'Jazz / Neo-Soul',
      description: 'Fusión de ritmos afrolatinos con improvisación jazzística contemporánea.',
      image: 'https://images.unsplash.com/photo-1768935434604-2301398d92d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbXVzaWNpYW4lMjBzYXhvcGhvbmUlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NzUzMDc3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tracks: 8,
      featured: false,
    },
    {
      id: 3,
      name: 'Pulse Code',
      genre: 'Electronic / Ambient',
      description: 'Paisajes sonoros que exploran la intersección entre lo orgánico y lo digital.',
      image: 'https://images.unsplash.com/photo-1712530930151-9483e1b489b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBwcm9kdWNlciUyMHN0dWRpb3xlbnwxfHx8fDE3NzUzNDU0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tracks: 15,
      featured: false,
    },
    {
      id: 4,
      name: 'Colectivo Vinilo',
      genre: 'Rock / Psicodélico',
      description: 'Rescatando la estética del rock latinoamericano de los 70 con una mirada contemporánea.',
      image: 'https://images.unsplash.com/photo-1615364900858-572bae44ea89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMHBsYXllciUyMG11c2ljfGVufDF8fHx8MTc3NTM0NTQyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      tracks: 10,
      featured: false,
    },
  ];

  const interviews = [
    {
      id: 1,
      title: 'En Conversación con Los Errantes',
      subtitle: 'Sobre música, migración y memoria',
      excerpt: 'Una charla profunda sobre cómo el desarraigo se convierte en materia prima para la creación sonora.',
      date: '28 Marzo 2026',
    },
    {
      id: 2,
      title: 'El Renacimiento del Jazz Latino',
      subtitle: 'Con los miembros de Analógico',
      excerpt: 'Exploramos las raíces afrolatinas del jazz y su reinvención en el siglo XXI.',
      date: '15 Marzo 2026',
    },
    {
      id: 3,
      title: 'Producción en la Era Digital',
      subtitle: 'Pulse Code nos habla de su proceso creativo',
      excerpt: 'De los sintetizadores modulares a los algoritmos: un viaje por la producción electrónica contemporánea.',
      date: '2 Marzo 2026',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764805354851-7933a7116129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMHBlcmZvcm1pbmclMjBsaXZlJTIwY29uY2VydHxlbnwxfHx8fDE3NzUzNDUyOTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Música"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFC000]/90 to-[#E91E63]/90"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 
            className="text-6xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Música
          </h1>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'Newsreader, serif' }}
          >
            Sonidos que desafían géneros y fronteras
          </p>
        </div>
      </section>

      {/* Featured Artist */}
      <section className="container mx-auto px-4 py-20">
        {artists
          .filter((artist) => artist.featured)
          .map((artist) => (
            <div key={artist.id} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="inline-block bg-[#FFC000] text-[#212121] px-4 py-1 rounded-full text-sm font-['Manrope',sans-serif] mb-4">
                  Artista Destacado
                </span>
                <h2 
                  className="text-5xl mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {artist.name}
                </h2>
                <p 
                  className="text-[#E91E63] text-xl mb-4 font-['Manrope',sans-serif]"
                >
                  {artist.genre}
                </p>
                <p 
                  className="text-[#A35765] text-lg leading-relaxed mb-6"
                  style={{ fontFamily: 'Newsreader, serif' }}
                >
                  {artist.description}
                </p>
                <div className="flex items-center gap-2 mb-6 text-[#212121]">
                  <Music2 className="w-5 h-5" />
                  <span className="font-['Manrope',sans-serif]">
                    {artist.tracks} tracks disponibles
                  </span>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-[#FFC000] text-[#212121] px-6 py-3 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif]">
                    <Play className="w-5 h-5" />
                    Escuchar ahora
                  </button>
                  <button className="flex items-center gap-2 border-2 border-[#FFC000] text-[#212121] px-6 py-3 rounded-full hover:bg-[#FFC000] transition-all font-['Manrope',sans-serif]">
                    <Headphones className="w-5 h-5" />
                    Ver perfil
                  </button>
                </div>
              </div>
            </div>
          ))}
      </section>

      {/* Artist Grid */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 
              className="text-4xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Descubre Más Artistas
            </h2>
            <div className="w-24 h-1 bg-[#E91E63]"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {artists.filter((artist) => !artist.featured).map((artist) => (
              <article
                key={artist.id}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <button className="bg-white text-[#212121] px-6 py-2 rounded-full font-['Manrope',sans-serif] inline-flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Reproducir
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 
                    className="text-2xl mb-2 group-hover:text-[#E91E63] transition-colors"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {artist.name}
                  </h3>
                  <p 
                    className="text-[#A35765] mb-3 font-['Manrope',sans-serif]"
                  >
                    {artist.genre}
                  </p>
                  <p 
                    className="text-[#212121] leading-relaxed text-sm mb-4"
                    style={{ fontFamily: 'Newsreader, serif' }}
                  >
                    {artist.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#A35765]">
                    <Music2 className="w-4 h-4" />
                    <span className="font-['Manrope',sans-serif]">
                      {artist.tracks} tracks
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interviews Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12">
          <h2 
            className="text-4xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Entrevistas
          </h2>
          <p 
            className="text-[#A35765] text-lg max-w-2xl"
            style={{ fontFamily: 'Newsreader, serif' }}
          >
            Conversaciones profundas con los artistas que están redefiniendo el paisaje sonoro contemporáneo.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {interviews.map((interview) => (
            <article
              key={interview.id}
              className="group cursor-pointer border-l-4 border-[#FFC000] pl-6 hover:border-[#E91E63] transition-colors"
            >
              <p 
                className="text-sm text-[#A35765] mb-2 font-['Manrope',sans-serif]"
              >
                {interview.date}
              </p>
              <h3 
                className="text-2xl mb-2 group-hover:text-[#E91E63] transition-colors"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {interview.title}
              </h3>
              <h4 
                className="text-lg text-[#A35765] mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {interview.subtitle}
              </h4>
              <p 
                className="text-[#212121] leading-relaxed"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                {interview.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-[#FFC000] to-[#E91E63] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 
            className="text-4xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Playlist Mensual
          </h2>
          <p 
            className="text-white/90 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'Newsreader, serif' }}
          >
            Suscríbete para recibir nuestra selección mensual de música que habita los márgenes.
          </p>
          <button className="bg-white text-[#212121] px-8 py-3 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif]">
            Suscríbete ahora
          </button>
        </div>
      </section>
    </div>
  );
}
