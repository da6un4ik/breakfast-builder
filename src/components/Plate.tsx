import { motion, AnimatePresence } from 'framer-motion';
import { Ingredient } from '../lib/ingredients';
import { X } from 'lucide-react';

interface PlantedIngredient extends Ingredient {
  instanceId: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  zIndex: number;
}

interface PlateProps {
  items: PlantedIngredient[];
  onRemove: (instanceId: string) => void;
}

export const Plate = ({ items, onRemove }: PlateProps) => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">
      {/* Plate Background */}
      <div className="absolute inset-0 bg-white rounded-full plate-shadow border-[12px] border-white ring-1 ring-amber-100/50" />
      
      {/* Texture / Subtle Rim */}
      <div className="absolute inset-4 bg-white rounded-full border border-amber-50 shadow-inner overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0,transparent_70%)]" />
      </div>

      {/* Placed Items */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.instanceId}
              initial={{ scale: 0, opacity: 0, y: -100 }}
              animate={{ 
                scale: item.scale, 
                opacity: 1, 
                x: item.x,
                y: item.y,
                rotate: item.rotation
              }}
              exit={{ scale: 0, opacity: 0, filter: 'blur(10px)' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              style={{ 
                zIndex: item.zIndex,
                width: item.width,
                left: '50%',
                top: '50%',
                marginLeft: -item.width / 2,
                marginTop: -item.width / 2
              }}
              className="absolute pointer-events-auto cursor-pointer group"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(item.instanceId);
              }}
            >
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-auto food-item-shadow select-none pointer-events-none"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-red-500 text-white rounded-full p-2 shadow-lg scale-75 group-hover:scale-100 transition-transform">
                  <X className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {items.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative text-center pointer-events-none"
        >
          <p className="text-amber-900/20 font-serif italic text-2xl md:text-3xl select-none">
            Build your morning...
          </p>
        </motion.div>
      )}
    </div>
  );
};
