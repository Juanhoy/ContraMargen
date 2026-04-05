import { Play, Music2, Headphones, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Musica() {
  const artists = [
    {
      id: 1,
      name: 'LOS ERRANTES',
      genre: 'Indie / Folk Experimental',
      description: 'Una exploración sonora de las narrativas migrantes y los espacios de tránsito que definen la identidad contemporánea.',
      image: 'https://images.unsplash.com/photo-1767462420057-e8dce9448e4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGJhbmQlMjBjb25jZXJ0JTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzc1MzQ1NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tracks: 12,
      featured: true,
    },
    {
      id: 2,
      name: 'ANALÓGICO',
      genre: 'Jazz / Neo-Soul',
      description: 'Fusión de ritmos afrolatinos con improvisación jazzística contemporánea.',
      image: 'https://images.unsplash.com/photo-1768935434604-2301398d92d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbXVzaWNpYW4lMjBzYXhvcGhvbmUlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NzUzMDc3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tracks: 8,
      featured: false,
    },
    {
      id: 3,
      name: 'PULSE CODE',
      genre: 'Electronic / Ambient',
      description: 'Paisajes sonoros que exploran la intersección entre lo orgánico y lo digital.',
      image: 'https://images.unsplash.com/photo-1712530930151-9483e1b489b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBwcm9kdWNlciUyMHN0dWRpb3xlbnwxfHx8fDE3NzUzNDU0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tracks: 15,
      featured: false,
    },
  ];

  const interviews = [
    {
      id: 1,
      title: 'EN CONVERSACIÓN CON LOS ERRANTES',
      subtitle: 'SOBRE MÚSICA, MIGRACIÓN Y MEMORIA',
      excerpt: 'Una charla profunda sobre cómo el desarraigo se convierte en materia prima para la creación sonora.',
      date: '28 MARZO 2026',
    },
    {
      id: 2,
      title: 'EL RENACIMIENTO DEL JAZZ LATINO',
      subtitle: 'CON LOS MIEMBROS DE ANALÓGICO',
      excerpt: 'Exploramos las raíces afrolatinas del jazz y su reinvención en el siglo XXI.',
      date: '15 MARZO 2026',
    },
  ];

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-surface-container-low">
        <div className="container mx-auto">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-6 block">
             Paisaje Sonoro
          </span>
          <h1 className="display-lg mb-8 text-primary">
            MÚSICA.
          </h1>
          <p className="body-lg max-w-2xl text-foreground/70">
            Explorando los sonidos que habitan los márgenes. Entrevistas, 
            reseñas y selecciones curadas de la vanguardia musical.
          </p>
        </div>
      </section>

      {/* Featured Artist Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
          {artists.filter(a => a.featured).map(artist => (
            <div key={artist.id} className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
               <div className="lg:col-span-7 relative">
                  <div className="aspect-[16/9] overflow-hidden">
                     <ImageWithFallback
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                      />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-primary p-12 text-white hidden lg:block">
                     <Play className="w-12 h-12 fill-white" />
                  </div>
               </div>
               <div className="lg:col-span-5 space-y-8">
                  <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-primary block">
                    Artista Destacado
                  </span>
                  <h2 className="display-lg text-foreground leading-[0.85]">
                    {artist.name}.
                  </h2>
                  <p className="body-lg text-foreground/60 leading-relaxed italic">
                    {artist.description}
                  </p>
                  <div className="pt-8 flex flex-col sm:flex-row gap-6">
                    <button className="h-16 px-10 bg-primary text-white uppercase tracking-widest text-[10px] font-bold hover:translate-y-[-4px] transition-transform flex items-center justify-center gap-4">
                      ESCUCHAR AHORA <Play className="w-4 h-4 fill-white" />
                    </button>
                    <button className="h-16 px-10 border-2 border-outline text-foreground uppercase tracking-widest text-[10px] font-bold hover:bg-foreground hover:text-white transition-all">
                      VER PERFIL
                    </button>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artist Grid Section */}
      <section className="py-32 bg-surface-container px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl lowercase leading-none tracking-tighter">
              archivo.
            </h2>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-primary">
               EXPLORAR TODO EL CATÁLOGO <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {artists.filter(a => !a.featured).map((artist) => (
              <article key={artist.id} className="group space-y-6">
                <div className="aspect-square overflow-hidden bg-surface relative">
                   <ImageWithFallback
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-primary block">
                    {artist.genre}
                  </span>
                  <h3 className="text-2xl leading-tight group-hover:text-primary transition-colors">
                    {artist.name}
                  </h3>
                  <button className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-foreground/40 hover:text-primary transition-colors">
                     CONECTAR <Headphones className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interviews Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
           <div className="max-w-4xl space-y-20">
              <div className="space-y-6">
                 <h2 className="text-6xl lowercase tracking-tighter leading-none">
                    conversaciones.
                 </h2>
                 <p className="body-lg text-foreground/40 max-w-xl">
                    Profundizamos en el proceso creativo y la filosofía de los artistas 
                    que están transformando el panorama sonoro.
                 </p>
              </div>

              <div className="space-y-24">
                {interviews.map((interview) => (
                  <article key={interview.id} className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start group">
                    <div className="md:col-span-2 text-[10px] uppercase tracking-[0.3em] font-bold text-primary py-2 border-t-2 border-primary">
                       {interview.date}
                    </div>
                    <div className="md:col-span-10 space-y-6">
                       <h3 className="text-4xl leading-[0.9] group-hover:text-primary transition-colors">
                          {interview.title}
                       </h3>
                       <p className="text-xs uppercase tracking-widest font-bold text-foreground/40">
                          {interview.subtitle}
                       </p>
                       <p className="body-lg text-foreground/70 leading-relaxed italic border-l-4 border-surface-container pl-10 py-2">
                          "{interview.excerpt}"
                       </p>
                       <button className="text-[10px] uppercase tracking-widest font-bold text-foreground border-b-2 border-primary pb-2 inline-flex items-center gap-6">
                          LEER ENTREVISTA <ArrowRight className="w-4 h-4" />
                       </button>
                    </div>
                  </article>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-container py-32 px-4 text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="display-lg leading-[0.85]">
            PLAYLIST <br /> <span className="text-foreground">MENSUAL.</span>
          </h2>
          <p className="body-lg text-white/80 max-w-2xl mx-auto">
            Suscríbete para recibir nuestra selección mensual de música que habita 
            los márgenes, directamente en tu correo.
          </p>
          <div className="pt-8">
            <button className="h-16 px-16 bg-white text-primary uppercase tracking-widest text-[10px] font-bold hover:bg-foreground hover:text-white transition-all">
              Suscríbete ahora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
