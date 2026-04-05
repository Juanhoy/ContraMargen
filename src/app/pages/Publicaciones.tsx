import { Calendar, Download } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Publicaciones() {
  const publications = [
    {
      id: 12,
      title: 'CONTRA MARGEN VOL. 12',
      subtitle: 'FRONTERAS DEL ARTE CONTEMPORÁNEO',
      date: 'MARZO 2026',
      cover: 'https://images.unsplash.com/photo-1721491702252-dafcd4169a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBtYWdhemluZSUyMHB1YmxpY2F0aW9uJTIwbGF5b3V0fGVufDF8fHx8MTc3NTM0NTMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Esta edición explora las fronteras entre lo físico y lo digital, lo real y lo imaginado en la era post-pantalla.',
    },
    {
      id: 11,
      title: 'CONTRA MARGEN VOL. 11',
      subtitle: 'VOCES EMERGENTES',
      date: 'ENERO 2026',
      cover: 'https://images.unsplash.com/photo-1773799038951-5c0f777246b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY3VscHR1cmUlMjBpbnN0YWxsYXRpb24lMjBhcnR8ZW58MXx8fHwxNzc1MzQ1MzI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Un especial dedicado a los artistas que están redefiniendo el panorama cultural desde la periferia.',
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
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-surface-container-low">
        <div className="container mx-auto">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-6 block">
             Archivo Editorial
          </span>
          <h1 className="display-lg mb-8">
            EDICIONES.
          </h1>
          <p className="body-lg max-w-2xl text-foreground/70">
            Explora nuestra colección curada de ediciones que documentan y celebran 
            las expresiones artísticas de nuestra época. Cada volumen es un objeto 
            de estudio y preservación cultural.
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
                <div className="lg:w-1/2 flex flex-col justify-center space-y-8 p-8 md:p-0">
                  <div className="flex items-center gap-4 text-primary">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">
                      {pub.date}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl leading-tight">
                      {pub.title}
                    </h2>
                    <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-primary-container">
                      {pub.subtitle}
                    </h3>
                  </div>
                  <p className="body-lg text-foreground/60 leading-relaxed">
                    {pub.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="flex items-center justify-center gap-4 bg-primary text-white h-14 px-8 uppercase tracking-widest text-[10px] font-bold hover:translate-y-[-4px] transition-transform">
                      <Download className="w-4 h-4" />
                      Descargar PDF
                    </button>
                    <button className="flex items-center justify-center gap-4 border-2 border-outline-variant text-foreground h-14 px-8 uppercase tracking-widest text-[10px] font-bold hover:bg-foreground hover:text-white transition-all">
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
      <section className="bg-foreground py-32 px-4 text-surface">
        <div className="container mx-auto text-center space-y-12">
          <h2 className="display-lg leading-[0.85]">
            MANTENTE <br /> <span className="text-primary-container">CURADO.</span>
          </h2>
          <p className="body-lg text-surface/60 max-w-2xl mx-auto">
            Recibe nuestras nuevas ediciones y contenido exclusivo directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="TU CORREO ELECTRÓNICO"
              className="flex-1 px-8 py-5 bg-surface/5 border-b-2 border-surface/20 text-surface placeholder:text-surface/30 focus:border-primary-container outline-none uppercase tracking-widest text-[10px] transition-colors"
            />
            <button className="bg-primary-container text-white px-12 py-5 uppercase tracking-widest text-[10px] font-bold hover:bg-surface hover:text-foreground transition-all">
              Suscribirme
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
