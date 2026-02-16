import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Flame, Activity, Zap, Trash2 } from 'lucide-react';
import { Ingredient } from '../lib/ingredients';

interface NutritionDisplayProps {
  total: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  };
  onReset: () => void;
}

export const NutritionDisplay = ({ total, onReset }: NutritionDisplayProps) => {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl"
    >
      <div className="bg-white/80 backdrop-blur-md border border-amber-100 rounded-2xl shadow-xl px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-1">
          <Stat icon={<Flame className="w-4 h-4 text-orange-500" />} label="Calories" value={total.calories} unit="kcal" />
          <Stat icon={<Zap className="w-4 h-4 text-blue-500" />} label="Protein" value={total.protein} unit="g" />
          <Stat icon={<Activity className="w-4 h-4 text-amber-500" />} label="Fat" value={total.fat} unit="g" />
          <Stat icon={<Leaf className="w-4 h-4 text-emerald-500" />} label="Carbs" value={total.carbs} unit="g" />
        </div>
        
        <button 
          onClick={onReset}
          className="flex-shrink-0 p-2 hover:bg-red-50 text-red-400 hover:text-red-500 rounded-full transition-colors"
          title="Clear Plate"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

const Stat = ({ icon, label, value, unit }: { icon: React.ReactNode, label: string, value: number, unit: string }) => (
  <div className="flex items-center gap-3 min-w-fit">
    <div className="p-2 bg-secondary rounded-lg">{icon}</div>
    <div>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium leading-none mb-1">{label}</p>
      <div className="flex items-baseline gap-1">
        <motion.span 
          key={value}
          initial={{ scale: 1.2, color: '#D97706' }}
          animate={{ scale: 1, color: '#201002' }}
          className="text-lg font-bold leading-none"
        >
          {Math.round(value)}
        </motion.span>
        <span className="text-xs text-muted-foreground font-medium">{unit}</span>
      </div>
    </div>
  </div>
);
