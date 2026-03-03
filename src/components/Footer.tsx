import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <a href="#" className="font-display font-bold text-2xl tracking-tighter">
              B<span className="text-accent">²</span> MEDIA
            </a>
            <span className="text-text-secondary text-sm font-mono uppercase tracking-widest hidden sm:inline-block">
              Built different. Delivered faster.
            </span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-text-secondary hover:text-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-text-secondary hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-text-secondary hover:text-accent transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-text-secondary hover:text-accent transition-colors">
              <Twitter size={20} />
            </a>
          </div>

          <div className="flex gap-6 text-sm font-medium text-text-secondary">
            <a href="#work" className="hover:text-text-primary transition-colors">Work</a>
            <a href="#process" className="hover:text-text-primary transition-colors">Process</a>
            <a href="#grid" className="hover:text-text-primary transition-colors">The Grid</a>
            <a href="#pricing" className="hover:text-text-primary transition-colors">Pricing</a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-text-secondary font-mono">
          &copy; {new Date().getFullYear()} B Square Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
