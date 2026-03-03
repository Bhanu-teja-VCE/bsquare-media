import { motion } from 'motion/react';
import { Sun, Moon, ArrowRight } from 'lucide-react';

export default function SpeedGuarantee() {
  return (
    <section className="py-32 bg-card-bg/30 border-y border-border/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Follow the Sun. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              Beat the Clock.
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Competitive advantage: overnight turnaround that traditional agencies can't match.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-border/50 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 relative flex flex-col items-center text-center interactive-hover group"
            >
              <div className="w-16 h-16 rounded-full bg-bg border border-border/50 flex items-center justify-center mb-6 shadow-lg relative z-20 text-accent">
                <Sun size={24} />
              </div>
              <div className="text-sm font-mono text-text-secondary uppercase tracking-wider mb-2">6:00 PM (EST)</div>
              <h3 className="text-xl font-bold mb-2">Client Submits</h3>
              <p className="text-text-secondary text-sm">You upload raw footage and brief before logging off.</p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-panel p-8 relative flex flex-col items-center text-center border-accent/30 bg-accent/5 interactive-hover group"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-accent-text flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,99,235,0.4)] relative z-20">
                <Moon size={24} />
              </div>
              <div className="text-sm font-mono text-accent uppercase tracking-wider mb-2">Overnight</div>
              <h3 className="text-xl font-bold mb-2">The Grid Works</h3>
              <p className="text-text-secondary text-sm">Specialists in Europe and Asia edit, color, and sound design.</p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="glass-panel p-8 relative flex flex-col items-center text-center interactive-hover group"
            >
              <div className="w-16 h-16 rounded-full bg-bg border border-border/50 flex items-center justify-center mb-6 shadow-lg relative z-20 text-accent">
                <Sun size={24} />
              </div>
              <div className="text-sm font-mono text-text-secondary uppercase tracking-wider mb-2">9:00 AM (EST)</div>
              <h3 className="text-xl font-bold mb-2">Morning Delivery</h3>
              <p className="text-text-secondary text-sm">QC-approved final video lands in your inbox.</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 glass-panel border-accent/50 bg-accent/10">
            <span className="text-4xl font-display font-bold text-accent">18</span>
            <div className="text-left">
              <span className="block text-sm font-mono text-text-secondary uppercase tracking-wider">Hours</span>
              <span className="block font-medium text-text-primary">Average turnaround from brief to first cut</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
