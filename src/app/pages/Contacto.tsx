import { Mail, MapPin, Send } from 'lucide-react';

export default function Contacto() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFC000] via-[#ff9500] to-[#E91E63] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 
            className="text-6xl text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Contacto
          </h1>
          <p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            style={{ fontFamily: 'Newsreader, serif' }}
          >
            Conecta con nosotros. Tus ideas, colaboraciones y propuestas son bienvenidas.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 
              className="text-4xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Envíanos un mensaje
            </h2>
            <form className="space-y-6">
              <div>
                <label 
                  className="block mb-2 text-[#212121] font-['Manrope',sans-serif]"
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFC000] focus:outline-none transition-colors font-['Manrope',sans-serif]"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label 
                  className="block mb-2 text-[#212121] font-['Manrope',sans-serif]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFC000] focus:outline-none transition-colors font-['Manrope',sans-serif]"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label 
                  className="block mb-2 text-[#212121] font-['Manrope',sans-serif]"
                  htmlFor="subject"
                >
                  Asunto
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFC000] focus:outline-none transition-colors font-['Manrope',sans-serif]"
                >
                  <option>Propuesta de colaboración</option>
                  <option>Envío de obra (Artes Visuales)</option>
                  <option>Envío de texto (Artes Escritas)</option>
                  <option>Propuesta musical</option>
                  <option>Consulta general</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label 
                  className="block mb-2 text-[#212121] font-['Manrope',sans-serif]"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FFC000] focus:outline-none transition-colors font-['Manrope',sans-serif] resize-none"
                  placeholder="Cuéntanos sobre tu propuesta..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FFC000] text-[#212121] px-8 py-4 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 
              className="text-4xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Información
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#FFC000] p-3 rounded-full">
                    <Mail className="w-6 h-6 text-[#212121]" />
                  </div>
                  <div>
                    <h3 
                      className="text-xl mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Email
                    </h3>
                    <p 
                      className="text-[#A35765] font-['Manrope',sans-serif]"
                    >
                      contacto@contramargen.com
                    </p>
                    <p 
                      className="text-[#A35765] font-['Manrope',sans-serif]"
                    >
                      redaccion@contramargen.com
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#E91E63] p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 
                      className="text-xl mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Ubicación
                    </h3>
                    <p 
                      className="text-[#A35765] font-['Manrope',sans-serif]"
                    >
                      Ciudad de México
                    </p>
                    <p 
                      className="text-[#A35765] font-['Manrope',sans-serif]"
                    >
                      Colonia Roma Norte
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f5f5] p-6 rounded-lg">
                <h3 
                  className="text-2xl mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Lineamientos de Envío
                </h3>
                <ul 
                  className="space-y-3 text-[#A35765] font-['Manrope',sans-serif]"
                >
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFC000] mt-1">•</span>
                    <span>Acepta propuestas en español y portugués</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFC000] mt-1">•</span>
                    <span>Revisa nuestras convocatorias activas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFC000] mt-1">•</span>
                    <span>Tiempo de respuesta: 4-6 semanas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFC000] mt-1">•</span>
                    <span>Incluye biografía breve y links relevantes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 
                  className="text-2xl mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Síguenos
                </h3>
                <div className="flex gap-3">
                  <button className="bg-[#212121] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif]">
                    Instagram
                  </button>
                  <button className="bg-[#212121] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif]">
                    Twitter
                  </button>
                  <button className="bg-[#212121] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all font-['Manrope',sans-serif]">
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-4xl mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Visítanos
            </h2>
            <p 
              className="text-xl text-[#A35765] leading-relaxed mb-8"
              style={{ fontFamily: 'Newsreader, serif' }}
            >
              Nuestra oficina editorial está ubicada en el corazón de la Roma Norte, 
              un barrio que respira arte y cultura. Te invitamos a conocernos.
            </p>
            <div className="aspect-[16/9] bg-gray-300 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FFC000]/20 to-[#E91E63]/20">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#A35765] mx-auto mb-4" />
                  <p 
                    className="text-[#A35765] font-['Manrope',sans-serif]"
                  >
                    Mapa interactivo próximamente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 
            className="text-4xl mb-12 text-center"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            {[
              {
                q: '¿Cómo puedo colaborar con Contra Margen?',
                a: 'Aceptamos propuestas en artes visuales, literatura y música. Envía tu propuesta a través del formulario de contacto o directamente a redaccion@contramargen.com.',
              },
              {
                q: '¿Hay algún costo por enviar propuestas?',
                a: 'No, el envío de propuestas es completamente gratuito. Valoramos todas las voces que llegan a nuestra redacción.',
              },
              {
                q: '¿Con qué frecuencia publican?',
                a: 'Publicamos una edición impresa trimestral y contenido digital semanalmente en nuestras plataformas.',
              },
              {
                q: '¿Pagan por las colaboraciones?',
                a: 'Sí, remuneramos todas las colaboraciones publicadas. Los términos se negocian individualmente con cada colaborador.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border-l-4 border-[#FFC000] pl-6 py-2"
              >
                <h3 
                  className="text-xl mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {faq.q}
                </h3>
                <p 
                  className="text-[#A35765] leading-relaxed"
                  style={{ fontFamily: 'Newsreader, serif' }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
