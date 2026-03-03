import { motion } from 'motion/react';
import { Target, PenTool, Layout, Share2, Image as ImageIcon } from 'lucide-react';

const services = [
  { icon: Target, title: 'Hook Strategy', desc: 'We script the first 3 seconds to stop the scroll.' },
  { icon: PenTool, title: 'Caption Writing', desc: 'Engaging, platform-native copy that drives action.' },
  { icon: Layout, title: 'Platform Formatting', desc: '16:9, 9:16, 1:1—optimized for every feed.' },
  { icon: Share2, title: 'Distribution Advice', desc: 'Where and when to post for maximum reach.' },
  { icon: ImageIcon, title: 'Thumbnail Design', desc: 'Click-worthy custom thumbnails for YouTube & social.' },
];

export default function BeyondEdit() {
  return (
    <section className="py-32 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              We Don't Just Edit. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                We Engineer Attention.
              </span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              B Square Media is a creative partner, not just a vendor. We think about your growth, not just your footage. This is why our clients stay.
            </p>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 glass-panel border-border/50 hover:border-accent/50 transition-colors interactive-hover"
                >
                  <div className="p-2 bg-accent/10 rounded-none border border-accent/20 text-accent">
                    <service.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                    <p className="text-text-secondary text-sm">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] rounded-none overflow-hidden border border-border/50 glass-panel"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
              alt="Data and Strategy"
              className="w-full h-full object-cover opacity-50 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="glass-panel p-6 border-accent/30 bg-card-bg/80 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono text-accent uppercase tracking-wider">Retention Rate</span>
                  <span className="text-2xl font-display font-bold text-text-primary">+45%</span>
                </div>
                <div className="w-full bg-border/50 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-accent"
                  />
                </div>
                <p className="text-xs text-text-secondary mt-4 font-mono">Average increase in viewer retention after implementing B² Hook Strategy.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
