import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Drink } from '../lib/drinks';

interface PouredDrink extends Drink {
  instanceId: string;
}

interface MugProps {
  drinks: PouredDrink[];
  onRemove: (instanceId: string) => void;
}

export const Mug = ({ drinks, onRemove }: MugProps) => {
  const liquidLevel = Math.min((drinks.length / 6) * 100, 100);
  const currentDrink = drinks[drinks.length - 1];

  return (
    <div className="relative w-[180px] h-[220px] md:w-[220px] md:h-[260px]">
      <div className="absolute inset-x-8 bottom-0 h-[78%] bg-white rounded-b-[2.8rem] rounded-t-[2rem] border-[10px] border-white shadow-[0_20px_35px_-18px_rgba(0,0,0,.35)] overflow-hidden">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: `${liquidLevel}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          className="absolute bottom-0 left-0 right-0"
          style={{
            background: currentDrink
              ? `linear-gradient(180deg, ${currentDrink.color}CC 0%, ${currentDrink.color} 100%)`
              : 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.4)_0%,transparent_35%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="absolute right-1 top-14 w-14 h-24 border-[10px] border-white rounded-r-full rounded-l-2xl bg-transparent" />

      {drinks.length === 0 ? (
        <p className="absolute inset-x-0 top-20 text-center text-xs uppercase tracking-[0.2em] text-amber-900/30 font-bold">
          Add a drink
        </p>
      ) : (
        <p className="absolute inset-x-0 top-4 text-center text-xs uppercase tracking-[0.2em] text-amber-900/45 font-bold">
          {currentDrink?.name}
        </p>
      )}

      {drinks.length > 0 && (
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-2 max-w-[220px] overflow-x-auto no-scrollbar px-2">
          {drinks.map((drink) => (
            <button
              key={drink.instanceId}
              onClick={() => onRemove(drink.instanceId)}
              className="flex items-center gap-1 rounded-full bg-white/90 border border-amber-100 px-2 py-1 text-[10px] font-semibold text-amber-900/70 shrink-0"
              title={`Remove ${drink.name}`}
            >
              <span>{drink.emoji}</span>
              <X className="w-3 h-3" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
