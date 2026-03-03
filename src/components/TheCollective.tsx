import { motion } from 'motion/react';
import { Globe2, Users, Clock, Zap } from 'lucide-react';
import WorldMap from './WorldMap';

const stats = [
  { label: 'Creatives', value: '50+', icon: Users },
  { label: 'Time Zones', value: '12+', icon: Clock },
  { label: 'Specializations', value: '8', icon: Zap },
];

export default function TheCollective() {
  return (
    <section id="grid" className="py-32 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              A Network, Not a Team. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                And That's the Point.
              </span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              We don't bloat. We orchestrate. B Square Media is the strategic brain—client relations, creative direction, quality control. Our 50+ vetted specialist freelancers are the hands.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel p-6 border-l-4 border-l-accent interactive-hover group">
                  <stat.icon size={24} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-display font-bold mb-2">{stat.value}</div>
                  <div className="text-sm font-mono text-text-secondary uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-text transition-colors font-medium interactive-hover"
            >
              <Globe2 size={20} />
              Tap Into The Grid
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full"
          >
            <WorldMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
