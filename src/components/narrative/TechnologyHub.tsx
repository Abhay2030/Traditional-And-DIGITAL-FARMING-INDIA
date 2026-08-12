import { useState, useRef, useEffect } from 'react';
import { SectionHeader } from '../core/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { technologies } from '../../data/technologies';
import { X, Play } from 'lucide-react';
import { useAccessibility } from '../../contexts/AccessibilityContext';
import { audioManager } from '../../lib/audioManager';

export function TechnologyHub() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const reduced = useReducedMotion();
  const { simpleMode } = useAccessibility();
  const selected = technologies.find(t => t.id === selectedId);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (isInView) {
      audioManager.setMusicState('SMART_FARM');
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} id="technology-hub" className="section-padding relative overflow-hidden bg-[var(--color-cream)]">
      <div className="container-narrative">
        <SectionHeader
          badge="Digital Farming"
          title="Information + Precision + Connection"
          subtitle="Explore the tools shaping the future of agriculture."
        />

        {/* Technology Grid - Large Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, i) => (
            <ScrollReveal key={tech.id} delay={i * 0.05} direction="up">
              <motion.button
                onClick={() => {
                  audioManager.playSFX('ui_click');
                  setSelectedId(tech.id);
                }}
                onMouseEnter={() => audioManager.playSFX('ui_hover')}
                className="w-full h-full flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-300 transition-all shadow-sm hover:shadow-xl group"
                whileHover={reduced ? {} : { y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110" style={{ background: `${tech.color}15` }}>
                  <tech.icon size={40} color={tech.color} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-charcoal)] mb-2 uppercase tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                  {tech.title}
                </h3>
                <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase">
                  {tech.tagline}
                </p>
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Visual-First Progressive Disclosure Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#0a0f1c]/90 backdrop-blur-xl"
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed inset-0 md:inset-10 z-[51] bg-white md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
              role="dialog"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedId(null)} 
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>

              {/* LEFT HALF: Huge Visual / Animation */}
              <div className="w-full md:w-1/2 h-48 md:h-full relative flex items-center justify-center shrink-0" style={{ background: `linear-gradient(135deg, ${selected.color}20, ${selected.color}05)` }}>
                <WatchItWorkAnimation color={selected.color} Icon={selected.icon} />
              </div>

              {/* RIGHT HALF: Very Short Text */}
              <div className="w-full md:w-1/2 h-full p-6 md:p-16 overflow-y-auto flex flex-col justify-start md:justify-center">
                
                {/* Level 02: Big Headline & One-line */}
                <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight mb-2 md:mb-4" style={{ fontFamily: 'var(--font-display)', color: selected.color }}>
                  {selected.title}
                </h2>
                <h3 className="text-lg md:text-3xl font-bold text-[var(--color-charcoal)] mb-8 md:mb-12">
                  {selected.tagline}
                </h3>

                {/* Level 03: Three tiny points */}
                <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
                  <div>
                    <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">What</div>
                    <div className={`text-[var(--color-charcoal)] font-medium ${simpleMode ? 'text-xl' : 'text-lg'}`}>{selected.simpleExplanation}</div>
                  </div>
                  {!simpleMode && (
                    <>
                      <div>
                        <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">How</div>
                        <div className="text-[var(--color-charcoal)] font-medium text-lg">{selected.howItWorks}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Why</div>
                        <div className="text-[var(--color-charcoal)] font-medium text-lg">{selected.advantages[0]} and {selected.advantages[1].toLowerCase()}.</div>
                      </div>
                    </>
                  )}
                </div>

                {/* Level 04: Interaction Button */}
                <button 
                  onClick={() => audioManager.playSFX('data_processing')}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold tracking-widest uppercase text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95" 
                  style={{ background: selected.color }}
                >
                  <Play size={18} className="fill-current" />
                  Watch it Work
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

// A simple generic placeholder animation component that plays a scanning/pulsing effect
function WatchItWorkAnimation({ color, Icon }: { color: string, Icon: any }) {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Pulse rings */}
      <motion.div 
        className="absolute w-48 h-48 rounded-full"
        style={{ border: `2px solid ${color}` }}
        animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute w-48 h-48 rounded-full"
        style={{ border: `2px solid ${color}` }}
        animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeOut" }}
      />
      
      {/* Floating central icon */}
      <motion.div
        className="relative z-10 w-48 h-48 rounded-full bg-white shadow-2xl flex items-center justify-center"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon size={80} color={color} />
      </motion.div>
    </div>
  );
}
