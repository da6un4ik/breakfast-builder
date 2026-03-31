import { useMemo, useState } from 'react';

type Goal = 'lose' | 'maintain' | 'gain';
type Budget = 'low' | 'medium' | 'premium';
type Restriction = 'lactose' | 'gluten' | 'nuts';

type Ingredient = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  tags?: Restriction[];
};

type Breakfast = {
  id: string;
  title: string;
  prepTime: number;
  budget: Budget;
  ingredients: string[];
  steps: string[];
};

const budgetOrder: Budget[] = ['low', 'medium', 'premium'];

const ingredients: Ingredient[] = [
  { id: 'oats', name: 'Овсяные хлопья', calories: 150, protein: 5, carbs: 27, fats: 3, tags: ['gluten'] },
  { id: 'chia', name: 'Семена чиа', calories: 80, protein: 3, carbs: 7, fats: 5 },
  { id: 'banana', name: 'Банан', calories: 90, protein: 1, carbs: 23, fats: 0 },
  { id: 'berries', name: 'Ягоды', calories: 45, protein: 1, carbs: 10, fats: 0 },
  { id: 'eggs', name: 'Яйца', calories: 140, protein: 12, carbs: 1, fats: 10 },
  { id: 'avocado', name: 'Авокадо', calories: 120, protein: 2, carbs: 6, fats: 11 },
  { id: 'toast', name: 'Цельнозерновой тост', calories: 110, protein: 4, carbs: 20, fats: 2, tags: ['gluten'] },
  { id: 'greek-yogurt', name: 'Греческий йогурт', calories: 120, protein: 15, carbs: 6, fats: 4, tags: ['lactose'] },
  { id: 'cottage-cheese', name: 'Творог', calories: 130, protein: 18, carbs: 3, fats: 5, tags: ['lactose'] },
  { id: 'peanut-butter', name: 'Арахисовая паста', calories: 95, protein: 4, carbs: 3, fats: 8, tags: ['nuts'] },
  { id: 'protein-powder', name: 'Протеин', calories: 110, protein: 22, carbs: 3, fats: 1, tags: ['lactose'] },
  { id: 'milk', name: 'Молоко', calories: 90, protein: 6, carbs: 9, fats: 3, tags: ['lactose'] },
  { id: 'honey', name: 'Мёд', calories: 30, protein: 0, carbs: 8, fats: 0 },
  { id: 'apple', name: 'Яблоко', calories: 60, protein: 0, carbs: 16, fats: 0 },
  { id: 'spinach', name: 'Шпинат', calories: 15, protein: 2, carbs: 2, fats: 0 },
  { id: 'almonds', name: 'Миндаль', calories: 75, protein: 3, carbs: 2, fats: 7, tags: ['nuts'] },
];

const breakfasts: Breakfast[] = [
  {
    id: 'protein-oats',
    title: 'Протеиновая овсянка с бананом',
    prepTime: 7,
    budget: 'low',
    ingredients: ['oats', 'milk', 'banana', 'protein-powder'],
    steps: ['Залей овсянку молоком и прогрей 3–4 минуты.', 'Добавь протеин и перемешай.', 'Укрась бананом.'],
  },
  {
    id: 'eggs-toast',
    title: 'Тост с авокадо и яйцом',
    prepTime: 8,
    budget: 'medium',
    ingredients: ['toast', 'eggs', 'avocado', 'spinach'],
    steps: ['Поджарь тост.', 'Приготовь яйцо на сковороде или в микроволновке.', 'Собери тост с авокадо и шпинатом.'],
  },
  {
    id: 'yogurt-bowl',
    title: 'Йогурт-болл с ягодами и чиа',
    prepTime: 4,
    budget: 'medium',
    ingredients: ['greek-yogurt', 'berries', 'chia', 'honey'],
    steps: ['Выложи йогурт в миску.', 'Добавь ягоды и чиа.', 'По желанию добавь мёд.'],
  },
  {
    id: 'cottage-apple',
    title: 'Творог с яблоком и миндалём',
    prepTime: 3,
    budget: 'low',
    ingredients: ['cottage-cheese', 'apple', 'almonds', 'honey'],
    steps: ['Нарежь яблоко.', 'Смешай творог с яблоком.', 'Добавь миндаль и немного мёда.'],
  },
  {
    id: 'green-smoothie',
    title: 'Зелёный смузи для энергии',
    prepTime: 5,
    budget: 'premium',
    ingredients: ['banana', 'spinach', 'protein-powder', 'milk', 'chia'],
    steps: ['Помести все ингредиенты в блендер.', 'Взбей 30–40 секунд.', 'Подавай сразу.'],
  },
];

