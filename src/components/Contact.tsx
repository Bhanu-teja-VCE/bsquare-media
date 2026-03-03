import { motion } from 'motion/react';
import { Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/10 via-bg to-bg opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              That Moves.
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-xl font-light">
            Ready to scale your video output? Drop your details below and we'll get back to you within 2 hours.
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass-panel p-8 md:p-12 border-accent/30 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-blue-400" />
          
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-text-secondary uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-bg/50 border border-border/50 text-text-primary text-base rounded-none focus:ring-accent focus:border-accent block p-4 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-text-secondary uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-bg/50 border border-border/50 text-text-primary text-base rounded-none focus:ring-accent focus:border-accent block p-4 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-mono text-text-secondary uppercase tracking-wider mb-2">Company</label>
              <input
                type="text"
                id="company"
                className="w-full bg-bg/50 border border-border/50 text-text-primary text-base rounded-none focus:ring-accent focus:border-accent block p-4 transition-colors"
                placeholder="Acme Corp"
              />
            </div>

            <div>
              <label htmlFor="brief" className="block text-sm font-mono text-text-secondary uppercase tracking-wider mb-2">Project Brief</label>
              <textarea
                id="brief"
                rows={4}
                className="w-full bg-bg/50 border border-border/50 text-text-primary text-base rounded-none focus:ring-accent focus:border-accent block p-4 transition-colors resize-none"
                placeholder="Tell us about your goals, timeline, and budget..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="group w-full px-8 py-5 bg-accent text-accent-text font-medium text-lg flex items-center justify-center gap-2 hover:bg-accent-hover transition-colors relative overflow-hidden interactive-hover"
            >
              <span className="relative z-10 flex items-center gap-2">
                Send Request <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
