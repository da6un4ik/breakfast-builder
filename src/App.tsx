const introParagraphs = [
  'En Madrid hay un restaurante muy especial llamado DiverXO, creado por el chef Dabiz Muñoz, famoso por su cocina hedonista y creativa. En este lugar no solo se come, se vive una experiencia vanguardista que sorprende en cada plato. La cocina de DiverXO mezcla tradición española con técnicas modernas y toques de otras culturas, como si cada bocado fuera un viaje por el mundo.',
  'Un ejemplo perfecto es su idea de “deformar” platos clásicos como el gazpacho andaluz, una sopa fría tradicional de tomate y verduras que normalmente se sirve de forma muy sencilla. En versión moderna, el gazpacho cambia de textura y presentación: puede aparecer como una espuma ligera, como pequeñas esferas que explotan en la boca o como una crema muy fina con contrastes crujientes. Lo importante es mantener el sabor fresco del gazpacho, pero jugar con la sorpresa, la intensidad y la combinación de ingredientes.',
  'En este curso vamos a usar este tipo de platos para aprender español: vamos a leer recetas, descubrir nuevas palabras y hablar de sabores, sensaciones y emociones en la mesa. Así, tú también podrás describir tu propio gazpacho mutante y contar una historia en cada cucharada.',
];

const glossary = [
  ['vanguardia', 'авангард, передовой стиль'],
  ['cocina hedonista', 'гедонистская кухня, ориентированная на удовольствие'],
  ['fusión', 'фьюжн, смешение разных кулинарных традиций'],
  ['textura', 'текстура, ощущение во рту'],
  ['explosión de sabor', 'взрыв вкуса'],
  ['sopa fría', 'холодный суп'],
  ['plato clásico', 'классическое блюдо'],
  ['presentación', 'подача (как выглядит блюдо)'],
  ['sorpresa', 'сюрприз, неожиданность'],
  ['viaje sensorial', 'сенсорное путешествие, путешествие для чувств'],
];

const ingredients = [
  'tomate maduro – спелый помидор – овощ',
  'pepino – огурец – овощ',
  'pimiento verde – зелёный перец – овощ',
  'ajo – чеснок – овощ/специя',
  'aceite de oliva virgen extra – оливковое масло extra virgin – жир/масло',
  'vinagre de vino – винный уксус – приправа',
  'sal – соль – специя',
  'remolacha licuada – пюрированная свёкла – овощ (модерн)',
  'esferificaciones de aceite – сферификации масла – техника/декор',
  'gel de vinagre – гель из уксуса – техника/декор',
  'espuma de tomate – томатная пена – техника/текстура',
  'crujiente de pan de ajo – хрустящий чесночный тост – декор/гарнир',
  'cerezas – вишни/черешни – фрукт',
  'ají amarillo – жёлтый перуанский перец чили – специя/перец',
];

const utensils = [
  'batidora – блендер/миксер – прибор',
  'vaso medidor – мерный стакан – посуда',
  'colador fino – мелкое сито – посуда',
  'sifón – кулинарный сифон – прибор',
  'cuchillo bien afilado – хорошо заточенный нож – инструмент',
];

const verbs = [
  'triturar – измельчать (в пюре)',
  'licuar – делать жидким, сбивать',
  'colar – процеживать',
  'emulsionar – эмульгировать',
  'enfriar – охлаждать',
  'decorar – украшать',
];

const recipeIngredients = [
  '4 tomates maduros',
  '1/2 pepino, pelado y sin semillas',
  '1/2 pimiento verde, sin semillas',
  '1 diente de ajo pequeño, sin el centro',
  '2 cucharadas de aceite de oliva virgen extra',
  '1 cucharada de vinagre de vino (o de Jerez)',
  'Sal al gusto',
  '50 ml de agua fría (si quieres un gazpacho más líquido)',
  '50 g de remolacha licuada (para dar color y un toque dulce)',
  'Espuma de tomate ya preparada en un sifón pequeño',
  'Esferificaciones de aceite de oliva (para decorar)',
  'Crujiente de pan de ajo (trozos pequeños de pan tostado con ajo)',
];

const recipeSteps = [
  'Primero, lava bien los tomates, el pepino y el pimiento verde, y corta todas las verduras en trozos grandes.',
  'Pon los trozos de tomate, pepino, pimiento y el diente de ajo en el vaso de la batidora, añade la sal y tritura hasta obtener una crema muy fina.',
  'Luego, añade el aceite de oliva y el vinagre y vuelve a triturar para emulsionar el gazpacho y conseguir una textura más suave.',
  'Incorpora la remolacha licuada y, si lo necesitas, un poco de agua fría; tritura de nuevo hasta que el color y la textura sean homogéneos.',
  'Después, pasa la mezcla por un colador fino para eliminar pieles y semillas, y enfría el gazpacho en la nevera durante al menos una hora.',
  'Mientras el gazpacho se enfría, prepara la espuma de tomate en el sifón siguiendo las instrucciones del fabricante y agita bien para que quede ligera.',
  'Al final, sirve el gazpacho en cuencos pequeños, coloca encima una nube de espuma de tomate y decora con esferificaciones de aceite y crujiente de pan de ajo.',
  'Prueba el plato y, si es necesario, ajusta de nuevo la sal o el vinagre antes de servir para equilibrar el sabor.',
];

