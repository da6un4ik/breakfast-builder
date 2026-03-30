import type { ReactNode } from "react";

const introParagraphs = [
  'En Madrid hay un restaurante muy especial llamado DiverXO, creado por el chef Dabiz Muñoz, famoso por su cocina hedonista y creativa. En este lugar no solo se come, se vive una experiencia vanguardista que sorprende en cada plato. La cocina de DiverXO mezcla tradición española con técnicas modernas y toques de otras culturas, como si cada bocado fuera un viaje por el mundo.',
  'Un ejemplo perfecto es su idea de “deformar” platos clásicos como el gazpacho andaluz, una sopa fría tradicional de tomate y verduras que normalmente se sirve de forma muy sencilla. En versión moderna, el gazpacho cambia de textura y presentación: puede aparecer como una espuma ligera, como pequeñas esferas que explotan en la boca o como una crema muy fina con contrastes crujientes. Lo importante es mantener el sabor fresco del gazpacho, pero jugar con la sorpresa, la intensidad y la combinación de ingredientes.',
  'En este curso vamos a usar este tipo de platos para aprender español: vamos a leer recetas, descubrir nuevas palabras y hablar de sabores, sensaciones y emociones en la mesa. Así, tú también podrás describir tu propio gazpacho mutante y contar una historia en cada cucharada.',
];

const glossary = [
  'vanguardia – авангард, передовой стиль',
  'cocina hedonista – гедонистская кухня, ориентированная на удовольствие',
  'fusión – фьюжн, смешение разных кулинарных традиций',
  'textura – текстура, ощущение во рту',
  'explosión de sabor – взрыв вкуса',
  'sopa fría – холодный суп',
  'plato clásico – классическое блюдо',
  'presentación – подача (как выглядит блюдо)',
  'sorpresa – сюрприз, неожиданность',
  'viaje sensorial – сенсорное путешествие, путешествие для чувств',
];

const comprehensionQuestions = [
  '1. ¿Qué tipo de experiencia ofrece el restaurante DiverXO? a) Una experiencia muy tradicional y simple b) Una experiencia vanguardista y sorprendente c) Una experiencia rápida y barata',
  '2. ¿Qué ocurre con el gazpacho en la versión moderna? a) Pierde completamente su sabor clásico b) Mantiene el sabor fresco, pero cambia la textura y la presentación c) Se sirve caliente y sin verduras',
  '3. ¿Por qué es interesante aprender español a través de platos como el gazpacho mutante? (Responde en ruso o en español.)',
];

const ingredients = [
  'tomate maduro – спелый помидор',
  'pepino – огурец',
  'pimiento verde – зелёный перец',
  'ajo – чеснок',
  'aceite de oliva virgen extra – оливковое масло',
  'vinagre de vino – винный уксус',
  'sal – соль',
  'remolacha licuada – пюрированная свёкла)',
  'esferificaciones de aceite – сферификации масла',
  'gel de vinagre – гель из уксуса',
  'espuma de tomate – томатная пена',
  'crujiente de pan de ajo – хрустящий чесночный тост',
  'cerezas – вишни/черешни',
  'ají amarillo – жёлтый перуанский перец чили',
];

