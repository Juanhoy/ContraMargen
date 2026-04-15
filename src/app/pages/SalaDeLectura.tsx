'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, User, Clock, ChevronUp, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function SalaDeLectura() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedId]);

  const writings = [
    {
      id: 1,
      title: 'SONIA',
      author: 'JULIÁN DAVID GONZÁLEZ VERA',
      type: 'Cuento',
      readTime: '15 min',
      excerpt: 'No contaré cómo, ni porqué conocí a Sonia. No hace falta. Cuando la conocí ya estaba terminando de echarle baldosa al baño y de ponerle mesón a la cocina de su casa...',
      fullText: `No contaré cómo, ni porqué conocí a Sonia. No hace falta. Cuando la conocí ya estaba terminando de echarle baldosa al baño y de ponerle mesón a la cocina de su casa. De su casa propia claro, porque nadie manda echar mortero y piso en casa ajena. Yo he escuchado a mucha gente hablar de los sacrificios que hicieron y que hacen para tener su casa propia, y que sus hijos crezcan bajo techo; pero el sacrificio de Sonia por levantar estos muros, por hacer estas escaleras y tener un sanitario y un cuarto para su hija, nunca lo habría imaginado si ella no me lo cuenta. Anteayer me enteré que Sonia había muerto y yo le prometí que no escribiría su historia en vida de ella. Más de quince años esperé para poder escribir cómo fue que Sonia consiguió la plata para levantar su casa.`,
      image: 'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217785/MonicaAlvarez-Habitandolamemoria1_stcpfj.png',
    },
    {
      id: 2,
      title: 'MIGRAR',
      author: 'LAURA CAMILA LÓPEZ VELÁZQUEZ',
      type: 'Poesía',
      readTime: '2 min',
      excerpt: 'En el borde de este polvo hay instaladas cuatromildoscientas maravillas de agua esperando el asombro de los transeúntes para surcar el cielo...',
      fullText: `En el borde de este polvo hay instaladas cuatromildoscientas maravillas de agua esperando el asombro de los transeúntes para surcar el cielo. Rodeada de ojos, la insomne, respira el aire que le queda. El círculo de hambre le entretiene los días. Pasa la gran boca grabando augurios de rutina y apretando sus dientes en el desamparo. Pliegues de guitarra que no bastan. Dar cobijo al desarraigo no es cuestión de cortesía. Hermandades deshumanizadas han olvidado el fluir orgánico y girar al ritmo universal con otros seres. No basta una sola mano deteniendo caídas. Hay soledades nómadas que tú no miras, mientras el corazón de una niña se preocupa por abrigarles la noche. La gran boca y sus corceles te han ensordecido ante su reclamo.`,
      image: 'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217783/MonicaAlvarez-Habitandolamemoria2_xa03em.png',
    },
    {
      id: 3,
      title: 'SHILLUK',
      author: 'LAURA CAMILA LÓPEZ VELÁZQUEZ',
      type: 'Poesía',
      readTime: '1 min',
      excerpt: 'Es un absurdo no acoger las voces que rodean esa fuga por la que me diluyo. Creando anestesias para el caótico azar...',
      fullText: `Es un absurdo no acoger las voces que rodean esa fuga por la que me diluyo. Creando anestesias para el caótico azar y, en medio de él, soplar los suelos hasta la asfixia. El mínimo goteo del alma evadiéndose, atónita del fuego que quedó en ese tren. Espejo siempre soliendo ser el líquido y el humo. Extraños sonidos bloqueando el amarillo. Calzarse es cerrar la puerta a la penumbra. Ataviarse de sílabas es entrar a la sed.`,
      image: 'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217783/MonicaAlvarez-Habitandolamemoria3_bbhtbz.png',
    },
    {
      id: 4,
      title: 'MONÓLOGO DEL CERDO',
      author: 'JUAN DIEGO RINCÓN',
      type: 'Poesía',
      readTime: '2 min',
      excerpt: '¿Dónde estás, Dios? ¿Por qué no me apuñalas tú mi hígado de cerdo? Oh, Jehová, tengo miedo. Tú que eres el Dios de dioses...',
      fullText: `¿Dónde estás, Dios? ¿Por qué no me apuñalas tú mi hígado de cerdo? Oh, Jehová, tengo miedo. Tú que eres el Dios de dioses, príncipe de príncipes, rey sabio, justo y verdadero, ¿por qué vas a permitir vilmente mi muerte? ¿Por qué vas a dejar que este hombre con su overol de sangre y su cuchillo de herrumbre me de un tajo de silencio en la garganta? Oh, Señor, escucha mi gruñido de pánico. Ayúdame, Dios de la misericordia. O al menos deja que te imagine, aunque no seas más que un inmenso y tierno cerdo, un cerdo de nubes y rocío, con un corazón infinito, un corazón en donde quepamos todos los cerdos de la tierra. Amén.`,
      // Profecía 1 de Manuela Raiz
      image: 'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217794/obra-06_nnvuzn.png',
    },
    {
      id: 5,
      title: 'PARIENDO UN CERDO',
      author: 'JUAN DIEGO RINCÓN',
      type: 'Poesía',
      readTime: '2 min',
      excerpt: 'Las lápidas se asemejan a los dientes de Muertadehambre: las que están sobre la tierra, son sus muelas; las que están entre las paredes, son los colmillos...',
      fullText: `Las lápidas se asemejan a los dientes de Muertadehambre: las que están sobre la tierra, son sus muelas; las que están entre las paredes, son los colmillos. Muertadehambre es la devoradora de cuerpos y su estómago es esta tierra árida, llena de gusanos y cal. Por eso aquí los vivos somos huérfanos de toda esperanza, porque un día la boca de cemento también nos tragará. Aquí, donde el aire huele a ruda y a incienso, se me ocurre que morir es como parir un cerdo, un cerdo de sombras que nos va saliendo por la boca y que nos va dejando vacíos, terriblemente vacíos, hasta que no somos más que un puñado de huesos que los perros del camposanto se encargan de roer.`,
      // Profecía 2 de Manuela Raiz
      image: 'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217796/obra-07_p0kzws.png',
    },
    {
      id: 6,
      title: 'VISITA DE PESSOA A FRAY MAURICIO',
      author: 'TARSICIO VALENCIA',
      type: 'Poesía',
      readTime: '2 min',
      excerpt: 'Fray Mauricio está loco. No se rían de Fray Mauricio. No se rían de nadie. No pongas a nadie en ridículo, ni en lo más íntimo de tu ser...',
      fullText: `Fray Mauricio está loco.
No se rían de Fray Mauricio.
No se rían de nadie.
No pongas a nadie en ridículo, ni en lo más íntimo de tu ser.
Que no quede ni siquiera la sombra de un mal pensamiento contra un hermano que se ha extraviado por los caminos de la mente.
No juzgues.
No te burles.
Porque tal vez ese loco es el único que tiene la llave de la cordura en un mundo que ha perdido el juicio.
Recuerda que todos somos, en el fondo, un poco Fray Mauricio, buscando a tientas la mano de Dios en la oscuridad.`,
      image: 'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217785/JuanVerdeza-Escultura2_z34pwr.png',
    }
  ];

  const featuredPoem = {
    title: 'LA MAGIA ESTÁ EN MI PIEL',
    author: 'YORLADIS ALZATE BOTERO',
    lines: [
      'Hoy me desperté de nuevo con un deseo voraz e insaciable.',
      'Mi cuerpo tiembla y pide, no hay nadie cerca, solo estoy yo.',
      'Mis manos quieren recorrer mi cuerpo, pero mi mente piensa que es algo extraño y que necesito a alguien más.',
      '',
      'Me estiro y me retuerzo para olvidar el pensamiento y comenzar a subir y bajar...',
      'Me estremezco al cerrar los ojos y para empezar a imaginar, me muerdo los labios y me aprieto los pechos.',
      'Suspiro...',
      '',
      'Entre abro los ojos por instantes y le regalo besos a mis hombros, me acaricio con delicadeza el abdomen, abrazo mis piernas que está vez se abren para mí.',
      'La magia fluye dentro y fuera, soy una sola.',
      '',
      'Enamorándome de estas montañas que se derrumban por instantes, ríos que se desbordan entre sentimientos encontrados y una imagen difusa que le abruma mirarse al espejo.',
      'Hoy me desperté de nuevo con un deseo voraz e insaciable, que me hace recordar que mi cuerpo se siente bien desnudo, cuando lo tocan con amor.'
    ],
    image: 'https://res.cloudinary.com/dvm7fjhxs/image/upload/v1776217793/IsabellaZapata-DimensionEspiritual_jm6h83.png'
  };

  const selectedWriting = selectedId ? writings.find(w => w.id === selectedId) : null;

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
              <h2 className="display-lg text-foreground lowercase leading-tight">
                {featuredPoem.title}.
              </h2>
              <div className="text-xl md:text-2xl leading-loose text-foreground/80 italic space-y-4">
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
                src={featuredPoem.image}
                alt="Escritura"
                className="w-full aspect-[3/4] object-contain shadow-2xl"
              />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Writings Grid Section */}
      <section className="py-24 bg-surface-container px-4 relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl lowercase leading-none tracking-tighter">
              textos recientes.
            </h2>
            <div className="flex flex-wrap gap-4">
              {['Todo', 'Cuento', 'Poesía', 'Ensayo'].map((filter) => (
                <button
                  key={filter}
                  className={`text-[10px] uppercase tracking-widest font-bold transition-all px-4 py-2 ${filter === 'Todo'
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
              <article
                key={writing.id}
                className="group flex flex-col md:flex-row gap-10 items-start"
              >
                <div className="w-full md:w-1/2 aspect-square overflow-hidden bg-surface shadow-lg">
                  <ImageWithFallback
                    src={writing.image}
                    alt={writing.title}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="flex items-center gap-4 text-primary">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                      {writing.type}
                    </span>
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">
                      {writing.readTime}
                    </span>
                  </div>
                  <h3 className="text-3xl leading-none lowercase tracking-tighter group-hover:text-primary transition-colors">
                    {writing.title}.
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">
                    POR {writing.author}
                  </p>
                  <p className="body-lg text-foreground/60 line-clamp-3">
                    {writing.excerpt}
                  </p>
                  <button
                    onClick={() => setSelectedId(writing.id)}
                    className="inline-flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-primary group/btn"
                  >
                    Leer Texto Completo
                    <BookOpen className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para lectura completa */}
      {selectedWriting && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-surface flex items-start justify-center py-20 px-4">
          <button
            onClick={() => setSelectedId(null)}
            className="fixed top-8 right-8 z-[110] p-4 bg-primary text-white hover:rotate-90 transition-transform duration-500"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full max-w-3xl space-y-20">
            <header className="space-y-8 text-center">
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary">{selectedWriting.type}</span>
              <h2 className="display-lg leading-[0.85] lowercase">{selectedWriting.title}.</h2>
              <div className="flex items-center justify-center gap-12 pt-8 border-t border-outline-variant">
                <div className="text-left">
                  <p className="text-[8px] uppercase tracking-widest font-bold text-foreground/40 mb-1">Autor</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold">{selectedWriting.author}</p>
                </div>
                <div className="text-left">
                  <p className="text-[8px] uppercase tracking-widest font-bold text-foreground/40 mb-1">Lectura</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold">{selectedWriting.readTime}</p>
                </div>
              </div>
            </header>

            <div className="aspect-video w-full overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={selectedWriting.image}
                alt={selectedWriting.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="body-lg text-foreground/80 leading-relaxed space-y-8 max-w-2xl mx-auto whitespace-pre-wrap">
              {selectedWriting.fullText}
            </div>

            <footer className="pt-20 border-t border-outline-variant text-center pb-20">
              <button
                onClick={() => setSelectedId(null)}
                className="inline-flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-primary group/footer"
              >
                Volver a la sala
                <ChevronUp className="w-4 h-4 group-hover/footer:-translate-y-1 transition-transform" />
              </button>
            </footer>
          </div>
        </div>
      )}

      {/* Podcast Section */}
      <section className="py-32 px-4 border-t border-outline-variant">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-48 h-48 bg-primary shrink-0 flex items-center justify-center p-8">
              <div className="w-full h-full border-4 border-white/20 flex items-center justify-center">
                <div className="flex gap-1 items-end">
                  <div className="w-2 h-8 bg-white animate-pulse"></div>
                  <div className="w-2 h-16 bg-white animate-pulse delay-75"></div>
                  <div className="w-2 h-12 bg-white animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-4xl leading-none lowercase tracking-tighter">
                leído por sus autores.
              </h2>
              <p className="body-lg text-foreground/60 max-w-xl">
                Escucha la entonación y la intención original en nuestro podcast editorial.
                Próximamente disponible en todas las plataformas.
              </p>
              <a href="#" className="inline-flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center group-hover:bg-primary transition-colors">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-foreground group-hover:text-primary transition-colors">
                  Escuchar en Spotify
                </span>
              </a>
            </div>
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