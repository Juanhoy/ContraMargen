import { BookOpen, User, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function SalaDeLectura() {
  const writings = [
    {
      id: 1,
      title: 'DIMENSIÓN ESPIRITUAL',
      author: 'ISABELLA ZAPATA',
      type: 'Poesía',
      readTime: '5 min',
      excerpt: 'Te busco en los silencios entre palabras, / en esos espacios que la lengua no nombra. / Construyo puentes con metáforas rotas / y cruzo hacia ti, inevitable naufragio.',
      image: '/revista/Edicion1/obras/IsabellaZapata-DimensionEspiritual.png',
    },
    {
      id: 2,
      title: 'CONTENERSE',
      author: 'LA MALACARA',
      type: 'Ensayo',
      readTime: '12 min',
      excerpt: 'La memoria es un territorio en disputa. Cada recuerdo, un campo de batalla donde se enfrentan la nostalgia y el olvido, la ficción y la verdad.',
      image: '/revista/Edicion1/obras/LaMalacara-Contenerse.png',
    },
    {
      id: 3,
      title: 'ARCANO MAYOR',
      author: 'PAOLA QUINTERO',
      type: 'Cuento',
      readTime: '8 min',
      excerpt: 'Había una vez una ciudad donde las palabras caían como lluvia. Los habitantes las recogían en frascos de cristal, guardándolas para momentos especiales.',
      image: '/revista/Edicion1/obras/PaolaQuintero-ArcanoMayor.png',
    },
  ];

  const featuredPoem = {
    title: 'HABITANDO LA MEMORIA',
    author: 'MÓNICA ÁLVAREZ',
    lines: [
      'Escribo contra el tiempo,',
      'contra su silencio implacable,',
      'contra la certeza de su paso.',
      '',
      'Las palabras son mi resistencia,',
      'pequeñas victorias efímeras',
      'en una guerra que sé perdida.',
      '',
      'Pero escribo.',
      'Contra todo pronóstico,',
      'contra toda lógica,',
      'escribo.',
    ],
  };

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-surface-container-low">
        <div className="container mx-auto">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-6 block">
             Narrativa y Poesía
          </span>
          <h1 className="display-lg mb-8">
            SALA DE LECTURA.
          </h1>
          <p className="body-lg max-w-2xl text-foreground/70">
            Poesía, narrativa y ensayo que desafían los límites del lenguaje 
            y la convención literaria.
          </p>
        </div>
      </section>

      {/* Featured Poem Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
             <div className="space-y-12">
                <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-primary block">
                   Escrito Destacado
                </span>
                <h2 className="display-lg text-foreground">
                  {featuredPoem.title}.
                </h2>
                <div className="text-2xl leading-loose text-foreground/80 italic space-y-4">
                  {featuredPoem.lines.map((line, index) => (
                    <p key={index}>{line || '\u00A0'}</p>
                  ))}
                </div>
                <div className="pt-8 border-t-2 border-primary w-24">
                   <p className="text-[10px] uppercase tracking-widest font-bold text-primary">
                    POR {featuredPoem.author}
                   </p>
                </div>
             </div>
             <div className="relative pt-20 lg:pt-0">
                <ImageWithFallback
                  src="/revista/Edicion1/obras/MonicaAlvarez-Habitandolamemoria1.png"
                  alt="Escritura"
                  className="w-full aspect-[3/4] object-contain shadow-2xl"
                />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 z-[-1]"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Writings Grid Section */}
      <section className="py-24 bg-surface-container px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl lowercase leading-none tracking-tighter">
              textos recientes.
            </h2>
            <div className="flex flex-wrap gap-4">
              {['Todos', 'Poesía', 'Cuento', 'Ensayo'].map((filter) => (
                <button
                  key={filter}
                  className={`text-[10px] uppercase tracking-widest font-bold transition-all px-4 py-2 ${
                    filter === 'Todos'
                      ? 'bg-primary text-white'
                      : 'text-foreground/40 hover:text-primary'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {writings.map((writing) => (
              <article key={writing.id} className="group flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2 aspect-square overflow-hidden bg-surface shadow-lg">
                   <ImageWithFallback
                      src={writing.image}
                      alt={writing.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-primary">
                    {writing.type} • {writing.readTime}
                  </span>
                  <h3 className="text-3xl leading-tight group-hover:text-primary transition-colors">
                    {writing.title}
                  </h3>
                  <p className="body-lg text-foreground/60 italic leading-relaxed">
                    "{writing.excerpt}"
                  </p>
                  <button className="text-[10px] uppercase tracking-widest font-bold text-foreground border-b-2 border-primary pb-2 inline-flex items-center gap-4">
                     LEER COMPLETO <BookOpen className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-32 px-4 bg-surface-container-high border-t border-outline-variant">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-primary">Recomendado</span>
            <div className="space-y-6">
              <h2 className="display-md lowercase leading-none tracking-tighter">
                evas sin adanes.
              </h2>
              <p className="body-lg text-foreground/60 max-w-xl mx-auto italic">
                Un podcast que habita los silencios y explora la feminidad desde los márgenes de la historia y el arte.
              </p>
            </div>
            
            <a 
              href="https://open.spotify.com/show/your-podcast-id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-6"
            >
              <div className="w-24 h-24 bg-[#1DB954] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shadow-[#1DB954]/20">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-white fill-current">
                   <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.308c-.22.36-.68.473-1.037.253-2.857-1.745-6.45-2.14-10.686-1.173-.41.094-.823-.16-.917-.57-.094-.41.16-.822.57-.916 4.637-1.06 8.607-.613 11.78 1.327.358.22.472.678.253 1.035l.037-.056zm1.464-3.26c-.276.45-.862.593-1.31.32-3.27-2.01-8.255-2.594-12.124-1.417-.506.154-1.04-.136-1.192-.644-.154-.508.136-1.043.644-1.193 4.413-1.34 9.9-1.3 13.654 1.012.448.274.59.86.328 1.31v.012zm.126-3.414c-3.92-2.327-10.38-2.543-14.135-1.403-.6.182-1.24-.162-1.423-.762-.18-.6.164-1.24.762-1.423 4.314-1.31 11.442-1.055 15.903 1.594.54.32.716 1.01.396 1.55-.32.54-1.01.714-1.55.394l-.053.05z"/>
                </svg>
              </div>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground group-hover:text-primary transition-colors">
                Escuchar en Spotify
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Call for Submissions Section */}
      <section className="bg-foreground py-32 px-4 text-surface">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="display-lg leading-[0.85]">
            CONVOCATORIA <br /> <span className="text-primary-container"> ABIERTA.</span>
          </h2>
          <p className="body-lg text-surface/60 max-w-2xl mx-auto">
            Buscamos voces auténticas y arriesgadas. Si tu escritura habita los márgenes, 
            si tus palabras cuestionan, si tu narrativa desafía, queremos leerte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="h-16 px-12 bg-primary-container text-white uppercase tracking-widest text-[10px] font-bold hover:bg-white hover:text-foreground transition-all">
              Enviar texto
            </button>
            <button className="h-16 px-12 border-2 border-surface/20 text-surface uppercase tracking-widest text-[10px] font-bold hover:bg-surface hover:text-foreground transition-all">
              Ver lineamientos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