const questionSections = [
  {
    title: 'PREGUNTAS DE COMPRENSIÓN',
    items: [
      '1. ¿Qué tipo de experiencia ofrece el restaurante DiverXO? a) Una experiencia muy tradicional y simple b) Una experiencia vanguardista y sorprendente c) Una experiencia rápida y barata',
      '2. ¿Qué ocurre con el gazpacho en la versión moderna? a) Pierde completamente su sabor clásico b) Mantiene el sabor fresco, pero cambia la textura y la presentación c) Se sirve caliente y sin verduras',
      '3. ¿Por qué es interesante aprender español a través de platos como el gazpacho mutante? (Responde en ruso o en español.)',
    ],
  },
  {
    title: 'PRÁCTICA: VOCABULARIO',
    items: [
      'EJERCICIO 1. LA PALABRA EXTRAÑA. Marca la palabra que NO encaja en un gazpacho: 1) tomate maduro / pepino / pimiento verde / queso azul. 2) aceite de oliva / vinagre de vino / sal / cerezas. 3) remolacha licuada / ají amarillo / esferificaciones de aceite / yogur natural.',
      'EJERCICIO 2. SIGNIFICADO DE PALABRAS. Elige la traducción correcta: sopa fría; textura muy fina; sabor ligeramente picante; crujiente de pan; toque ácido; color intenso gracias a la remolacha.',
    ],
  },
  {
    title: 'PRÁCTICA: IMPERATIVO',
    items: [
      'EJERCICIO 3. DE TÚ A USTED. Elige la forma correcta de usted: Lave/Triture/Añada/Pase/Pruebe y corrija.',
    ],
  },
  {
    title: 'PRÁCTICA: COMPRENSIÓN COMUNICATIVA',
    items: [
      'EJERCICIO 4. COMPRENSIÓN DEL DIÁLOGO: preferencias del cliente sobre temperatura, acidez, ajo y textura crujiente.',
      'EJERCICIO 5. “ME GUSTA EL GAZPACHO…”: completa con frío, ácido y crujiente según contexto.',
    ],
  },
];

const cardClass =
  'rounded-3xl border border-orange-200/80 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-8';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-rose-50 text-slate-800">
      <header className="mx-auto max-w-6xl px-4 pb-8 pt-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">Curso de español gastronómico</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
          Gazpacho 2.0: historia, vocabulario y práctica comunicativa
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Página didáctica con enfoque visual moderno para trabajar comprensión lectora, léxico culinario e imperativo formal.
        </p>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:px-8">
        <section className={cardClass}>
          <h2 className="font-serif text-3xl text-slate-900">Introducción</h2>
          <div className="mt-4 space-y-4 text-[1.04rem] leading-8 text-slate-700">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className={cardClass}>
            <h3 className="font-serif text-2xl text-slate-900">Glosario</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              {glossary.map(([term, definition]) => (
                <li key={term}>
                  <span className="font-semibold text-slate-900">{term}</span> — {definition}
                </li>
              ))}
            </ul>
          </article>

          <article className={cardClass}>
            <h3 className="font-serif text-2xl text-slate-900">Comprensión inicial</h3>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-700">
              <li>
                ¿Qué tipo de experiencia ofrece el restaurante DiverXO?
                <div className="mt-1 text-sm text-slate-600">a) tradicional b) vanguardista c) rápida y barata</div>
              </li>
              <li>
                ¿Qué ocurre con el gazpacho en la versión moderna?
                <div className="mt-1 text-sm text-slate-600">a) pierde sabor b) mantiene sabor y cambia forma c) se sirve caliente</div>
              </li>
              <li>¿Por qué es útil aprender español con platos como el gazpacho mutante?</li>
            </ol>
          </article>
        </section>

        <section className={cardClass}>
          <h2 className="font-serif text-3xl text-slate-900">Ingredientes, utensilios y verbos</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-orange-600">Ingredientes para el Gazpacho 2.0</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {ingredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-600">Utensilios</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {utensils.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-600">Verbos clave</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {verbs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 rounded-2xl bg-orange-100/70 p-3 text-sm text-slate-700">
                <span className="font-medium">Ejemplo:</span> Tritura los tomates y cuela la mezcla para conseguir una textura muy fina.
              </p>
            </div>
          </div>
        </section>

        <section className={cardClass}>
          <h2 className="font-serif text-3xl text-slate-900">Receta (adaptada)</h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-orange-600">Ingredientes (2 personas)</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                {recipeIngredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-600">Preparación</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
                {recipeSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          {questionSections.map((section) => (
            <article key={section.title} className={cardClass}>
              <h3 className="font-serif text-2xl text-slate-900">{section.title}</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
