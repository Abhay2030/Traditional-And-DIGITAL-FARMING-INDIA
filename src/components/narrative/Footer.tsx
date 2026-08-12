import { AshokaChakra } from '../ui/AshokaChakra';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="footer" className="relative overflow-hidden bg-[#050B14] border-t border-white/5">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-white opacity-[0.015] blur-[100px] pointer-events-none" />

      {/* Tricolour top border */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-gradient-to-r from-transparent to-[var(--color-saffron)]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-gradient-to-l from-transparent to-[var(--color-india-green)]" />
      </div>

      <div className="container-narrative py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">
          
          {/* Brand - Takes up 5 columns on large screens */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <AshokaChakra size={24} color="rgba(255,255,255,0.8)" spinning={false} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Digital Farming India
                </h3>
                <p className="text-[10px] tracking-[0.3em] text-[var(--color-saffron)] uppercase font-bold mt-1">15 August 2026</p>
              </div>
            </div>
            <p className="text-base text-white/50 leading-relaxed max-w-md">
              An interactive educational experience exploring how technology can support Indian agriculture — from the wisdom of generations to the tools of tomorrow.
            </p>
          </div>

          {/* Quick Links - Takes up 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black tracking-[0.2em] text-white/40 uppercase mb-8 flex items-center gap-3">
              <span className="w-4 h-[1px] bg-white/20" />
              Explore
            </h4>
            <div className="flex flex-col gap-3 text-sm font-medium">
              {[
                { label: 'The Story', href: '/#traditional-knowledge' },
                { label: 'Then → Now', href: '/#before-after' },
                { label: 'Technologies', href: '/#technology-hub' },
                { label: 'Dashboard', href: '/#dashboard' },
                { label: 'Sustainability', href: '/#sustainability' },
                { label: 'About The Project', href: '/team' },
              ].map(link => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-white/50 hover:text-white hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* College Info - Takes up 4 columns */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-black tracking-[0.2em] text-white/40 uppercase mb-8 flex items-center gap-3">
              <span className="w-4 h-[1px] bg-white/20" />
              College Program
            </h4>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <p className="font-bold text-white/90 text-sm mb-1">Sir Visvesvaraya Institute of Technology, Nashik</p>
                <p className="text-white/50 text-xs">Department of Computer Engineering — Second Year</p>
              </div>
              <p className="text-white/40 text-xs leading-relaxed mt-4 bg-[#0A111A]/50 p-4 rounded-xl border border-white/5">
                This website is an educational project created for a college Independence Day program. All demonstration data is simulated for educational purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar - Perfectly aligned 3-column layout */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex-1 flex justify-start">
            <p className="text-xs font-medium text-white/40 uppercase tracking-wider">
              Built with curiosity & respect for the farmer.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <p className="text-[11px] font-bold tracking-[0.3em] text-white/30 uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
              🇮🇳 Jai Hind 🇮🇳
            </p>
          </div>

          <div className="flex-1 flex justify-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white/60 hover:text-white"
              aria-label="Scroll to top"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Back to Top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
