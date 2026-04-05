import { BookOpen, User, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ArtesEscritas() {
  const writings = [
    {
      id: 1,
      title: 'FRAGMENTOS DE UN DIÁLOGO IMPOSIBLE',
      author: 'SOFÍA MENDOZA',
      type: 'Poesía',
      readTime: '5 min',
      excerpt: 'Te busco en los silencios entre palabras, / en esos espacios que la lengua no nombra. / Construyo puentes con metáforas rotas / y cruzo hacia ti, inevitable naufragio.',
      image: 'https://images.unsplash.com/photo-1598738865218-7809c17181c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMHBvZXRyeSUyMHJlYWRpbmd8ZW58MXx8fHwxNzc1MzQ1Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'CRÓNICAS DEL DESARRAIGO',
      author: 'MIGUEL HERRERA',
      type: 'Ensayo',
      readTime: '12 min',
      excerpt: 'La memoria es un territorio en disputa. Cada recuerdo, un campo de batalla donde se enfrentan la nostalgia y el olvido, la ficción y la verdad.',
      image: 'https://images.unsplash.com/photo-1570626742839-59acd9822944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0ZXIlMjBkZXNrJTIwdHlwZXdyaXRlciUyMG5vdGVib29rfGVufDF8fHx8MTc3NTM0NTM4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'LA CIUDAD DE LAS PALABRAS PERDIDAS',
      author: 'LAURA JIMÉNEZ',
      type: 'Cuento',
      readTime: '8 min',
      excerpt: 'Había una vez una ciudad donde las palabras caían como lluvia. Los habitantes las recogían en frascos de cristal, guardándolas para momentos especiales.',
      image: 'https://images.unsplash.com/photo-1631891256090-0042b3784a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBsaXRlcmF0dXJlJTIwc2hlbHZlc3xlbnwxfHx8fDE3NzUzNDUzODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const featuredPoem = {
    title: 'CONTRA EL TIEMPO',
    author: 'ELENA VARGAS',
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
            ARTES ESCRITAS.
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
                  Poema Destacado
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
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFjayUyMG9mJTIwYm9va3MlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzc1MzQ2MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Escritura"
                  className="w-full aspect-[3/4] object-contain"
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
                <div className="w-full md:w-1/2 aspect-square overflow-hidden bg-surface">
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