function getNutrition(ingredientIds: string[]) {
  return ingredientIds.reduce(
    (acc, id) => {
      const ingredient = ingredients.find((item) => item.id === id);
      if (!ingredient) return acc;
      acc.calories += ingredient.calories;
      acc.protein += ingredient.protein;
      acc.carbs += ingredient.carbs;
      acc.fats += ingredient.fats;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fats: 0 },
  );
}

export default function App() {
  const [timeLimit, setTimeLimit] = useState(7);
  const [goal, setGoal] = useState<Goal>('maintain');
  const [budget, setBudget] = useState<Budget>('medium');
  const [restrictions, setRestrictions] = useState<Restriction[]>([]);
  const [pantry, setPantry] = useState<string[]>(['banana', 'eggs', 'oats', 'toast']);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [weeklyPlan, setWeeklyPlan] = useState<Breakfast[]>([]);

  const recommended = useMemo(() => {
    const budgetIndex = budgetOrder.indexOf(budget);
    const filtered = breakfasts.filter((meal) => {
      const mealBudgetIndex = budgetOrder.indexOf(meal.budget);
      const blockedByRestriction = meal.ingredients.some((id) => {
        const ingredient = ingredients.find((item) => item.id === id);
        return ingredient?.tags?.some((tag) => restrictions.includes(tag));
      });

      return meal.prepTime <= timeLimit && mealBudgetIndex <= budgetIndex && !blockedByRestriction;
    });

    const scored = filtered
      .map((meal) => {
        const nutrition = getNutrition(meal.ingredients);
        const pantryMatch = meal.ingredients.filter((item) => pantry.includes(item)).length;

        let goalScore = 0;
        if (goal === 'lose') goalScore = nutrition.calories <= 400 ? 4 : 1;
        if (goal === 'maintain') goalScore = nutrition.protein >= 20 ? 3 : 2;
        if (goal === 'gain') goalScore = nutrition.protein >= 28 ? 4 : 2;

        return {
          meal,
          nutrition,
          score: goalScore + pantryMatch,
          pantryMatch,
        };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    return scored;
  }, [timeLimit, goal, budget, restrictions, pantry]);

  const shoppingList = useMemo(() => {
    const needed = new Set<string>();
    weeklyPlan.forEach((meal) => {
      meal.ingredients.forEach((ingredient) => {
        if (!pantry.includes(ingredient)) {
          needed.add(ingredient);
        }
      });
    });

    return Array.from(needed).map((id) => ingredients.find((item) => item.id === id)?.name ?? id);
  }, [weeklyPlan, pantry]);

  const toggleRestriction = (value: Restriction) => {
    setRestrictions((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  const togglePantry = (value: string) => {
    setPantry((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const buildWeekPlan = () => {
    const base = recommended.map((item) => item.meal);
    if (!base.length) {
      setWeeklyPlan([]);
      return;
    }

    const week: Breakfast[] = [];
    for (let index = 0; index < 5; index += 1) {
      week.push(base[index % base.length]);
    }
    setWeeklyPlan(week);
  };

  return (
    <div className="min-h-screen bg-amber-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">MVP</p>
          <h1 className="mt-2 text-3xl font-bold">Breakfast Builder — конструктор завтраков</h1>
          <p className="mt-3 max-w-3xl text-slate-600">Выбери цель, время и бюджет — приложение подберёт 3 завтрака, соберёт план на 5 дней и список покупок.</p>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl bg-white p-5 shadow-sm lg:col-span-1">
            <h2 className="text-lg font-semibold">1) Настройки</h2>

            <label className="mt-4 block text-sm font-medium">Время на завтрак: {timeLimit} мин</label>
            <input
              type="range"
              min={3}
              max={12}
              step={1}
              value={timeLimit}
              onChange={(event) => setTimeLimit(Number(event.target.value))}
              className="mt-2 w-full"
            />

            <div className="mt-4">
              <p className="text-sm font-medium">Цель</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <button className={`rounded-xl border px-3 py-1 text-sm ${goal === 'lose' ? 'bg-orange-100 border-orange-400' : 'border-slate-200'}`} onClick={() => setGoal('lose')}>Снижение веса</button>
                <button className={`rounded-xl border px-3 py-1 text-sm ${goal === 'maintain' ? 'bg-orange-100 border-orange-400' : 'border-slate-200'}`} onClick={() => setGoal('maintain')}>Баланс</button>
                <button className={`rounded-xl border px-3 py-1 text-sm ${goal === 'gain' ? 'bg-orange-100 border-orange-400' : 'border-slate-200'}`} onClick={() => setGoal('gain')}>Набор</button>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium">Бюджет</p>
              <select className="mt-2 w-full rounded-xl border border-slate-300 p-2" value={budget} onChange={(event) => setBudget(event.target.value as Budget)}>
                <option value="low">Дешево</option>
                <option value="medium">Средне</option>
                <option value="premium">Премиум</option>
              </select>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium">Ограничения</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {([
                  ['lactose', 'Без лактозы'],
                  ['gluten', 'Без глютена'],
                  ['nuts', 'Без орехов'],
                ] as [Restriction, string][]).map(([key, title]) => (
                  <button
                    key={key}
                    className={`rounded-xl border px-3 py-1 text-sm ${restrictions.includes(key) ? 'bg-rose-100 border-rose-400' : 'border-slate-200'}`}
                    onClick={() => toggleRestriction(key)}
                  >
                    {title}
                  </button>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-3xl bg-white p-5 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold">2) Рекомендованные завтраки</h2>
              <button className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-white" onClick={buildWeekPlan}>Собрать план на 5 дней</button>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {recommended.map(({ meal, nutrition, pantryMatch }) => (
                <div key={meal.id} className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm text-orange-600">{meal.prepTime} мин · {meal.budget}</p>
                  <h3 className="mt-1 font-semibold">{meal.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">Ккал {nutrition.calories} · Б {nutrition.protein} · Ж {nutrition.fats} · У {nutrition.carbs}</p>
                  <p className="mt-1 text-xs text-slate-500">Совпало с pantry: {pantryMatch}/{meal.ingredients.length}</p>
                  <button className="mt-3 rounded-lg border border-slate-300 px-3 py-1 text-sm" onClick={() => toggleFavorite(meal.id)}>
                    {favorites.includes(meal.id) ? '★ В избранном' : '☆ В избранное'}
                  </button>
                  <ol className="mt-3 list-decimal space-y-1 pl-4 text-xs text-slate-600">
                    {meal.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            {!recommended.length && <p className="mt-4 text-sm text-rose-600">Нет вариантов под текущие ограничения. Ослабь фильтры или увеличь время.</p>}
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">3) Pantry — что есть дома</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {ingredients.map((ingredient) => (
                <button
                  key={ingredient.id}
                  className={`rounded-xl border px-3 py-1 text-sm ${pantry.includes(ingredient.id) ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200'}`}
                  onClick={() => togglePantry(ingredient.id)}
                >
                  {ingredient.name}
                </button>
              ))}
            </div>
          </article>

          <article className="rounded-3xl bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">4) План и список покупок</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {weeklyPlan.length ? (
                weeklyPlan.map((meal, index) => <li key={`${meal.id}-${index}`}>День {index + 1}: {meal.title}</li>)
              ) : (
                <li className="text-slate-500">Пока пусто — нажми “Собрать план на 5 дней”.</li>
              )}
            </ul>
            <h3 className="mt-4 font-medium">Список покупок</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              {shoppingList.length ? shoppingList.map((item) => <li key={item}>{item}</li>) : <li>Все ингредиенты уже есть дома 🎉</li>}
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
}
