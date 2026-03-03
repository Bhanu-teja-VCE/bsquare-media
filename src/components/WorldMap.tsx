import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const locations = [
  { id: 'ny', name: 'New York', top: '32%', left: '26%', count: 5, spec: 'VFX & Editing' },
  { id: 'la', name: 'Los Angeles', top: '36%', left: '16%', count: 10, spec: 'Creative Direction' },
  { id: 'ldn', name: 'London', top: '24%', left: '47%', count: 8, spec: 'Color Grading' },
  { id: 'ber', name: 'Berlin', top: '25%', left: '51%', count: 4, spec: 'Motion Design' },
  { id: 'mum', name: 'Mumbai', top: '46%', left: '69%', count: 12, spec: 'Video Editing' },
  { id: 'tok', name: 'Tokyo', top: '36%', left: '86%', count: 6, spec: '3D Animation' },
  { id: 'syd', name: 'Sydney', top: '78%', left: '89%', count: 3, spec: 'Sound Design' },
  { id: 'sao', name: 'Sao Paulo', top: '68%', left: '34%', count: 4, spec: 'Motion Graphics' },
];

export default function WorldMap() {
  const [hoveredLoc, setHoveredLoc] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-card-bg/30 border border-border/50 overflow-visible group rounded-none">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: 'radial-gradient(var(--color-text-primary) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* World Map SVG Silhouette */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none bg-no-repeat bg-center bg-contain dark:invert transition-all duration-500"
        style={{ 
          backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")',
          backgroundPosition: 'center 20%'
        }} 
      />

      {/* Glowing Dots */}
      {locations.map((loc) => (
        <div
          key={loc.id}
          className="absolute w-8 h-8 -ml-4 -mt-4 z-20 flex items-center justify-center interactive-hover"
          style={{ top: loc.top, left: loc.left }}
          onMouseEnter={() => setHoveredLoc(loc.id)}
          onMouseLeave={() => setHoveredLoc(null)}
        >
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-40 animate-ping" style={{ animationDuration: '3s' }} />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent shadow-[0_0_15px_var(--color-accent)] transition-transform duration-300 hover:scale-150" />
          
          {/* Tooltip */}
          <AnimatePresence>
            {hoveredLoc === loc.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-56 p-5 glass-panel border-accent/30 bg-bg/95 backdrop-blur-xl z-50 pointer-events-none shadow-2xl"
              >
                <div className="text-accent font-display font-bold text-xl mb-2">{loc.name}</div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <div className="text-text-primary font-mono text-sm">{loc.count} Active</div>
                </div>
                <div className="text-text-secondary text-xs uppercase tracking-wider border-t border-border/50 pt-2 mt-2">
                  {loc.spec}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
