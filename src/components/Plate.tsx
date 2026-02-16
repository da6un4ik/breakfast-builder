import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface PlateProps {
  generatedImageUrl: string | null;
  generatedTitle: string;
  onClear: () => void;
}

export const Plate = ({ generatedImageUrl, generatedTitle, onClear }: PlateProps) => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 bg-white rounded-full plate-shadow border-[12px] border-white ring-1 ring-amber-100/50" />

      <div className="absolute inset-4 bg-white rounded-full border border-amber-50 shadow-inner overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0,transparent_70%)]" />
      </div>

      {generatedImageUrl ? (
        <motion.div
          key={generatedImageUrl}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-[12%] md:inset-[11%] rounded-full overflow-hidden"
        >
          <img
            src={generatedImageUrl}
            alt={generatedTitle}
            className="w-full h-full object-cover"
          />

          <button
            type="button"
            onClick={onClear}
            className="absolute top-3 right-3 bg-white/90 hover:bg-white text-red-500 rounded-full p-2 shadow-lg transition-colors"
            title="Clear generated plate"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute inset-x-4 bottom-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-center">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-amber-900/80 font-semibold truncate">
              {generatedTitle}
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative text-center pointer-events-none"
        >
          <p className="text-amber-900/20 font-serif italic text-2xl md:text-3xl select-none">
            Choose ingredients to generate a plate...
          </p>
        </motion.div>
      )}
    </div>
  );
};
