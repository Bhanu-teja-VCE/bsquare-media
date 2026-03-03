import { motion } from 'motion/react';
import { Briefcase, Zap, Globe, CheckCircle } from 'lucide-react';

const benefits = [
  { icon: Briefcase, title: 'Steady Project Flow', desc: 'No more client-hunting. We bring the work to you.' },
  { icon: Zap, title: 'Creative Freedom', desc: 'Focus on what you do best. We handle the admin.' },
  { icon: Globe, title: 'Global Community', desc: 'Connect with 50+ elite creatives worldwide.' },
  { icon: CheckCircle, title: 'Fair & Fast Pay', desc: 'Transparent rates, paid on time, every time.' },
];

export default function Freelancers() {
  return (
    <section className="py-32 bg-card-bg/30 border-y border-border/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Elite Talent Only. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                Consistent Work. Fair Pay.
              </span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Join the Grid. We are always looking for top-tier editors, colorists, motion designers, and VFX artists to expand our global network.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 glass-panel border-border/50 hover:border-accent/50 transition-colors interactive-hover"
                >
                  <div className="p-2 bg-accent/10 rounded-none border border-accent/20 text-accent">
                    <b.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1">{b.title}</h3>
                    <p className="text-text-secondary text-xs">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-bg border border-border/50 text-text-primary hover:bg-border/20 transition-colors font-medium text-lg interactive-hover"
            >
              Apply to Join the Grid
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 relative h-[500px] rounded-none overflow-hidden border border-border/50 glass-panel"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="Creative Workspace"
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="glass-panel p-8 border-accent/30 bg-card-bg/80 backdrop-blur-xl text-center max-w-xs">
                <div className="text-4xl font-display font-bold text-accent mb-2">Top 5%</div>
                <div className="text-sm font-mono text-text-secondary uppercase tracking-wider mb-4">Acceptance Rate</div>
                <p className="text-xs text-text-secondary">We only work with the best. If that's you, let's talk.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
