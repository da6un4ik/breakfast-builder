import { motion } from 'framer-motion';
import { INGREDIENTS, Ingredient } from '../lib/ingredients';

interface IngredientTrayProps {
  onSelect: (ingredient: Ingredient) => void;
}

export const IngredientTray = ({ onSelect }: IngredientTrayProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-6 z-40">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-xl border border-amber-100 rounded-3xl shadow-2xl p-4 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth px-4 py-2">
            {INGREDIENTS.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelect(item)}
                className="group relative flex-shrink-0 flex flex-col items-center gap-2"
              >
                <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center p-2 relative overflow-hidden transition-colors group-hover:bg-amber-100/50">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-contain food-item-shadow transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
                  {item.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
