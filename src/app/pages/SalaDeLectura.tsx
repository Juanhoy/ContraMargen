'use client';

import React, { useState } from 'react';
import { BookOpen, User, Clock, ChevronUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function SalaDeLectura() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const writings = [
    {
      id: 1,
      title: 'SONIA',
      author: 'JULIÁN DAVID GONZÁLEZ VERA',
      type: 'Cuento',
      readTime: '15 min',
      excerpt: 'No contaré cómo, ni porqué conocí a Sonia. No hace falta. Cuando la conocí ya estaba terminando de echarle baldosa al baño y de ponerle mesón a la cocina de su casa...',
      fullText: `No contaré cómo, ni porqué conocí a Sonia. No hace falta. Cuando la conocí ya estaba terminando de echarle baldosa al baño y de ponerle mesón a la cocina de su casa. De su casa propia claro, porque nadie manda echar mortero y piso en casa ajena. Yo he escuchado a mucha gente hablar de los sacrificios que hicieron y que hacen para tener su casa propia, y que sus hijos crezcan bajo techo; pero el sacrificio de Sonia por levantar estos muros, por hacer estas escaleras y tener un sanitario y un cuarto para su hija, nunca lo habría imaginado si ella no me lo cuenta. Anteayer me enteré que Sonia había muerto y yo le prometí que no escribiría su historia en vida de ella. Más de quince años esperé para poder escribir cómo fue que Sonia consiguió la plata para levantar su casa. Y aunque muchas mujeres trabajaban como putas en Medellín a mediados de los 80's, fue un miércoles de marzo, cuando la cosa estaba quieta en 'Los tres faroles' que así se llamaba el bar donde Sonia trabajaba; ese día a mi negra para bien o para mal le iba a tocar la suerte y le iba a cambiar la vida.

Ya eran las más de las nueve de la noche cuando cruzaron por la puerta de 'Los Tres faroles' un combo de unos diez muchachos. Sicarios todos. Traían a un jovencito muy borracho, un cumpleañero de alguna banda pensó ella y le pagaron a Sonia para que le bailara. Pidieron garrafa, hicieron subir el volumen de los parlantes, se ubicaron en la mesa de más al fondo, la más oscura y luego regaron vicio sobre la mesa de cristal. Se me arregló la noche con estos pelaos, pensó Sonia mientras le decía al dj qué canción ponerle para bailarle al 'cumpleañero', que la esperaba en la oscura mesa del fondo. El 'cumpleañero' aunque inmerso en la oscuridad, traía puestas las gafas negras y se quedaba quieto mientras Sonia le sobaba el gran culo de negra que tenía, contra la hebilla del pantalón. Al muchacho le celebraban todos 'eso Santiaguito, mire que negra tan mamacita le consiguió su hermano' escuchaba Sonia que le decían al pelao. Los demás le dejaban caer billetes en el piso o se los ponían en el borde de las brasileras y Sonia estaba contenta, agradecida porque estos muchachos le iban a arreglar el día.

Dos amigas de Sonia bailaban con otros de los muchachos y los calmaban diciéndoles que el jefe de ellas ya había mandado a traer a las otras peladas, que no se demoraban en llegar. En ese momento, Sonia quería poner al 'cumpleañero a besarle los pezones y buscó darle un beso, pero el grito de una de sus amigas la detuvo. Y en medio del ruido de la música se le acercó al oído a Sonia, que no entendía lo que pasaba y le dijo 'Sonia, pilas que a ese pelao lo traen muerto, cuál cumpleañero ese es un muñeco' y todos se alarmaron con los gritos. Sonia se quería ir, pero vio como a su amiga le conectaron un puño en la cara cuando dijo que Santiaguito estaba muerto y no borracho como pensaban todos los del bar. '¿No ves malparida el pelao cómo está pasando de bueno? ¿No ves? ¿Y vos diciendo eso, te nos querés tirar en la fiesta o qué?' y en eso entraron otros dos hombres mucho mayores que los que estaban ahí y le dijeron al dueño de 'Los Tres Faroles' que cerrara, que solo dejara entrar a las otras putas, pero que nadie se podía ir, porque estaban celebrando con el hermano del 'duro' que se los habían matado en la mañana.

A Sonia le dijeron que no se podría ir, que si se iba la mataban en la puerta, y que ella debía atender a Santiaguito, porque a él le había gustado ella, porque era el tipo de mujeres que a Santiaguito toda la vida le habían gustado. Y que cobrara. Que no importaba lo que pidiera, que cobrara, con tal de que el socio botara cachucha con ella. Entonces ella le dijo a uno, al que más insistía y la tomaba por el brazo '¿pero no ves que está muerto?' entonces el muchacho se quedó mirándola y el rostro le cambió, como si lo hubiera insultado y le respondió, 'pues aproveche que todavía está caliente, y hágale rápido pa que no lo deje enfriar'. A Sonia la cogieron entre dos, y le embutieron aguardiente a las malas, le pusieron dos millones de pesos en las manos y le abrieron la puerta de la pieza. Entraron el cuerpo de Santiaguito y lo descargaron en la cama, le quitaron la ropa con paciencia, se diría que hasta con cariño, mientras Sonia se había quedado sin habla apretando entre las manos los dos fajos de millón de pesos; la habían llevado cogida de la mano hasta su propio cuarto y cuando ya a Santiaguito lo tenían empelota, salieron. Pero antes le dejaron dicho que ya habían pagado la media hora, y que en media hora volvería por el campeón, por el niño Santiago, y entonces le prohibieron que echara tranca a la puerta.

Tres huecos secos y morados se veían en la piel blanca del pecho de Santiago. Sonia lo miraba sin saber qué debía hacer ella. Si entraban de golpe los amigos del muerto y la veían sentada ahí sin hacer nada; ya estaba muy tomados y como estaban la podrían aporrear, o la matarían. ¿Qué debía hacer? No sabía; pero se acercó al rostro del muerto y vio que Santiago tenía puestas las gafas negras y se le hizo raro que no hubieran caído entre tanto zarandeo, entonces notó que las gafas se las habían pegado con 'pega loca' o con silicona a las sienes y por detrás de las orejas. Pensar en esa mirada de gafas oscuras, en esas gafas que era lo único que disfrazaba al muerto de vivo. Que era lo único que les hacia pensar a todos que era un borracho y no un muerto. Esas gafas en las que se reflejaba el rostro de Sonia la hicieron pensar en que todo esto era un juego. Cómo era posible que a ella le estuviera pasando esto. Y ella que pensaba que esos muchachos llegaron para arreglarle la noche. Entones pensó en su hija y pensó en que debía esconder los dos millones, tenía que salir de esta. No podía quedarse manicruzada. Tomo fuerzas y pensó que ahora lo único que podía hacer, lo único que le quedaba por hacer, era mirar el reloj y esperar a que pasaran los 30 minutos más largos de su vida. Encerrada en un cuarto de un putiadero con un muerto y con dos millones de pesos en las manos.

A los seis minutos exactos, le abrieron la puerta de golpe y apareció un hombre gordo y mayor que no había visto antes. '¿Quiubo Santiaguito, esta hijueputa no te ha metido ni una mamada siquiera, o qué?' y cerró la puerta tras de sí, quedándose adentro de la pieza. Sonia pensó lo peor, la presencia del gordo en el cuarto, y el cuerpo desnudo del muerto, la tenían nerviosa. Entonces por impulso le tomó un pie al muerto y mirando al gordo le dijo 'espere, tranquilo' y el gordo se acercó a la cabeza de Santiago y le sobó el pelo acomodándoselo sobre la frente 'cálmese negra, antes yo vengo a decirle; este pelao es el hermano del duro, y ahí están diciendo que si ahora que vuelven por él no le encuentran el condón puesto es porque usté no le hizo nada, entonces póngale un condón y échese bastante pintalabios, para que lo bese. Dele besos en el cuello y en la cara y déjele marcados unos besos en los muslos, porque esos manes no van a regarle dos millones a una puta pa que se encierre con un muerto en un cuarto; ellos quieren ver que sí hubo carisias' y salió el gordo de la habitación pidiendo un guaro y cerrando la puerta de un portazo.

El reloj se movía tan lento que Sonia pensó en revisarle las pilas. Solo eso le faltaba, que el reloj estuviera malo. Pero sabía que las putas no dejan dañar el reloj del cuarto. Aun así comprobó poniéndole el oído. Pero justo cuando se lo puso, escuchó que hicieron varios disparos en la pista, pero todos siguieron riéndose, incluso las mujeres que recién llegaron se escuchaban reír. Entonces se calmó y vio que aún le faltaban diez minutos para completar la media hora. Ya había escondido la plata y tenía el condón abierto sobre el nochero. La fiesta afuera seguía. Lo único en lo que pensaba Sonia era que debía ponerle el condón al muerto y debía pintarse con rouge los labios para marcarlo de la cabeza a los pies con besos. La misión estaba clara y ya sabía qué tenía que hacer. Entonces tomó valor, pensó en su niña durmiendo sola en su casa y dijo 'Me quedan diez minutos y usté niño es un cliente más -hablaba en voz alta mirándose en las gafas negras del muerto- abra las piernas un poquito, niño déjeme trabajar' y le enfundó el condón con la misma velocidad que unas manos expertas amarran un tamal, se lo enfundó con güevas y todo para que no se soltara fácil el caucho. 'Bueno esto fue fácil' pensó. 'Ahora viene lo duro' dijo en voz alta.

Y aunque ya había intentado dibujarle con el pintalabios besos en la piel al muerto, Sonia sabía que no quedaban igual y se imaginó la voz del combo diciendo apenas lo vieran 'nos empayasaste a Santiaguito, al campeón. Mirá cómo nos lo dejaste, Malparida'. Entonces vio que ya faltaban menos de cinco minutos y sin pensar más, se pintó rápido los labios y comenzó a rezar. 'Que Dios las saque de penas y las lleve a descansar' y le dio un beso la cara 'que Dios las saque de penas y las lleve a descansar' y comenzó a basarlo por el cuello 'que Dios las saque de penas y las lleve a descansar' y le besó por los muslos cerca a la entrepierna, y cada vez que decía esa oración de los muerto dejaba marcado un beso de sus labios rojos sobre la blanca piel de Santiaguito. Entonces le abrieron de golpe la puerta. 'Vea como lo dejó, eso le dio picos por todo el cuerpo, ¡que belleza!' dijo uno de los muchachos cuando por fin abrieron la puerta pasados 40 minutos, y tomando el cuerpo de Santiago y lo comenzaron a vestir.

Sonia no paraba de llorar sentada en la taza del baño 'que yo sepa a ningún muerto lo entregan así de contento en ninguna sala de velación, sí o no Santiaguito' dijo otro de los que le sostenían la cabeza mirándolo a las gafas. Otros dos muchachos le subían el pantalón sin quitarle el condón que Sonia le había puesto, 'y vea, con protección y todo Santiaguito, un niño responsable que hoy se convirtió en un adulto responsable carajo' y las risas de los sicarios eran insoportables para Sonia que en lo único en lo que pensaba era en irse para su casa a bañarse y estar con su hija. 'No le vayan a borrar los besos' dijo el Gordo. Y todos hicieron silencio. Lo sacaron ya vestido hasta la mesa donde la segunda garrafa estaba por terminarse y el Gordo mandó traer la moto de Santiago. El Gordo se montó a manejar la moto y atrás los amigos le montaron el cuerpo del muerto mientras otro se montó más atrás, casi en la parrilla de la DT para sostener a Santiaguito que había quedado sin fuerzas de después del polvo y de tanto chorro. Y así se fueron. Adentro de 'Los Tres Faroles' todos los sicarios habían quedado contentos con el trabajo de Sonia. Incluso muchos se prometieron en medio de los tragos, que de morir, los que quedaran vivos debían llevarlos donde una hembra así como Sonia para que los tratara así, como trataron a Santiaguito. Que ellos también se merecían una despedida como esas, por lo alto y que ojalá se murieran, aunque ojalá y Dios no lo quiera, que se murieran en diciembre para que la fiesta fuera más grande y hubiera más plata.

Cuando los muchachos habían acabado la sexta garrafa, Sonia ya era una leyenda entre las putas y el chisme se regó por todas partes. Y a los pocos días con exageraciones, pero con verdades había llegado a oídos de la misma Sonia lo que se decía de ella por el barrio, cuando el dueño de 'Los Tres Faroles' mandó a otra puta a que le dijera a Sonia que no la esperaba a trabajar, porque la gente estaba hablando de ella y ya le decían 'la besa muertos'. Sonia la besa muertos. Y que era mejor que no se apareciera por el bar, porque ya la gente le tenía asco. Entre todo lo que le contaron que se hablaba de ella y del episodio del muerto en las calles, se enteró que el verdadero hermano del muerto era el gordo que se entró al cuarto a amenazarla y a prevenirla y por eso entró solo, sin la compañía de ningún otro doliente porque él era el de más. Era el Gordo el que quería despedir a su hermano, a Santiaguito, que lo mataron a los pocos días de cumplir 16 años, y que se había ganado el campeonato de microfútbol del barrio y que por eso le decían campeón. Y el Gordo estaba pensando en llevarlo donde las putas de cumpleaños porque siempre había sido muy tímido. Ese día Sonia se echó a llorar toda la tarde y toda la noche, pero pensó que con la plata que le quedaba se podría ir de ese barrio y llevarse a su hija y tal vez volver a Istmina y se quedó dormida del cansancio de llorar tanto.

A la mañana siguiente cuando venía de comprar huevos y arepas de la tienda de la esquina, se le paró enfrente un carro que bajó la ventanilla y desde adentro una mano se estiró 'Ey, pelada -de la mano colgaban dos tacos de billetes de millón de pesos- nos mataron a un parcerito, diga a ver si se le mide a darle la despedida, usté ya sabe qué hacer y a mí me gustó su trabajo, cójalo caliente que cuatro millones en una semana, ni el presidente'. Era la mano del Gordo, parcero mío, que con el tiempo me presentó a Sonia. A mi negra Sonia, que se me murió anteayer y no estuve ahí para darle un beso de despedida.`,
      image: '/revista/Edicion1/obras/JulianGonzalez-Sonia.png',
    },
    {
      id: 2,
      title: 'MIGRAR',
      author: 'LAURA CAMILA LÓPEZ VELÁZQUEZ',
      type: 'Poesía',
      readTime: '2 min',
      excerpt: 'En el borde de este polvo hay instaladas cuatromildoscientas maravillas de agua esperando el asombro de los transeúntes para surcar el cielo...',
      fullText: `En el borde de este polvo hay instaladas cuatromildoscientas maravillas de agua esperando el asombro de los transeúntes para surcar el cielo. Rodeada de ojos, la insomne, respira el aire que le queda. El círculo de hambre le entretiene los días. Pasa la gran boca grabando augurios de rutina y apretando sus dientes en el desamparo. Pliegues de guitarra que no bastan. Dar cobijo al desarraigo no es cuestión de cortesía. Hermandades deshumanizadas han olvidado el fluir orgánico y girar al ritmo universal con otros seres. No basta una sola mano deteniendo caídas. Hay soledades nómadas que tú no miras, mientras el corazón de una niña se preocupa por abrigarles la noche. La gran boca y sus corceles te han ensordecido ante su reclamo.`,
      image: '/revista/Edicion1/obras/LauraLopez-Migrar.png',
    },
    {
      id: 3,
      title: 'SHILLUK',
      author: 'LAURA CAMILA LÓPEZ VELÁZQUEZ',
      type: 'Poesía',
      readTime: '1 min',
      excerpt: 'Es un absurdo no acoger las voces que rodean esa fuga por la que me diluyo. Creando anestesias para el caótico azar...',
      fullText: `Es un absurdo no acoger las voces que rodean esa fuga por la que me diluyo. Creando anestesias para el caótico azar y, en medio de él, soplar los suelos hasta la asfixia. El mínimo goteo del alma evadiéndose, atónita del fuego que quedó en ese tren. Espejo siempre soliendo ser el líquido y el humo. Extraños sonidos bloqueando el amarillo. Calzarse es cerrar la puerta a la penumbra. Ataviarse de sílabas es entrar a la sed.`,
      image: '/revista/Edicion1/obras/LauraLopez-Shilluk.png',
    },
    {
      id: 4,
      title: 'MONÓLOGO DEL CERDO',
      author: 'JUAN DIEGO RINCÓN',
      type: 'Poesía',
      readTime: '2 min',
      excerpt: '¿Dónde estás, Dios? ¿Por qué no me apuñalas tú mi hígado de cerdo? Oh, Jehová, tengo miedo. Tú que eres el Dios de dioses...',
      fullText: `"¿Dónde estás, Dios? ¿Por qué no me apuñalas tú mi hígado de cerdo? Oh, Jehová, tengo miedo. Tú que eres el Dios de dioses, príncipe de príncipes, rey sabio, justo y verdadero, ¿por qué vas a permitir vilmente mi muerte? Me siento como una prostituta, pues todos aquellos hombres a los que les prohibiste consumirme me manosean, disponiéndose a celebrar un festín en el que mi carne blanda será, como la de la mujer ajena, el anzuelo para que tú los reprendas. Estoy boca arriba. Unas manos me retienen y contraen mis pequeñas cuatro patas que se esfuerzan rabiosamente por zafarse. A cada forcejeo me hundo cada vez más en el vértigo. A mi lado, mis hermanos solo se revuelcan sobre las heces, como si tuvieran pesadillas. Y allí, bajo el resplandor del lívido sol, me encandila la punta de un rutilante puñal y, poco a poco, uno de los hombres me asesta el primer golpe en el lomo y balo buscando que Tú me escuches para que me liberes del enemigo. Cuando se preparan para el golpe fulminante, veo tornarse el verdugo en un ángel que empuña una espada y la dirige hacia mí. No fallará."`,
      image: '/revista/Edicion1/obras/JuanDiegoRincon-Monologo.png',
    },
    {
      id: 5,
      title: 'PARIENDO UN CERDO',
      author: 'JUAN DIEGO RINCÓN',
      type: 'Poesía',
      readTime: '2 min',
      excerpt: 'Las lápidas se asemejan a los dientes de Muertadehambre: las que están sobre la tierra, son sus muelas; las que están entre las paredes, son los colmillos...',
      fullText: `"Las lápidas se asemejan a los dientes de Muertadehambre: las que están sobre la tierra, son sus muelas; las que están entre las paredes, son los colmillos. Sus dientes, así como las tumbas, están, si no torcidos, quebrados, pues los cadáveres atravesados en el resquicio de los dientes le causan daño. Muchos de estos cuerpos tardan años en ser digeridos, otros se pudren transformándose en caries. En cualquier caso, el camino intestinal es largo, porque Muertadehambre tiene estreñimiento. ¡Ah, escuché su pujar, como el de una mujer pariendo un cerdo, mientras hacía las deposiciones! Sentí su hedor morboso hendiendo mis huesos. Por su culo, una boca reseca, salían cabezas, manos, rodillas... A los quejidos proseguía un gemido de caballo violado. ¿Iba a meter mis manos en el culo para sacarle los pedazos de cadáveres, así como cuando se le retira el feto a una vaca, y salvarla en medio de sus agonizantes gritos? Salí huyendo del cementerio. Llegué a una farmacia, y exclamé: '¡Muertadehambre necesita un laxante!'. Nadie me contestó."`,
      image: '/revista/Edicion1/obras/JuanDiegoRincon-Pariendo.png',
    },
    {
      id: 6,
      title: 'VISITA DE PESSOA A FRAY MAURICIO',
      author: 'TARSICIO VALENCIA',
      type: 'Poesía',
      readTime: '2 min',
      excerpt: 'Fray Mauricio está loco. No se rían de Fray Mauricio. No se rían de nadie. No pongas a nadie en ridículo, ni en lo más íntimo de tu ser...',
      fullText: `Fray Mauricio está loco.\nNo se rían de Fray Mauricio. No se rían de nadie.\nNo pongas a nadie en ridículo, ni en lo más íntimo de tu ser.\nLa vida humana es demasiado seria y triste para risas, se le oyó decir a Pessoa, después de que dejó a Fray Mauricio en la casa da Saúde de Cascais.\nY Fray Mauricio se duele de no ser totalmente bueno. Fray Mauricio es un místico sin dios.\nUn cristiano sin credo. Fray Mauricio reza: Que mi pomar dé frutos sabrosos para ti y mi viña dé vino.\nCrecen los intervalos entre ambos y en el árbol del patio el silencio ha entrado como el calor.`,
      image: '/revista/Edicion1/obras/TarsicioValencia-Pessoa.png',
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
                src="/revista/Edicion1/obras/YorladisAlzate-LaMagia.png"
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
                  className={`text-[10px] uppercase tracking-widest font-bold transition-all px-4 py-2 ${filter === 'Todos'
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
              <article key={writing.id} className="group flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/2 aspect-square overflow-hidden bg-surface shadow-lg sticky top-8">
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

                  <div className="relative transition-all duration-500">
                    <p className={`body-lg text-foreground/80 leading-relaxed ${expandedId === writing.id ? 'whitespace-pre-wrap text-base' : 'italic text-foreground/60'}`}>
                      {expandedId === writing.id ? writing.fullText : `"${writing.excerpt}"`}
                    </p>
                  </div>

                  <button
                    onClick={() => setExpandedId(expandedId === writing.id ? null : writing.id)}
                    className="text-[10px] mt-4 uppercase tracking-widest font-bold text-foreground border-b-2 border-primary pb-2 inline-flex items-center gap-4 hover:text-primary transition-colors"
                  >
                    {expandedId === writing.id ? (
                      <>CERRAR LECTURA <ChevronUp className="w-4 h-4" /></>
                    ) : (
                      <>LEER COMPLETO <BookOpen className="w-4 h-4" /></>
                    )}
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
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.308c-.22.36-.68.473-1.037.253-2.857-1.745-6.45-2.14-10.686-1.173-.41.094-.823-.16-.917-.57-.094-.41.16-.822.57-.916 4.637-1.06 8.607-.613 11.78 1.327.358.22.472.678.253 1.035l.037-.056zm1.464-3.26c-.276.45-.862.593-1.31.32-3.27-2.01-8.255-2.594-12.124-1.417-.506.154-1.04-.136-1.192-.644-.154-.508.136-1.043.644-1.193 4.413-1.34 9.9-1.3 13.654 1.012.448.274.59.86.328 1.31v.012zm.126-3.414c-3.92-2.327-10.38-2.543-14.135-1.403-.6.182-1.24-.162-1.423-.762-.18-.6.164-1.24.762-1.423 4.314-1.31 11.442-1.055 15.903 1.594.54.32.716 1.01.396 1.55-.32.54-1.01.714-1.55.394l-.053.05z" />
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