import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const featuredArticles = [
    {
      id: 1,
      category: 'Artes Visuales',
      title: 'DIMENSIÓN ESPIRITUAL',
      excerpt: 'Exploramos las corrientes artísticas que están redefiniendo los límites de la expresión visual en la era post-internet.',
      image: 'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217793/IsabellaZapata-DimensionEspiritual_jm6h83.png',
      link: '/artes-visuales',
    },
    {
      id: 2,
      category: 'Sala de lectura',
      title: 'HABITANDO LA MEMORIA',
      excerpt: 'Una colección de voces que habitan los espacios intermedios entre la tradición y la experimentación literaria.',
      image: 'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217785/MonicaAlvarez-Habitandolamemoria1_stcpfj.png',
      link: '/sala-de-lectura',
    },
  ];

  const featuredArtist = {
    name: 'LA MALACARA',
    bio: 'La Malacara explora la intersección entre el cuerpo, la memoria y la resistencia visual a través de texturas experimentales y collage contemporáneo.',
    image: 'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776220172/LaMalacara-Contenerse_qpts6w.png',
    quote: '"El arte no es un acto solitario, es una conversación silente entre miradas que comparten un mismo lienzo."'
  };

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl">
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-6 block">
              Curada Colección • Vol. 02
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
      <section className="py-32 bg-surface-container-low px-4 sm:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center relative min-h-[600px]">
            {/* Image on left */}
            <div className="w-full lg:w-[65%] shrink-0">
              <div className="aspect-[16/9] lg:aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={featuredArticles[0].image}
                  alt={featuredArticles[0].title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>

            {/* Text Overlay */}
            <div className="w-full lg:w-[45%] lg:-ml-[10%] z-10 bg-surface p-12 lg:p-20 shadow-2xl space-y-8 mt-[-40px] lg:mt-0">
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-primary block">
                {featuredArticles[0].category}
              </span>
              <h2 className="display-lg leading-[0.85] lowercase tracking-tight">
                {featuredArticles[0].title}.
              </h2>
              <p className="body-lg text-foreground/60 italic leading-relaxed">
                "{featuredArticles[0].excerpt}"
              </p>
              <Link
                to={featuredArticles[0].link}
                className="inline-flex items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-foreground border-b-2 border-primary pb-4 hover:gap-8 transition-all"
              >
                LEER ARTÍCULO <ArrowRight className="w-5 h-5 text-primary" />
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
            {[
              'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217794/JuanVerdeza-Escultura1_rrgsf5.png',
              'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217785/JuanVerdeza-Escultura2_z34pwr.png',
              'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217783/MonicaAlvarez-Habitandolamemoria2_xa03em.png',
              'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217783/MonicaAlvarez-Habitandolamemoria3_bbhtbz.png',
              'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217797/PaolaQuintero-LaSeparaci%C3%B3n_inaomk.png',
              'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217794/obra-06_nnvuzn.png',
            ].map((img, i) => (
              <div key={i} className="aspect-square bg-surface hover:opacity-80 transition-opacity cursor-pointer overflow-hidden">
                <ImageWithFallback
                  src={img}
                  alt="Arte de la semana"
                  className="w-full h-full object-cover transition-all duration-700"
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