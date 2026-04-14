import { Mail, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Contacto() {
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 bg-surface-container-low text-center">
        <div className="container mx-auto">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-6 block">
             Canales Abiertos
          </span>
          <h1 className="display-lg mb-8">
            CONTACTO.
          </h1>
          <p className="body-lg max-w-2xl mx-auto text-foreground/70">
            Conecta con nosotros. Tus ideas, colaboraciones y propuestas son 
            binvenidas en el espacio donde el diálogo no tiene fronteras.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Form Column */}
            <div className="lg:col-span-7 space-y-12">
               <div className="space-y-6">
                  <h2 className="text-5xl lowercase tracking-tighter leading-none">
                     hablemos.
                  </h2>
                  <p className="body-lg text-foreground/40 max-w-lg">
                    ¿Tienes una propuesta o simplemente quieres saludar? 
                    Completa el formulario y te responderemos a la brevedad.
                  </p>
               </div>

               <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Nombre Completo</label>
                        <input 
                           type="text" 
                           placeholder="TU NOMBRE"
                           className="w-full h-16 bg-surface-container px-6 border-b-2 border-outline-variant focus:border-primary outline-none uppercase tracking-widest text-[10px] transition-colors"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Correo Electrónico</label>
                        <input 
                           type="email" 
                           placeholder="TU@EMAIL.COM"
                           className="w-full h-16 bg-surface-container px-6 border-b-2 border-outline-variant focus:border-primary outline-none uppercase tracking-widest text-[10px] transition-colors"
                        />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Asunto</label>
                     <select className="w-full h-16 bg-surface-container px-6 border-b-2 border-outline-variant focus:border-primary outline-none uppercase tracking-widest text-[10px] transition-colors appearance-none">
                        <option>Propuesta de colaboración</option>
                        <option>Envío de obra (Artes Visuales)</option>
                        <option>Envío de texto (Sala de lectura)</option>
                        <option>Propuesta musical</option>
                        <option>Consulta general</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Mensaje</label>
                     <textarea 
                        rows={6}
                        placeholder="CUÉNTANOS SOBRE TU PROYECTO..."
                        className="w-full bg-surface-container p-6 border-b-2 border-outline-variant focus:border-primary outline-none uppercase tracking-widest text-[10px] transition-colors resize-none"
                     ></textarea>
                  </div>

                  <button className="h-20 w-full bg-primary text-white uppercase tracking-[0.3em] font-bold text-xs hover:bg-foreground transition-colors flex items-center justify-center gap-4">
                     ENVIAR MENSAJE <Send className="w-5 h-5" />
                  </button>
               </form>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 space-y-20">
               <div className="space-y-10">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-primary-container">Información</h3>
                  
                  <div className="space-y-8">
                     <div className="flex items-start gap-6 border-b border-outline-variant pb-8">
                        <Mail className="w-6 h-6 text-primary shrink-0" />
                        <div className="space-y-2">
                           <p className="text-[10px] uppercase tracking-widest font-bold text-foreground">Email</p>
                           <p className="body-lg text-foreground/40 break-all">contacto@contramargen.com</p>
                           <p className="body-lg text-foreground/40 break-all">redaccion@contramargen.com</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-6 border-b border-outline-variant pb-8">
                        <MapPin className="w-6 h-6 text-primary shrink-0" />
                        <div className="space-y-2">
                           <p className="text-[10px] uppercase tracking-widest font-bold text-foreground">Ubicación</p>
                           <p className="body-lg text-foreground/40">CIUDAD DE MÉXICO</p>
                           <p className="body-lg text-foreground/40">COLONIA ROMA NORTE</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-10">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-primary-container">Social</h3>
                  <div className="flex flex-wrap gap-4">
                     <button className="h-14 px-8 border-2 border-outline-variant text-[10px] uppercase tracking-widest font-bold hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center gap-4">
                        INSTAGRAM <Instagram className="w-4 h-4" />
                     </button>
                     <button className="h-14 px-8 border-2 border-outline-variant text-[10px] uppercase tracking-widest font-bold hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center gap-4">
                        TWITTER <Twitter className="w-4 h-4" />
                     </button>
                     <button className="h-14 px-8 border-2 border-outline-variant text-[10px] uppercase tracking-widest font-bold hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center gap-4">
                        FACEBOOK <Facebook className="w-4 h-4" />
                     </button>
                  </div>
               </div>

               <div className="p-10 bg-surface-container-high space-y-6">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-primary">Lineamientos</h3>
                  <ul className="space-y-4 text-[10px] uppercase tracking-widest font-bold text-foreground/40">
                     <li className="flex gap-4">
                        <span className="text-primary-container">•</span>
                        <span>Aceptamos propuestas en español y portugués</span>
                     </li>
                     <li className="flex gap-4">
                        <span className="text-primary-container">•</span>
                        <span>Tiempo de respuesta: 4-6 semanas</span>
                     </li>
                     <li className="flex gap-4">
                        <span className="text-primary-container">•</span>
                        <span>Incluye biografía breve y portafolio</span>
                     </li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Preview Section */}
      <section className="bg-surface-container py-32 px-4">
         <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-8">
                  <h2 className="text-6xl lowercase tracking-tighter leading-none">
                     visítanos.
                  </h2>
                  <p className="body-lg text-foreground/40 max-w-xl">
                    Nuestra oficina editorial está ubicada en el corazón de la Rama Norte, 
                    un barrio que respira arte y cultura. Te esperamos para un café y 
                    una charla sobre el futuro del arte.
                  </p>
               </div>
               <div className="aspect-video bg-surface overflow-hidden relative grayscale">
                  <div className="absolute inset-0 bg-primary/10"></div>
                  <div className="w-full h-full flex items-center justify-center">
                     <MapPin className="w-16 h-16 text-primary" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Equipo Editorial Section */}
      <section className="py-32 px-4 border-b border-outline-variant">
        <div className="container mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <h2 className="text-7xl lowercase tracking-tighter leading-none">
                 equipo <br /> editorial.
              </h2>
              <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-primary">Contra Margen No. 1</span>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="group space-y-8">
                 <div className="aspect-[4/5] bg-surface-container-high overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img 
                       src="/revista/Edicion1/obras/obra-06.png" 
                       alt="Cindy Santa" 
                       className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    />
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-3xl lowercase tracking-tighter">cindy santa.</h3>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-primary">Dirección Editorial</p>
                 </div>
              </div>

              <div className="group space-y-8">
                 <div className="aspect-[4/5] bg-surface-container-high overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img 
                       src="/revista/Edicion1/obras/obra-07.png" 
                       alt="Julian González" 
                       className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    />
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-3xl lowercase tracking-tighter">julian gonzález.</h3>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-primary">Curaduría y Contenidos</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
           <div className="max-w-4xl space-y-20">
              <h2 className="text-5xl lowercase tracking-tighter leading-none">
                 preguntas frecuentes.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                {[
                  {
                    q: '¿Cómo puedo colaborar con Contra Margen?',
                    a: 'Aceptamos propuestas en artes visuales, literatura y música. Envía tu propuesta a través del formulario o a redaccion@contramargen.com.',
                  },
                  {
                    q: '¿Hay algún costo por enviar propuestas?',
                    a: 'No, el envío de propuestas es completamente gratuito. Valoramos todas las voces.',
                  },
                  {
                    q: '¿Con qué frecuencia publican?',
                    a: 'Publicamos una edición impresa trimestral y contenido digital semanalmente.',
                  },
                  {
                    q: '¿Pagan por las colaboraciones?',
                    a: 'Sí, remuneramos todas las colaboraciones publicadas. Los términos se negocian individualmente.',
                  },
                ].map((faq, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl leading-snug text-foreground">
                      {faq.q}
                    </h3>
                    <p className="body-lg text-foreground/40 text-sm italic">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
