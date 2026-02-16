import { useState, useCallback, useMemo } from 'react';
import { Ingredient } from './lib/ingredients';
import { Drink } from './lib/drinks';
import { Plate } from './components/Plate';
import { Mug } from './components/Mug';
import { IngredientTray } from './components/IngredientTray';
import { DrinkTray } from './components/DrinkTray';
import { NutritionDisplay } from './components/NutritionDisplay';
import { Toaster, toast } from 'sonner';

interface PouredDrink extends Drink {
  instanceId: string;
}

const MAX_GENERATION_INGREDIENTS = 4;

const buildSeedFromIds = (ids: string[]) => {
  return ids.join('-').split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
};

const buildGeneratedPlateUrl = (ingredients: Ingredient[]) => {
  const ingredientNames = ingredients.map((item) => item.name.toLowerCase()).join(', ');
  const prompt = `Top-down realistic food photography of a breakfast plate with ${ingredientNames}, styled plating, natural morning light, crisp details, clean white ceramic plate.`;
  const seed = buildSeedFromIds(ingredients.map((item) => item.id));

  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=1024&seed=${seed}&nologo=true`;
};

export default function App() {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [generatedPlateImage, setGeneratedPlateImage] = useState<string | null>(null);
  const [drinks, setDrinks] = useState<PouredDrink[]>([]);

  const totalNutrition = useMemo(() => {
    const foodTotals = selectedIngredients.reduce(
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
  }, [selectedIngredients, drinks]);

  const generatedTitle = useMemo(() => {
    if (selectedIngredients.length === 0) {
      return 'Generated breakfast plate';
    }

    return selectedIngredients.map((item) => item.name).join(' + ');
  }, [selectedIngredients]);

  const handleSelectIngredient = useCallback((ingredient: Ingredient) => {
    setSelectedIngredients((prev) => {
      const existing = prev.find((item) => item.id === ingredient.id);
      const next = existing ? prev : [...prev, ingredient];
      const trimmed = next.slice(-MAX_GENERATION_INGREDIENTS);

      setGeneratedPlateImage(buildGeneratedPlateUrl(trimmed));

      toast.success(`Generated: ${trimmed.map((item) => item.name).join(' + ')}`, {
        duration: 1800,
        position: 'bottom-center',
      });

      return trimmed;
    });
  }, []);

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

  const handleRemoveDrink = useCallback((instanceId: string) => {
    setDrinks((prev) => prev.filter((item) => item.instanceId !== instanceId));
  }, []);

  const handleClearGeneratedPlate = useCallback(() => {
    setSelectedIngredients([]);
    setGeneratedPlateImage(null);
    toast.info('Generated plate cleared');
  }, []);

  const handleReset = useCallback(() => {
    if (selectedIngredients.length === 0 && drinks.length === 0) return;

    setSelectedIngredients([]);
    setGeneratedPlateImage(null);
    setDrinks([]);
    toast.info('Breakfast reset!');
  }, [drinks.length, selectedIngredients.length]);

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
              generatedImageUrl={generatedPlateImage}
              generatedTitle={generatedTitle}
              onClear={handleClearGeneratedPlate}
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
