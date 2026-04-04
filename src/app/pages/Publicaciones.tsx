import { Calendar, Download } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Publicaciones() {
  const publications = [
    {
      id: 1,
      title: 'Contra Margen Vol. 12',
      subtitle: 'Fronteras del Arte Contemporáneo',
      date: 'Marzo 2026',
      cover: 'https://images.unsplash.com/photo-1721491702252-dafcd4169a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBtYWdhemluZSUyMHB1YmxpY2F0aW9uJTIwbGF5b3V0fGVufDF8fHx8MTc3NTM0NTMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Esta edición explora las fronteras entre lo físico y lo digital, lo real y lo imaginado.',
    },
    {
      id: 2,
      title: 'Contra Margen Vol. 11',
      subtitle: 'Voces Emergentes',
      date: 'Enero 2026',
      cover: 'https://images.unsplash.com/photo-1773799038951-5c0f777246b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY3VscHR1cmUlMjBpbnN0YWxsYXRpb24lMjBhcnR8ZW58MXx8fHwxNzc1MzQ1MzI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Un especial dedicado a los artistas que están redefiniendo el panorama cultural.',
    },
    {
      id: 3,
      title: 'Contra Margen Vol. 10',
      subtitle: 'Arte Urbano y Espacio Público',
      date: 'Noviembre 2025',
      cover: 'https://images.unsplash.com/photo-1695221605217-171ebd060159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBhcnQlMjBncmFmZml0aSUyMHVyYmFufGVufDF8fHx8MTc3NTIzNTkxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Investigamos la transformación de las ciudades a través de intervenciones artísticas.',
    },
    {
      id: 4,
      title: 'Contra Margen Vol. 9',
      subtitle: 'Fotografía y Memoria',
      date: 'Septiembre 2025',
      cover: 'https://images.unsplash.com/photo-1612718115067-8f92930ce598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGV4aGliaXRpb24lMjBibGFjayUyMHdoaXRlfGVufDF8fHx8MTc3NTM0NTMyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Un análisis profundo sobre el papel de la fotografía en la construcción de la memoria colectiva.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FFC000] to-[#ff9500] py-20">
        <div className="container mx-auto px-4">
          <h1 
            className="text-6xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Publicaciones
          </h1>
          <p 
            className="text-xl text-white/90 max-w-2xl"
            style={{ fontFamily: 'Newsreader, serif' }}
          >
            Explora nuestra colección de ediciones que documentan y celebran 
            las expresiones artísticas de nuestra época.
          </p>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {publications.map((pub, index) => (
            <article
              key={pub.id}
              className="group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                    <ImageWithFallback
                      src={pub.cover}
                      alt={pub.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span 
                        className="text-sm text-[#212121] font-['Manrope',sans-serif]"
                      >
                        Vol. {pub.id}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3 text-[#A35765]">
                    <Calendar className="w-4 h-4" />
                    <span className="font-['Manrope',sans-serif] text-sm">
                      {pub.date}
                    </span>
                  </div>
                  <h2 
                    className="text-3xl mb-2 group-hover:text-[#FFC000] transition-colors"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {pub.title}
                  </h2>
                  <h3 
                    className="text-xl text-[#E91E63] mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {pub.subtitle}
                  </h3>
                  <p 
                    className="text-[#A35765] leading-relaxed mb-6"
                    style={{ fontFamily: 'Newsreader, serif' }}
                  >
                    {pub.description}
                  </p>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-[#FFC000] text-[#212121] px-6 py-2 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif]">
                      <Download className="w-4 h-4" />
                      Descargar PDF
                    </button>
                    <button className="flex items-center gap-2 border-2 border-[#FFC000] text-[#212121] px-6 py-2 rounded-full hover:bg-[#FFC000] transition-all font-['Manrope',sans-serif]">
                      Leer en línea
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-[#212121] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 
            className="text-5xl text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Suscríbete a Contra Margen
          </h2>
          <p 
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'Newsreader, serif' }}
          >
            Recibe nuestras nuevas ediciones y contenido exclusivo directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 text-white placeholder:text-white/60 border-2 border-white/20 focus:border-[#FFC000] focus:outline-none transition-colors font-['Manrope',sans-serif]"
            />
            <button className="bg-[#FFC000] text-[#212121] px-8 py-3 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif] whitespace-nowrap">
              Suscribirme
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
