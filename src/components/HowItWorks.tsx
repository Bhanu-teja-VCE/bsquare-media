import { motion } from 'motion/react';
import { FileText, Users, Clock, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Brief',
    description: 'You tell us what you need via a simple intake form or a quick sync call.',
    number: '01',
  },
  {
    icon: Users,
    title: 'Match',
    description: 'We assign the best specialist(s) from our global Grid based on your specific needs.',
    number: '02',
  },
  {
    icon: Clock,
    title: 'Create',
    description: 'Work follows the sun — 24/7 production with real-time updates and transparency.',
    number: '03',
  },
  {
    icon: CheckCircle2,
    title: 'Deliver',
    description: 'QC-approved final video lands in your inbox, on time, every single time.',
    number: '04',
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-32 bg-card-bg/30 border-y border-border/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-border/30" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-border/30" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-border/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">How It Works</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            An API for Video. Send the footage (request), receive a polished video (response).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-panel p-8 relative group interactive-hover"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-display font-bold group-hover:text-accent group-hover:opacity-20 transition-all duration-300">
                {step.number}
              </div>
              
              <div className="w-12 h-12 bg-accent/10 rounded-none flex items-center justify-center mb-6 border border-accent/20 group-hover:bg-accent group-hover:text-accent-text transition-colors duration-300">
                <step.icon size={24} className="text-accent group-hover:text-accent-text" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-border/50" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
