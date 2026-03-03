import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';

const categories = ['All', 'SaaS', 'Cinematic', 'Social-First', '3D / VFX', 'Product', 'Event'];

const projects = [
  {
    id: 1,
    title: 'Acme Corp Launch',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    size: 'large',
  },
  {
    id: 2,
    title: 'Neon Nights',
    category: 'Cinematic',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 3,
    title: 'TikTok Viral Campaign',
    category: 'Social-First',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 4,
    title: 'Future Tech Reveal',
    category: '3D / VFX',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    size: 'medium',
  },
  {
    id: 5,
    title: 'Minimalist Watch',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
    size: 'medium',
  },
  {
    id: 6,
    title: 'Summit 2025',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    size: 'large',
  },
];

export default function VibeVault() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-32 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">The Vibe Vault</h2>
            <p className="text-text-secondary max-w-xl text-lg">
              We don't just edit. We engineer attention. Explore our recent work across industries.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-accent text-accent-text border-accent'
                    : 'bg-transparent text-text-secondary border-border hover:border-text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className={`group relative overflow-hidden bg-card-bg border border-border/50 interactive-hover cursor-pointer ${
                  project.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                  project.size === 'medium' ? 'md:col-span-1 md:row-span-2' :
                  'md:col-span-1 md:row-span-1'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-1 text-xs font-mono bg-accent/20 text-accent border border-accent/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <Play size={16} className="text-accent" fill="currentColor" />
                    View Case Study
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
