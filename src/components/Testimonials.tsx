import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CMO, TechFlow',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    quote: "We needed 15 platform-specific videos for a product launch in 3 days. B Square delivered them overnight. The quality was better than our previous agency that took 3 weeks.",
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Founder, Elevate E-com',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    quote: "The 'Follow the Sun' model is a game-changer. I drop raw footage in the drive at 6 PM, and wake up to polished, QC-approved edits. It's like having a team that never sleeps.",
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Content, SaaS Growth',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    quote: "They don't just edit; they understand retention. The hook strategies they implemented increased our average watch time by 40%. Worth every penny.",
    rating: 5,
  },
];

const metrics = [
  { label: 'Videos Delivered', value: '200+' },
  { label: 'Happy Clients', value: '40+' },
  { label: 'Average Rating', value: '4.9★' },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Don't Just Take Our Word For It</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Proof over promises. See what our partners say about the Grid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-panel p-8 relative group hover:border-accent/50 transition-colors interactive-hover"
            >
              <Quote size={40} className="absolute top-6 right-6 text-accent/10 group-hover:text-accent/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent" fill="currentColor" />
                ))}
              </div>
              
              <p className="text-text-primary text-lg leading-relaxed mb-8 italic">"{t.quote}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-border/50"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-text-primary">{t.name}</div>
                  <div className="text-sm font-mono text-text-secondary uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border/50 pt-16">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 mb-2">
                {m.value}
              </div>
              <div className="text-sm font-mono text-text-secondary uppercase tracking-wider">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
