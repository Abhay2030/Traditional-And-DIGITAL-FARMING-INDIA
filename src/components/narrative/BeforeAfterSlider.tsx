import { useState, useRef, useCallback, useEffect } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { audioManager } from '../../lib/audioManager';
import { motion } from 'motion/react';

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    // dynamically mix the Tradition and Digital audio tracks based on slider position
    audioManager.mixSliderAudio(sliderPos / 100);
  }, [sliderPos]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
  const handleTouchMove = (e: React.TouchEvent) => { handleMove(e.touches[0].clientX); };

  return (
    <section id="before-after" className="relative min-h-[100dvh] w-full overflow-hidden bg-black flex flex-col select-none">
      
      {/* Title - Pushed to the top safely */}
      <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 z-50 text-center pointer-events-none w-full px-4">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tighter" style={{ fontFamily: 'var(--font-display)', textShadow: '0 10px 50px rgba(0,0,0,1)' }}>
            Same Farm.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-saffron)] to-[var(--color-india-green)] drop-shadow-lg">
              New Tools.
            </span>
          </h2>
        </ScrollReveal>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-full flex-grow cursor-col-resize touch-none mt-40 md:mt-0"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* RIGHT SIDE: DIGITAL FARMING (Background Layer) */}
        <div className="absolute inset-0 bg-[#061121] flex flex-col justify-end md:justify-center px-4 md:px-32 pb-20 md:pb-0 overflow-hidden">
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: 'url(/images/mod_machinery.png)' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
          
          <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-end">
            <div className="text-right w-full md:w-auto">
              <h3 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-12 uppercase tracking-widest drop-shadow-xl" style={{ fontFamily: 'var(--font-display)' }}>
                Digital Farming
              </h3>
              
              <div className="flex flex-col gap-4 md:gap-8">
                <ComparisonItem right icon="🚜" label="Machine Power" sub="AI Tractor" color="var(--color-india-green)" />
                <ComparisonItem right icon="🛰️" label="Precision" sub="Drone + Sensors" color="var(--color-india-green)" />
                <ComparisonItem right icon="📱" label="Data-Informed" sub="Smart Irrigation" color="var(--color-india-green)" />
                <ComparisonItem right icon="💻" label="Digital Records" sub="Cloud Dashboard" color="var(--color-india-green)" />
              </div>
            </div>
          </div>
        </div>

        {/* LEFT SIDE: TRADITIONAL FARMING (Foreground Clipped Layer) */}
        <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-4 md:px-32 pb-20 md:pb-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
          
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{ backgroundImage: 'url(/images/trad_machinery.png)' }}
            animate={{ scale: [1.05, 1, 1.05] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          
          <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-start">
            <div className="text-left w-full md:w-auto">
              <h3 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-12 uppercase tracking-widest drop-shadow-xl" style={{ fontFamily: 'var(--font-display)' }}>
                Traditional Farming
              </h3>
              
              <div className="flex flex-col gap-4 md:gap-8">
                <ComparisonItem left icon="🐂" label="Manual Power" sub="Bullock Cart" color="var(--color-saffron)" />
                <ComparisonItem left icon="👨‍🌾" label="Observation" sub="Field Walking" color="var(--color-saffron)" />
                <ComparisonItem left icon="🌊" label="Management" sub="Flood Irrigation" color="var(--color-saffron)" />
                <ComparisonItem left icon="📝" label="Records" sub="Memory / Paper" color="var(--color-saffron)" />
              </div>
            </div>
          </div>
        </div>

        {/* The Drag Handle - Upgraded */}
        <div className="absolute top-0 bottom-0 z-20" style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}>
          {/* Glowing divider line */}
          <div className="w-1 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,1),0_0_30px_rgba(255,255,255,0.5)]" />
          
          {/* Handle Knob */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.8)] flex items-center justify-center border-4 border-[var(--color-charcoal)]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Inner pulse */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-[var(--color-saffron)]"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M8 12L3 12M16 12L21 12M8 12L11 9M8 12L11 15M16 12L13 9M16 12L13 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ComparisonItem({ right, icon, label, sub, color }: { left?: boolean, right?: boolean, icon: string, label: string, sub: string, color: string }) {
  return (
    <motion.div 
      className={`flex items-center gap-4 md:gap-6 ${right ? 'flex-row-reverse' : ''} bg-black/40 backdrop-blur-xl p-3 md:p-4 rounded-3xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-full max-w-[300px] md:max-w-none group hover:bg-black/60 transition-colors`}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div 
        className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center text-2xl md:text-3xl shadow-inner relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity" style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }} />
        <span className="relative z-10">{icon}</span>
      </div>
      <div className={`flex-grow ${right ? 'text-right' : 'text-left'}`}>
        <div className="text-white/60 text-xs md:text-sm font-medium tracking-widest uppercase mb-1">{sub}</div>
        <div className="text-white text-lg md:text-2xl font-bold uppercase tracking-wide leading-tight">{label}</div>
      </div>
    </motion.div>
  );
}
