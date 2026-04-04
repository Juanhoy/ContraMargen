import { BookOpen, User, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ArtesEscritas() {
  const writings = [
    {
      id: 1,
      title: 'Fragmentos de un Diálogo Imposible',
      author: 'Sofía Mendoza',
      type: 'Poesía',
      readTime: '5 min',
      excerpt: 'Te busco en los silencios entre palabras, / en esos espacios que la lengua no nombra. / Construyo puentes con metáforas rotas / y cruzo hacia ti, inevitable naufragio.',
      image: 'https://images.unsplash.com/photo-1598738865218-7809c17181c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMHBvZXRyeSUyMHJlYWRpbmd8ZW58MXx8fHwxNzc1MzQ1Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Crónicas del Desarraigo',
      author: 'Miguel Herrera',
      type: 'Ensayo',
      readTime: '12 min',
      excerpt: 'La memoria es un territorio en disputa. Cada recuerdo, un campo de batalla donde se enfrentan la nostalgia y el olvido, la ficción y la verdad.',
      image: 'https://images.unsplash.com/photo-1570626742839-59acd9822944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0ZXIlMjBkZXNrJTIwdHlwZXdyaXRlciUyMG5vdGVib29rfGVufDF8fHx8MTc3NTM0NTM4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'La Ciudad de las Palabras Perdidas',
      author: 'Laura Jiménez',
      type: 'Cuento',
      readTime: '8 min',
      excerpt: 'Había una vez una ciudad donde las palabras caían como lluvia. Los habitantes las recogían en frascos de cristal, guardándolas para momentos especiales.',
      image: 'https://images.unsplash.com/photo-1631891256090-0042b3784a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBsaXRlcmF0dXJlJTIwc2hlbHZlc3xlbnwxfHx8fDE3NzUzNDUzODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Reflexiones sobre el Margen',
      author: 'Carlos Rivera',
      type: 'Ensayo',
      readTime: '10 min',
      excerpt: 'Escribir desde el margen no es una elección, es una condición. Es habitar el espacio donde termina lo legible y comienza lo incierto.',
      image: 'https://images.unsplash.com/photo-1591079071536-b005da4a9677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2V0cnklMjBib29rJTIwd3JpdGluZyUyMGxpdGVyYXR1cmV8ZW58MXx8fHwxNzc1MzQ1Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const featuredPoem = {
    title: 'Contra el Tiempo',
    author: 'Elena Vargas',
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#A35765] via-[#8d4753] to-[#612a35] py-20">
        <div className="container mx-auto px-4">
          <h1 
            className="text-6xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Artes Escritas
          </h1>
          <p 
            className="text-xl text-white/90 max-w-2xl"
            style={{ fontFamily: 'Newsreader, serif' }}
          >
            Poesía, narrativa y ensayo que desafían los límites del lenguaje
          </p>
        </div>
      </section>

      {/* Featured Poem */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#E91E63] text-white px-4 py-1 rounded-full text-sm font-['Manrope',sans-serif] mb-6">
            Poema Destacado
          </span>
          <h2 
            className="text-4xl mb-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {featuredPoem.title}
          </h2>
          <p 
            className="text-[#A35765] mb-8 font-['Manrope',sans-serif]"
          >
            por {featuredPoem.author}
          </p>
          <div 
            className="text-xl leading-loose mb-12"
            style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic' }}
          >
            {featuredPoem.lines.map((line, index) => (
              <p key={index} className="text-[#212121]">
                {line || '\u00A0'}
              </p>
            ))}
          </div>
          <div className="w-24 h-1 bg-[#FFC000] mx-auto"></div>
        </div>
      </section>

      {/* Writings Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 
            className="text-4xl mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Publicaciones Recientes
          </h2>
          <div className="flex gap-2">
            {['Todos', 'Poesía', 'Cuento', 'Ensayo', 'Crónica'].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full font-['Manrope',sans-serif] transition-all ${
                  filter === 'Todos'
                    ? 'bg-[#E91E63] text-white'
                    : 'bg-gray-100 text-[#A35765] hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {writings.map((writing) => (
            <article
              key={writing.id}
              className="group cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src={writing.image}
                  alt={writing.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-[#FFC000] text-[#212121] px-3 py-1 rounded-full text-sm font-['Manrope',sans-serif]">
                    {writing.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 
                  className="text-2xl mb-3 group-hover:text-[#E91E63] transition-colors"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {writing.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-[#A35765] mb-4 font-['Manrope',sans-serif]">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {writing.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {writing.readTime}
                  </span>
                </div>
                <p 
                  className="text-[#212121] leading-relaxed italic"
                  style={{ fontFamily: 'Newsreader, serif' }}
                >
                  "{writing.excerpt}"
                </p>
                <button className="mt-4 flex items-center gap-2 text-[#212121] hover:text-[#E91E63] transition-colors font-['Manrope',sans-serif]">
                  <BookOpen className="w-4 h-4" />
                  Leer completo
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Call for Submissions */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-4xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Convocatoria Abierta
            </h2>
            <p 
              className="text-xl text-[#A35765] leading-relaxed mb-8"
              style={{ fontFamily: 'Newsreader, serif' }}
            >
              Buscamos voces auténticas y arriesgadas. Si tu escritura habita los márgenes, 
              si tus palabras cuestionan, si tu narrativa desafía, queremos leerte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#E91E63] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif]">
                Enviar texto
              </button>
              <button className="border-2 border-[#E91E63] text-[#E91E63] px-8 py-3 rounded-full hover:bg-[#E91E63] hover:text-white transition-all font-['Manrope',sans-serif]">
                Ver lineamientos
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
