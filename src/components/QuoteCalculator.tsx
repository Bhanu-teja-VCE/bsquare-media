import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight } from 'lucide-react';

export default function QuoteCalculator() {
  const [videos, setVideos] = useState(4);
  const [type, setType] = useState('social');
  const [speed, setSpeed] = useState('standard');
  const [priceRange, setPriceRange] = useState('$800 - $1,200');

  useEffect(() => {
    let basePrice = 0;
    if (type === 'social') basePrice = 200;
    if (type === 'corporate') basePrice = 500;
    if (type === 'cinematic') basePrice = 1000;
    if (type === 'vfx') basePrice = 1500;

    let multiplier = 1;
    if (speed === 'rush') multiplier = 1.5;
    if (speed === 'overnight') multiplier = 2;

    const minPrice = Math.round(basePrice * videos * multiplier);
    const maxPrice = Math.round(minPrice * 1.5);

    setPriceRange(`$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`);
  }, [videos, type, speed]);

  return (
    <section id="pricing" className="py-32 bg-card-bg/30 border-y border-border/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Instant Quote Calculator</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            No hidden fees. No endless discovery calls. Get a rough estimate instantly.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              {/* Number of Videos */}
              <div>
                <label className="block text-sm font-mono text-text-secondary uppercase tracking-wider mb-4">
                  Number of Videos: <span className="text-accent font-bold">{videos}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={videos}
                  onChange={(e) => setVideos(parseInt(e.target.value))}
                  className="w-full h-2 bg-border/50 rounded-lg appearance-none cursor-pointer accent-accent"
                />
              </div>

              {/* Video Type */}
              <div>
                <label className="block text-sm font-mono text-text-secondary uppercase tracking-wider mb-4">
                  Video Type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full bg-bg border border-border/50 text-text-primary text-sm rounded-none focus:ring-accent focus:border-accent block p-3"
                >
                  <option value="social">Social-First (TikTok/Reels)</option>
                  <option value="corporate">Corporate / SaaS Explainer</option>
                  <option value="cinematic">Cinematic Brand Anthem</option>
                  <option value="vfx">3D / VFX Heavy</option>
                </select>
              </div>

              {/* Turnaround Speed */}
              <div>
                <label className="block text-sm font-mono text-text-secondary uppercase tracking-wider mb-4">
                  Turnaround Speed
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['standard', 'rush', 'overnight'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSpeed(s)}
                      className={`py-2 px-2 text-xs font-medium uppercase tracking-wider border transition-colors ${
                        speed === s
                          ? 'bg-accent text-accent-text border-accent'
                          : 'bg-transparent text-text-secondary border-border hover:border-text-secondary'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center p-8 bg-bg/50 border border-border/30 backdrop-blur-sm">
              <Calculator size={32} className="text-accent mb-6" />
              <div className="text-sm font-mono text-text-secondary uppercase tracking-wider mb-2">Estimated Range</div>
              <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 mb-8 text-center">
                {priceRange}
              </div>
              <p className="text-xs text-text-secondary text-center mb-8 max-w-xs">
                Prices vary based on raw footage length, asset requirements, and specific deliverables.
              </p>
              
              <a
                href="#contact"
                className="group w-full px-6 py-4 bg-accent text-accent-text font-medium text-center flex items-center justify-center gap-2 hover:bg-accent-hover transition-colors interactive-hover"
              >
                Want an exact quote? Let's talk.
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
