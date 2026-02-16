import { useState, useCallback, useMemo } from 'react';
import { Ingredient } from './lib/ingredients';
import { Plate } from './components/Plate';
import { IngredientTray } from './components/IngredientTray';
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

export default function App() {
  const [items, setItems] = useState<PlantedIngredient[]>([]);

  const totalNutrition = useMemo(() => {
    return items.reduce(
      (acc, item) => ({
        calories: acc.calories + item.calories,
        protein: acc.protein + item.protein,
        fat: acc.fat + item.fat,
        carbs: acc.carbs + item.carbs,
      }),
      { calories: 0, protein: 0, fat: 0, carbs: 0 }
    );
  }, [items]);

  const handleSelectIngredient = useCallback((ingredient: Ingredient) => {
    // Generate random position near center with some variance
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 80;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    const newItem: PlantedIngredient = {
      ...ingredient,
      instanceId: `${ingredient.id}-${Date.now()}-${Math.random()}`,
      x,
      y,
      rotation: Math.random() * 360,
      scale: 0.9 + Math.random() * 0.2,
      zIndex: items.length + 1,
    };

    setItems(prev => [...prev, newItem]);
    toast.success(`Added ${ingredient.name}`, {
      duration: 1500,
      position: 'bottom-center',
    });
  }, [items.length]);

  const handleRemoveItem = useCallback((instanceId: string) => {
    setItems(prev => prev.filter(item => item.instanceId !== instanceId));
  }, []);

  const handleReset = useCallback(() => {
    if (items.length === 0) return;
    setItems([]);
    toast.info("Plate cleared!");
  }, [items.length]);

  return (
    <div className="min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center p-4">
      <Toaster richColors />
      
      <NutritionDisplay 
        total={totalNutrition} 
        onReset={handleReset}
      />

      <main className="flex-1 flex items-center justify-center w-full max-w-6xl">
        <div className="relative">
          {/* Subtle reflection under plate */}
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black/5 blur-2xl rounded-full" />
          
          <Plate 
            items={items} 
            onRemove={handleRemoveItem} 
          />
        </div>
      </main>

      <IngredientTray onSelect={handleSelectIngredient} />

      {/* Decorative text */}
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
