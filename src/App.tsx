import { useState, useCallback, useMemo } from 'react';
import { Ingredient, INGREDIENTS } from './lib/ingredients';
import { Drink } from './lib/drinks';
import { Plate } from './components/Plate';
import { Mug } from './components/Mug';
import { IngredientTray } from './components/IngredientTray';
import { DrinkTray } from './components/DrinkTray';
import { NutritionDisplay } from './components/NutritionDisplay';
import { Toaster, toast } from 'sonner';

interface PlantedIngredient extends Ingredient {
  instanceId: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  zIndex: number;
}

interface PouredDrink extends Drink {
  instanceId: string;
}

const HERO_ANGLES = [0, 62, 128, 198, 276];

export default function App() {
  const [items, setItems] = useState<PlantedIngredient[]>([]);
  const [drinks, setDrinks] = useState<PouredDrink[]>([]);

  const totalNutrition = useMemo(() => {
    const foodTotals = items.reduce(
      (acc, item) => ({
        calories: acc.calories + item.calories,
        protein: acc.protein + item.protein,
        fat: acc.fat + item.fat,
        carbs: acc.carbs + item.carbs,
      }),
      { calories: 0, protein: 0, fat: 0, carbs: 0 }
    );

    return drinks.reduce(
      (acc, drink) => ({
        calories: acc.calories + drink.calories,
        protein: acc.protein + drink.protein,
        fat: acc.fat + drink.fat,
        carbs: acc.carbs + drink.carbs,
      }),
      foodTotals
    );
  }, [items, drinks]);

  const createPlacedItem = useCallback((ingredient: Ingredient, seed: number, zIndex: number): PlantedIngredient => {
    const angleDeg = HERO_ANGLES[seed % HERO_ANGLES.length] + Math.random() * 12;
    const angle = (angleDeg * Math.PI) / 180;
    const radius = 18 + (seed % 3) * 22 + Math.random() * 10;

    return {
      ...ingredient,
      instanceId: `${ingredient.id}-${Date.now()}-${Math.random()}`,
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      rotation: Math.random() * 40 - 20,
      scale: 0.86 + Math.random() * 0.22,
      zIndex,
    };
  }, []);

  const generateRealisticPlate = useCallback((heroIngredient: Ingredient) => {
    const companionPool = INGREDIENTS.filter((item) => item.id !== heroIngredient.id);
    const shuffled = [...companionPool].sort(() => Math.random() - 0.5);

    const generatedItems: PlantedIngredient[] = [];
    let zIndex = 1;

    const heroCount = heroIngredient.id === 'egg' ? 2 : 3;
    for (let i = 0; i < heroCount; i += 1) {
      generatedItems.push(createPlacedItem(heroIngredient, i, zIndex));
      zIndex += 1;
    }

    const sideCount = 2 + Math.floor(Math.random() * 2);
    for (let i = 0; i < sideCount; i += 1) {
      const sideIngredient = shuffled[i % shuffled.length];
      generatedItems.push(createPlacedItem(sideIngredient, i + 2, zIndex));
      zIndex += 1;
    }

    return generatedItems;
  }, [createPlacedItem]);

  const handleSelectIngredient = useCallback((ingredient: Ingredient) => {
    const generatedPlate = generateRealisticPlate(ingredient);
    setItems(generatedPlate);

    toast.success(`Generated plate with ${ingredient.name}`, {
      duration: 1800,
      position: 'bottom-center',
    });
  }, [generateRealisticPlate]);

  const handleSelectDrink = useCallback((drink: Drink) => {
    const newDrink: PouredDrink = {
      ...drink,
      instanceId: `${drink.id}-${Date.now()}-${Math.random()}`,
    };

    setDrinks((prev) => [...prev, newDrink]);
    toast.success(`Poured ${drink.name}`, {
      duration: 1500,
      position: 'bottom-center',
    });
  }, []);

  const handleRemoveItem = useCallback((instanceId: string) => {
    setItems((prev) => prev.filter((item) => item.instanceId !== instanceId));
  }, []);

  const handleRemoveDrink = useCallback((instanceId: string) => {
    setDrinks((prev) => prev.filter((item) => item.instanceId !== instanceId));
  }, []);

  const handleReset = useCallback(() => {
    if (items.length === 0 && drinks.length === 0) return;
    setItems([]);
    setDrinks([]);
    toast.info('Breakfast reset!');
  }, [drinks.length, items.length]);

  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center p-4 pb-56 md:pb-60">
      <Toaster richColors />

      <NutritionDisplay
        total={totalNutrition}
        onReset={handleReset}
      />

      <main className="flex-1 flex items-center justify-center w-full max-w-6xl pt-12 md:pt-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <div className="relative">
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black/5 blur-2xl rounded-full" />

            <Plate
              items={items}
              onRemove={handleRemoveItem}
            />
          </div>

          <div className="relative mb-14 md:mb-0">
            <Mug drinks={drinks} onRemove={handleRemoveDrink} />
          </div>
        </div>
      </main>

      <DrinkTray onSelect={handleSelectDrink} />
      <IngredientTray onSelect={handleSelectIngredient} />

      <div className="fixed top-8 left-8 hidden lg:block">
        <h1 className="text-4xl font-black text-amber-900/5 select-none leading-none">
          BREAKFAST<br />BUILDER
        </h1>
      </div>

      <div className="fixed bottom-8 right-8 hidden lg:block">
        <p className="text-sm font-medium text-amber-900/10 tracking-[0.2em] select-none uppercase">
          Artisanal Morning 2026
        </p>
      </div>
    </div>
  );
}
