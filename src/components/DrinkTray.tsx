import { motion } from 'framer-motion';
import { Drink, DRINKS } from '../lib/drinks';

interface DrinkTrayProps {
  onSelect: (drink: Drink) => void;
}

export const DrinkTray = ({ onSelect }: DrinkTrayProps) => {
  return (
    <div className="fixed bottom-36 left-0 right-0 px-6 z-40">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/85 backdrop-blur-xl border border-amber-100 rounded-3xl shadow-xl p-3">
          <p className="text-[10px] mb-3 text-center font-bold uppercase tracking-[0.25em] text-amber-900/45">
            Drinks
          </p>

          <div className="flex items-center justify-center gap-3 overflow-x-auto no-scrollbar px-2 pb-1">
            {DRINKS.map((drink) => (
              <motion.button
                key={drink.id}
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onSelect(drink)}
                className="group relative flex-shrink-0 flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-secondary border border-amber-100/80 transition-colors group-hover:bg-amber-100/60">
                  <span aria-hidden>{drink.emoji}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary">
                  {drink.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