const utensils = [
  'batidora – блендер/миксер',
  'vaso medidor – мерный стакан',
  'colador fino – мелкое сито',
  'sifón – кулинарный сифон',
  'cuchillo bien afilado – хорошо заточенный нож',
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

const practiceSections = [
  {
    id: 'vocabulario',
    title: 'PRÁCTICA: VOCABULARIO',
    items: [
      'EJERCICIO 1. LA PALABRA EXTRAÑA: Marca la palabra que NO encaja en un gazpacho. 1) tomate maduro / pepino / pimiento verde / queso azul. 2) aceite de oliva / vinagre de vino / sal / cerezas. 3) remolacha licuada / ají amarillo / esferificaciones de aceite / yogur natural.',
      'EJERCICIO 2. SIGNIFICADO DE PALABRAS: 1) sopa fría: a) горячий суп b) холодный суп c) сладкий суп. 2) textura muy fina: a) очень грубая b) очень гладкая c) очень сухая. 3) sabor ligeramente picante: a) очень сладкий b) сильно острый c) слегка пикантный. 4) crujiente de pan: a) хрустящая крошка b) мягкий хлеб c) тост без корочки. 5) toque ácido: a) молочный оттенок b) кислотный акцент c) горькое послевкусие. 6) color intenso gracias a la remolacha: a) яркий цвет за счёт свёклы b) бледный цвет c) зелёный цвет.',
    ],
  },
  {
    id: 'imperativo',
    title: 'PRÁCTICA: IMPERATIVO',
    items: [
      'EJERCICIO 3. DE TÚ A USTED: 1) Lava los tomates → a) Lave los tomates. b) Lavas los tomates. c) Laváis los tomates. 2) Tritura las verduras en la batidora → a) Triture las verduras en la batidora. b) Trituras... c) Trituren... 3) Añade el aceite de oliva y el vinagre → a) Añada el aceite... b) Añades... c) Añadid... 4) Pasa la mezcla por un colador fino → a) Pase la mezcla... b) Pasas... c) Pasad... 5) Prueba el gazpacho y corrige la sal → a) Pruebe el gazpacho y corrija la sal. b) Pruebas... c) Probad...',
    ],
  },
  {
    id: 'comprension',
    title: 'PRÁCTICA: COMPRENSIÓN COMUNICATIVA',
    items: [
      'EJERCICIO 4. COMPRENSIÓN DEL DIÁLOGO: Diálogo 1: “Me gusta el gazpacho más frío y menos ácido...” ¿Qué prefiere el cliente? a) más caliente y más ácido b) más frío y menos ácido c) sin sal y sin vinagre. Diálogo 2: “Prefiero el gazpacho sin ajo y con más textura crujiente...” ¿Qué pide el cliente? a) más ajo y menos crujiente b) sin ajo y con más crujiente c) sin pan y con más ajo.',
      'EJERCICIO 5. “ME GUSTA EL GAZPACHO…”: 1) Me gusta más ______ en verano: frío / picante / dulce. 2) Prefiero menos ______, con poco vinagre: espeso / ácido / crujiente. 3) Me gusta más ______, con trocitos de pan y verduras: suave / crujiente / líquido.',
    ],
  },
];

const navItems = [
  { id: 'intro', label: 'Introducción', icon: '🍅' },
  { id: 'glossary', label: 'Glosario', icon: '📘' },
  { id: 'ingredients', label: 'Ingredientes', icon: '🥒' },
  { id: 'recipe', label: 'Receta', icon: '🧑‍🍳' },
  { id: 'practice', label: 'Práctica', icon: '📝' },
];

function SectionCard({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
      <div className="mt-4 text-slate-700">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-rose-50 text-slate-900">
      <aside className="fixed left-0 top-0 hidden h-screen w-72 flex-col border-r border-orange-100 bg-white/90 p-6 backdrop-blur md:flex">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">Curso gastronómico</p>
          <h1 className="mt-2 text-2xl font-extrabold leading-tight">Mastering Gazpacho</h1>
        </div>

        <nav className="mt-10 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-orange-100 hover:text-orange-700"
            >
              <span aria-hidden>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl bg-orange-100 p-4">
          <p className="text-sm font-semibold text-orange-800">Chef Dabiz Muñoz</p>
          <p className="text-xs text-orange-700/80">Inspiración del curso</p>
        </div>
      </aside>

      <main className="md:ml-72">
        <header className="sticky top-0 z-20 border-b border-orange-100 bg-white/80 px-4 py-4 backdrop-blur sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Lección Uno</p>
          <h2 className="text-xl font-extrabold sm:text-2xl">Gazpacho 2.0</h2>
        </header>

        <section id="intro" className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-16">
          <div>
            <p className="inline-block rounded-full bg-orange-200/70 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-800">
              ВСТУПЛЕНИЕ
            </p>
            <h3 className="mt-4 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              Historia del plato y atmósfera del restaurante
            </h3>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Explora el universo de DiverXO, aprende vocabulario gastronómico y practica español con una receta creativa de
              gazpacho andaluz.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#recipe" className="rounded-xl bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-700">
                Ir a la receta
              </a>
              <a
                href="#practice"
                className="rounded-xl border border-orange-200 bg-white px-6 py-3 font-bold text-orange-700 transition hover:bg-orange-50"
              >
                Ir a la práctica
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-orange-200/50 blur-2xl" />
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-full bg-amber-300/40 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1200&q=80"
              alt="Bowl of gazpacho with fresh vegetables"
              className="relative z-10 w-full rounded-3xl border border-orange-100 object-cover shadow-xl"
            />
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-20 sm:px-8">
          <SectionCard id="glossary" title="Introducción completa + Glosario + Preguntas de comprensión">
            <div className="space-y-4 leading-7">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <h3 className="mt-8 text-xl font-bold text-slate-900">GLOSARIO</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {glossary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="mt-8 text-xl font-bold text-slate-900">PREGUNTAS DE COMPRENSIÓN</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              {comprehensionQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ol>
          </SectionCard>

          <section id="ingredients" className="grid gap-6 lg:grid-cols-3">
            <SectionCard id="ing-list" title="Ingredientes para el Gazpacho 2.0">
              <ul className="list-disc space-y-2 pl-5">
                {ingredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard id="utensilios" title="Utensilios">
              <ul className="list-disc space-y-2 pl-5">
                {utensils.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard id="verbos" title="Verbos">
              <ul className="list-disc space-y-2 pl-5">
                {verbs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 rounded-xl bg-orange-50 p-3 text-sm">
                <span className="font-semibold">Ejemplo:</span> Tritura los tomates y cuela la mezcla para conseguir una textura
                muy fina.
              </p>
            </SectionCard>
          </section>

          <section id="recipe" className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">RECETA (ADAPTADA)</h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900">INGREDIENTES (para 2 personas)</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                  {recipeIngredients.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">PREPARACIÓN</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
                  {recipeSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section id="practice" className="grid gap-6 lg:grid-cols-3">
            {practiceSections.map((section) => (
              <SectionCard key={section.id} id={section.id} title={section.title}>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </SectionCard>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
