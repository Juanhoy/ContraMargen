import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const featuredArticles = [
    {
      id: 1,
      category: 'Artes Visuales',
      title: 'LA NUEVA VANGUARDIA DIGITAL',
      excerpt: 'Exploramos las corrientes artísticas que están redefiniendo los límites de la expresión visual en la era post-internet.',
      image: 'https://images.unsplash.com/photo-1723721229325-b286656e768a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBleGhpYml0aW9uJTIwZ2FsbGVyeXxlbnwxfHx8fDE3NzUzNDUyOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/artes-visuales',
    },
    {
      id: 2,
      category: 'Artes Escritas',
      title: 'POESÍA EN LOS MÁRGENES',
      excerpt: 'Una colección de voces que habitan los espacios intermedios entre la tradición y la experimentación literaria.',
      image: 'https://images.unsplash.com/photo-1591079071536-b005da4a9677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2V0cnklMjBib29rJTIwd3JpdGluZyUyMGxpdGVyYXR1cmV8ZW58MXx8fHwxNzc1MzQ1Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/artes-escritas',
    },
  ];

  const featuredArtist = {
    name: 'ELÍAS THORNE',
    bio: 'Thorne es un creador multidisciplinar afincado en Madrid. Su obra se centra en la "honestidad de los materiales" y las cualidades arquitectonicas del arte digital.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMG1vZGVybiUyMGFydGlzdHxlbnwxfHx8fDE3NzUzNDU3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    quote: '"La ausencia de color permite que la geometría hable por sí misma. Cuando eliminamos la distracción, queda la arquitectura del alma."'
  };

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl">
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-6 block">
              Curada Colección • Vol. 12
            </span>
            <h1 className="display-lg mb-8 text-foreground leading-[0.85]">
              LA GALERÍA <br /> <span className="text-primary-container">VIVIENTE.</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end gap-12 mt-12">
              <p className="body-lg max-w-lg text-foreground/80">
                Contra Margen transforma la revista tradicional en una galería digital. 
                Aquí, el diseño no compite con el arte; lo enmarca. Una mirada curada 
                a las expresiones que definen nuestra época.
              </p>
              <Link
                to="/publicaciones"
                className="inline-flex h-16 items-center px-10 bg-primary text-white uppercase tracking-widest text-xs font-bold hover:translate-y-[-4px] transition-transform"
              >
                Explorar Última Edición
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Grid Section (Asymmetrical) */}
      <section className="py-24 bg-surface-container-low px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0 items-center">
            {/* Image on left 2/3 */}
            <div className="md:col-span-8 relative">
              <ImageWithFallback
                src={featuredArticles[0].image}
                alt={featuredArticles[0].title}
                className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Overlapping text on right */}
            <div className="md:col-span-5 md:-ml-32 z-10 bg-surface p-10 md:p-16">
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-primary mb-4 block">
                {featuredArticles[0].category}
              </span>
              <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
                {featuredArticles[0].title}
              </h2>
              <p className="body-lg text-foreground/70 mb-8">
                {featuredArticles[0].excerpt}
              </p>
              <Link 
                to={featuredArticles[0].link}
                className="text-xs uppercase tracking-widest font-bold text-primary hover:text-primary-container inline-flex items-center gap-4 transition-colors"
              >
                LEER ARTÍCULO <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Spotlight (Editorial Style) */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-primary block">
                Foco en el Artista
              </span>
              <h2 className="display-lg lowercase text-foreground leading-[0.85]">
                {featuredArtist.name}.
              </h2>
              <div className="bg-primary/5 p-12 relative">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                <p className="italic text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                  {featuredArtist.quote}
                </p>
              </div>
              <p className="body-lg text-foreground/70 max-w-md">
                {featuredArtist.bio}
              </p>
              <button className="h-14 px-12 border-2 border-outline-variant text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-foreground hover:text-white transition-all">
                Ver Portafolio Completo
              </button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src={featuredArtist.image}
                alt={featuredArtist.name}
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-container z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of work (Gallery style) */}
      <section className="py-24 bg-surface-container px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-6xl md:text-8xl lowercase leading-[0.85] tracking-tighter">
              obras de la <br /> <span className="text-primary-container">semana.</span>
            </h2>
            <Link to="/artes-visuales" className="text-xs uppercase tracking-widest font-bold text-foreground border-b-2 border-primary pb-2">
              Ver todas las obras
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-surface hover:opacity-80 transition-opacity cursor-pointer overflow-hidden">
                 <ImageWithFallback
                    src={`https://picsum.photos/seed/${i + 10}/800/800`}
                    alt="Arte de la semana"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter (Brutalist style) */}
      <section className="py-40 px-4 bg-foreground text-surface">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
           <h2 className="display-lg leading-[0.85]">
              ARTE, CURADO <br /> <span className="text-primary-container">DIARIAMENTE.</span>
           </h2>
           <p className="body-lg text-surface/60 max-w-xl mx-auto">
              Únete a más de 50.000 coleccionistas y creadores que reciben nuestras 
              inmersiones editoriales semanales.
           </p>
           <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="TU CORREO ELECTRÓNICO" 
                className="flex-1 bg-surface/5 border-b-2 border-surface/20 px-8 py-5 focus:border-primary-container outline-none uppercase tracking-widest text-[10px] transition-colors"
                required
              />
              <button className="bg-primary-container text-white px-12 py-5 uppercase tracking-widest text-[10px] font-bold hover:bg-white hover:text-foreground transition-all">
                Suscribirse
              </button>
           </form>
        </div>
      </section>
    </div>
  );
}
