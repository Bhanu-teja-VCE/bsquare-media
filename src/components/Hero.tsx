import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-bg/80 dark:bg-bg/90 backdrop-blur-sm z-10 transition-colors duration-500" />
        <img
          src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop"
          alt="Cinematic background"
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-border/50 bg-card-bg backdrop-blur-md mb-8 interactive-hover">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-text-secondary">
              50+ Creatives · 12 Time Zones · 24hr Turnaround
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] max-w-5xl mx-auto">
            Your Video — <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              Delivered by Morning.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light">
            B Square Media is the global production engine behind brands that move fast. We don't bloat. We orchestrate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-accent text-accent-text font-medium text-lg overflow-hidden flex items-center gap-2 w-full sm:w-auto justify-center hover:scale-105 transition-transform duration-300 interactive-hover"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request a Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </a>
            
            <a
              href="#work"
              className="group px-8 py-4 border border-border/50 bg-card-bg backdrop-blur-md text-text-primary font-medium text-lg flex items-center gap-2 hover:bg-border/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center interactive-hover"
            >
              <Play size={20} className="text-accent" fill="currentColor" />
              See Our Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 interactive-hover"
      >
        <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-text-secondary to-transparent" />
      </motion.div>
    </section>
  );
}
